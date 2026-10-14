import { defineTerm } from './definitions';
import type { Lesson } from './types';

export const recapLessons: Lesson[] = [
  {
    id: 'functions', title: 'Functions, domain and range', tier: 'recap',
    intro: 'The same relationship can be written as a formula, a mapping or a graph. Each form makes different features of the function easier to see.',
    goals: ['Identify a function from a mapping diagram or with the vertical line test.', 'Find the domain and range from a rule and any stated restrictions.'],
    terms: [
      defineTerm('Function'),
      defineTerm('Domain'),
      defineTerm('Range'),
      defineTerm('Mapping'),
      defineTerm('Vertical line test'),
      defineTerm('One-to-one and many-to-one'),
    ],
    sections: [
      { title: 'Function notation', text: 'Read f(x) = y as \'f of x is y\'. The notation f(3) means the output when the input is 3, not f multiplied by 3. Substitute the number for every x, and put negative numbers in brackets: for f(x) = 4 − x, f(−3) = 4 − (−3) = 7.' },
      { title: 'Restrictions on the domain', text: 'A real square root needs a radicand that is zero or positive. A denominator cannot be zero. Find these restrictions first, before you work out any output values.', formula: 'f(x) = √(x − 2): domain x ≥ 2, range y ≥ 0.' },
    ],
    example: { prompt: 'For f(x) = (x − 2)² + 1, where x is any real number, find the domain, the range and f(5).', steps: ['Every real number is allowed for x, so the domain is ℝ.', 'A square is never negative, so (x − 2)² ≥ 0 and f(x) ≥ 1. The smallest output is 1, at x = 2, so the range is y ≥ 1.', 'f(5) = (5 − 2)² + 1 = 10.'] },
    pitfalls: ['Do not swap the domain and the range: the domain holds the inputs x, and the range holds the outputs f(x).', 'Two different inputs can share one output and still give a function. Sam and Alex are both 15 years old, but each student has exactly one age, so \'student to age\' is a function.', 'Do not assume the range is all real numbers. For y = x², the outputs are never negative, so the range is y ≥ 0.'],
    questions: [
      { prompt: 'Find the domain of g(x) = 1/(x − 4) for real numbers x.', hint: 'Which value of x would make the denominator equal to zero?', steps: ['x − 4 cannot equal 0.', 'The domain is all real numbers except 4: ℝ \\ {4}.'] },
      { prompt: 'For h(x) = x² with domain −2 ≤ x ≤ 1, find the range.', hint: 'Check the vertex and both ends of the domain.', steps: ['The minimum is 0 at x = 0.', 'The largest output is 4 at x = −2, the left end of the domain, so the range is 0 ≤ y ≤ 4.'] },
    ],
  },
  {
    id: 'quadratic-graphs', title: 'Quadratic graphs and transformations', tier: 'recap',
    intro: 'A quadratic function can always be written in standard form and vertex form. It can be written in factorised form only if it has real roots. Each form shows different features of the graph clearly, so choosing the right form saves time.',
    goals: ['Write a quadratic function in standard, factorised and vertex form.', 'Find the x- and y-intercepts, the axis of symmetry, the vertex and the range of a quadratic function.'],
    terms: [
      defineTerm('Quadratic function'),
      defineTerm('Parabola'),
      defineTerm('Zero (root)'),
      defineTerm('Vertex (turning point)'),
      defineTerm('Axis of symmetry'),
      defineTerm('Translation / reflection / stretch'),
    ],
    sections: [
      { title: 'What each form shows', text: 'The standard form y = ax² + bx + c gives the y-intercept at once: when x = 0, y = c, so the point is (0, c). The factorised form y = a(x − p)(x − q) shows the x-intercepts p and q directly, but not every quadratic can be factorised. The vertex form y = a(x − h)² + k gives the vertex (h, k) and the axis of symmetry x = h. The sign of a sets the direction: if a > 0 the parabola is concave up, and if a < 0 it is concave down.', formula: 'Expanded: ax² + bx + c.  Factored: a(x − r₁)(x − r₂).  Vertex: a(x − h)² + k.' },
      { title: 'Shifts and stretches of the graph', text: 'The number h translates the graph h units to the right when h is positive, and k translates it k units up when k is positive. The number a stretches the graph vertically by the factor |a|, so the graph is narrower than y = x² when |a| > 1 and wider when |a| < 1. If a is negative, the graph is also reflected in the x-axis. The domain is all real numbers, and the range is y ≥ k when a > 0 or y ≤ k when a < 0.' },
    ],
    example: { prompt: 'Write y = x² − 6x + 5 in factorised form and in vertex form. Then find its key features.', steps: ['Factorise: y = (x − 1)(x − 5). The x-intercepts are x = 1 and x = 5.', 'Complete the square: x² − 6x = (x − 3)² − 9, so y = (x − 3)² − 4.', 'Vertex (3, −4). Axis of symmetry x = 3. y-intercept (0, 5).', 'It is concave up (a = 1 > 0), so its range is y ≥ −4.'] },
    pitfalls: ['The vertex of y = (x + 3)² − 1 is at x = −3, not at x = 3. The number in the bracket has the opposite sign to the x-coordinate of the vertex.', 'Do not mix up the two methods. To find the y-intercept, put x = 0. To find the x-intercepts, put y = 0 and solve. For y = x² + 2x − 3, x = 0 gives y = −3, but y = 0 gives x = −3 or x = 1.', 'If a < 0, the parabola is concave down, and its vertex is a maximum turning point, not a minimum. For y = −x² + 4, the largest value of y is 4, at x = 0.'],
    questions: [
      { prompt: 'Find the vertex, the axis of symmetry and the range of y = −2(x + 1)² + 8.', hint: 'Compare with y = a(x − h)² + k. What are a, h and k here?', steps: ['Vertex (−1, 8). Axis of symmetry x = −1.', 'Since a = −2 < 0, the graph is concave down, so the range is y ≤ 8.'] },
      { prompt: 'Expand y = (x − 2)(x + 4) and find its x-intercepts.', hint: 'Set each factor equal to zero.', steps: ['y = x² + 2x − 8.', 'x − 2 = 0 gives x = 2, and x + 4 = 0 gives x = −4, so the x-intercepts are 2 and −4.'] },
    ],
  },
  {
    id: 'quadratic-equations', title: 'Solve quadratic equations', tier: 'recap',
    intro: 'Factorising, completing the square, the quadratic formula and graphs all solve the same problem: find the values of x for which a quadratic expression equals zero.',
    goals: ['Choose the most suitable method for a given quadratic equation and justify your choice.', 'Use the discriminant to find how many real solutions an equation has, and include both signs when you take a square root.'],
    terms: [
      defineTerm('Factorise'),
      defineTerm('Zero-product property'),
      defineTerm('Completing the square'),
      defineTerm('Discriminant'),
    ],
    sections: [
      { title: 'Zero on one side', text: 'Before you use any method, rearrange the equation to the form ax² + bx + c = 0, with a ≠ 0. Read the signs of b and c carefully, because they change the answer.\n\nFactorising is quickest when the factors have whole-number coefficients and are easy to find. Completing the square shows the vertex of the graph. The quadratic formula works for every quadratic equation, and it shows when there are no real solutions.', formula: 'x = (−b ± √(b² − 4ac))/(2a)' },
      { title: 'Graphs and checking answers', text: 'The solutions of f(x) = 0 are the x-values where the graph of f crosses or touches the x-axis. A value read from a graph is only an estimate, unless the exact position of the point is known. To solve f(x) = g(x), find the x-values where the two graphs meet, or solve f(x) − g(x) = 0 algebraically.' },
    ],
    example: { prompt: 'Solve x² + 6x + 5 = 0 by completing the square.', steps: ['Half of 6 is 3, and 3² = 9. Add and subtract 9: x² + 6x + 9 − 9 + 5 = 0, so (x + 3)² − 4 = 0 and (x + 3)² = 4.', 'Take the square root of both sides: x + 3 = 2 or x + 3 = −2. So x = −1 or x = −5.', 'Substitute x = −1: (−1)² + 6 × (−1) + 5 = 1 − 6 + 5 = 0. Substitute x = −5: (−5)² + 6 × (−5) + 5 = 25 − 30 + 5 = 0.', 'The same expression factorises: x² + 6x + 5 = (x + 1)(x + 5). So the solutions are the same: x = −1 or x = −5.'] },
    pitfalls: ['Divide the whole numerator, −b ± √(b² − 4ac), by 2a, not only the −b part.', 'Do not forget the negative root. From x² = 9, the solutions are x = 3 and x = −3, not only x = 3.', 'Do not divide both sides of x² = 3x by x, because x could be 0. The solutions are x = 0 and x = 3.'],
    questions: [
      { prompt: 'Solve 2x² − 3x − 2 = 0 by factorising.', hint: 'Try the form (2x + p)(x + q). Find p and q so that pq = −2 and 2q + p = −3.', steps: ['Factorise the left side: (2x + 1)(x − 2) = 0. The right side is 0, so one of the factors must be 0.', '2x + 1 = 0 gives x = −1/2, and x − 2 = 0 gives x = 2. Both values satisfy the original equation.'] },
      { prompt: 'How many real solutions does x² + 2x + 5 = 0 have?', hint: 'Work out the discriminant b² − 4ac, or complete the square and think about whether a square can be negative.', steps: ['Here a = 1, b = 2 and c = 5, so Δ = b² − 4ac = 2² − 4 × 1 × 5 = 4 − 20 = −16.', 'Complete the square: x² + 2x + 5 = (x + 1)² + 4. The square of a real number is never negative, so (x + 1)² + 4 is at least 4 and can never be 0. There are no real solutions.'] },
    ],
  },
  {
    id: 'sequences', title: 'Sequences: investigating patterns (Criterion B)', tier: 'recap',
    intro: 'A sequence is an ordered list of numbers, and its terms often follow a pattern. This lesson shows how to turn that pattern into a formula that gives any term you need.',
    goals: ['Find explicit and recursive formulae for arithmetic sequences. Extended: find explicit and recursive formulae for geometric sequences.', 'Calculate the sum of the first n terms. Extended: calculate the sum to infinity of a geometric sequence with |r| < 1.', 'Describe, test and justify a general formula for a sequence.'],
    terms: [
      defineTerm('Term (nth term)'),
      defineTerm('Arithmetic sequence (linear sequence)'),
      defineTerm('Geometric sequence (geometric progression)'),
      defineTerm('Explicit formula (position-to-term rule)'),
      defineTerm('Recursive formula (term-to-term rule)'),
      defineTerm('Convergence (sum to infinity)'),
    ],
    sections: [
      { title: 'Difference or ratio?', text: 'In an arithmetic sequence, subtract each term from the next one. The result is the common difference d, which is the same for every pair of neighbouring terms. Extended: in a geometric sequence, divide each term by the one before it. The result is the common ratio r, which is also constant.', formula: 'Arithmetic: uₙ = a + (n − 1)d.  Geometric: uₙ = arⁿ⁻¹.' },
      { title: 'Term or sum?', text: 'The formula for the nth term, uₙ, gives one term of the sequence. The sum Sₙ = u₁ + u₂ + … + uₙ adds the first n terms. For 12, 6, 3, …, u₃ = 3, but S₃ = 12 + 6 + 3 = 21. Extended: if the first term is not zero, an infinite geometric sum is finite only when |r| < 1, and r may be negative.', formula: 'Arithmetic: Sₙ = n[2a + (n − 1)d]/2.  Geometric: Sₙ = a(1 − rⁿ)/(1 − r) for r ≠ 1; Sₙ = na for r = 1.  S∞ = a/(1 − r) for |r| < 1.' },
      { title: 'Two descriptions, one formula', text: 'Extended: for 3, 6, 12, 24, …, one description is ‘each term doubles’. Another is ‘the differences 3, 6, 12, … also double’. Each description leads to uₙ = 3 × 2ⁿ⁻¹. Check the formula on the given terms and on a new one, such as u₆ = 3 × 2⁵ = 96. The exponent is n − 1 because reaching the nth term from u₁ takes n − 1 doublings.' },
    ],
    example: { prompt: 'Find an explicit formula and a recursive formula for 5, 8, 11, … Then calculate u₂₀, the 20th term.', steps: ['The common difference is d = 8 − 5 = 3, so uₙ = u₁ + (n − 1)d = 5 + 3(n − 1) = 3n + 2.', 'Recursive formula: u₁ = 5 and uₙ₊₁ = uₙ + 3.', 'u₂₀ = 3(20) + 2 = 62.', 'Why n − 1: from u₁ to uₙ there are exactly n − 1 steps, and each step adds 3, so the total added is 3(n − 1).'] },
    pitfalls: ['A common mistake is using n instead of n − 1. The formula uₙ = 5 + 3n gives u₁ = 8, but the first term is 5.', 'Extended: the formula S∞ = u₁ / (1 − r) needs |r| < 1; for 3, 6, 12, … it gives −3, which is not a valid sum.', 'Checking a few terms does not prove a formula. The formulae 2ⁿ⁻¹ and 1 + n(n − 1)/2 both give 1, 2, 4 for n = 1, 2, 3, but their fourth terms are 8 and 7.'],
    questions: [
      { prompt: 'Extended: for 4, 12, 36, … find u₅ and write a recursive formula.', hint: 'Divide 12 by 4 to find the common ratio r.', steps: ['With u₁ = 4 and r = 3, uₙ = 4 × 3ⁿ⁻¹, so u₅ = 4 × 3⁴ = 4 × 81 = 324.', 'Recursive formula: u₁ = 4 and uₙ₊₁ = 3uₙ.'] },
      { prompt: 'Extended: find the sum 12 + 6 + 3 + … to infinity and explain why it is finite.', hint: 'Find u₁ and r, then check that |r| < 1.', steps: ['u₁ = 12 and r = 6 ÷ 12 = 1/2, so |r| < 1. Then S∞ = u₁ / (1 − r) = 12 / (1 − 1/2) = 24.', 'S∞ = u₁/(1 − r) = 12/(1 − 1/2) = 12/(1/2) = 24. The partial sums S₁ = 12, S₂ = 18, S₃ = 21 and S₄ = 22.5 get closer and closer to 24.'] },
    ],
  },
  {
    id: 'right-triangles', title: 'Right triangles & bearings', tier: 'recap',
    intro: 'Start by drawing a right triangle and labelling the sides and angles you know. Use Pythagoras to find a missing side when you know two sides. Use a trigonometric ratio when an acute angle is involved.',
    goals: ['Use Pythagoras and SOH–CAH–TOA.', 'Calculate a side or angle and interpret three-figure bearings.'],
    terms: [
      defineTerm('Hypotenuse'),
      defineTerm('Opposite / adjacent'),
      defineTerm('Bearing'),
      defineTerm('Inverse trigonometric function'),
    ],
    sections: [
      { title: 'Choose from the labels', text: 'Pythagoras works only in right triangles: a² + b² = c². Here a and b are the legs, c is the hypotenuse, and all lengths use the same unit.\n\nFor a trigonometric ratio, first label the sides relative to the chosen acute angle θ: opposite side, adjacent side and hypotenuse. Then choose the ratio that contains the known and unknown sides:\n\n\nsin θ = opposite / hypotenuse\n\ncos θ = adjacent / hypotenuse\n\ntan θ = opposite / adjacent\n\nSet your calculator to degree mode for angles in degrees. Keep unrounded values until the final answer.', formula: 'a² + b² = c².  sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent.' },
      { title: 'Bearings need a north line', text: 'Imagine you stand at the starting point and face north. The bearing is the angle you turn clockwise, to your right, until you face the other point. On a flat map with parallel north lines, the reverse bearing differs by 180°, written between 000° and 359°. The internal angle of the triangle may be different from the bearing itself.' },
    ],
    example: { prompt: 'A point lies 6 km east and 8 km north of the start. Find its distance and bearing from the start.', steps: ['Distance = √(6² + 8²) = 10 km.', 'The angle clockwise from north satisfies tan θ = east/north = 6/8.', 'θ = tan⁻¹(0.75) ≈ 36.87°. To the nearest degree the bearing is 037°.'] },
    pitfalls: ['Use the longest side as c in Pythagoras.', 'sin⁻¹ means the inverse sine, not 1/sin.', 'A bearing is measured from north, not automatically from the horizontal.'],
    questions: [
      { prompt: 'A right triangle has a hypotenuse of 13 cm and a shorter side of 5 cm. Find the length of the other shorter side.', hint: 'Subtract the square of the known leg from 13².', steps: ['Let b be the unknown leg, with a = 5 cm and c = 13 cm. Then b² = c² − a² = 169 − 25 = 144 cm².', 'b = √144 = 12 cm. A length cannot be negative, so reject −12 cm.'] },
      { prompt: 'The bearing of B from A is 125°. Find the bearing of A from B.', hint: 'Add 180°. If the result is 360° or more, subtract 360°.', steps: ['125° + 180° = 305°.', 'The reverse bearing is 305°.'] },
    ],
  },
  {
    id: 'trigonometry', title: 'Trig graphs & non-right triangles (Extended)', tier: 'recap',
    intro: 'Extended: this topic is not in the Standard course.\n\nUse the sine and cosine rules when a triangle is not right-angled. Recognise the repeating shapes of trigonometric graphs, and use degrees for every angle.',
    goals: ['Apply the sine rule, cosine rule and area formula for triangles.', 'Read the amplitude, period and key points of sine and cosine graphs.'],
    terms: [
      defineTerm('Sine rule (Extended)'),
      defineTerm('Cosine rule (Extended)'),
      defineTerm('Included angle (Extended)'),
      defineTerm('Amplitude (Extended)'),
      defineTerm('Period (Extended)'),
    ],
    sections: [
      { title: 'Choosing the right rule', text: 'Use the sine rule when you know an angle and the side opposite it. If two angles and a side are known, find the third angle first, because the angles of a triangle add up to 180°. Use the cosine rule when you know two sides and the angle between them, or all three sides.', formula: 'Area = ½ab sin C.  cos C = (a² + b² − c²)/(2ab).' },
      { title: 'Key points on the graphs', text: 'In degrees, sin x equals 0, 1, 0, −1 and 0 at x = 0°, 90°, 180°, 270° and 360°. Cos x equals 1, 0, −1, 0 and 1 at the same values of x.\n\nSin x and cos x are defined for every x, and their values stay between −1 and 1, inclusive.\n\nTan x equals 0 at multiples of 180°, such as 0°, 180° and 360°. It is undefined at x = 90° + 180°k, where k is an integer, and it takes every real value.', formula: 'y = A sin(Bx) + D: amplitude |A|, midline y = D, period 360°/|B| (A ≠ 0 and B ≠ 0, degrees).' },
    ],
    example: { prompt: 'Two sides of a triangle are 5 cm and 7 cm, and the angle between them is 60°. Calculate the third side and the area of the triangle.', steps: ['Cosine rule: c² = 5² + 7² − 2 × 5 × 7 × cos 60° = 25 + 49 − 35 = 39 cm².', 'c = √39 cm ≈ 6.24 cm (3 s.f.).', 'Area = ½ × 5 × 7 × sin 60° = 35√3/4 cm² ≈ 15.2 cm² (3 s.f.).'] },
    pitfalls: ['In the sine rule, pair each side with the angle opposite it: side a with angle A, side b with angle B and side c with angle C.', 'Check that the calculator is in degree mode. In radian mode, sin 30 gives −0.988, while sin 30° = 0.5.', 'When the sine rule gives an angle θ, the angle 180° − θ is also possible, because sin θ = sin(180° − θ). Keep it only if its sum with the angle you already know is less than 180°.'],
    questions: [
      { prompt: 'If A = 30°, a = 5 cm and B = 45°, calculate b exactly.', hint: 'Use b = a sin B / sin A.', steps: ['sin 45° = √2/2 and sin 30° = 1/2, so b = 5 × (√2/2) / (1/2) = 5√2 cm ≈ 7.07 cm.', 'Check: the larger angle, 45°, is opposite the longer side, and 7.07 cm is longer than 5 cm.'] },
      { prompt: 'Calculate the amplitude, period and range of y = 2 sin(3x) − 1, where x is measured in degrees.', hint: 'Compare with the form y = a sin(bx) + d, where d is the vertical shift: here a = 2, b = 3 and d = −1.', steps: ['Amplitude = |a| = 2. Period = 360°/|b| = 360°/3 = 120°.', 'The midline is y = d = −1, so y goes from −1 − 2 = −3 up to −1 + 2 = 1, giving −3 ≤ y ≤ 1.'] },
    ],
  },
  {
    id: 'circles', title: 'Circles, arcs & theorems', tier: 'recap',
    intro: 'Before you choose a circle theorem, identify the centre, a chord, the tangent and the arc the angle stands on. Give the theorem as the reason for every angle you find.',
    goals: ['Apply circle angle, tangent and chord theorems.', 'Calculate arc length, sector area and segment area.'],
    terms: [
      defineTerm('Chord / diameter'),
      defineTerm('Tangent'),
      defineTerm('Arc'),
      defineTerm('Sector'),
      defineTerm('Segment'),
      defineTerm('Cyclic quadrilateral'),
    ],
    sections: [
      { title: 'Angle theorems', text: 'The angle at the centre is twice the angle at a point on the circle that stands on the same arc.\n\nAngles at points on the circle that stand on the same arc are equal.\n\nAn angle in a semicircle is 90°.\n\nOpposite angles of a cyclic quadrilateral add up to 180°.\n\nThe angle between a tangent and a chord equals the angle at a point on the circle in the alternate segment. Find the matching chord and arc first.' },
      { title: 'Tangents and chords', text: 'A radius drawn to the point of contact is perpendicular to the tangent.\n\nThe two tangent lengths from the same external point are equal.\n\nA perpendicular from the centre to a chord bisects the chord.\n\nEqual chords in the same circle subtend equal angles at the centre.\n\nIf chords AB and CD intersect at X inside the circle, then AX × BX = CX × DX.' },
      { title: 'Parts of a circle', text: 'Arc length = (θ/360°) × 2πr, and sector area = (θ/360°) × πr², where θ is the central angle in degrees and r is the radius.\n\nIn radians, arc length = rθ and sector area = ½r²θ. Use one angle unit for the whole question.\n\nFor a minor segment (0° < θ ≤ 180°), area = sector area − area of the isosceles triangle formed by the two radii and the chord.', formula: 'Arc = (θ/360)2πr.  Sector area = (θ/360)πr².  Minor segment area = (θ/360)πr² − ½r² sin θ (degrees).' },
    ],
    example: { prompt: 'A circle has radius 6 cm. A minor sector has a central angle of 60°. Find the arc length, the sector area and the minor segment area.', steps: ['Arc length = (60/360) × 2π × 6 = 2π cm ≈ 6.28 cm.', 'Sector area = (60/360) × π × 6² = 6π cm² ≈ 18.85 cm².', 'Triangle area (two radii and the chord): the perpendicular from the centre O to the chord splits the 60° angle into two 30° angles. The height from O is 6 cos 30° = 3√3 cm, and the chord is 2 × 6 sin 30° = 6 cm. So the area is ½ × 6 × 3√3 = 9√3 cm² ≈ 15.59 cm².', 'Minor segment area = sector − triangle = 6π − 9√3 ≈ 18.85 − 15.59 = 3.26 cm².'] },
    pitfalls: ['Check that the angle at the centre and the angle at a point on the circle stand on the same arc before you use the theorem.', 'Forgetting to subtract the triangle is a common error. Check that a minor segment\'s area is smaller than its sector\'s area: in the example, 3.26 cm² is much less than 18.85 cm².', 'In AX × BX, both lengths must come from the same chord. Do not multiply a part of one chord by a part of the other.'],
    questions: [
      { prompt: 'One angle of a cyclic quadrilateral is 112°. Find the opposite angle.', hint: 'Which angle is opposite 112°, and what do two opposite angles add up to?', steps: ['The opposite angle is 180° − 112° = 68°.', 'Reason: opposite angles of a cyclic quadrilateral add up to 180°.'] },
      { prompt: 'Two chords intersect inside a circle. One chord is split into parts of 3 cm and 8 cm. The other chord is split into parts of 4 cm and x cm. Find x.', hint: 'Use the intersecting chords theorem: the two products are equal.', steps: ['3 × 8 = 4 × x, so 24 = 4x.', 'Divide both sides by 4: x = 24 ÷ 4 = 6 cm.'] },
    ],
  },
  {
    id: 'formulae-and-fractions', title: 'Rearranging formulae and algebraic fractions', tier: 'recap',
    intro: 'Changing the subject of a formula means rearranging it to isolate one chosen variable. With algebraic fractions, you also need to keep track of excluded values.',
    goals: ['Change the subject of a formula, even when the variable appears twice.', 'Simplify algebraic fractions and solve rational equations.'],
    terms: [
      defineTerm('Subject of a formula'),
      defineTerm('Algebraic fraction'),
      defineTerm('Rational equation'),
      defineTerm('Excluded value'),
    ],
    sections: [
      { title: 'Reversing operations, collecting terms and factoring', text: 'Undo the operations in reverse order. If the variable appears in several terms, collect those terms on one side and factor the variable out. Before you divide by an expression that contains the variable, state that it is not zero. When you square both sides, check the sign: if r² = 9, then r = 3 or r = −3, but for a length you take only r = 3.' },
      { title: 'What you can cancel', text: 'Factorise the numerator and the denominator first, then cancel common factors, provided they are not zero. To add or subtract fractions, use a common denominator, for example 1/x + 1/2 = (2 + x)/(2x), where x ≠ 0.', formula: '(x² − 4)/(x − 2) = x + 2 for x ≠ 2.' },
    ],
    example: { prompt: 'Make x the subject of y = (3x + 2)/(x − 1).', steps: ['The denominator x − 1 cannot be zero, so the original formula requires x ≠ 1.', 'Multiply both sides by x − 1: y(x − 1) = 3x + 2, so yx − y = 3x + 2.', 'Collect the terms with x on the left: yx − 3x = y + 2. Factor out x: x(y − 3) = y + 2.', 'Divide both sides by y − 3: x = (y + 2)/(y − 3), where y ≠ 3. This is because the original function never takes the value 3.'] },
    pitfalls: ['You can cancel factors, but not terms joined by + or −.', 'After you cancel, the excluded value from the original fraction still applies.', 'Clearing denominators in an equation does not make an excluded value a solution.'],
    questions: [
      { prompt: 'Simplify (x² − 9)/(x + 3) and state the excluded value.', hint: 'Write x² − 9 as two brackets multiplied together (difference of two squares).', steps: ['Factorise the numerator: (x − 3)(x + 3)/(x + 3). Cancel the common factor x + 3 to get x − 3.', 'The original fraction needs x ≠ −3, so the answer is x − 3, where x ≠ −3.'] },
      { prompt: 'Solve 1/(x − 1) = 2.', hint: 'State the excluded value before you multiply.', steps: ['x ≠ 1, so multiply both sides by x − 1: 1 = 2(x − 1).', '1 = 2x − 2, so 2x = 3 and x = 3/2 = 1.5. Check: x − 1 = 0.5, and 1/0.5 = 2.'] },
    ],
  },
  {
    id: 'proportion-and-graphs', title: 'Proportion, rational and exponential graphs', tier: 'recap',
    intro: 'A constant of proportionality, k, links two quantities in a fixed way. Compare straight-line and reciprocal graphs by their formulas and excluded values. Extended: also compare exponential graphs and their behaviour when x is very large or very negative.',
    goals: ['Write models for direct and inverse proportion, including cases such as y = kx².', 'Extended: find the asymptotes, domain and range of simple rational and exponential functions, and see how shifts change them.'],
    terms: [
      defineTerm('Direct proportion'),
      defineTerm('Inverse proportion'),
      defineTerm('Constant of proportionality'),
      defineTerm('Asymptote'),
      defineTerm('Exponential function'),
      defineTerm('Rational function'),
    ],
    sections: [
      { title: 'Finding k before predicting', text: 'Translate the wording into a formula first. “Directly proportional to x²” means y = kx², not y = kx. Substitute one known pair of values to find k, then use the completed formula to predict other values.\n\nThe graph of y = kx is a straight line through the origin. For y = k/x with k ≠ 0, the graph is a hyperbola with two separate branches.' },
      { title: 'Extended: how shifts move the asymptotes', text: 'For y = a/(x − h) + k, with a ≠ 0, the vertical asymptote is x = h and the horizontal asymptote is y = k. The domain is all x except h, and the range is all y except k.\n\nA sideways shift moves the vertical asymptote; a shift up or down moves the horizontal one. For y = 4/(x + 1) − 2, the asymptotes are x = −1 and y = −2.\n\nFor y = a × bˣ⁻ʰ + k, with a ≠ 0, b > 0 and b ≠ 1, the domain is all real numbers and the horizontal asymptote is y = k. The range is y > k if a > 0, and y < k if a < 0.' },
      { title: 'Extended: restrictions when simplifying', text: 'A rational function can have a hole when a factor cancels from the numerator and the denominator. For example, (x² − 1)/(x − 1) = x + 1, but only for x ≠ 1. Its graph is the line y = x + 1 with a hole at (1, 2), because the original fraction is undefined at x = 1. There is no vertical asymptote at x = 1.' },
    ],
    example: { prompt: 'y is inversely proportional to x. When x = 4, y = 6. Find y when x = 10.', steps: ['Write y = k/x.', '6 = k/4 gives k = 24.', 'At x = 10, y = 24/10 = 2.4.', 'Check: 4 × 6 = 24 and 10 × 2.4 = 24. For positive x, a larger x gives a smaller y.'] },
    pitfalls: ['A decreasing graph does not always mean inverse proportion. For y = 10 − x, the graph falls, but doubling x from 2 to 4 does not halve y: 8 becomes 6, not 4.', 'Extended: watch the sign in x − h. For y = 3/(x + 4), the vertical asymptote is x = −4, not x = 4.', 'Extended: y = x²/x is the line y = x with a hole at (0, 0). The value x = 0 is excluded, even though the line passes through that point.'],
    questions: [
      { prompt: 'y is directly proportional to x². If y = 12 when x = 2, find y when x = 5.', hint: 'Find k in y = kx².', steps: ['12 = 4k, so k = 3.', 'At x = 5: y = 3 × 5² = 3 × 25 = 75.'] },
      { prompt: 'Extended: state the domain, range and horizontal asymptote of y = 2ˣ + 3.', hint: 'Start with the range of 2ˣ, then add 3.', steps: ['Domain: all real x. Range: y > 3, because 2ˣ is always greater than 0.', 'The horizontal asymptote is y = 3, approached as x tends to negative infinity.'] },
    ],
  },
];
