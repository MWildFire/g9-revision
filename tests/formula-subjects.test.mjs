import test from 'node:test';
import assert from 'node:assert/strict';
import { loadTs } from '../scripts/content/lib.mjs';

const { formulaTeaching, findFormulaTeaching } = loadTs('src/content/formulaTeaching.ts');
const { formulaSubjects, formulaAllowedOn, subjectFromPath } = loadTs('src/content/formulaSubjects.ts');
const SUBJECTS = ['physics', 'chemistry', 'biology', 'math', 'geography', 'skills'];

test('every formula card has a subject list, and the list names only real cards and subjects', () => {
  const ids = formulaTeaching.map(card => card.id);
  assert.deepEqual(ids.filter(id => !formulaSubjects[id]), [], 'cards without subjects would appear on every page');
  assert.deepEqual(Object.keys(formulaSubjects).filter(id => !ids.includes(id)), [], 'subjects for cards that do not exist');
  for (const [id, subjects] of Object.entries(formulaSubjects)) {
    assert.ok(subjects.length > 0, id);
    for (const subject of subjects) assert.ok(SUBJECTS.includes(subject), `${id}: ${subject}`);
  }
});

test('automatically found cards stay on pages of their own subject', () => {
  const ids = (text, subject) => findFormulaTeaching(text, subject).map(card => card.id);
  const quadratic = 'x = (−b ± √(b² − 4ac)) / 2a';
  assert.ok(ids(quadratic).includes('quadratic-formula'));
  assert.ok(ids(quadratic, 'math').includes('quadratic-formula'));
  assert.ok(!ids(quadratic, 'biology').includes('quadratic-formula'));
  assert.ok(ids('n = m / M', 'chemistry').includes('moles'));
  assert.ok(!ids('n = m / M', 'physics').includes('moles'));
  assert.ok(ids('magnification = image size / actual size', 'biology').includes('magnification'));
  assert.ok(ids('y = mx + c', 'biology').includes('line'), 'a line of best fit is used in science graphs');
  assert.ok(ids('Anaerobic respiration releases energy from glucose without oxygen.', 'biology').includes('respiration-equation'));
  assert.ok(ids('Анаэробное дыхание высвобождает энергию из глюкозы без кислорода.', 'biology').includes('respiration-equation'));
  assert.equal(formulaAllowedOn('quadratic-formula', null), true, 'no page subject = no restriction');
});

test('the page subject comes from the route; shared routes leave it to the page', () => {
  assert.equal(subjectFromPath('/physics-september-2026/lesson/isotopes'), 'physics');
  assert.equal(subjectFromPath('/physics/waves'), 'physics');
  assert.equal(subjectFromPath('/math-term-1-2026/lesson/a'), 'math');
  assert.equal(subjectFromPath('/geography-tectonic-hazards'), 'geography');
  assert.equal(subjectFromPath('/biology'), 'biology');
  assert.equal(subjectFromPath('/mathematics'), null);
  assert.equal(subjectFromPath('/november/p-atom'), null);
  assert.equal(subjectFromPath('/mocks/osmosis-drugs'), null);
  assert.equal(subjectFromPath('/'), null);
});
