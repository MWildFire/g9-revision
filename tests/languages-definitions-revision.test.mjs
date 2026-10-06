import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function moduleData(file, dependencies = {}, random = Math.random) {
  const source = fs.readFileSync(new URL('../' + file, import.meta.url), 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const math = Object.create(Math); math.random = random;
  const context = { exports: {}, Math: math, require: (id) => {
    assert.ok(id in dependencies, 'Unexpected dependency: ' + id);
    return dependencies[id];
  } };
  vm.runInNewContext(js, context);
  return context.exports;
}
const locale = (language, subject) => JSON.parse(fs.readFileSync(new URL(`../src/i18n/${language}/${subject}.json`, import.meta.url), 'utf8'));

test('Arabic lesson meanings preserve person and reading aids distinguish ayn from hamza', () => {
  const d = moduleData('src/modules/arabic/data/content.ts');
  const verbs = d.getBlock('verbs').words;
  assert.equal(verbs.length, 13);
  assert.ok(verbs.every(w => /^I /.test(w.en)), 'Each first-person Arabic verb needs an explicit first-person English gloss');
  assert.ok(verbs.every(w => /^я /.test(w.ru)));
  assert.equal(verbs.find(w => w.id === 'v03').translitEn, 'albas');
  assert.equal(verbs.find(w => w.id === 'v09').translitEn, 'arjiʿ');
  assert.equal(verbs.find(w => w.id === 'v12').translitEn, 'aqraʾ');
  assert.equal(d.ALL_WORDS.length, 45);
  assert.equal(new Set(d.ALL_WORDS.map(w => w.id)).size, 45);
  assert.ok(!d.MATCH_PAIRS.some(p => /intake|take shower/.test(p.en)));
  assert.match(d.TRANSLATE[0].en, /heavy coat/);
});

test('Arabic quiz generates four distinct choices and uses current canonical meanings for all question modes', () => {
  const data = moduleData('src/modules/arabic/data/content.ts');
  for (const lang of ['en', 'ru']) for (const random of [0.1, 0.45, 0.9]) {
    const quiz = moduleData('src/modules/arabic/data/quiz.ts', { './content': data }, () => random);
    for (const word of data.ALL_WORDS) {
      const q = quiz.buildQuestion(word, null, lang);
      assert.equal(q.options.length, 4);
      assert.equal(new Set(q.options).size, 4);
      assert.equal(q.options.filter(o => o === q.correct).length, 1);
      if (q.type === 'ar2mean') assert.equal(q.correct, word[lang]);
      if (q.type === 'mean2ar') assert.equal(q.promptValue, word[lang]);
    }
  }
});

test('French conjugation data keeps six forms and bilingual notes with auxiliary limits', () => {
  const d = moduleData('src/modules/french/data/frenchData.ts');
  const rows = [...d.PRESENT_TENSE, ...d.PASSE_COMPOSE, ...d.FUTURE_TENSE];
  assert.equal(rows.length, 12);
  assert.ok(rows.every(row => row.forms.length === 6));
  assert.ok(rows.filter(row => row.notes).every(row => row.notesRu));
  assert.match(d.PASSE_COMPOSE[1].notes, /marcher and courir use avoir/);
  assert.match(d.GRAMMAR_RULES.find(r => r.id === 'articles').body, /de l’eau/);
  assert.match(d.GRAMMAR_RULES.find(r => r.id === 'negation').body, /auxiliary/);
});

test('English explanations reject ranking and fixed-effect misconceptions in both languages', () => {
  const en = locale('en', 'english'); const ru = locale('ru', 'english');
  assert.match(en.devices.simile.rule, /not inherently weaker/);
  assert.match(ru.devices.simile.rule, /не обязательно слабее/);
  assert.match(en.devices.personification.tip, /swallowing/);
  assert.match(en.devices.symbolism.tip, /motif/);
  assert.match(en.grammar.commonErrors.detailed.lessFewer.tip, /fewer times/);
  assert.match(en.grammar.tenses.detailed.presentPerfect.use, /not a direct equivalent of Russian perfective/);
  assert.match(en.reading.PEEL.body, /not an exam rule/);
  const text = JSON.stringify(en);
  assert.doesNotMatch(text, /examiners want FRESH|guarantees you cover|Multi-sensory imagery is most powerful/);
});

test('Bilingual review maps carry exact source paths and purposeful labelled diagrams', () => {
  let diagrams = 0;
  for (const subject of ['english', 'french', 'arabic']) {
    const data = moduleData(`src/definitions/${subject}.ts`)[subject.toUpperCase() + '_REVIEWS'];
    assert.ok(Object.keys(data).length >= 18);
    for (const [key, r] of Object.entries(data)) {
      assert.ok(r.englishTerm && r.russianTerm && r.contrast.en && r.contrast.ru, key);
      assert.ok(r.sources.length, key);
      for (const s of r.sources) {
        assert.ok(s.section && ['en', 'ru', 'fr', 'ar'].includes(s.language));
        assert.equal(new URL(s.url).protocol, 'https:');
      }
      if (r.visual) {
        diagrams++;
        assert.ok(r.visual.title.en && r.visual.title.ru && r.visual.caption.en && r.visual.caption.ru);
        assert.ok(r.visual.items.length >= 2);
        assert.ok(r.visual.items.every(i => i.label.en && i.label.ru));
      }
    }
  }
  assert.ok(diagrams >= 12);
});
