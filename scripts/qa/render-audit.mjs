// Rendered-page QA: what the student actually sees, not what the data files contain.
// Usage:
//   npm run qa:render -- --batch A-c-atoms            routes of one batch (scripts/content/batches.json)
//   npm run qa:render -- --routes /chemistry/atoms-periodic,/november/c-atoms
//   npm run qa:render -- --all                        every route of every batch
//   options: --langs en,ru  --width 1280  --mobile (adds a 390 px overflow pass)  --shots (full-page PNGs)
// Required: --port <owned-loopback-port> --build-sha <40-char-sha> --out <evidence-dir> --contract <json>
// --root selects an isolated built checkout. --discover writes an unaccepted heading inventory.
// --print additionally audits print media for paper/reference routes, including repeat failures.
// Fails (exit 1) on: JS errors, repeated visible text blocks (≥40 chars) on one page,
// the same formula card twice on one page, horizontal overflow at widths below 480 px,
// or a clipped formula in print media.
// Reports (no fail): English-only blocks on RU pages and Cyrillic on EN pages outside lang-marked elements.
import fs from 'node:fs';
import path from 'node:path';
import { startAuditServer, verifySourceRevision } from './local-audit-server.mjs';
import { waitForCaptureReady, readCaptureState, findClippedPrintFormulas } from './capture-readiness.mjs';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { withDeadline, persistAuditReport } from './audit-lifecycle.mjs';

const SCRIPT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const args = process.argv.slice(2);
const opt = name => { const i = args.indexOf(`--${name}`); return i >= 0 ? (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true) : undefined; };
const ROOT = path.resolve(String(opt('root') ?? SCRIPT_ROOT));
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/content/batches.json'), 'utf8'));
let routes = [];
let name = 'custom';
if (opt('batch')) { const b = manifest.batches.find(x => x.id === opt('batch')); if (!b) throw new Error(`no batch ${opt('batch')}`); routes = b.routes; name = b.id; }
else if (opt('routes')) routes = String(opt('routes')).split(',');
else if (opt('all')) { routes = [...new Set(['/', '/revision-plan', '/november', ...manifest.batches.flatMap(b => b.routes)])]; name = 'all'; }
else { console.error('usage: render-audit.mjs --batch <id> | --routes a,b | --all'); process.exit(2); }
const langs = String(opt('langs') ?? 'en,ru').split(',');
const width = Number(opt('width') ?? 1280);
if (!opt('out')) throw new Error('Explicit --out evidence directory required');
const outDir = path.resolve(String(opt('out')));
const contract = opt('contract') ? JSON.parse(fs.readFileSync(String(opt('contract')), 'utf8')) : {};
if (!opt('contract') && !opt('discover')) throw new Error('--contract is required; --discover creates an unaccepted title inventory');
fs.mkdirSync(outDir, { recursive: true });

if (opt('url')) throw new Error('External servers require a separately authorized audit; use a local build and explicit port');
verifySourceRevision(ROOT,String(opt('build-sha')??''));
const { server, base, identity } = await startAuditServer({ dist:path.join(ROOT,'dist'), port:Number(opt('port')), sha:String(opt('build-sha')??'') });
let browser;
try { browser = await chromium.launch(process.env.QA_BROWSER_EXECUTABLE ? { executablePath:process.env.QA_BROWSER_EXECUTABLE } : {}); } catch(error) { server.close(); throw error; }
const results = [];
const expectedDenominator = langs.length * (routes.length * (1 + (opt('mobile') ? 1 : 0)) + (opt('print') ? routes.filter(route => /paper|reference|\/print/.test(route)).length : 0));
const cleanupErrors = [];
let loopCompleted = false, fatalError = null;
const save = (final = false) => persistAuditReport(path.join(outDir, final ? 'report.json' : 'partial-report.json'), {
  at:new Date().toISOString(), base, build:identity, mode:opt('discover')?'inventory_only':'audit',
  expectedDenominator, loopCompleted, fatalError, cleanupErrors, results,
});
try {
  for (const lang of langs) {
    for (const [label, viewport] of [['desktop', { width, height: 900 }], ...(opt('mobile') ? [['mobile', { width: 390, height: 844 }]] : []), ...(opt('print') ? [['print', { width:1280, height:900 }]] : [])]) {
      const context = await browser.newContext({ viewport });
      await context.addInitScript(l => { try { localStorage.setItem('g9-lang', l); } catch {} }, lang);

      for (const route of routes) {
        if (label === 'print' && !/paper|reference|\/print/.test(route)) continue;
        const page = await context.newPage(); // no DOM from a previous route can satisfy readiness
        const errors = [];
        page.on('pageerror', e => errors.push(String(e.message).slice(0,300)));
        if (label === 'print') await page.emulateMedia({ media:'print' });
        let readiness;
        try {
          await page.goto(base + route, { waitUntil:'domcontentloaded', timeout:60000 });
          await page.locator('h1').first().waitFor({ state:'visible', timeout:15000 });
          await page.evaluate(() => document.querySelectorAll('details').forEach(d => { d.open = true; }));
          const key = `${lang}:${route}`;
          if (opt('discover')) {
            const initial = await readCaptureState(page);
            contract[key] = { h1:initial.h1, minBlocks:1, origin:'isolated route discovery; not manual acceptance' };
          }
          if (!contract[key]) throw new Error('missing_route_contract');
          readiness = await waitForCaptureReady(page, { ...contract[key], route, lang }, { timeout:Number(opt('timeout')??20000) });
          if (opt('discover')) {
            contract[key].minBlocks = Math.max(1, Math.floor(readiness.blocks * 0.75));
            contract[key].formulas = [...new Set(readiness.formulas)];
          }
        } catch(error) {
          results.push({lang,view:label,route,fail:true,status:'capture_incomplete',error:String(error),errors});
          save(); await withDeadline(() => page.close(), 'page_close'); process.stdout.write('!'); continue;
        }
        const data = await page.evaluate(({ lang }) => {
          const SEL = 'p,li,dd,dt,figcaption,td,th,h1,h2,h3,h4,summary,blockquote,label';
          const root = document.querySelector('#root') ?? document.body;
          const skip = el => el.closest('header,footer,nav,button,select,option,a,[data-qa-allow-repeat]') || el.querySelector('a') || (typeof el.checkVisibility === 'function' && !el.checkVisibility({ checkVisibilityCSS: true }));
          const leaves = [...root.querySelectorAll(SEL)].filter(el => !el.querySelector(SEL) && !skip(el));
          // an element that itself contains a lang-marked part is an intentional bilingual label (term · термин)
          const blocks = leaves.map(el => ({ text: el.textContent.replace(/\s+/g, ' ').trim(), other: !!el.querySelector('[lang]') || (lang === 'ru' ? !!el.closest('[lang="en"],[lang="fr"],[lang="ar"]') : !!el.closest('[lang="ru"]')) })).filter(b => b.text);
          const formulas = {};
          for (const el of root.querySelectorAll('[data-formula-id]')) { const id = el.getAttribute('data-formula-id'); formulas[id] = (formulas[id] ?? 0) + 1; }
          return { blocks, formulas, title: (root.querySelector('h1')?.textContent ?? '').trim(), overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth };
        }, { lang });
        data.clippedFormulas = label === 'print' ? await page.evaluate(findClippedPrintFormulas) : [];
        const counts = new Map();
        for (const b of data.blocks) if (b.text.length >= 40) counts.set(b.text, (counts.get(b.text) ?? 0) + 1);
        const repeated = [...counts].filter(([, n]) => n > 1).map(([text, n]) => ({ n, text: text.slice(0, 200) }));
        const formulaRepeats = Object.entries(data.formulas).filter(([, n]) => n > 1);
        const leaks = data.blocks.filter(b => !b.other && (lang === 'ru'
          ? /[A-Za-z]{3,}(?:[ ,'’-]+[A-Za-z]{2,}){3,}/.test(b.text) && !/[А-Яа-яЁё]/.test(b.text)
          : /[А-Яа-яЁё]{3,}/.test(b.text))).map(b => b.text.slice(0, 160));
        const fail = errors.length > 0 || repeated.length > 0 || formulaRepeats.length > 0 || data.clippedFormulas.length > 0 || (viewport.width < 480 && data.overflow > 2);
        results.push({ status:opt('discover')?'inventory_only':'captured', readiness, build:identity, lang, view: label, viewport, route, title: data.title, blocks: data.blocks.length, formulaCards: Object.keys(data.formulas), repeated, formulaRepeats, clippedFormulas:data.clippedFormulas, leaks: leaks.slice(0, 30), leakCount: leaks.length, overflow: data.overflow, errors: [...errors], fail });
        if (opt('shots') && !opt('discover')) {
          const stem = `${lang}-${label}-${route.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'home'}`;
          await page.screenshot({ path:path.join(outDir, `${stem}.png`), fullPage:true });
          await page.screenshot({ path:path.join(outDir, `${stem}-viewport.png`) });
          if (label === 'print') await page.pdf({ path:path.join(outDir, `${stem}.pdf`), format:'A4', printBackground:true });
        }
        save();
        await withDeadline(() => page.close(), 'page_close');
        process.stdout.write(fail ? 'x' : '.');
      }
      await withDeadline(() => context.close(), 'context_close');
    }
  }
  loopCompleted = true;
} catch(error) {
  fatalError = String(error);
} finally {
  save();
  try { await withDeadline(() => browser.close(), 'browser_close'); } catch(error) { cleanupErrors.push(String(error)); }
  try {
    server.closeAllConnections();
    await withDeadline(() => new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve())), 'server_close');
  } catch(error) { cleanupErrors.push(String(error)); }
  save(true);
}
if(opt('discover')) fs.writeFileSync(path.join(outDir,'contract.json'),JSON.stringify(contract,null,2)+'\n');
console.log('\n');
for (const r of results.filter(r => r.fail || r.leakCount)) {
  console.log(`${r.fail ? 'FAIL' : 'note'} ${r.lang}/${r.view} ${r.route} — «${r.title}»`);
  for (const e of r.errors) console.log(`   JS error: ${e}`);
  if (r.status === 'capture_incomplete') { console.log(r.error); continue; }
  for (const x of r.repeated.slice(0, 8)) console.log(`   repeated ×${x.n}: ${x.text}`);
  for (const [id, n] of r.formulaRepeats) console.log(`   formula card ${id} ×${n}`);
  for (const x of r.clippedFormulas ?? []) console.log(`   clipped print formula ${x.id}: ${x.overflow}px`);
  if (r.viewport.width < 480 && r.overflow > 2) console.log(`   horizontal overflow ${r.overflow}px at ${r.viewport.width} px`);
  for (const l of r.leaks.slice(0, 5)) console.log(`   ${r.lang === 'ru' ? 'English-only block on RU page' : 'Cyrillic on EN page'}: ${l}`);
}
const failed = results.filter(r => r.fail).length;
console.log(`${results.length}/${expectedDenominator} page views · ${failed} failed · report: ${path.relative(ROOT, path.join(outDir, 'report.json'))}${opt('shots') ? ' · screenshots in the same folder' : ''}`);
if(fatalError) console.error(fatalError);
for(const error of cleanupErrors) console.error(error);
process.exit(failed || fatalError || cleanupErrors.length || !loopCompleted || results.length !== expectedDenominator ? 1 : 0);
