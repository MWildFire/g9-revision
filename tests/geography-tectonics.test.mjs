import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import {
  parseStudyState,
  STUDY_KEY,
} from "../src/modules/geography-tectonics/model.ts";
import { STUDY_KEY as PHYSICS_STUDY_KEY } from "../src/modules/physics-september/model.ts";

// Load the same content graph used by the UI without requiring a browser or
// changing its extensionless TypeScript imports.
const directory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/modules/geography-tectonics",
);
const cache = new Map();
function content(name) {
  if (cache.has(name)) return cache.get(name);
  const compiled = ts.transpileModule(
    readFileSync(path.join(directory, name + ".ts"), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    },
  ).outputText;
  const module = { exports: {} };
  new Function("require", "module", "exports", compiled)(
    (dependency) => content(dependency.replace(/^\.\//, "")),
    module,
    module.exports,
  );
  cache.set(name, module.exports);
  return module.exports;
}

const { lessons } = content("lessons");
const { checklist, glossary, sources } = content("reference");
const questions = lessons.flatMap((lesson) => lesson.questions);
const byId = new Map(lessons.map((lesson) => [lesson.id, lesson]));
const words = (text) => text.trim().split(/\s+/).length;
const teachingText = (id, language = "en") => {
  const lesson = byId.get(id);
  assert.ok(lesson, `Missing required lesson: ${id}`);
  return [
    lesson.intro[language],
    ...lesson.sections.map((section) => section.text[language]),
    ...lesson.keyFacts.map((fact) => fact[language]),
  ].join("\n");
};

function bilingual(value, location) {
  for (const language of ["en", "ru"]) {
    assert.equal(typeof value[language], "string", `${location}.${language}`);
    assert.ok(value[language].trim(), `Empty translation: ${location}.${language}`);
    for (const token of value[language].match(/\p{L}+/gu) ?? []) {
      assert.ok(
        !(/\p{Script=Latin}/u.test(token) && /\p{Script=Cyrillic}/u.test(token)),
        `Mixed Latin/Cyrillic word at ${location}.${language}: ${token}`,
      );
    }
  }
  assert.match(value.en, /\p{Script=Latin}/u, `Missing English: ${location}`);
  assert.match(value.ru, /\p{Script=Cyrillic}/u, `Missing Russian: ${location}`);
}

function checkTranslations(value, location = "content") {
  if (!value || typeof value !== "object") return;
  if (Object.hasOwn(value, "en") || Object.hasOwn(value, "ru")) {
    bilingual(value, location);
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    checkTranslations(child, `${location}.${key}`);
  }
}

test("all ten supplied checklist points map to thirteen distinct lessons", () => {
  assert.equal(lessons.length, 13);
  assert.equal(byId.size, lessons.length);
  assert.equal(new Set(checklist.map((item) => item.id)).size, 10);
  assert.deepEqual(
    [...new Set(lessons.flatMap((lesson) => lesson.checklist))].sort((a, b) => a - b),
    Array.from({ length: 10 }, (_, index) => index + 1),
  );
  for (const lesson of lessons) {
    assert.ok(lesson.checklist.length > 0, lesson.id);
    assert.match(lesson.id, /^[a-z][a-z0-9-]*$/);
    for (const point of lesson.checklist) {
      assert.ok(checklist.some((item) => item.id === point), `${lesson.id}: unknown checklist point`);
    }
  }
  for (const id of ["constructive", "subduction", "collision", "conservative"]) {
    assert.ok(byId.get(id)?.checklist.includes(1), `Boundary names: ${id}`);
    assert.ok(byId.get(id)?.checklist.includes(2), `Boundary processes: ${id}`);
  }
});

test("lessons, glossary, checklist and source purposes have complete unmixed translations", () => {
  checkTranslations({ lessons, glossary, checklist, sources });
  assert.ok(glossary.length >= 25, "The bilingual terminology reference is incomplete");
});

test("each lesson contains developed explanations and a usable worked reasoning sequence", () => {
  for (const lesson of lessons) {
    assert.ok(words(lesson.intro.en) >= 25, `${lesson.id}: missing introduction`);
    assert.ok(lesson.sections.length >= 5, `${lesson.id}: insufficient explanations`);
    assert.equal(
      new Set(lesson.sections.map((section) => section.title.en)).size,
      lesson.sections.length,
      `${lesson.id}: duplicated section headings`,
    );
    for (const section of lesson.sections) {
      assert.ok(words(section.text.en) >= 55, `${lesson.id}: section reduced to a summary`);
      assert.ok(words(section.text.ru) >= 40, `${lesson.id}: Russian explanation is incomplete`);
    }
    assert.ok(lesson.keyFacts.length >= 3, `${lesson.id}: missing revision facts`);
    assert.ok(lesson.pitfalls.length >= 2, `${lesson.id}: missing misconceptions`);
    assert.ok(words(lesson.example.question.en) >= 10, `${lesson.id}: missing worked task`);
    assert.ok(lesson.example.steps.length >= 3, `${lesson.id}: incomplete worked sequence`);
    for (const step of lesson.example.steps) {
      assert.ok(words(step.en) >= 7, `${lesson.id}: unexplained worked step`);
    }
  }
});

test("the practice bank has 39 unique answer keys, correct topic links and substantive guidance", () => {
  assert.equal(questions.length, 39);
  assert.equal(new Set(questions.map((question) => question.id)).size, questions.length);
  for (const lesson of lessons) {
    assert.equal(lesson.questions.length, 3, `${lesson.id}: practice coverage`);
    for (const question of lesson.questions) {
      assert.equal(question.topic, lesson.id, `${question.id}: wrong lesson association`);
      assert.ok(words(question.prompt.en) >= 8, `${question.id}: incomplete prompt`);
      assert.ok(words(question.hint.en) >= 3, `${question.id}: missing useful hint`);
      assert.ok(question.marking.length >= 3 && question.marking.length <= 5, question.id);
      assert.equal(
        new Set(question.marking.map((point) => point.en)).size,
        question.marking.length,
        `${question.id}: duplicated marking points`,
      );
    }
  }
});

test("every lesson citation resolves to a unique usable source entry", () => {
  const sourceIds = new Set(sources.map((source) => source.id));
  assert.equal(sourceIds.size, sources.length, "Source IDs must not silently overwrite each other");
  for (const source of sources) {
    assert.ok(source.title.trim());
    const url = new URL(source.url);
    assert.equal(url.protocol, "https:", source.id);
    assert.ok(url.hostname.includes("."), source.id);
  }
  for (const lesson of lessons) {
    assert.ok(lesson.sourceIds.length > 0, `${lesson.id}: no evidence trail`);
    assert.equal(new Set(lesson.sourceIds).size, lesson.sourceIds.length, lesson.id);
    for (const id of lesson.sourceIds) {
      assert.ok(sourceIds.has(id), `${lesson.id}: unresolved source ${id}`);
    }
  }
});

test("physical explanations preserve the distinctions most likely to become misconceptions", () => {
  const earth = teachingText("earth-structure");
  assert.match(earth, /lithosphere/i);
  assert.match(earth, /asthenosphere/i);
  assert.match(earth, /(?:most|predominantly|mostly)[^.]*solid/i, "Do not turn the mantle into a magma ocean");
  assert.match(earth, /slab pull/i);
  assert.match(earth, /ridge push/i);
  assert.match(earth, /convection/i);
  const subduction = teachingText("subduction");
  assert.match(subduction, /water/);
  assert.match(subduction, /mantle wedge/);
  assert.match(subduction, /lower[^.]*temperatur/i, "Explain flux melting, not just the presence of volcanoes");
  const earthquakes = teachingText("earthquakes");
  assert.match(earthquakes, /elastic rebound/i);
  assert.match(earthquakes, /hypocentre/);
  assert.match(earthquakes, /epicentre/);
  assert.match(earthquakes, /P waves/);
  assert.match(earthquakes, /S waves/);
  assert.match(earthquakes, /surface waves/i);
  assert.match(earthquakes, /32[^.]*energy/i, "A magnitude step is not a doubling of energy");
  assert.match(earthquakes, /intensity[^.]*location/i, "Intensity must remain location-specific");
  const volcanoes = teachingText("volcano-types");
  for (const concept of [/shield/i, /composite/i, /fissure/i, /caldera/i, /viscosity/i, /gas/i]) {
    assert.match(volcanoes, concept);
  }
  assert.match(volcanoes, /caldera[^.]*collapse/i, "Explain the collapse mechanism behind a caldera");
  const structure = teachingText("volcano-structure");
  assert.match(structure, /dyke[^.]*cuts across/i);
  assert.match(structure, /sill[^.]*parallel/i);
  assert.match(structure, /magma[^.]*below ground/i);
  assert.match(structure, /crater[^.]*caldera|caldera[^.]*crater/i);
});

test("case studies retain the selected events, dates and moment magnitudes in both languages", () => {
  // These are historical reference anchors, not snapshots of explanatory prose.
  const chile = teachingText("chile");
  assert.match(chile, /27 February 2010/);
  assert.match(chile, /Mw\s*8\.8/);
  assert.match(chile, /Nazca/);
  assert.match(chile, /South American/);
  assert.match(teachingText("chile", "ru"), /27 февраля 2010/);
  assert.match(teachingText("chile", "ru"), /Mw\s*8[,.]8/);
  const nepal = teachingText("nepal");
  assert.match(nepal, /25 April 2015/);
  assert.match(nepal, /Mw\s*7\.8/);
  assert.match(nepal, /12 May/);
  assert.match(nepal, /Mw\s*7\.3/);
  assert.match(nepal, /Indian|India/);
  assert.match(nepal, /Eurasia/);
  assert.match(teachingText("nepal", "ru"), /25 апреля 2015/);
  assert.match(teachingText("nepal", "ru"), /Mw\s*7[,.]8/);
  const iceland = teachingText("eyjafjallajokull");
  assert.match(iceland, /20 March 2010/);
  assert.match(iceland, /14 April/);
  assert.match(iceland, /meltwater/);
  assert.match(teachingText("eyjafjallajokull", "ru"), /20 марта 2010/);
  assert.match(teachingText("eyjafjallajokull", "ru"), /14 апреля/);
});

test("management distinguishes early warning from prediction and structural survival from recovery", () => {
  const management = teachingText("three-ps");
  assert.match(management, /cannot reliably predict/i);
  assert.match(management, /after it starts|already (?:in progress|started)/i);
  for (const concept of [/exposure/i, /vulnerability/i, /drills/i, /evacuation/i]) {
    assert.match(management, concept);
  }
  const buildings = teachingText("building-design");
  for (const concept of [/ductility/i, /isolation/i, /damp/i, /retrofit/i, /inspection/i]) {
    assert.match(buildings, concept);
  }
  assert.match(buildings, /not melting/i, "Liquefaction must not be confused with molten rock");
  assert.match(buildings, /functional recovery/i);
  assert.match(buildings, /(?:standing|surviv)[^.]*unusable|unusable[^.]*standing/i, "Structural survival must be distinguished from usability");
});

test("study state safely recovers from corrupt JSON and rejects invalid field types", () => {
  for (const raw of [null, "", "broken", "null", "[]", "42", "true", '"text"']) {
    assert.deepEqual(parseStudyState(raw), { completed: [], answers: {} }, String(raw));
  }
  for (const completed of [null, false, 7, "earth", {}]) {
    for (const answers of [null, false, 7, "answer", []]) {
      assert.deepEqual(parseStudyState(JSON.stringify({ completed, answers })), {
        completed: [],
        answers: {},
      });
    }
  }
  assert.deepEqual(
    parseStudyState(JSON.stringify({
      completed: ["earth-structure", 3, null, "earth-structure", "chile", false, {}],
      answers: { q1: "Причина → следствие\nEvidence", q2: "", invalid: 7, bad: null, nested: {} },
    })),
    { completed: ["earth-structure", "chile"], answers: { q1: "Причина → следствие\nEvidence", q2: "" } },
  );
});

test("geography progress is isolated from physics and preserves bilingual answers on round trip", () => {
  assert.notEqual(STUDY_KEY, PHYSICS_STUDY_KEY);
  const physicsBefore = JSON.stringify({ completed: ["half-life"], answers: { "half-life-1": "120" } });
  const storage = new Map([[PHYSICS_STUDY_KEY, physicsBefore]]);
  const geography = { completed: ["chile"], answers: { "chile-causes": "Subduction / Субдукция\nПричина → результат" } };
  storage.set(STUDY_KEY, JSON.stringify(geography));
  assert.deepEqual(parseStudyState(storage.get(STUDY_KEY)), geography);
  assert.equal(storage.get(PHYSICS_STUDY_KEY), physicsBefore);
  storage.delete(STUDY_KEY);
  assert.equal(storage.get(PHYSICS_STUDY_KEY), physicsBefore);
  assert.deepEqual(parseStudyState(storage.get(STUDY_KEY) ?? null), { completed: [], answers: {} });
});
