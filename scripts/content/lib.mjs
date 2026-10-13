// Content revision toolkit: extraction of every student-facing EN/RU text pair,
// exact write-back, and text checks. Used by extract.mjs, apply.mjs, lint.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const CYR = /[А-Яа-яЁё]/;
const rel = file => path.relative(ROOT, file).split(path.sep).join('/');
const abs = file => path.isAbsolute(file) ? file : path.join(ROOT, file);

// ---------------------------------------------------------------- JSON files
export function readJson(file) {
  const raw = fs.readFileSync(abs(file), 'utf8');
  return { data: JSON.parse(raw), nl: raw.endsWith('\n') };
}
export function writeJson(file, data, nl = true) {
  fs.writeFileSync(abs(file), JSON.stringify(data, null, 2) + (nl ? '\n' : ''));
}
export const getAt = (obj, keys) => keys.reduce((o, k) => (o == null ? undefined : o[k]), obj);
export function setAt(obj, keys, value) {
  let o = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (o[keys[i]] == null) o[keys[i]] = typeof keys[i + 1] === 'number' ? [] : {};
    o = o[keys[i]];
  }
  o[keys[keys.length - 1]] = value;
}
export function deleteAt(obj, keys) {
  const parent = getAt(obj, keys.slice(0, -1));
  const last = keys[keys.length - 1];
  if (parent == null || Array.isArray(parent) || !(last in parent)) return false;
  delete parent[last];
  return true;
}
export const pathText = keys => keys.map((k, i) => typeof k === 'number' ? `[${k}]` : (i ? '.' : '') + k).join('');
export function parsePath(text) {
  const keys = [];
  for (const part of text.match(/[^.[\]]+|\[\d+\]/g) ?? []) keys.push(/^\[\d+\]$/.test(part) ? Number(part.slice(1, -1)) : part);
  return keys;
}

// ------------------------------------------------------------- TS module load
const moduleCache = new Map();
export function loadTs(file) {
  file = abs(file);
  if (moduleCache.has(file)) return moduleCache.get(file).exports;
  const mod = { exports: {} };
  moduleCache.set(file, mod);
  const out = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.React } }).outputText;
  const req = dep => {
    if (!dep.startsWith('.')) return new Proxy(function () {}, { get: () => () => null, apply: () => null });
    const base = path.resolve(path.dirname(file), dep);
    for (const candidate of [base, base + '.ts', base + '.json', path.join(base, 'index.ts')]) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        if (candidate.endsWith('.json')) return JSON.parse(fs.readFileSync(candidate, 'utf8'));
        if (candidate.endsWith('.ts')) return loadTs(candidate);
      }
    }
    return {};
  };
  new Function('require', 'module', 'exports', out)(req, mod, mod.exports);
  return mod.exports;
}
export function localImports(file, seen = new Set()) {
  file = abs(file);
  if (seen.has(file)) return seen;
  seen.add(file);
  const sf = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
  sf.forEachChild(node => {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
      const spec = node.moduleSpecifier.text;
      if (!spec.startsWith('.')) return;
      const base = path.resolve(path.dirname(file), spec);
      for (const candidate of [base + '.ts', base + '.tsx', path.join(base, 'index.ts')]) if (fs.existsSync(candidate)) { localImports(candidate, seen); break; }
    }
  });
  return seen;
}

// ------------------------------------------------------- bilingual tree walk
// Collects every {en, ru} string pair. Handles {en:'..', ru:'..'},
// {en:{question,answer}, ru:{question,answer}} and {englishTerm, russianTerm}.
const SKIP_KEYS = new Set(['url', 'language', 'kind', 'id', 'icon', 'color', 'href', 'route', 'image', 'src', 'slug', 'sources', 'sourceIds', 'tier', 'criterion', 'strand', 'difficulty', 'commandTerm', 'topicId', 'lessonId', 'russianEvidence', 'matches', 'photoTopic']);
export const isIdLike = v => typeof v === 'string' && /^[a-z0-9]+([-_:/.][a-z0-9]+)*$/.test(v);
// sub = path inside the en/ru branches of one {en, ru} holder (empty when both are strings)
function pairLeaves(en, ru, keys, out, meta, sub = []) {
  if (typeof en === 'string' || typeof ru === 'string') {
    if ((isIdLike(en) || en == null) && (isIdLike(ru) || ru == null)) return;
    out.push({ keys, sub, en: typeof en === 'string' ? en : null, ru: typeof ru === 'string' ? ru : null, ...meta });
    return;
  }
  if (Array.isArray(en) || Array.isArray(ru)) {
    const n = Math.max(en?.length ?? 0, ru?.length ?? 0);
    for (let i = 0; i < n; i++) pairLeaves(en?.[i], ru?.[i], keys, out, meta, [...sub, i]);
    return;
  }
  if (en && typeof en === 'object' || ru && typeof ru === 'object') {
    for (const k of new Set([...Object.keys(en ?? {}), ...Object.keys(ru ?? {})])) if (!SKIP_KEYS.has(k)) pairLeaves(en?.[k], ru?.[k], keys, out, meta, [...sub, k]);
  }
}
export function walkBilingual(value, keys = [], out = [], seen = new Set()) {
  if (!value || typeof value !== 'object' || seen.has(value)) return out;
  seen.add(value);
  if ('en' in value && 'ru' in value) {
    pairLeaves(value.en, value.ru, keys, out, {});
  }
  if (typeof value.englishTerm === 'string' && typeof value.russianTerm === 'string') out.push({ keys, en: value.englishTerm, ru: value.russianTerm, termPair: true });
  for (const [k, v] of Object.entries(value)) {
    if (k === 'en' || k === 'ru' || SKIP_KEYS.has(k)) continue;
    walkBilingual(v, [...keys, Array.isArray(value) ? Number(k) : k], out, seen);
  }
  return out;
}

// ------------------------------------------------------------ string literals
export function stringLiterals(file) {
  const text = fs.readFileSync(abs(file), 'utf8');
  const kind = file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, kind);
  const found = [];
  const visit = node => {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const parent = node.parent;
      const isModuleSpecifier = parent && (ts.isImportDeclaration(parent) || ts.isExportDeclaration(parent));
      if (!isModuleSpecifier) found.push({ node, start: node.getStart(sf), end: node.getEnd(), value: node.text, quote: text[node.getStart(sf)] });
    } else if (ts.isJsxText(node) && CYR.test(node.getText(sf))) {
      found.push({ node, start: node.getStart(sf), end: node.getEnd(), value: node.getText(sf).trim(), quote: 'jsx', raw: node.getText(sf) });
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return { text, sf, found };
}
export function quoteLiteral(value, quote) {
  const LS = String.fromCharCode(0x2028), PS = String.fromCharCode(0x2029);
  const esc = value.replace(/\\/g, '\\\\').replace(/\r/g, '\\r').replace(/\n/g, '\\n').split(LS).join('\\u2028').split(PS).join('\\u2029');
  if (quote === '`') return '`' + esc.replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
  if (quote === '"') return '"' + esc.replace(/"/g, '\\"') + '"';
  return "'" + esc.replace(/'/g, "\\'") + "'";
}

// Inline UI pairs inside TSX/TS code: t('English','Русский'), ru ? 'Русский' : 'English',
// ['English','Русский'] tuples and consecutive (EN, RU) arguments of helper calls.
export function inlinePairs(file) {
  const { sf, found } = stringLiterals(file);
  const isLit = n => n && (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n));
  const used = new Set();
  const pairs = [];
  const line = n => { const p = sf.getLineAndCharacterOfPosition(n.getStart(sf)); return `${p.line + 1}.${p.character + 1}`; };
  const visit = node => {
    const seq = ts.isCallExpression(node) ? node.arguments : ts.isArrayLiteralExpression(node) ? node.elements : null;
    if (seq) {
      for (let i = 0; i < seq.length - 1; i++) {
        const a = seq[i], b = seq[i + 1];
        if (isLit(a) && isLit(b) && !CYR.test(a.text) && CYR.test(b.text) && /[A-Za-z]/.test(a.text) && !used.has(a) && !used.has(b)) {
          pairs.push({ line: line(a), en: a.text, ru: b.text }); used.add(a); used.add(b); i++;
        }
      }
    }
    if (ts.isConditionalExpression(node) && isLit(node.whenTrue) && isLit(node.whenFalse)) {
      const t = node.whenTrue, f = node.whenFalse;
      if (CYR.test(t.text) !== CYR.test(f.text) && !used.has(t) && !used.has(f)) {
        const [ruNode, enNode] = CYR.test(t.text) ? [t, f] : [f, t];
        pairs.push({ line: line(t), en: enNode.text, ru: ruNode.text }); used.add(t); used.add(f);
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  const loose = found.filter(l => CYR.test(l.value) && !used.has(l.node)).map(l => ({ line: line(l.node), en: null, ru: l.value }));
  return [...pairs, ...loose];
}

// ------------------------------------------------------------------- units
// A unit is one slice of content. Kinds:
//  i18n  {ns, key}                       -> src/i18n/{en,ru}/<ns>.json, subtree <key>
//  json  {file, path?, ids?, where?}     -> {en,ru} pairs in a data JSON file
//  ts    {file, export, path?, ids?, where?} -> {en,ru} pairs in an exported TS value
//  math  {lessons: [...]}                -> math-term-one EN lesson pack + Russian pack
//  tsx   {file}                          -> inline UI pairs in code
function select(value, unit) {
  let v = unit.path ? getAt(value, parsePath(unit.path)) : value;
  if (unit.keys && v && typeof v === 'object' && !Array.isArray(v)) v = Object.fromEntries(Object.entries(v).filter(([k]) => unit.keys.includes(k)));
  if (unit.keyPrefix && v && typeof v === 'object' && !Array.isArray(v)) v = Object.fromEntries(Object.entries(v).filter(([k]) => [].concat(unit.keyPrefix).some(prefix => k.startsWith(prefix))));
  if (unit.ids && Array.isArray(v)) v = v.filter(x => unit.ids.includes(x?.id));
  if (unit.where && Array.isArray(v)) v = v.filter(x => Object.entries(unit.where).every(([k, want]) => (Array.isArray(want) ? want.includes(x?.[k]) : x?.[k] === want)));
  return v;
}
const itemType = keys => {
  const last = [...keys].reverse().find(k => typeof k === 'string') ?? '';
  if (/title|heading|label|name|summary/i.test(last)) return 'title';
  if (/term$/i.test(last)) return 'term';
  if (/definition|meaning|contrast|model|explanation/i.test(last)) return 'definition';
  if (/example|steps|worked/i.test(last)) return 'example';
  if (/question|prompt|hint/i.test(last)) return 'question';
  if (/answer|marking|checks|solution/i.test(last)) return 'answer';
  if (/caption|detail/i.test(last)) return 'caption';
  return 'text';
};

export function unitId(unit) {
  if (unit.kind === 'i18n') return `i18n:${unit.ns}:${unit.key}${unit.sub ? '.' + unit.sub : ''}`;
  if (unit.kind === 'math') return `math:${(unit.lessons ?? ['*']).join('+')}`;
  return `${unit.kind}:${unit.file}${unit.export ? '#' + unit.export : ''}${unit.path ? '.' + unit.path : ''}${unit.ids ? '[' + unit.ids.join('+') + ']' : ''}${unit.keys ? '{' + unit.keys.join('+') + '}' : ''}${unit.keyPrefix ? '{' + [].concat(unit.keyPrefix).join('+') + '*}' : ''}${unit.where ? JSON.stringify(unit.where) : ''}`;
}

export function extractUnit(unit) {
  const items = [];
  if (unit.kind === 'i18n') {
    const en = readJson(`src/i18n/en/${unit.ns}.json`).data, ru = readJson(`src/i18n/ru/${unit.ns}.json`).data;
    if (unit.key === '*') return [...new Set([...Object.keys(en), ...Object.keys(ru)])].flatMap(key => extractUnit({ ...unit, key }));
    const subKeys = unit.sub ? parsePath(unit.sub) : [];
    const enRoot = getAt(en, [unit.key, ...subKeys]), ruRoot = getAt(ru, [unit.key, ...subKeys]);
    const seenObj = new Set();
    const visit = (e, r, keys) => {
      if (typeof e === 'string' || typeof r === 'string') {
        const last = keys[keys.length - 1];
        if (SKIP_KEYS.has(last) || /^https?:/.test(e ?? '') || (isIdLike(e) && (r == null || r === e))) return;
        items.push({ id: `i18n:${unit.ns}:${pathText([unit.key, ...subKeys, ...keys])}`, type: itemType([unit.key, ...keys]), en: typeof e === 'string' ? e : null, ru: typeof r === 'string' ? r : null });
        return;
      }
      const obj = e ?? r;
      if (!obj || typeof obj !== 'object') return;
      if (!Array.isArray(obj) && typeof e?.en === 'string' && typeof r?.ru === 'string') {
        const id = `i18n:${unit.ns}:${pathText([unit.key, ...subKeys, ...keys])}`;
        if (!seenObj.has(id)) { seenObj.add(id); items.push({ id, type: itemType(keys), en: e.en, ru: r.ru, bilingual: true, mirrorOk: e.ru === r.ru && e.en === r.en }); }
      }
      if (!Array.isArray(obj) && typeof e?.englishTerm === 'string') {
        items.push({ id: `i18n:${unit.ns}:${pathText([unit.key, ...subKeys, ...keys])}#terms`, type: 'term', en: e.englishTerm, ru: r?.russianTerm ?? e.russianTerm, termPair: true });
      }
      const keysHere = new Set([...Object.keys(e ?? {}), ...Object.keys(r ?? {})]);
      for (const k of keysHere) {
        if (SKIP_KEYS.has(k) || k === 'englishTerm' || k === 'russianTerm') continue;
        if (!Array.isArray(obj) && (k === 'en' || k === 'ru') && typeof e?.en === 'string') continue;
        visit(e?.[k], r?.[k], [...keys, Array.isArray(obj) ? Number(k) : k]);
      }
    };
    visit(enRoot, ruRoot, []);
    return items;
  }
  if (unit.kind === 'json' || unit.kind === 'ts') {
    const root = unit.kind === 'json' ? readJson(unit.file).data : loadTs(unit.file)[unit.export];
    const base = unit.kind === 'json' ? parsePath(unit.path ?? '') : [unit.export, ...parsePath(unit.path ?? '')];
    let value = select(root, unit);
    const pairs = [];
    if (Array.isArray(value) && (unit.ids || unit.where)) value.forEach(x => walkBilingual(x, [x.id ?? '?'], pairs));
    else walkBilingual(value, [], pairs);
    for (const p of pairs) {
      if (p.en == null && p.ru == null) continue;
      if (p.en === p.ru && !CYR.test(p.ru ?? '')) continue; // language-neutral (formulas, numbers)
      const holder = unit.ids || unit.where ? [...base, '@' + p.keys[0], ...p.keys.slice(1)] : [...base, ...p.keys];
      const id = `${unit.kind}:${unit.file}#${pathText(holder)}${p.sub?.length ? '>' + pathText(p.sub) : ''}${p.termPair ? '#terms' : ''}`;
      items.push({ id, type: p.termPair ? 'term' : itemType([...p.keys, ...(p.sub ?? [])]), en: p.en, ru: p.ru });
    }
    return items;
  }
  if (unit.kind === 'math') {
    const { lessons } = loadTs('src/modules/math-term-one/content.ts');
    const ruText = { ...loadTs('src/modules/math-term-one/russian-core.ts').russianCore, ...loadTs('src/modules/math-term-one/russian-recap.ts').russianRecap, ...loadTs('src/modules/math-term-one/russian-extended.ts').russianExtended };
    for (const lesson of lessons.filter(l => !unit.lessons || unit.lessons.includes(l.id))) {
      const ru = ruText[lesson.id] ?? {};
      const out = [];
      pairLeaves({ title: lesson.title, intro: lesson.intro, goals: lesson.goals, sections: lesson.sections?.map(s => ({ title: s.title, text: s.text })), example: lesson.example, pitfalls: lesson.pitfalls, questions: lesson.questions },
        { title: ru.title, intro: ru.intro, goals: ru.goals, sections: ru.sections?.map(s => ({ title: s.title, text: s.text })), example: ru.example, pitfalls: ru.pitfalls, questions: ru.questions }, [], out, {});
      for (const p of out) if (p.en != null || p.ru != null) items.push({ id: `math:${lesson.id}.${pathText(p.sub)}`, type: itemType(p.sub), en: p.en, ru: p.ru });
      lesson.terms.forEach((term, i) => {
        for (const [field, label] of [['term', 'term'], ['meaning', 'meaning'], ['example', 'example']]) items.push({ id: `math:${lesson.id}.terms[${i}].${label}`, type: itemType([label]), en: term[field], ru: term.ru?.[field] ?? null });
        if (term.review?.contrast) items.push({ id: `math:${lesson.id}.terms[${i}].contrast`, type: 'definition', en: term.review.contrast.en, ru: term.review.contrast.ru });
      });
    }
    return items;
  }
  if (unit.kind === 'tsx') {
    for (const p of inlinePairs(unit.file)) items.push({ id: `tsx:${unit.file}:${p.line}`, type: 'ui', en: p.en, ru: p.ru });
    return items;
  }
  throw new Error(`unknown unit kind ${unit.kind}`);
}

// Source files that may hold the literals of a unit (for write-back of TS text).
// lang matters for the maths pack: English and Russian lessons live in different files.
export function unitFiles(unit, lang) {
  if (unit.kind === 'ts') return [...localImports(unit.file)].map(rel);
  if (unit.kind === 'tsx') return [unit.file];
  if (unit.kind === 'math') {
    const names = lang === 'ru' ? ['russian-core', 'russian-recap', 'russian-extended', 'definitions'] : ['content', 'core', 'recap', 'extended', 'definitions'];
    return names.map(n => `src/modules/math-term-one/${n}.ts`);
  }
  if (unit.kind === 'json') return [unit.file];
  return [`src/i18n/en/${unit.ns}.json`, `src/i18n/ru/${unit.ns}.json`];
}
// Resolves "lessons.@states-thermal.paragraphs[0]" style paths (array element chosen by id).
function resolveHolder(doc, text) {
  let node = doc;
  for (const key of parsePath(text)) {
    if (node == null) return undefined;
    node = typeof key === 'string' && key.startsWith('@') && Array.isArray(node) ? node.find(x => x?.id === key.slice(1)) : node[key];
  }
  return node;
}

// ------------------------------------------------------------------ batches
export function loadBatches() { return readJson('scripts/content/batches.json').data; }
export function findBatch(name) {
  const manifest = loadBatches();
  const batch = manifest.batches.find(b => b.id === name);
  if (!batch) throw new Error(`no batch "${name}" in scripts/content/batches.json`);
  return batch;
}

// ---------------------------------------------------------------- write-back
// Keys that would reach Object.prototype (or Object itself) when written through setAt.
const UNSAFE_KEYS = new Set(['__proto__', 'constructor', 'prototype']);
const unsafeKeys = keys => keys.some(k => UNSAFE_KEYS.has(k));
// edits: [{id, en?, ru?, keep?, delete?, create?, replaceAll?}]
export function applyEdits(batch, edits, { dryRun = false } = {}) {
  const log = [];
  const errors = [];
  const worksheet = new Map();
  for (const unit of batch.units) for (const item of extractUnit(unit)) worksheet.set(item.id, { ...item, unit });
  const jsonCache = new Map();
  const getJson = file => { if (!jsonCache.has(file)) jsonCache.set(file, readJson(file)); return jsonCache.get(file).data; };
  const literalChanges = new Map(); // file -> Map(old -> {value, replaceAll, ids})
  const queueLiteral = (files, oldValue, newValue, edit) => {
    if (oldValue == null) { errors.push(`${edit.id}: нет текста на этом языке`); return; }
    if (oldValue === newValue) return;
    const hits = [];
    for (const file of files) {
      const { found } = stringLiterals(file);
      const matches = found.filter(l => l.value === oldValue);
      if (matches.length) hits.push({ file, count: matches.length });
    }
    const total = hits.reduce((a, h) => a + h.count, 0);
    if (!total) { errors.push(`${edit.id}: literal not found in ${files.join(', ')} — edit this text by hand (Edit tool) and re-run extract`); return; }
    if (total > 1 && oldValue.length < 25 && !edit.replaceAll) { errors.push(`${edit.id}: short text "${oldValue}" occurs ${total}× — add "replaceAll": true if every occurrence should change, otherwise edit by hand`); return; }
    for (const { file } of hits) {
      if (!literalChanges.has(file)) literalChanges.set(file, new Map());
      const prior = literalChanges.get(file).get(oldValue);
      if (prior && prior.value !== newValue) { errors.push(`${edit.id}: conflicting replacements for the same source text (also ${prior.ids.join(', ')})`); return; }
      literalChanges.get(file).set(oldValue, { value: newValue, ids: [...(prior?.ids ?? []), edit.id] });
    }
  };
  for (const edit of edits) {
    if (edit.keep) { if (!worksheet.has(edit.id)) errors.push(`${edit.id}: keep for unknown id`); continue; }
    const item = worksheet.get(edit.id);
    if (!item && !edit.create) { errors.push(`${edit.id}: unknown id (re-run extract; use "create": true only for new i18n keys)`); continue; }
    const newEn = edit.en ?? item?.en, newRu = edit.ru ?? item?.ru;
    log.push({ id: edit.id, oldEn: item?.en ?? null, newEn: edit.delete ? null : (newEn ?? null), oldRu: item?.ru ?? null, newRu: edit.delete ? null : (newRu ?? null) });
    const [kind] = edit.id.split(':');
    if (kind === 'i18n') {
      const m = edit.id.match(/^i18n:([A-Za-z0-9_-]+):(.+)$/);
      if (!m) { errors.push(`${edit.id}: unexpected i18n id — edit by hand`); continue; }
      const [, ns, rest] = m;
      const termPair = rest.endsWith('#terms');
      const keys = parsePath(rest.replace(/#terms$/, ''));
      if (unsafeKeys(keys)) { errors.push(`${edit.id}: unsafe key — edit by hand`); continue; }
      const enFile = `src/i18n/en/${ns}.json`, ruFile = `src/i18n/ru/${ns}.json`;
      const en = getJson(enFile), ru = getJson(ruFile);
      if (edit.delete) {
        const target = getAt(en, keys);
        const deletable = typeof target === 'string' || (target && typeof target === 'object' && !Array.isArray(target) && 'en' in target);
        if (termPair || !deletable || typeof keys[keys.length - 1] === 'number') { errors.push(`${edit.id}: delete works for plain i18n keys and {en,ru} objects (not array elements or term pairs) — edit by hand`); continue; }
        deleteAt(en, keys); deleteAt(ru, keys); continue;
      }
      // a language is written only when the edit gives text for it, so a null never reaches a JSON file
      if (termPair) { for (const doc of [en, ru]) { if (edit.en != null) setAt(doc, [...keys, 'englishTerm'], newEn); if (edit.ru != null) setAt(doc, [...keys, 'russianTerm'], newRu); } continue; }
      if (item?.bilingual) { for (const doc of [en, ru]) { if (edit.en != null) setAt(doc, [...keys, 'en'], newEn); if (edit.ru != null) setAt(doc, [...keys, 'ru'], newRu); } continue; }
      if (edit.create && edit.bilingual) { for (const doc of [en, ru]) { if (edit.en != null) setAt(doc, [...keys, 'en'], newEn); if (edit.ru != null) setAt(doc, [...keys, 'ru'], newRu); } continue; }
      if (edit.en != null) setAt(en, keys, newEn);
      if (edit.ru != null) setAt(ru, keys, newRu);
      continue;
    }
    if (kind === 'json') {
      const m = edit.id.match(/^json:([^#]+)#([^>#]+)(?:>([^#]+))?(#terms)?$/);
      if (!m) { errors.push(`${edit.id}: unexpected JSON id — edit by hand`); continue; }
      if (edit.delete) { errors.push(`${edit.id}: delete inside data JSON — edit by hand`); continue; }
      if (!batch.units.some(u => u.file === m[1])) { errors.push(`${edit.id}: file is not part of batch ${batch.id}`); continue; }
      if (unsafeKeys([...parsePath(m[2]), ...parsePath(m[3] ?? '')])) { errors.push(`${edit.id}: unsafe key — edit by hand`); continue; }
      const doc = getJson(m[1]);
      const holder = resolveHolder(doc, m[2]);
      if (m[4]) { holder.englishTerm = newEn; holder.russianTerm = newRu; continue; }
      const sub = m[3] ? parsePath(m[3]) : [];
      if (holder && typeof holder === 'object' && 'en' in holder) {
        if (sub.length) { setAt(holder.en, sub, newEn); setAt(holder.ru, sub, newRu); } else { holder.en = newEn; holder.ru = newRu; }
      } else errors.push(`${edit.id}: unexpected JSON shape — edit by hand`);
      continue;
    }
    if (edit.delete || edit.create) { errors.push(`${edit.id}: delete/create works only for i18n keys — change the TS source by hand`); continue; }
    if (edit.en != null) queueLiteral(unitFiles(item.unit, 'en'), item.en, edit.en, edit);
    if (edit.ru != null) queueLiteral(unitFiles(item.unit, 'ru'), item.ru, edit.ru, edit);
  }
  if (errors.length) return { errors, log };
  if (!dryRun) {
    // Build every output first and write each one to `<file>.tmp`; sources change only after all writes succeeded.
    const outputs = new Map();
    for (const [file, { data, nl }] of jsonCache) outputs.set(file, JSON.stringify(data, null, 2) + (nl ? '\n' : ''));
    for (const [file, changes] of literalChanges) {
      const { text, found } = stringLiterals(file);
      let out = text;
      const targets = found.filter(l => changes.has(l.value)).sort((a, b) => b.start - a.start);
      for (const l of targets) {
        const replacement = l.quote === 'jsx' ? l.raw.replace(l.value, () => changes.get(l.value).value) : quoteLiteral(changes.get(l.value).value, l.quote);
        out = out.slice(0, l.start) + replacement + out.slice(l.end);
      }
      outputs.set(file, out);
    }
    try {
      for (const [file, content] of outputs) fs.writeFileSync(abs(file) + '.tmp', content);
      for (const file of outputs.keys()) fs.renameSync(abs(file) + '.tmp', abs(file));
    } catch (e) {
      for (const file of outputs.keys()) fs.rmSync(abs(file) + '.tmp', { force: true });
      throw e;
    }
  }
  return { errors, log };
}

// ------------------------------------------------------------------- checks
const META_RU = /авторск\p{L}*\s+(русск\p{L}*\s+)?адаптац|не\s+цитат|своими\s+словами\s+по\s+указанн|не\s+выда[её]тся\s+за|глубин\p{L}*\s+требует\s+провер|по\s+scope|^Основание:|подтвержд\p{L}*\s+школ\p{L}*\s+не|сверено\s+с\s+указанным/iu;
const META_EN = /authored\s+(paraphrase|adaptation)|not\s+(a|presented\s+as\s+a)\s+(published\s+)?quotation|depth\s+needs\s+a\s+scope|^Evidence:|checked\s+in\s+Russian\s+against/i;
// \b does not work for Cyrillic in JS regexes: use Unicode letter look-arounds.
const W = (source, flags = 'iu') => new RegExp(source.replace(/\\b/g, '(?<!\\p{L})').replace(/\\B/g, '(?!\\p{L})'), flags);
const CALQUES = [
  [W('\\bявля(ется|ются)\\B[^.]*\\bявля(ется|ются)\\B'), 'два «является» в одной фразе'],
  [W('\\bв то время как\\B'), '«в то время как» — калька while'],
  [W('\\bимеет место\\B'), '«имеет место» — канцелярит'],
  [W('\\bосуществля'), '«осуществлять» — канцелярит'],
  [W('\\bданн(ый|ая|ое|ые|ого|ой|ом|ым|ых)\\B\\s+(процесс|явлени|величин|элемент|метод|случа|пример|тем|вопрос)'), '«данный» вместо «этот»'],
  [W('\\bиграет\\s+(важную|ключевую)\\s+роль\\B'), '«играет ключевую роль» — штамп'],
  [W('\\bтренд'), '«тренд» — англицизм (закономерность, изменение)'],
  [W('\\bфокус'), '«фокус» — англицизм'],
  [W('\\bрелевантн'), '«релевантный» — англицизм'],
  [W('\\bв терминах\\B'), '«в терминах» — калька'],
  [W('\\bчто делает (его|её|их)\\B'), '«что делает его…» — калька makes it'],
  [W('\\bпозволяет\\B[^.]*\\bпозволяет\\B'), 'два «позволяет» в одной фразе'],
  [W('\\bквантов(ые|ыми|ых) состояни'), 'уровень выше MYP: «квантовые состояния»'],
  [W('\\bизотопн(ый|ому|ого) состав'), 'проверь уровень: «изотопный состав» (для MYP — «доли изотопов в природе»)'],
  [W('\\bданный момент\\B'), '«в данный момент» — канцелярит'],
  [W('\\bпроизводится\\B'), '«производится» — канцелярит, перепиши активным глаголом'],
  [W('\\bпутём\\B'), '«путём» — канцелярит («с помощью», деепричастие)'],
  [W('\\bнаходит(ся|ь) применение\\B'), '«находит применение» — штамп («применяют»)'],
  [W('\\bв случае если\\B'), '«в случае если» — канцелярит («если»)'],
  [W('\\bна предмет\\B'), '«на предмет» — канцелярит'],
];
const LATIN_OK = /^(IB|MYP|SI|pH|DNA|RNA|ATP|UV|IR|LED|GPS|CO|DP|Mr|Ar|eV|kWh|Hz|kPa|Pa|mol|dm|cm|mm|nm|km|kg|mg|ml|mL|ms|Bq|Gy|Sv|keV|MeV|vs|etc|sin|cos|tan|arcsin|arccos|arctan|ln|log|max|min|mean|AND|OR|NOT|IUPAC|STP|RTP|Criterion|Criteria|A|B|C|D)$/;
export function checkText(lang, text, { type } = {}) {
  const issues = [];
  if (text == null) return issues;
  if (lang === 'ru') {
    if (META_RU.test(text)) issues.push(['error', 'служебная пометка для ученика (удалить)']);
    for (const [re, why] of CALQUES) if (re.test(text)) issues.push(['warn', why]);
    const stripped = text.replace(/\([^)]*\)/g, ' ').replace(/«[^»]*»/g, ' ').replace(/\b[\p{L}\d]*\d[\p{L}\d]*\b/gu, ' ');
    const latin = (stripped.match(/\b[A-Za-z]{3,}\b/g) ?? []).filter(w => !LATIN_OK.test(w));
    if (latin.length >= 3 || /[A-Za-z]{3,}(\s+[A-Za-z]{2,}){3,}/.test(stripped)) issues.push(['warn', `английские слова в русском тексте: ${[...new Set(latin)].slice(0, 6).join(', ')} (термин дай в скобках после русского)`]);
    if (/(^|[^\d.])\d+\.\d+(?!\.)(?!\s*[A-Za-zА-Яа-я]{0,3}\s*\d)/.test(text.replace(/\b\d{1,2}\.\d{1,2}\.\d{2,4}\b/g, ''))) issues.push(['warn', 'десятичная точка — в русском тексте десятичная запятая']);
    if (/"[^"]+"|“[^”]+”/.test(text)) issues.push(['warn', 'кавычки — в русском тексте «ёлочки»']);
    if (/\s-\s/.test(text)) issues.push(['warn', 'дефис с пробелами — нужно тире « — »']);
  } else {
    if (META_EN.test(text)) issues.push(['error', 'meta note shown to the student (delete)']);
    if (CYR.test(text) && type !== 'term') issues.push(['error', 'Cyrillic in English text']);
    if (/\b(color|behavior|center|analyze|fiber|liter|meter)s?\b/i.test(text)) issues.push(['warn', 'use British/IB spelling (colour, behaviour, centre, analyse, fibre, litre, metre)']);
  }
  return issues;
}

export function readEdits(dir) {
  const edits = [];
  if (!fs.existsSync(dir)) return edits;
  for (const name of fs.readdirSync(dir).filter(n => n.endsWith('.edits.jsonl')).sort()) {
    fs.readFileSync(path.join(dir, name), 'utf8').split('\n').forEach((line, i) => {
      if (!line.trim()) return;
      try { edits.push({ ...JSON.parse(line), _file: name, _line: i + 1 }); }
      catch (e) { throw new Error(`${name}:${i + 1}: invalid JSON — ${e.message}`); }
    });
  }
  return edits;
}
export const workDir = batchId => path.join(ROOT, 'content-work', batchId);
