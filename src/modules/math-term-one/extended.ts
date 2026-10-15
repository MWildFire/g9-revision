import { defineTerm } from './definitions';
import type { Lesson } from './types';

export const extendedLessons: Lesson[] = [
  {
    id: 'perpendicular-lines', title: 'Perpendicular lines', tier: 'extended', drFrost: '445',
    intro: 'Perpendicular lines meet at an angle of 90°. Their gradients are linked by one simple rule, which you can use to test whether two lines are perpendicular.',
    goals: ['Find the gradient of a perpendicular line, and the equation of a perpendicular line through a given point.', 'Treat horizontal and vertical lines as special cases.'],
    terms: [
      defineTerm('Perpendicular lines'),
      defineTerm('Negative reciprocal'),
      defineTerm('Parallel lines'),
    ],
    sections: [
      { title: 'The condition for perpendicular lines', text: 'If two perpendicular lines both have a gradient, their gradients are negative reciprocals of each other. With gradients m₁ and m₂, this means m₁ × m₂ = −1, so m₂ = −1/m₁.\n\nWhy does this work? A perpendicular line swaps the rise and the run of the first line, and it changes the sign of one of them. For example, a line with gradient 3 rises 3 units for every 1 unit to the right. A perpendicular line falls 1 unit for every 3 units to the right, so its gradient is −1/3.', formula: 'm₂ = −1/m₁ for finite non-zero m₁.' },
      { title: 'A line through a given point', text: 'A gradient alone does not determine one line. It describes a family of lines, all parallel to each other, and the given point picks out the one you need. Insert the point (x₁, y₁) and the gradient m into y − y₁ = m(x − x₁). If the question asks for y = mx + c, rearrange the equation into that form.' },
    ],
    example: { prompt: 'Find the equation of the line through (2, 3) that is perpendicular to y = 2x − 4.', steps: ['The gradient of y = 2x − 4 is 2, so a perpendicular line has gradient −1/2.', 'Use the gradient −1/2 and the point (2, 3): y − 3 = −(1/2)(x − 2). Expanding the brackets gives y = −x/2 + 4.', 'Check: at x = 2, y = 3, so the point lies on the line. Also, 2 × (−1/2) = −1, so the lines are perpendicular.'] },
    pitfalls: ['Do not reuse the given gradient. A line with the same gradient is parallel to the original line (or is the same line), not perpendicular to it.', 'Do not give vertical lines a number as their gradient. Vertical lines have no gradient, because their run is 0 and you cannot divide by 0.'],
    questions: [
      { prompt: 'Find the gradient of a line perpendicular to a line with gradient −3/4.', hint: 'Divide −1 by the given gradient.', steps: ['−1 ÷ (−3/4) = −1 × (−4/3) = 4/3.', 'Answer: the gradient of the perpendicular line is 4/3. Check: (−3/4) × (4/3) = −1.'] },
      { prompt: 'Find the equation of the line through (2, 5) that is perpendicular to x = 7.', hint: 'The line x = 7 is vertical, so the gradient rule does not apply directly. Think about which lines are perpendicular to it.', steps: ['A line perpendicular to x = 7 is horizontal, so its gradient is 0.', 'Every point on the required line has the same y-value, 5, so its equation is y = 5.'] },
    ],
  },
  {
    id: 'linear-programming', title: 'Linear programming', tier: 'extended', drFrost: '343 · 456',
    intro: 'This is Extended content. A linear programming problem limits your choices with inequalities. It then asks for the maximum profit or the minimum cost. Start by naming each variable and its unit.',
    goals: ['Draw the linear constraints and identify the feasible region.', 'Calculate the value of the objective function at the vertices of the feasible region, and check whether the answer must be a whole number.'],
    terms: [
      defineTerm('Linear programming'),
      defineTerm('Constraint'),
      defineTerm('Feasible region'),
      defineTerm('Objective function'),
      defineTerm('Optimal solution'),
    ],
    sections: [
      { title: 'Finding the feasible region', text: 'Solve a linear programming problem in four steps. First, define the variables and write the objective function, which is the expression to maximise or minimise. Then write each constraint as an inequality. Add x ≥ 0 and y ≥ 0 when the quantities cannot be negative.\n\nDraw each boundary line from its equation. Use a solid line for ≤ or ≥ and a dashed line for < or >. Test a point off the line to see which side to shade. The feasible region is where all the shaded parts overlap.\n\nFor the problems here, assume the feasible region is a non-empty, closed, bounded polygon. Test its vertices in the objective function and choose the best value. With strict inequalities, a boundary value may be approached but never reached. In an unbounded region, an objective can grow without limit. Check that an optimum exists and is attained before using the vertex method.' },
      { title: 'Locating the optimal solution', text: 'For a non-empty, closed, bounded polygon, a linear objective reaches its maximum and minimum at vertices (and sometimes along an entire edge). The reason is that a linear function changes steadily along each edge, so its largest and smallest values on an edge occur at its ends. Find each vertex exactly by solving the two boundary equations that meet at that vertex. If two vertices give the same best value, every point on the segment joining them is also optimal.' },
    ],
    example: { prompt: 'A bakery makes x cakes and y muffins each day. Each cake gives a profit of US$3 and each muffin US$2, so the total profit is P = 3x + 2y (US$). The bakery sells at most 4 cakes and bakes at most 6 items in total: x ≤ 4 and x + y ≤ 6. Also x ≥ 0 and y ≥ 0. Find the maximum profit and the numbers of cakes and muffins that give it.', steps: ['The vertices of the feasible region are (0, 0), (4, 0), (4, 2) and (0, 6).', 'Substitute each vertex into P = 3x + 2y. At (4, 2), for example, P = 3 × 4 + 2 × 2 = US$16. The vertices (0, 0), (4, 0) and (0, 6) give US$0, US$12 and US$12.', 'The maximum profit is US$16. It occurs at (4, 2), which means 4 cakes and 2 muffins.', 'Check the constraints: 4 ≤ 4, 4 + 2 = 6 ≤ 6, and both values are non-negative.'] },
    pitfalls: ['The point where two boundary lines cross is only a possible vertex. The point (6, 0), where x + y = 6 meets y = 0, breaks x ≤ 4, so it is not feasible, even though it would give a profit of US$18.', 'Give the answer in context, with units. The numbers 16 or (4, 2) on their own do not answer the question. Write, for example: a maximum profit of US$16 per day.', 'Check whether the question asks for a maximum or a minimum. For N = x + y with x ≥ 0, y ≥ 0 and 4x + 2y ≤ 40, minimising gives 0 at (0, 0), but maximising gives the different point (0, 20).', 'If the quantities must be whole numbers, check the whole-number points inside the feasible region. Do not just round the vertex, because the rounded point may break a constraint.'],
    questions: [
      { prompt: 'Is (3, 4) feasible for x ≥ 0, y ≥ 0 and 2x + y ≤ 9?', hint: 'Substitute the coordinates into every condition.', steps: ['Both coordinates are non-negative.', 'But 2 × 3 + 4 = 10 > 9, so the point is not feasible.'] },
      { prompt: 'Maximise x + 2y for x ≥ 0, y ≥ 0 and x + y ≤ 5.', hint: 'Find the vertices of the feasible region, then test each one in x + 2y.', steps: ['The vertices are (0, 0), (5, 0) and (0, 5).', 'At these three vertices, x + 2y is 0, 5 and 10. The maximum is 10, at (0, 5).'] },
    ],
  },
  {
    id: 'nonlinear-inequalities', title: 'Quadratic and rational inequalities', tier: 'extended', drFrost: '458',
    intro: 'This is Extended content. It asks for the values of x for which a quadratic expression or a fraction is positive, negative or zero.',
    goals: ['Solve quadratic inequalities by finding the roots and testing the intervals between them.', 'Solve rational inequalities and exclude any value that makes a denominator zero.'],
    terms: [
      defineTerm('Critical value'),
      defineTerm('Sign chart'),
      defineTerm('Boundary inclusion'),
    ],
    sections: [
      { title: 'Signs of a quadratic expression', text: 'Move everything to one side and leave 0 on the other side, and factorise if you can. The roots split the number line into intervals. The sign of the expression does not change inside an interval, so one test point in each of the intervals shows the sign for the whole interval. Keep the intervals where the expression has the sign the inequality asks for. You can also read the same intervals from a sketch of the parabola: the parts of the curve above or below the x-axis give the sign.' },
      { title: 'Signs of a fraction', text: 'Bring the inequality to a single fraction with 0 on one side. Mark the zeros of the numerator and of the denominator on the number line. Then test the intervals in the same way as for a quadratic expression. The sign of the fraction depends on the signs of the numerator and the denominator at the same time.', formula: '1/(x − 1) > 0 holds when x − 1 > 0, so x > 1.' },
    ],
    example: { prompt: 'Solve (x − 1)/(x + 2) ≥ 0.', steps: ['The numerator is zero at x = 1. The denominator is zero at x = −2.', 'For x < −2, the numerator and the denominator are both negative, so the fraction is positive.', 'For −2 < x < 1, the numerator is negative and the denominator is positive, so the fraction is negative. For x > 1, both are positive, so the fraction is positive.', 'x = 1 is in the answer, because the fraction equals 0 there and 0 ≥ 0 is true. x = −2 is not, because the fraction is undefined there.', 'Answer: x < −2 or x ≥ 1.'] },
    pitfalls: ['Do not multiply both sides of an inequality by an expression whose sign you do not know. If that expression is negative, the inequality sign must reverse.', 'Do not include a value that makes the denominator zero, even when the inequality is ≤ or ≥.', 'Do not assume that the sign changes at every root. For (x − 2)², the expression is 0 at x = 2 but positive on both sides of that value.'],
    questions: [
      { prompt: 'Solve x² − 5x + 6 ≤ 0.', hint: 'Factorise the expression, then test a point between the two roots.', steps: ['x² − 5x + 6 = (x − 2)(x − 3), so the roots are 2 and 3.', 'The expression (x − 2)(x − 3) is negative between the roots and zero at the roots, so 2 ≤ x ≤ 3.'] },
      { prompt: 'Solve 1/(x − 1) < 2.', hint: 'Subtract 2 from both sides and combine into one fraction: (3 − 2x)/(x − 1) < 0.', steps: ['x = 1 makes the denominator zero, so it is excluded. x = 3/2 makes the numerator zero.', 'The fraction is negative for x < 1, positive for 1 < x < 3/2, and negative for x > 3/2.', 'Answer: x < 1 or x > 3/2. The value x = 1 is not included, because the fraction is undefined there. The value x = 3/2 is not included, because the fraction equals 2 there and 2 < 2 is false.'] },
    ],
  },
];
