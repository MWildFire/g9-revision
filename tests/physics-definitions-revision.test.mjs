import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import { motionGraphData } from '../src/definitions/physicsModels.ts';
const read = path => fs.readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const en = JSON.parse(read('src/i18n/en/physics.json'));
const ru = JSON.parse(read('src/i18n/ru/physics.json'));
const topics = ['forceMotion', 'forcesEnergy', 'electricity', 'wavesOptics'];
const review = r => {
  assert.ok(r.englishTerm && r.russianTerm);
  if (r.contrast) assert.ok(r.contrast.en && /[А-Яа-яЁё]/.test(r.contrast.ru));
  if (r.model) assert.ok(r.model.en && /[А-Яа-яЁё]/.test(r.model.ru));
  assert.ok(r.sources.length > 0);
  for (const s of r.sources) {
    assert.ok(s.section && s.title);
    assert.match(s.url, /^https:\/\//);
    assert.ok(['en', 'ru'].includes(s.language));
  }
};
test('all physics terms and concept cards have bilingual distinctions, limitations and exact source sections', () => {
  let terms = 0;
  for (const topic of topics) for (const kind of ['terms', 'concepts']) {
    assert.deepEqual(Object.keys(en[topic][kind]), Object.keys(ru[topic][kind]));
    for (const [id, item] of Object.entries(en[topic][kind])) {
      const other = ru[topic][kind][id];
      review(item.review); review(other.review);
      assert.ok(other.definition || other.rule);
      assert.notEqual(item.definition || item.rule, other.definition || other.rule);
      if (kind === 'terms') terms++;
    }
  }
  assert.equal(terms, 55);
});
test('motion definitions preserve the vector and signed-area distinctions', () => {
  assert.match(en.forceMotion.terms.displacement.definition, /vector.*initial.*final/i);
  assert.match(en.forceMotion.terms.velocity.definition, /displacement.*time/i);
  assert.match(en.forceMotion.concepts.motionGraphs.rule, /signed area gives displacement/i);
  assert.match(ru.forceMotion.terms.weight.review.model.ru, /опору.*подвес/);
  assert.match(en.forceMotion.terms.acceleration.review.model.en, /opposite to (?:the )?velocity/);
});
test('braking model stops with zero acceleration and a continuous final distance', () => {
  const points = motionGraphData('decel', 10, 5, 4, 8);
  assert.equal(points.find(x => x.t === 1).a, -5);
  assert.deepEqual(points.find(x => x.t === 2), { t: 2, v: 0, a: 0, d: 10 });
  assert.deepEqual(points.at(-1), { t: 4, v: 0, a: 0, d: 10 });
  const stationary = motionGraphData('decel', 0, 2);
  assert.ok(stationary.every(p => p.v === 0 && p.a === 0 && p.d === 0));
});
test('thermal and circuit definitions do not collapse amounts, rates or state variables', () => {
  assert.match(en.forcesEnergy.terms.heat.definition, /temperature difference/);
  assert.match(en.forcesEnergy.terms.temperature.review.contrast.en, /not total internal energy/);
  // README rule 1: the point (power is the rate of energy transfer) stays; the definition now says it with other words
  assert.match(en.forcesEnergy.terms.power.definition, /rate at which energy is transferred/);
  assert.match(en.electricity.terms.kwh.definition, /unit of energy/i);
  assert.match(en.electricity.terms.current.definition, /cross-section/);
  assert.match(en.forcesEnergy.terms.hookesLaw.review.contrast.en, /proportionality.*distinct.*elastic/i);
});
test('all September glossary reviews preserve statistical activity and nuclear conservation limits', () => {
  const src = read('src/definitions/physicsNuclear.ts');
  const compiled = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', compiled)(m, m.exports);
  const { physicsNuclearReviews: g, nuclearLessonReviews: l } = m.exports;
  assert.equal(Object.keys(g).length, 20);
  assert.equal(Object.keys(l).length, 12);
  Object.values(g).forEach(review);
  // λN left the activity scope note: λ (decay constant) is not in the batch sources and is not confirmed for MYP; see docs/content-revision/done/P-p-radiation.md.
  // README rule 1: the one-radionuclide scope point is kept with new wording (cross-check R01: repeated "mixed sources" sentence removed)
  assert.match(g.activity.model.en, /For one radionuclide/);
  // README rule 1: the background-correction point moved to the lesson section ("First subtract the constant background"); the glossary model now states scope only
  assert.match(read('src/modules/physics-september/lessons.ts'), /First subtract the constant background/);
  assert.match(read('src/modules/physics-september/lessons.ts'), /total mass of the products is slightly lower/);
  // The model now states the scope only; energy conservation is stated in the lesson section and the energy-release scope is checked here.
  assert.match(l['nuclear-equations'].model.en, /how much energy is released/);
  assert.match(g.nucleon.model.en, /free neutron/i);
});
test('original geometric diagrams have translated equivalent descriptions', () => {
  const src = read('src/definitions/physicsDiagrams.tsx');
  assert.match(src, /role="img" aria-labelledby=/);
  assert.match(src, /<title /);
  assert.match(src, /<desc /);
  assert.match(src, /figcaption/);
  for (const kind of ['motion', 'energy', 'electricity', 'waves']) assert.match(src, new RegExp(`kind === '${kind}'`));
});
test('IB compare instructions distinguish similarities and align contrast questions with their badges', () => {
  assert.match(en.commandTerms.items.compare.meaning, /similarities/);
  assert.doesNotMatch(en.commandTerms.items.compare.meaning, /differences/);
  assert.match(ru.commandTerms.items.compare.meaning, /сходства/);
  assert.doesNotMatch(ru.commandTerms.items.compare.meaning, /различия/);
  assert.match(en.commandTerms.items.compare.how, /compare and contrast asks for both/i);
  for (const item of Object.values(en.commandTerms.items)) review(item.review);
  const compiled = ts.transpileModule(read('src/modules/physics/data/practiceQuestions.ts'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', compiled)(m, m.exports);
  const questions = Object.values(m.exports).filter(Array.isArray).flat();
  const both = questions.filter(q => q.commandTerm === 'compareContrast');
  assert.equal(both.length, 4);
  for (const q of both) {
    assert.match(q.en.question, /^Compare and contrast /);
    assert.match(q.ru.question, /сходства и различия/);
  }
});
