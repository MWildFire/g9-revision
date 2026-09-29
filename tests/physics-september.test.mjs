import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import {
  remaining,
  netRate,
  daughter,
  decayStep,
  parseStudyState,
} from "../src/modules/physics-september/model.ts";
const directory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/modules/physics-september",
);
const cache = new Map();
function content(name) {
  if (cache.has(name)) return cache.get(name);
  const source = readFileSync(path.join(directory, name + ".ts"), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const module = { exports: {} };
  new Function("require", "module", "exports", compiled)(
    (name) => content(name.replace("./", "")),
    module,
    module.exports,
  );
  cache.set(name, module.exports);
  return module.exports;
}
const { lessons } = content("lessons");
const { questions } = content("questions");
const { papers } = content("papers");
function bilingual(value) {
  assert.ok(value.en.trim().length > 0);
  assert.ok(
    /[А-Яа-яЁё]/.test(value.ru) ||
      (!/[A-Za-z]{3,}/.test(value.ru) && /[=×]/.test(value.ru)),
    `Missing Russian text: ${value.ru}`,
  );
}
test("all 12 supplied topic bullets have substantial bilingual lessons, examples and four questions", () => {
  assert.equal(lessons.length, 12);
  assert.equal(new Set(lessons.map((l) => l.id)).size, 12);
  assert.equal(questions.length, 48);
  for (const l of lessons) {
    bilingual(l.title);
    bilingual(l.intro);
    assert.ok(l.sections.length >= 4);
    assert.equal(l.examples.length, 2);
    for (const section of l.sections) {
      bilingual(section.title);
      bilingual(section.text);
      assert.ok(section.text.en.length > 200);
    }
    for (const e of l.examples) {
      bilingual(e.question);
      assert.ok(e.steps.length >= 2);
      e.steps.forEach(bilingual);
    }
    l.pitfalls.forEach(bilingual);
    assert.equal(questions.filter((q) => q.topic === l.id).length, 4);
  }
  assert.equal(new Set(lessons.map((l) => l.visual)).size, 8);
});
test("question bank and two 40-mark papers have unique IDs and all three A strands", () => {
  const all = [...questions, ...papers.flatMap((p) => p.questions)];
  assert.equal(new Set(all.map((q) => q.id)).size, all.length);
  assert.equal(all.length, 64);
  for (const q of all) {
    assert.ok(lessons.some((l) => l.id === q.topic));
    bilingual(q.prompt);
    bilingual(q.hint);
    q.marking.forEach(bilingual);
    assert.ok(q.marking.length >= 2);
  }
  assert.equal(papers.length, 2);
  for (const p of papers) {
    assert.equal(p.questions.length, 8);
    assert.equal(
      p.questions.reduce((n, q) => n + q.marking.length, 0),
      40,
    );
    assert.deepEqual(
      new Set(p.questions.map((q) => q.strand)),
      new Set(["A(i)", "A(ii)", "A(iii)"]),
    );
  }
});
test("decay model handles background correction, non-integer times and invalid values", () => {
  assert.equal(remaining(960, 18, 6), 120);
  assert.equal(remaining(320, 16, 4) + 10, 30);
  assert.equal(remaining(960, 24, 6) + 24, 84);
  assert.ok(Math.abs(remaining(100, 3, 6) - 70.71067811865476) < 1e-10);
  assert.equal(netRate(960, 120, 180, 300), 7.4);
  assert.equal(netRate(1560, 120, 240, 240), 12);
  assert.throws(() => remaining(10, 1, 0));
  assert.throws(() => remaining(10, -1, 2));
  assert.throws(() => netRate(10, 0, 3, 10));
});
test("nuclear decay conserves upper and lower totals; beta-minus sign and sequence correct", () => {
  for (const [A, Z] of [
    [238, 92],
    [226, 88],
    [210, 84],
  ]) {
    const d = daughter(A, Z, "alpha");
    assert.equal(d.A + 4, A);
    assert.equal(d.Z + 2, Z);
  }
  for (const [A, Z] of [
    [14, 6],
    [32, 15],
    [234, 90],
  ]) {
    const d = daughter(A, Z, "beta");
    assert.equal(d.A, A);
    assert.equal(d.Z - 1, Z);
  }
  assert.deepEqual(daughter(99, 43, "gamma"), { A: 99, Z: 43 });
  const first = daughter(234, 90, "beta");
  assert.deepEqual(daughter(first.A, first.Z, "alpha"), { A: 230, Z: 89 });
  assert.equal(1 + 235, 141 + 92 + 3);
  assert.equal(92, 56 + 36);
  assert.equal(2 + 3, 4 + 1);
  assert.equal(1 + 1, 2 + 0);
});
test("random-decay simulation removes only survivors and honours probability boundaries", () => {
  const original = [0, 1, 2, 3];
  assert.deepEqual(
    decayStep(original, 0, () => 0),
    original,
  );
  assert.deepEqual(
    decayStep(original, 1, () => 0.999),
    [],
  );
  let i = 0;
  const values = [0.2, 0.8, 0.3, 0.9];
  assert.deepEqual(
    decayStep(original, 0.5, () => values[i++]),
    [1, 3],
  );
  assert.deepEqual(original, [0, 1, 2, 3]);
});
test("new study storage preserves answers and handles malformed input without touching legacy progress", () => {
  for (const raw of [
    null,
    "broken",
    "null",
    "[]",
    '{"answers":null,"completed":false}',
  ])
    assert.deepEqual(parseStudyState(raw), { completed: [], answers: {} });
  assert.deepEqual(
    parseStudyState(
      '{"completed":["half-life",7],"answers":{"q":"my reasoning","bad":7}}',
    ),
    { completed: ["half-life"], answers: { q: "my reasoning" } },
  );
});
