// Usage:
//   node scripts/content/lint.mjs <batch-id>   -> checks content-work/<batch>/*.edits.jsonl against the current source
//   node scripts/content/lint.mjs --site       -> checks every current text of every batch (progress metric)
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, checkText, extractUnit, findBatch, loadBatches, readEdits, readJson, unitId, workDir } from './lib.mjs';

const arg = process.argv[2];
if (!arg) { console.error('usage: lint.mjs <batch-id> | --site'); process.exit(2); }

const glossaryFile = path.join(ROOT, 'docs/content-revision/glossary.json');
const glossary = fs.existsSync(glossaryFile) ? readJson('docs/content-revision/glossary.json').data.terms : [];
const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function glossaryIssues(en, ru) {
  const out = [];
  if (!en || !ru) return out;
  for (const term of glossary) {
    if (!new RegExp(`(^|[^A-Za-z])${escape(term.en)}([^A-Za-z]|$)`, 'i').test(en)) continue;
    if (!term.ru.some(stem => ru.toLowerCase().includes(stem.toLowerCase()))) out.push(['warn', `термин «${term.en}» → по глоссарию «${term.ru[0]}…»`]);
  }
  return out;
}
const placeholders = text => (text?.match(/\{\{[^}]+\}\}|\$t\([^)]*\)/g) ?? []).sort().join('|');

if (arg === '--site') {
  const report = [];
  const totals = {};
  for (const batch of loadBatches().batches) {
    const counts = {};
    let n = 0;
    for (const unit of batch.units) for (const item of extractUnit(unit)) {
      n++;
      for (const [lang, text] of [['en', item.en], ['ru', item.ru]]) for (const [level, why] of checkText(lang, text, item)) {
        const key = `${level} ${lang}: ${why.replace(/:.*$/, '')}`;
        counts[key] = (counts[key] ?? 0) + 1; totals[key] = (totals[key] ?? 0) + 1;
      }
    }
    report.push({ batch: batch.id, lane: batch.lane, items: n, counts });
  }
  fs.mkdirSync(path.join(ROOT, 'content-work'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'content-work/_site-lint.json'), JSON.stringify({ at: new Date().toISOString(), totals, report }, null, 2));
  console.log('SITE TOTALS'); for (const [k, v] of Object.entries(totals).sort((a, b) => b[1] - a[1])) console.log(String(v).padStart(6), k);
  console.log('\nworst batches:'); for (const r of report.map(r => ({ ...r, sum: Object.values(r.counts).reduce((a, b) => a + b, 0) })).sort((a, b) => b.sum - a.sum).slice(0, 15)) console.log(String(r.sum).padStart(6), r.batch);
  process.exit(0);
}

const batch = findBatch(arg);
const dir = workDir(batch.id);
const items = new Map();
for (const unit of batch.units) for (const item of extractUnit(unit)) items.set(item.id, { ...item, unit: unitId(unit) });
let edits;
try { edits = readEdits(dir); } catch (e) { console.error(e.message); process.exit(1); }
const errors = [], warnings = [];
const seen = new Map();
for (const edit of edits) {
  const where = `${edit._file}:${edit._line} ${edit.id}`;
  if (!edit.id) { errors.push(`${where}: missing "id"`); continue; }
  if (seen.has(edit.id)) errors.push(`${where}: duplicate entry (also ${seen.get(edit.id)})`);
  seen.set(edit.id, `${edit._file}:${edit._line}`);
  const item = items.get(edit.id);
  if (!item && !edit.create) { errors.push(`${where}: unknown id — re-run extract and copy ids from worksheet.md`); continue; }
  const modes = ['keep', 'delete'].filter(k => edit[k]).length + (edit.en != null || edit.ru != null ? 1 : 0);
  if (modes !== 1) { errors.push(`${where}: give exactly one of: new "en"/"ru" text, "keep": true, or "delete": true`); continue; }
  if ((edit.keep || edit.delete) && !(edit.why ?? '').trim()) errors.push(`${where}: "keep"/"delete" needs a short "why"`);
  if (edit.delete) continue;
  const finalEn = edit.en ?? item?.en, finalRu = edit.ru ?? item?.ru;
  for (const [lang, text] of [['en', finalEn], ['ru', finalRu]]) if (typeof text === 'string' && !text.trim()) errors.push(`${where} [${lang}]: пустой текст — напишите текст или поставьте "delete"`);
  for (const [lang, text] of [['en', finalEn], ['ru', finalRu]]) for (const [level, why] of checkText(lang, text, item ?? {})) (level === 'error' ? errors : warnings).push(`${where} [${lang}] ${why}`);
  for (const issue of glossaryIssues(finalEn, finalRu)) warnings.push(`${where} ${issue[1]}`);
  if (item && placeholders(item.en) !== placeholders(finalEn)) errors.push(`${where}: i18n placeholders changed in EN (${placeholders(item.en)} → ${placeholders(finalEn)})`);
  if (item && placeholders(item.ru) !== placeholders(finalRu)) errors.push(`${where}: i18n placeholders changed in RU`);
  if (finalEn && finalRu && finalEn.length >= 60) {
    const ratio = finalRu.length / finalEn.length;
    if (ratio < 0.5 || ratio > 2.3) warnings.push(`${where}: RU/EN length ratio ${ratio.toFixed(2)} — check nothing is missing or padded`);
  }
}
const missing = [...items.keys()].filter(id => !seen.has(id));
if (missing.length) errors.push(`${missing.length} worksheet items have no decision (change / keep+why / delete+why), e.g.:\n  ${missing.slice(0, 15).join('\n  ')}`);
// repeated final texts on the same pages
const finals = { en: new Map(), ru: new Map() };
for (const [id, item] of items) {
  const edit = edits.find(e => e.id === id);
  if (edit?.delete) continue;
  for (const lang of ['en', 'ru']) {
    const text = edit?.[lang] ?? item[lang];
    if (text && text.length >= 40 && !edit?.allowDuplicate) finals[lang].set(text, [...(finals[lang].get(text) ?? []), id]);
  }
}
for (const lang of ['en', 'ru']) for (const [text, ids] of finals[lang]) if (ids.length > 1) errors.push(`repeated ${lang.toUpperCase()} text ×${ids.length}: «${text.slice(0, 90)}…» in ${ids.join(', ')} — make each specific, delete extras, or mark "allowDuplicate": true with "why"`);
fs.writeFileSync(path.join(dir, 'lint.json'), JSON.stringify({ at: new Date().toISOString(), errors, warnings }, null, 2));
const changed = edits.filter(e => e.en != null || e.ru != null).length, kept = edits.filter(e => e.keep).length, deleted = edits.filter(e => e.delete).length;
console.log(`${batch.id}: ${items.size} items · changed ${changed} · kept ${kept} · deleted ${deleted} · errors ${errors.length} · warnings ${warnings.length}`);
for (const e of errors.slice(0, 60)) console.log('ERROR ' + e);
for (const w of warnings.slice(0, 80)) console.log('warn  ' + w);
if (errors.length > 60 || warnings.length > 80) console.log(`(full list: ${path.relative(ROOT, path.join(dir, 'lint.json'))})`);
process.exit(errors.length ? 1 : 0);
