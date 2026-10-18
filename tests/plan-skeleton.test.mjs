// The student's saved progress depends on these: plan dates, block and portion ids, minutes, topic ids and the
// localStorage keys. Content batches may reword texts but must never change them. If this test fails, revert the
// change; a real change of the plan needs the owner's decision and a new tests/fixtures/plan-skeleton.json.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = file => fs.readFileSync(file, 'utf8');
const plan = JSON.parse(read('src/data/revision-plan.json'));
const sessions = JSON.parse(read('src/data/study-sessions.json'));
const skeleton = JSON.parse(read('tests/fixtures/plan-skeleton.json'));

test('plan dates, block ids, minutes, topics and study portions are unchanged', () => {
  const now = {
    // CS-SCHED06 explicitly adds only these two bounded reserve blocks. Every
    // original identity remains locked to its original fixture and history.
    days: plan.days.map(d => ({ date: d.date, recall: d.recall, blocks: d.blocks.filter(b=>!['reserve-2026-11-03','reserve-2026-11-04'].includes(b.id)).map(b => ({ id: b.id, minutes: b.minutes, topics: b.topics, sessions: b.sessions })) })),
    topics: plan.topics.map(t => t.id),
    sessions: sessions.map(s => ({ id: s.id, topic: s.topic, minutes: s.minutes })),
  };
  assert.deepEqual(JSON.parse(JSON.stringify(now)), skeleton);
});

test('progress storage keys are unchanged', () => {
  const keys = [
    ['src/lib/storage.ts', "STORAGE_KEY = 'g9-revision-state'"],
    ['src/modules/revision-plan/model.ts', "PLAN_KEY = 'g9-november-plan-2026-v1'"],
    ['src/modules/november/NovemberModule.tsx', "ANSWER_KEY='g9-november-answers-v1'"],
    ['src/modules/geography-tectonics/model.ts', "STUDY_KEY = 'geography-tectonic-hazards-v1'"],
    ['src/modules/physics-september/model.ts', 'STUDY_KEY = "physics-september-2026-v1"'],
    ['src/modules/math-term-one/model.ts', "STUDY_KEY = 'math-term-1-2026-v1'"],
    ['src/config/examDate.ts', "EXAM_DATE_STORAGE_KEY = 'myp-mocks-2026-exam-date'"],
    ['src/modules/arabic/data/storage.ts', "PREFIX = 'arabic:'"],
  ];
  for (const [file, text] of keys) assert.ok(read(file).includes(text), `${file}: ${text}`);
});
