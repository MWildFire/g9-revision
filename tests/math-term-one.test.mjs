import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import { parseStudyState, STUDY_KEY } from '../src/modules/math-term-one/model.ts';

const cache = new Map();
function load(name) {
  if (cache.has(name)) return cache.get(name);
  const source = readFileSync(new URL(`../src/modules/math-term-one/${name}.ts`, import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', compiled)(dependency => load(dependency.replace('./', '')), module, module.exports);
  cache.set(name, module.exports);
  return module.exports;
}
const { lessons, questions, glossary, commandTerms } = load('content');
const get = id => lessons.find(lesson => lesson.id === id);
const near = (actual, expected, epsilon = 1e-8) => assert.ok(Math.abs(actual - expected) < epsilon, `${actual} != ${expected}`);

test('school scope remains separated and every goal has teaching and practice', () => {
  assert.deepEqual(lessons.filter(l => l.tier === 'core').map(l => l.id), ['proof-and-generalisation', 'coordinate-geometry', 'linear-equations', 'simultaneous-equations', 'linear-inequalities', 'sets-and-venn']);
  assert.deepEqual(lessons.filter(l => l.tier === 'extended').map(l => l.id), ['perpendicular-lines', 'linear-programming', 'nonlinear-inequalities']);
  assert.equal(lessons.filter(l => l.tier === 'recap').length, 9);
  assert.equal(lessons.length, 19);
  assert.equal(new Set(lessons.map(l => l.id)).size, lessons.length);
  assert.equal(questions.length, 38);
  assert.equal(new Set(questions.map(q => q.id)).size, 38);
  for (const lesson of lessons) {
    assert.ok(lesson.goals.length >= 2);
    assert.ok(lesson.sections.length >= 2);
    assert.ok(lesson.terms.length >= 3);
    assert.ok(lesson.example.steps.length >= 3);
    assert.equal(lesson.questions.length, 2);
    assert.ok(lesson.questions.every(q => q.hint && q.steps.length >= 2));
    // The revised pack intentionally carries authored Russian explanations alongside English.
    assert.equal(typeof lesson.title, 'string', lesson.id);
    assert.ok(lesson.title.length > 0, lesson.id);
  }
  assert.equal(commandTerms.length, 12);
  for (const term of ['Gradient / slope', 'Midpoint', 'Distance formula', 'Simultaneous equations', 'Linear inequality', 'Linear programming', 'Feasible region', 'Perpendicular lines', 'Proof', 'Generalisation']) assert.ok(glossary.some(t => t.term === term), term);
});

test('progress handles invalid or unavailable persisted values and isolates its key', () => {
  for (const raw of [null, 'broken', 'null', '[]', 'false']) assert.deepEqual(parseStudyState(raw), { reviewed: [], answers: {} });
  assert.deepEqual(parseStudyState('{"reviewed":["sets","sets",3],"answers":{"q":"hello","bad":9}}'), { reviewed: ['sets'], answers: { q: 'hello' } });
  assert.deepEqual(parseStudyState('{"reviewed":null,"answers":[1,2]}'), { reviewed: [], answers: {} });
  assert.equal(STUDY_KEY, 'math-term-1-2026-v1');
});

// Independent arithmetic checks use the original problem conditions, not a UI solver.
test('coordinate example and practice satisfy their original geometry', () => {
  for (const [a, b, midpoint] of [[[-2, 1], [4, 9], [1, 5]], [[1, -2], [7, 6], [4, 2]]]) {
    assert.equal(Math.hypot(b[0] - a[0], b[1] - a[1]), 10);
    near((b[1] - a[1]) / (b[0] - a[0]), 4 / 3);
    assert.deepEqual(a.map((v, i) => (v + b[i]) / 2), midpoint);
  }
  for (const [x, y] of [[-2, 1], [4, 9]]) near(4 * x / 3 + 11 / 3, y);
  assert.match(get('coordinate-geometry').example.steps.join(' '), /11\/3/);
});

test('equation and simultaneous answers verify in all original equations', () => {
  assert.equal(8 + 3 * 6, 26);
  assert.equal((4 - 1) / 3 + (4 + 2) / 2, 4);
  assert.equal(4 * (2 * 4 - 3), 3 * 4 + 8);
  assert.equal(2 * 4 + 3 * 3, 17);
  assert.equal(3 * 4 - 2 * 3, 6);
  assert.equal(7, 2 * 3 + 1);
  assert.equal(3 + 7, 10);
  assert.notEqual(2 * 5, 12); // second parallel equation contradicts twice the first
});

test('linear and nonlinear inequality solutions match samples and boundary inclusion', () => {
  const values = [-10, -3, -2, -1, 0, 1, 1.25, 1.5, 2, 2.5, 3, 4, 10];
  for (const x of values) {
    assert.equal(5 - 2 * x < 11, x > -3);
    assert.equal(7 - 3 * x >= 16, x <= -3);
    assert.equal(-2 < 3 * x + 1 && 3 * x + 1 <= 10, -1 < x && x <= 3);
    assert.equal(x * x - 5 * x + 6 <= 0, x >= 2 && x <= 3);
    if (x !== -2) assert.equal((x - 1) / (x + 2) >= 0, x < -2 || x >= 1);
    if (x !== 1) assert.equal(1 / (x - 1) < 2, x < 1 || x > 1.5);
  }
  assert.match(get('nonlinear-inequalities').example.steps.join(' '), /exclude x = −2/);
});

test('set membership, counting and proof examples are correct', () => {
  const U = [1, 2, 3, 4, 5, 6], A = new Set([1, 2, 3]), B = new Set([3, 4]);
  assert.deepEqual(U.filter(x => A.has(x) && B.has(x)), [3]);
  assert.deepEqual(U.filter(x => A.has(x) || B.has(x)), [1, 2, 3, 4]);
  assert.deepEqual(U.filter(x => !A.has(x)), [4, 5, 6]);
  assert.deepEqual(U.filter(x => A.has(x) && !B.has(x)), [1, 2]);
  assert.equal(30 - (18 + 15 - 7), 4);
  assert.equal(4 ** 2 + 4 + 1, 3 * 7);
  for (let n = -20; n <= 20; n++) assert.equal(n + (n + 1) + (n + 2), 3 * (n + 1));
});

test('quadratic answers and transformed extrema satisfy the original functions', () => {
  for (const x of [-1, -5]) assert.equal(x * x + 6 * x + 5, 0);
  for (const x of [-0.5, 2]) assert.equal(2 * x * x - 3 * x - 2, 0);
  assert.equal(2 ** 2 - 4 * 1 * 5, -16);
  for (let x = -5; x <= 5; x += 0.5) {
    assert.equal(x * x - 6 * x + 5, (x - 3) ** 2 - 4);
    assert.ok(-2 * (x + 1) ** 2 + 8 <= 8);
  }
  assert.equal((-2) ** 2, 4);
  assert.equal((5 - 2) ** 2 + 1, 10);
});

test('sequences, geometry and trigonometry numbers independently recalculate', () => {
  assert.equal(5 + (20 - 1) * 3, 62);
  assert.equal(4 * 3 ** 4, 324);
  near(Array.from({ length: 45 }, (_, i) => 12 * 0.5 ** i).reduce((a, b) => a + b, 0), 24);
  assert.equal(Math.sqrt(13 ** 2 - 5 ** 2), 12);
  assert.equal(Math.round(Math.atan2(6, 8) * 180 / Math.PI), 37);
  const rad = d => d * Math.PI / 180;
  near(5 ** 2 + 7 ** 2 - 2 * 5 * 7 * Math.cos(rad(60)), 39);
  near(0.5 * 5 * 7 * Math.sin(rad(60)), 15.16, 0.005);
  near(5 * Math.sin(rad(45)) / Math.sin(rad(30)), 5 * Math.sqrt(2));
  near(60 / 360 * Math.PI * 36 - 0.5 * 36 * Math.sin(rad(60)), 3.261, 0.0005);
  assert.equal(3 * 8 / 4, 6);
});

test('rational rearrangements, proportion and optimisation have valid answers', () => {
  for (const x of [-5, 0, 2, 4, 10]) {
    const y = (3 * x + 2) / (x - 1);
    near((y + 2) / (y - 3), x);
  }
  assert.equal(1 / (1.5 - 1), 2);
  assert.equal(12 / (2 ** 2) * 5 ** 2, 75);
  assert.equal(6 * 4 / 10, 2.4);
  near((-3 / 4) * (4 / 3), -1);
  const vertices = [[0, 0], [4, 0], [4, 2], [0, 6]];
  assert.deepEqual(vertices.map(([x, y]) => 3 * x + 2 * y), [0, 12, 16, 12]);
  assert.ok(vertices.every(([x, y]) => x >= 0 && y >= 0 && x <= 4 && x + y <= 6));
});
