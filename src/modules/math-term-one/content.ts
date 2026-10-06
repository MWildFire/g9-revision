import { coreLessons } from './core';
import { recapLessons } from './recap';
import { extendedLessons } from './extended';
export const lessons = [...coreLessons, ...recapLessons, ...extendedLessons];
export const questions = lessons.flatMap(lesson => lesson.questions.map((question, index) => ({ ...question, id: `${lesson.id}-${index + 1}`, lessonId: lesson.id, tier: lesson.tier })));
export const glossary = lessons.flatMap(lesson => lesson.terms.map(term => ({ ...term, lessonId: lesson.id, tier: lesson.tier }))).sort((a, b) => a.term.localeCompare(b.term));
export const tierLabels = { start: 'Start here', core: 'Assessment 1 · Standard', recap: 'Previous studies · recap', extended: 'Extended only · optional' };
export const commandTerms = [
  ['Calculate', 'Work out a numerical answer and show relevant working.', 'Calculate a distance: formula, substitution, evaluation and units.'],
  ['Describe', 'Give relevant features or a pattern in words.', 'Each term is three more than the previous term.'],
  ['Determine', 'Find the required result from the information provided.', 'Find a line equation using its gradient and a point.'],
  ['Explain', 'Make an idea clear using connected reasons.', 'A vertical line has undefined gradient because its horizontal change is zero.'],
  ['Justify', 'Support a conclusion with mathematical reasons.', 'Support an inequality interval with a sign chart and endpoint checks.'],
  ['Prove', 'Give a logical argument for every case under the assumptions.', 'Represent two odd integers as 2m + 1 and 2n + 1.'],
  ['Show that', 'Reach the supplied result through valid, visible steps.', 'Derive x = 4 from the original equation.'],
  ['Sketch', 'Draw the overall shape and label important features.', 'Label a parabola’s roots, vertex and axis.'],
  ['State', 'Give a concise answer.', 'The gradient is −2.'],
  ['Solve', 'Find every permitted value satisfying the condition.', 'For x² = 9, give x = 3 and x = −3.'],
  ['Verify', 'Check a claim against the given conditions.', 'Substitute into both simultaneous equations.'],
  ['Write down', 'Provide the requested result directly.', 'For y = 3x + 2, the y-intercept is (0, 2).'],
];
