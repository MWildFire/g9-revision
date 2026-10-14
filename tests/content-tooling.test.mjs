import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { applyEdits, checkText, extractUnit, loadBatches } from '../scripts/content/lib.mjs';
import { applyProgress, collectProgress, decodeProgress, encodeProgress } from '../src/lib/transfer.ts';

test('every i18n key and every file with Russian text belongs to a revision batch', () => {
  const out = execFileSync(process.execPath, ['scripts/content/extract.mjs', '--coverage']).toString();
  assert.match(out, /coverage OK/);
});

test('every batch item can be written back to its source (no orphan ids)', () => {
  for (const batch of loadBatches().batches) {
    const items = batch.units.flatMap(unit => extractUnit(unit));
    assert.ok(items.length > 0, `${batch.id} is empty`);
    assert.equal(new Set(items.map(i => i.id)).size, items.length, `${batch.id}: duplicate item ids`);
    const edits = items.filter(i => !i.id.startsWith('i18n:')).map(i => ({ id: i.id, en: i.en == null ? undefined : `${i.en} §`, ru: i.ru == null ? undefined : `${i.ru} §`, replaceAll: true }));
    const { errors } = applyEdits(batch, edits, { dryRun: true });
    assert.deepEqual(errors.filter(e => !/conflicting replacements/.test(e)), [], batch.id);
  }
});

test('text checks catch meta notes, anglicisms, decimal points and English sentences in Russian', () => {
  const rules = text => checkText('ru', text).map(([, why]) => why).join(' | ');
  assert.match(rules('Авторская русская адаптация проверенного английского материала; это не цитата из русского учебника.'), /служебная/);
  assert.match(rules('Периодические тренды в группе'), /тренд/);
  assert.match(rules('Плотность воды 0.997 г/см³.'), /десятичная/);
  assert.match(rules('Ответ: the rate of reaction increases with temperature.'), /английские слова/);
  assert.equal(rules('Изотопы (isotopes) — атомы одного элемента с разным числом нейтронов.'), '');
  assert.equal(checkText('en', 'Isotopes are atoms of the same element with different numbers of neutrons.').length, 0);
});

test('progress moves between addresses without touching other sites’ keys', () => {
  const source = new Map([['g9-revision-state', '{"a":1}'], ['g9-november-plan-2026-v1', '{"done":["x"]}'], ['arabic:quiz:best', '7'], ['other-site', 'secret']]);
  const storage = map => ({ get length() { return map.size; }, key: i => [...map.keys()][i] ?? null, getItem: k => map.get(k) ?? null, setItem: (k, v) => map.set(k, v) });
  const data = collectProgress(storage(source));
  assert.deepEqual(Object.keys(data).sort(), ['arabic:quiz:best', 'g9-november-plan-2026-v1', 'g9-revision-state']);
  const pack = decodeProgress(encodeProgress({ ...data, 'g9-notes': 'Пример: «ответ» 🙂' }));
  assert.ok(pack);
  const target = new Map();
  assert.equal(applyProgress(storage(target), pack), 4);
  assert.equal(target.get('g9-notes'), 'Пример: «ответ» 🙂');
  assert.equal(target.has('other-site'), false);
  assert.equal(decodeProgress('not-a-pack'), null);
});

// write-back safety (applyEdits): fixtures live in a temp folder, never in the repository
function withFixture(files, run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'g9-content-tooling-'));
  try {
    const paths = {};
    for (const [name, content] of Object.entries(files)) {
      paths[name] = path.join(dir, name);
      fs.writeFileSync(paths[name], content);
    }
    return run(paths);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

test('i18n ids cannot point outside the i18n folders (path traversal refused)', () => {
  const { errors } = applyEdits({ units: [] }, [{ id: 'i18n:../../../package:x', create: true, en: 'a', ru: 'b' }], { dryRun: true });
  assert.ok(errors.some(e => e.startsWith('i18n:../../../package:x')), JSON.stringify(errors));
});

test('a new i18n key can only be created in a namespace of the batch', () => {
  const batch = { id: 'X-test', units: [{ kind: 'i18n', ns: 'common', key: 'nav' }] };
  const { errors } = applyEdits(batch, [{ id: 'i18n:physics:newKey', create: true, en: 'a', ru: 'б' }], { dryRun: true });
  assert.match(errors.join('\n'), /namespace "physics" is not part of batch X-test/);
});

test('json edits are refused for files that are not part of the batch', () => withFixture({ 'pair.json': JSON.stringify({ title: { en: 'Hello world', ru: 'Привет, мир' } }) }, paths => {
  const unit = { kind: 'json', file: paths['pair.json'] };
  const [item] = extractUnit(unit);
  const edit = { id: item.id, en: 'Hi there', ru: 'Привет' };
  assert.match(applyEdits({ units: [] }, [{ ...edit, create: true }], { dryRun: true }).errors.join('\n'), /not part of batch/);
  assert.deepEqual(applyEdits({ units: [unit] }, [edit], { dryRun: true }).errors, []);
}));

test('replacement text that contains $& or $$ is written verbatim', () => withFixture({ 'Fixture.tsx': "export const Sum = () => <p>Сумма</p>;\nexport const Price = t('Price', 'Цена');\n" }, paths => {
  const file = paths['Fixture.tsx'];
  const unit = { kind: 'tsx', file };
  const items = extractUnit(unit);
  const sum = items.find(i => i.ru === 'Сумма');
  const price = items.find(i => i.ru === 'Цена');
  assert.ok(sum && price, JSON.stringify(items));
  const { errors } = applyEdits({ units: [unit] }, [{ id: sum.id, ru: 'Сумма $& и $$' }, { id: price.id, en: 'Price $&', ru: 'Цена $$' }]);
  assert.deepEqual(errors, []);
  const text = fs.readFileSync(file, 'utf8');
  assert.ok(text.includes('<p>Сумма $& и $$</p>'), text);
  assert.ok(text.includes("t('Price $&', 'Цена $$')"), text);
}));

test('a repeated long text is not rewritten everywhere without "replaceAll" (copies may be on other pages)', () => withFixture({ 'Fixture.tsx': "export const A = t('The same long sentence appears on two pages of the site.', 'Одно и то же длинное предложение стоит на двух страницах сайта.');\nexport const B = t('The same long sentence appears on two pages of the site.', 'Одно и то же длинное предложение стоит на двух страницах сайта.');\n" }, paths => {
  const unit = { kind: 'tsx', file: paths['Fixture.tsx'] };
  const [first] = extractUnit(unit);
  const edit = { id: first.id, ru: 'Новое предложение только для первой страницы сайта.' };
  assert.match(applyEdits({ units: [unit] }, [edit], { dryRun: true }).errors.join('\n'), /occurs 2×.*replaceAll/);
  assert.deepEqual(applyEdits({ units: [unit] }, [{ ...edit, replaceAll: true }], { dryRun: true }).errors, []);
}));

test('an edit cannot add text in a language the item does not have (null old text is an error)', () => withFixture({ 'Fixture.tsx': 'export const Sum = () => <p>Сумма</p>;\n' }, paths => {
  const unit = { kind: 'tsx', file: paths['Fixture.tsx'] };
  const [item] = extractUnit(unit);
  assert.equal(item.en, null);
  const { errors } = applyEdits({ units: [unit] }, [{ id: item.id, en: 'Sum' }], { dryRun: true });
  assert.ok(errors.some(e => e.includes('нет текста на этом языке')), JSON.stringify(errors));
}));

test('keys that would reach Object.prototype are refused (__proto__)', () => {
  try {
    for (const id of ['i18n:common:__proto__', 'i18n:common:__proto__.polluted']) {
      const { errors } = applyEdits({ units: [] }, [{ id, create: true, en: 'x', ru: 'y' }], { dryRun: true });
      assert.ok(errors.length > 0, id);
    }
  } finally {
    delete Object.prototype.polluted;
  }
});

test('privacy check refuses added lines that match the private patterns (patterns live outside the repository)', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'g9-privacy-'));
  try {
    const git = (...a) => execFileSync('git', a, { cwd: dir, encoding: 'utf8', stdio: 'pipe' });
    git('init', '-q'); git('config', 'user.email', 't@example.com'); git('config', 'user.name', 't');
    fs.writeFileSync(path.join(dir, 'a.txt'), 'hello\n'); git('add', 'a.txt'); git('commit', '-qm', 'base'); git('tag', 'base');
    fs.writeFileSync(path.join(dir, 'a.txt'), 'hello\nSecretName was here\n'); git('commit', '-qam', 'add');
    const patterns = path.join(dir, 'patterns.txt');
    const run = () => { try { execFileSync(process.execPath, [path.resolve('scripts/content/privacy-check.mjs'), 'base'], { cwd: dir, env: { ...process.env, G9_PRIVACY_PATTERNS: patterns }, stdio: 'pipe' }); return 0; } catch (e) { return e.status; } };
    fs.writeFileSync(patterns, '# names\n\\bSecretName\\b\n');
    assert.equal(run(), 7);
    fs.writeFileSync(patterns, '\\bOtherName\\b\n');
    assert.equal(run(), 0);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

// a throwaway repository with one base commit (tag "base"); each privacy test writes its own patterns file
const privacyRepo = () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'g9-privacy-'));
  const git = (...a) => execFileSync('git', a, { cwd: dir, encoding: 'utf8', stdio: 'pipe' });
  git('init', '-q'); git('config', 'user.email', 't@example.com'); git('config', 'user.name', 't');
  fs.writeFileSync(path.join(dir, 'a.txt'), 'hello\n'); git('add', 'a.txt'); git('commit', '-qm', 'base'); git('tag', 'base');
  const patterns = path.join(dir, 'patterns.txt');
  const run = (...args) => { try { execFileSync(process.execPath, [path.resolve('scripts/content/privacy-check.mjs'), ...args], { cwd: dir, env: { ...process.env, G9_PRIVACY_PATTERNS: patterns }, stdio: 'pipe' }); return 0; } catch (e) { return e.status; } };
  return { dir, git, patterns, run, cleanup: () => fs.rmSync(dir, { recursive: true, force: true }) };
};

test('privacy check reads an added line that starts with "++" as text, not as a file header', () => {
  const r = privacyRepo();
  try {
    fs.writeFileSync(r.patterns, '\\bZorblax\\b\n');
    fs.writeFileSync(path.join(r.dir, 'a.txt'), 'hello\n++ Zorblax was here\n'); r.git('commit', '-qam', 'add');
    assert.equal(r.run('base'), 7);
  } finally { r.cleanup(); }
});

test('privacy check refuses an added file whose name matches a pattern', () => {
  const r = privacyRepo();
  try {
    fs.writeFileSync(r.patterns, '\\bZorblax\\b\n');
    fs.writeFileSync(path.join(r.dir, 'Zorblax.txt'), 'plain text\n'); r.git('add', 'Zorblax.txt'); r.git('commit', '-qm', 'add');
    assert.equal(r.run('base'), 7);
  } finally { r.cleanup(); }
});

test('privacy check refuses a renamed file whose new name matches a pattern', () => {
  const r = privacyRepo();
  try {
    fs.writeFileSync(r.patterns, '\\bZorblax\\b\n');
    r.git('mv', 'a.txt', 'Zorblax.txt'); r.git('commit', '-qm', 'rename');
    assert.equal(r.run('base'), 7);
  } finally { r.cleanup(); }
});

test('privacy check --staged refuses a staged file whose name matches a pattern', () => {
  const r = privacyRepo();
  try {
    fs.writeFileSync(r.patterns, '\\bZorblax\\b\n');
    fs.writeFileSync(path.join(r.dir, 'Zorblax.txt'), 'plain text\n'); r.git('add', 'Zorblax.txt');
    assert.equal(r.run('--staged'), 7);
  } finally { r.cleanup(); }
});

test('privacy check refuses to pass without a list of patterns to check against', () => {
  const r = privacyRepo();
  try {
    fs.writeFileSync(path.join(r.dir, 'a.txt'), 'hello\nclean text\n'); r.git('commit', '-qam', 'clean');
    assert.equal(r.run('base'), 7, 'no patterns file');
    fs.writeFileSync(r.patterns, '');
    assert.equal(r.run('base'), 7, 'empty patterns file');
    fs.writeFileSync(r.patterns, '# only a comment\n\n');
    assert.equal(r.run('base'), 7, 'patterns file without patterns');
    fs.writeFileSync(r.patterns, '\\bZorblax\\b\n');
    assert.equal(r.run('base'), 0, 'clean text with a pattern list');
  } finally { r.cleanup(); }
});
