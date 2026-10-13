// Rendered-page QA: what the student actually sees, not what the data files contain.
// Usage:
//   npm run qa:render -- --batch A-c-atoms            routes of one batch (scripts/content/batches.json)
//   npm run qa:render -- --routes /chemistry/atoms-periodic,/november/c-atoms
//   npm run qa:render -- --all                        every route of every batch
//   options: --langs en,ru  --width 1280  --mobile (adds a 390 px overflow pass)  --shots (full-page PNGs)
//            --url https://example.cloudfront.net/#   (audit a deployed site instead of a local preview)
// Fails (exit 1) on: JS errors, repeated visible text blocks (≥40 chars) on one page,
// the same formula card twice on one page, horizontal overflow at 390 px.
// Reports (no fail): English-only blocks on RU pages and Cyrillic on EN pages outside lang-marked elements.
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const args = process.argv.slice(2);
const opt = name => { const i = args.indexOf(`--${name}`); return i >= 0 ? (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true) : undefined; };
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/content/batches.json'), 'utf8'));
let routes = [];
let name = 'custom';
if (opt('batch')) { const b = manifest.batches.find(x => x.id === opt('batch')); if (!b) throw new Error(`no batch ${opt('batch')}`); routes = b.routes; name = b.id; }
else if (opt('routes')) routes = String(opt('routes')).split(',');
else if (opt('all')) { routes = [...new Set(['/', '/revision-plan', '/november', ...manifest.batches.flatMap(b => b.routes)])]; name = 'all'; }
else { console.error('usage: render-audit.mjs --batch <id> | --routes a,b | --all'); process.exit(2); }
const langs = String(opt('langs') ?? 'en,ru').split(',');
const width = Number(opt('width') ?? 1280);
const outDir = path.join(ROOT, 'content-work', '_qa', name);
fs.mkdirSync(outDir, { recursive: true });

let server;
let base = opt('url');
if (!base) {
  const port = 4300 + Math.floor(Math.random() * 500);
  server = spawn(process.execPath, [path.join(ROOT, 'node_modules/vite/bin/vite.js'), 'preview', '--port', String(port), '--strictPort', '--host', '127.0.0.1'], { cwd: ROOT, stdio: 'ignore' });
  base = `http://127.0.0.1:${port}/g9-revision/#`;
  for (let i = 0; i < 60; i++) { try { const r = await fetch(base.replace('#', '')); if (r.ok) break; } catch {} await new Promise(r => setTimeout(r, 500)); }
}

const browser = await chromium.launch();
const results = [];
try {
  for (const lang of langs) {
    for (const [label, viewport] of [['desktop', { width, height: 900 }], ...(opt('mobile') ? [['mobile', { width: 390, height: 844 }]] : [])]) {
      const context = await browser.newContext({ viewport });
      await context.addInitScript(l => { try { localStorage.setItem('g9-lang', l); } catch {} }, lang);
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(String(e.message).slice(0, 300)));
      for (const route of routes) {
        errors.length = 0;
        await page.goto(base + route, { waitUntil: 'networkidle', timeout: 60000 });
        await page.waitForTimeout(600);
        await page.evaluate(() => document.querySelectorAll('details').forEach(d => { d.open = true; }));
        await page.waitForTimeout(200);
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
        const counts = new Map();
        for (const b of data.blocks) if (b.text.length >= 40) counts.set(b.text, (counts.get(b.text) ?? 0) + 1);
        const repeated = [...counts].filter(([, n]) => n > 1).map(([text, n]) => ({ n, text: text.slice(0, 200) }));
        const formulaRepeats = Object.entries(data.formulas).filter(([, n]) => n > 1);
        const leaks = data.blocks.filter(b => !b.other && (lang === 'ru'
          ? /[A-Za-z]{3,}(?:[ ,'’-]+[A-Za-z]{2,}){3,}/.test(b.text) && !/[А-Яа-яЁё]/.test(b.text)
          : /[А-Яа-яЁё]{3,}/.test(b.text))).map(b => b.text.slice(0, 160));
        const isPrint = route.endsWith('/print');
        const fail = errors.length > 0 || (!isPrint && repeated.length > 0) || formulaRepeats.length > 0 || (label === 'mobile' && data.overflow > 2);
        results.push({ lang, view: label, route, title: data.title, blocks: data.blocks.length, formulaCards: Object.keys(data.formulas), repeated, formulaRepeats, leaks: leaks.slice(0, 30), leakCount: leaks.length, overflow: data.overflow, errors: [...errors], fail });
        if (opt('shots')) await page.screenshot({ path: path.join(outDir, `${lang}-${label}-${route.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'home'}.png`), fullPage: true });
        process.stdout.write(fail ? 'x' : '.');
      }
      await context.close();
    }
  }
} finally {
  await browser.close();
  server?.kill();
}
fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify({ at: new Date().toISOString(), base, results }, null, 2));
console.log('\n');
for (const r of results.filter(r => r.fail || r.leakCount)) {
  console.log(`${r.fail ? 'FAIL' : 'note'} ${r.lang}/${r.view} ${r.route} — «${r.title}»`);
  for (const e of r.errors) console.log(`   JS error: ${e}`);
  for (const x of r.repeated.slice(0, 8)) console.log(`   repeated ×${x.n}: ${x.text}`);
  for (const [id, n] of r.formulaRepeats) console.log(`   formula card ${id} ×${n}`);
  if (r.view === 'mobile' && r.overflow > 2) console.log(`   horizontal overflow ${r.overflow}px at 390 px`);
  for (const l of r.leaks.slice(0, 5)) console.log(`   ${r.lang === 'ru' ? 'English-only block on RU page' : 'Cyrillic on EN page'}: ${l}`);
}
const failed = results.filter(r => r.fail).length;
console.log(`${results.length} page views · ${failed} failed · report: ${path.relative(ROOT, path.join(outDir, 'report.json'))}${opt('shots') ? ' · screenshots in the same folder' : ''}`);
process.exit(failed ? 1 : 0);
