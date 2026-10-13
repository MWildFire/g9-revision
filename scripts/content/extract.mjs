// Usage:
//   node scripts/content/extract.mjs <batch-id>   -> content-work/<batch>/worksheet.{json,md}
//   node scripts/content/extract.mjs --coverage   -> which i18n keys / files with Cyrillic are in no batch
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { ROOT, CYR, extractUnit, findBatch, loadBatches, localImports, unitId, workDir, readJson } from './lib.mjs';

const arg = process.argv[2];
if (!arg) { console.error('usage: extract.mjs <batch-id> | --coverage'); process.exit(2); }

if (arg === '--coverage') {
  const manifest = loadBatches();
  const units = manifest.batches.flatMap(b => b.units);
  const coveredKeys = new Set(units.filter(u => u.kind === 'i18n').map(u => `${u.ns}:${u.key}`));
  const coveredFiles = new Set([...units.filter(u => u.file).map(u => u.file), ...(manifest.ignoreFiles ?? []).map(x => x.file)]);
  for (const u of units.filter(u => u.kind === 'ts')) for (const f of localImports(u.file)) coveredFiles.add(path.relative(ROOT, f).split(path.sep).join('/'));
  if (units.some(u => u.kind === 'math')) ['content', 'core', 'recap', 'extended', 'definitions', 'russian-core', 'russian-recap', 'russian-extended', 'localisation'].forEach(n => coveredFiles.add(`src/modules/math-term-one/${n}.ts`));
  const missing = [];
  for (const ns of fs.readdirSync(path.join(ROOT, 'src/i18n/en')).map(f => f.replace('.json', ''))) {
    const en = readJson(`src/i18n/en/${ns}.json`).data;
    for (const key of Object.keys(en)) if (!coveredKeys.has(`${ns}:${key}`) && !coveredKeys.has(`${ns}:*`)) missing.push(`i18n ${ns}:${key}`);
  }
  const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]);
  for (const file of walk(path.join(ROOT, 'src')).filter(f => /\.(ts|tsx)$/.test(f))) {
    const relFile = path.relative(ROOT, file).split(path.sep).join('/');
    if (relFile.startsWith('src/i18n/')) continue;
    if (CYR.test(fs.readFileSync(file, 'utf8')) && !coveredFiles.has(relFile)) missing.push(`file ${relFile}`);
  }
  for (const file of ['src/data/mocks.json', 'src/data/revision-plan.json', 'src/data/study-sessions.json']) if (!coveredFiles.has(file)) missing.push(`file ${file}`);
  console.log(missing.length ? `NOT IN ANY BATCH (${missing.length}):\n` + missing.join('\n') : 'coverage OK: every i18n key and every file with Russian text belongs to a batch');
  process.exit(missing.length ? 1 : 0);
}

const batch = findBatch(arg);
const dir = workDir(batch.id);
fs.mkdirSync(dir, { recursive: true });
const sha = (() => { try { return execSync('git rev-parse --short HEAD', { cwd: ROOT }).toString().trim(); } catch { return 'unknown'; } })();
const items = [];
for (const unit of batch.units) for (const item of extractUnit(unit)) items.push({ unit: unitId(unit), ...item });

// identical texts inside the batch = repeated blocks on the same pages
const dupes = { en: new Map(), ru: new Map() };
for (const item of items) for (const lang of ['en', 'ru']) {
  const text = item[lang];
  if (text && text.length >= 40) dupes[lang].set(text, [...(dupes[lang].get(text) ?? []), item.id]);
}
const repeated = [];
for (const lang of ['en', 'ru']) for (const [text, ids] of dupes[lang]) if (ids.length > 1) repeated.push({ lang, times: ids.length, text: text.slice(0, 160), ids });

fs.writeFileSync(path.join(dir, 'worksheet.json'), JSON.stringify({ batch: batch.id, title: batch.title, due: batch.due, lane: batch.lane, routes: batch.routes, sha, generatedAt: new Date().toISOString(), items, repeated }, null, 2) + '\n');

const wrap = text => (text ?? '∅').replace(/(.{500,}?[.;:!?])\s+/g, '$1\n    ');
const md = [`# ${batch.id} — ${batch.title}`, '', `Due: ${batch.due} · lane: ${batch.lane} · source sha: ${sha} · items: ${items.length}`, '', 'Routes:', ...batch.routes.map(r => `- ${r}`), ''];
if (batch.notes) md.push('Notes:', ...[].concat(batch.notes).map(n => `- ${n}`), '');
if (repeated.length) {
  md.push(`## Repeated texts inside this batch (${repeated.length}) — each must become specific or be deleted`, '');
  for (const r of repeated) md.push(`- ${r.lang.toUpperCase()} ×${r.times}: «${r.text}…»`, ...r.ids.map(id => `  - ${id}`));
  md.push('');
}
let current = '';
items.forEach((item, index) => {
  if (item.unit !== current) { current = item.unit; md.push(`## ${current}`, ''); }
  md.push(`### ${index + 1}. \`${item.id}\` — ${item.type}`, `EN: ${wrap(item.en)}`, `RU: ${wrap(item.ru)}`, '');
});
fs.writeFileSync(path.join(dir, 'worksheet.md'), md.join('\n'));
const byType = items.reduce((a, i) => ({ ...a, [i.type]: (a[i.type] ?? 0) + 1 }), {});
console.log(`${batch.id}: ${items.length} items (${Object.entries(byType).map(([k, v]) => `${k} ${v}`).join(', ')}); repeated texts: ${repeated.length}`);
console.log(`worksheet: ${path.relative(ROOT, path.join(dir, 'worksheet.md'))}`);
