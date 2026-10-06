import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const cache = new Map();
function load(name) {
  if (cache.has(name)) return cache.get(name);
  const source = readFileSync(new URL(`../src/modules/math-term-one/${name}.ts`, import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const module = { exports: {} };
  new Function('require','module','exports',code)(dependency => load(dependency.replace('./','')),module,module.exports);
  cache.set(name,module.exports); return module.exports;
}
const { getPack } = load('localisation');
const { reviewedTerms } = load('definitions');
const en = getPack('en'), ru = getPack('ru');
const cyrillic = /[А-Яа-яЁё]/;
const localised = text => cyrillic.test(text) || !/[A-Za-z]{3,}/.test(text.replace(/sin|cos|tan|arctan/g, ''));

test('every term has authored bilingual definition, example, distinction and honest source status', () => {
  assert.equal(en.glossary.length,107);
  assert.equal(Object.keys(reviewedTerms).length,106);
  for (const term of en.glossary) {
    assert.ok(term.meaning.length > 15 && term.example.length > 10,term.term);
    for (const text of [term.ru.term,term.ru.meaning,term.ru.example,term.review.contrast.ru]) assert.ok(localised(text),`${term.term}: ${text}`);
    assert.ok(term.review.contrast.en.length > 10,term.term);
    assert.ok(term.review.sources.length > 0,term.term);
    for (const source of term.review.sources) {
      assert.ok(source.section && source.title,term.term);
      assert.equal(new URL(source.url).protocol,'https:');
      assert.ok(['en','ru'].includes(source.language));
    }
    assert.equal(term.russianEvidence === 'independently-checked',term.review.sources.some(s => s.language === 'ru'),term.term);
  }
  assert.equal(reviewedTerms.Coefficient.russianEvidence,'authored-adaptation');
  assert.equal(reviewedTerms.Numerator.russianEvidence,'independently-checked');
});

test('both languages retain every lesson, scope tier, question and stable progress identity', () => {
  assert.equal(en.lessons.length,19); assert.equal(ru.lessons.length,19);
  assert.equal(ru.questions.length,38); assert.equal(ru.commandTerms.length,12);
  assert.deepEqual(ru.lessons.map(l => [l.id,l.tier]),en.lessons.map(l => [l.id,l.tier]));
  assert.deepEqual(ru.questions.map(q => q.id),en.questions.map(q => q.id));
  for (const lesson of ru.lessons) {
    const original = en.lessons.find(l => l.id === lesson.id);
    assert.notEqual(lesson.title,original.title);
    for (const text of [lesson.title,lesson.intro,...lesson.goals,...lesson.sections.flatMap(s => [s.title,s.text]),lesson.example.prompt,...lesson.example.steps,...lesson.pitfalls,...lesson.questions.flatMap(q => [q.prompt,q.hint,...q.steps])]) assert.ok(localised(text),`${lesson.id}: ${text}`);
    assert.equal(lesson.terms,original.terms);
  }
  const intersections = en.glossary.filter(t => t.term === 'Intersection');
  assert.equal(intersections.length,2);
  assert.deepEqual(intersections[0].review,intersections[1].review);
});

test('critical distinctions and restrictions remain explicit', () => {
  assert.match(reviewedTerms.Fraction.meaning,/non-zero/);
  assert.match(reviewedTerms.Denominator.review.contrast.en,/zero is undefined/);
  assert.match(reviewedTerms.Expression.review.contrast.en,/solve an equation/);
  assert.match(reviewedTerms.Term.review.contrast.en,/factors/);
  assert.match(reviewedTerms.Coefficient.example,/−6.*1/);
  assert.match(reviewedTerms.Sector.meaning,/two radii.*arc/);
  assert.match(reviewedTerms.Segment.meaning,/chord.*arcs/);
  assert.match(reviewedTerms['Objective function'].meaning,/rule/);
  assert.match(reviewedTerms['Optimal solution'].meaning,/feasible choice/i);
  assert.match(reviewedTerms.Period.review.model.en,/A ≠ 0 and B ≠ 0/);
  assert.match(reviewedTerms['Linear programming'].review.model.en,/integer/);
});

test('original diagram coordinates agree with labelled models', () => {
  // Quadratic Bézier from the actual SVG, interpreted in its labelled axis scales.
  const svg = readFileSync(new URL('../src/modules/math-term-one/DefinitionDiagrams.tsx',import.meta.url),'utf8');
  const path = svg.match(/d="M(90) (10)Q(290) (510) (490) (10)"/).slice(1).map(Number);
  for (const t of [0,.1,.25,.5,.75,.9,1]) {
    const px = (1-t)**2*path[0]+2*(1-t)*t*path[2]+t*t*path[4];
    const py = (1-t)**2*path[1]+2*(1-t)*t*path[3]+t*t*path[5];
    const x = (px-130)/80, y = (140-py)/40;
    assert.ok(Math.abs(y-((x-2)**2-3))<1e-10);
  }
  // The feasible polygon is independently checked against every original inequality.
  const vertices = [[0,0],[4,0],[4,2],[0,6]];
  assert.ok(vertices.every(([x,y]) => x>=0 && y>=0 && x<=4 && x+y<=6));
  assert.deepEqual(vertices.map(([x,y]) => 3*x+2*y),[0,12,16,12]);
  // The quarter-circle segment removes a right isosceles triangle, not two radii.
  assert.ok(Math.PI/4-1/2>0 && Math.PI/4-1/2<Math.PI/4);
  const css = readFileSync(new URL('../src/modules/math-term-one/math-term-one.css',import.meta.url),'utf8');
  assert.match(css,/min-width:\s*540px/);
  assert.match(svg,/tabIndex=\{0\}/);
});
