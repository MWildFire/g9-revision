import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
function loadTs(file) {
  const mod = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  new Function('require', 'module', 'exports', code)(require, mod, mod.exports);
  return mod.exports;
}
const { RichText } = loadTs('src/components/content/RichText.tsx');
const { languageG9Sections } = loadTs('src/modules/november/languageG9Rehearsals.ts');
const render = props => renderToStaticMarkup(React.createElement(RichText, props));
const expectedForms = [
  ['أستيقظ', 'يستيقظ', 'تستيقظ'], ['أستحم', 'يستحم', 'تستحم'],
  ['ألبس', 'يلبس', 'تلبس'], ['أذهب', 'يذهب', 'تذهب'],
  ['أركب', 'يركب', 'تركب'], ['أتعلم', 'يتعلم', 'تتعلم'], ['أمارس', 'يمارس', 'تمارس'],
];

for (const language of ['en', 'ru']) {
  test(`actual ${language} Arabic matrix preserves all seven rows and 21 explicitly Arabic RTL form cells`, () => {
    const html = render({ tables: true, text: languageG9Sections['a-language'][0].body[language] });
    assert.equal((html.match(/<table /g) ?? []).length, 1);
    assert.equal((html.match(/scope="col"/g) ?? []).length, 4);
    assert.equal((html.match(/scope="row"/g) ?? []).length, 7);
    assert.equal((html.match(/<td /g) ?? []).length, 21);
    const forms = [...html.matchAll(/<td lang="ar" dir="rtl"[^>]*><bdi dir="auto">([^<]+)<\/bdi><\/td>/g)].map(match => match[1]);
    assert.deepEqual(forms, expectedForms.flat());
    assert.ok(!html.includes('| --- |'));
    assert.ok(html.includes('tabindex="0"'));
  });
  test(`actual ${language} French matrix keeps its three destinations without Arabic cell metadata`, () => {
    const html = render({ tables: true, text: languageG9Sections['f-language'][0].body[language] });
    assert.equal((html.match(/scope="row"/g) ?? []).length, 3);
    assert.equal((html.match(/<td /g) ?? []).length, 9);
    for (const destination of ['La montagne', 'La plage', 'La ville']) assert.ok(html.includes(destination));
    assert.ok(!html.includes('lang="ar"'));
  });
}

test('ordinary rich text and non-opted table strings retain their existing paragraph structure', () => {
  assert.equal(render({ text: '**Term**\n\n- One\n- Two' }), '<div class="rich-text"><p><strong>Term</strong></p><ul><li>One</li><li>Two</li></ul></div>');
  assert.ok(!render({ text: '| A | B |\n| --- | --- |\n| 1 | 2 |' }).includes('<table'));
});
test('malformed row widths stay visible as text; cell contents remain escaped', () => {
  assert.ok(!render({ tables: true, text: '| A | B |\n| --- | --- |\n| 1 |' }).includes('<table'));
  const html = render({ tables: true, text: '| A | B |\n| --- | --- |\n| <script> | 2 |' });
  assert.ok(html.includes('&lt;script&gt;'));
  assert.ok(!html.includes('<script>'));
});
test('mixed Arabic and translated prose retains automatic isolation instead of a false single language', () => {
  const html = render({ tables: true, text: '| Meaning | Form |\n| --- | --- |\n| go | أذهب — I go |' });
  assert.ok(html.includes('<bdi dir="auto">أذهب — I go</bdi>'));
  assert.ok(!html.includes('lang="ar"'));
});
