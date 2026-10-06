import { defineTerm } from './definitions';
import type { Lesson } from './types';

export const extendedLessons: Lesson[] = [
  {
    id: 'perpendicular-lines', title: 'Perpendicular lines', tier: 'extended', drFrost: '445',
    intro: 'This topic is explicitly marked Extended in the Term 1 table. Study it after the Standard priorities if it belongs to your assigned course.',
    goals: ['Find a perpendicular gradient and a line through a given point.', 'Handle horizontal and vertical lines separately.'],
    terms: [
      defineTerm('Perpendicular lines'),
      defineTerm('Negative reciprocal'),
      defineTerm('Parallel lines'),
    ],
    sections: [
      { title: 'Use the condition correctly', text: 'Two perpendicular lines with finite non-zero gradients satisfy m₁m₂ = −1. Thus take the negative reciprocal of the known gradient. A horizontal line is perpendicular to a vertical line; neither can be handled by dividing by a zero gradient.', formula: 'm₂ = −1/m₁ for finite non-zero m₁.' },
      { title: 'Include the point', text: 'A gradient alone identifies a family of parallel lines. Use the required point in y − y₁ = m(x − x₁), then simplify if needed. Check both the point and the product of gradients.' },
    ],
    example: { prompt: 'Find the line through (2, 3) perpendicular to y = 2x − 4.', steps: ['The original gradient is 2, so the perpendicular gradient is −1/2.', 'y − 3 = −(1/2)(x − 2), giving y = −x/2 + 4.', 'At x = 2, y = 3, and 2 × (−1/2) = −1.'] },
    pitfalls: ['The negative reciprocal changes both sign and magnitude.', 'Do not assign a finite gradient to a vertical line.'],
    questions: [
      { prompt: 'Find the gradient perpendicular to −3/4.', hint: 'Use −1 divided by the original gradient.', steps: ['−1/(−3/4) = 4/3.', '(−3/4)(4/3) = −1, confirming the condition.'] },
      { prompt: 'Find the line through (2, 5) perpendicular to x = 7.', hint: 'x = 7 is vertical.', steps: ['The required line is horizontal.', 'Through (2, 5), its equation is y = 5.'] },
    ],
  },
  {
    id: 'linear-programming', title: 'Linear programming', tier: 'extended', drFrost: '343 · 456',
    intro: 'This Extended topic turns a constrained decision into a system of inequalities and an objective to maximise or minimise. Start by defining the variables and units.',
    goals: ['Graph linear constraints and identify a feasible region.', 'Evaluate an objective at relevant vertices and consider integer restrictions.'],
    terms: [
      defineTerm('Linear programming'),
      defineTerm('Constraint'),
      defineTerm('Feasible region'),
      defineTerm('Objective function'),
      defineTerm('Optimal solution'),
    ],
    sections: [
      { title: 'Graph the feasible choices', text: 'Replace an inequality by its boundary equation to draw the line. Use a solid line for ≤ or ≥ and a dashed line for < or >. Test a point off the boundary to select the correct half-plane. Intersect all allowed regions and include non-negativity constraints when required by the context.' },
      { title: 'Check the corners and assumptions', text: 'For a non-empty bounded closed polygonal feasible region, a linear objective reaches a maximum and minimum at vertices (possibly also along an edge). Calculate vertices exactly and evaluate the objective at each. An unbounded region may have no finite optimum; strict inequalities may give an unattained bound. If quantities must be integers, check feasible integer points rather than rounding a continuous answer blindly.' },
    ],
    example: { prompt: 'Maximise P = 3x + 2y subject to x ≥ 0, y ≥ 0, x ≤ 4 and x + y ≤ 6.', steps: ['The feasible vertices are (0, 0), (4, 0), (4, 2) and (0, 6).', 'P at these vertices is 0, 12, 16 and 12 respectively.', 'The maximum is 16 at (4, 2).', 'Check: 4 ≤ 4, 4 + 2 ≤ 6 and both coordinates are non-negative.'] },
    pitfalls: ['The feasible region must satisfy every constraint.', 'An objective value without the decision variables is incomplete.', 'Do not round to an infeasible integer solution.'],
    questions: [
      { prompt: 'Is (3, 4) feasible for x ≥ 0, y ≥ 0 and 2x + y ≤ 9?', hint: 'Substitute into every condition.', steps: ['Both coordinates are non-negative.', 'But 2(3) + 4 = 10 > 9, so the point is not feasible.'] },
      { prompt: 'Maximise x + 2y for x ≥ 0, y ≥ 0 and x + y ≤ 5.', hint: 'Evaluate the three vertices.', steps: ['Vertices are (0, 0), (5, 0) and (0, 5).', 'Objective values are 0, 5 and 10. The maximum is 10 at (0, 5).'] },
    ],
  },
  {
    id: 'nonlinear-inequalities', title: 'Quadratic & reciprocal inequalities', tier: 'extended', drFrost: '458',
    intro: 'This Extended topic asks where an expression is positive or negative. Critical values divide the number line into intervals on which its sign can be tested.',
    goals: ['Use roots and sign intervals for quadratic inequalities.', 'Track denominator exclusions in reciprocal inequalities.'],
    terms: [
      defineTerm('Critical value'),
      defineTerm('Sign chart'),
      defineTerm('Boundary inclusion'),
    ],
    sections: [
      { title: 'Quadratic signs', text: 'Move everything to one side and factor where possible. Mark roots, test each interval and include roots only for a non-strict comparison. Do not assume the sign changes at every root: an even-multiplicity factor such as (x − 2)² does not change sign there.' },
      { title: 'Reciprocal signs', text: 'Bring a rational inequality to a single fraction and mark both numerator zeros and denominator zeros. Test intervals. Never multiply by an expression of unknown sign without splitting into cases; its sign may reverse the inequality. A denominator zero is never a valid endpoint.', formula: '1/(x − 1) > 0 holds when x − 1 > 0, so x > 1.' },
    ],
    example: { prompt: 'Solve (x − 1)/(x + 2) ≥ 0.', steps: ['Critical values: x = 1 makes the numerator zero; x = −2 is excluded.', 'For x < −2, both numerator and denominator are negative, so the ratio is positive.', 'For −2 < x < 1, the ratio is negative. For x > 1, it is positive.', 'Include x = 1 because equality is allowed; exclude x = −2.', 'Solution: x < −2 or x ≥ 1.'] },
    pitfalls: ['Do not multiply by an unknown-sign denominator as if it were positive.', 'A denominator zero remains excluded even with ≤ or ≥.', 'Double roots need a sign check; they need not reverse the sign.'],
    questions: [
      { prompt: 'Solve x² − 5x + 6 ≤ 0.', hint: 'Factor and test between the two roots.', steps: ['(x − 2)(x − 3) ≤ 0 has critical values 2 and 3.', 'The product is negative between the roots and zero at them, so 2 ≤ x ≤ 3.'] },
      { prompt: 'Solve 1/(x − 1) < 2.', hint: 'Move 2 left and combine: (3 − 2x)/(x − 1) < 0.', steps: ['Critical values are 1 (excluded) and 3/2 (zero).', 'The fraction is negative for x < 1, positive for 1 < x < 3/2, and negative for x > 3/2.', 'Solution: x < 1 or x > 3/2. Both boundary values are excluded.'] },
    ],
  },
];
