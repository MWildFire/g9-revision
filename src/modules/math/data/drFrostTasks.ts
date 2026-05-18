export type MathTopicId =
  | 'number-systems'
  | 'functions-algebra'
  | 'sequences'
  | 'geometry-trig'
  | 'stats-prob';

export interface DrFrostGroup {
  topicId: MathTopicId;
  subTopicKey: string; // i18n key under math.${topicId}.subTopics
  tasks: (string | number)[];
}

export const DR_FROST_TASKS: DrFrostGroup[] = [
  // Topic 1 — Number Systems
  { topicId: 'number-systems', subTopicKey: 'structureSets', tasks: [306, 307, 333] },
  { topicId: 'number-systems', subTopicKey: 'rounding', tasks: [75, 187] },
  { topicId: 'number-systems', subTopicKey: 'bounds', tasks: [310, 384] },
  { topicId: 'number-systems', subTopicKey: 'exponents', tasks: [158, 194, 298, 258] },
  { topicId: 'number-systems', subTopicKey: 'fractionalIndices', tasks: [394, 395] },
  { topicId: 'number-systems', subTopicKey: 'standardForm', tasks: [301, 302, 303, 304] },
  { topicId: 'number-systems', subTopicKey: 'unitConversion', tasks: [323, 331] },
  { topicId: 'number-systems', subTopicKey: 'surdsSimplify', tasks: [334] },
  { topicId: 'number-systems', subTopicKey: 'surdsOperate', tasks: [335, 336, 337, 338, 392, 393] },
  { topicId: 'number-systems', subTopicKey: 'absolute', tasks: ['86g'] },

  // Topic 2 — Functions & Algebra
  { topicId: 'functions-algebra', subTopicKey: 'mappings', tasks: [432, 435, 436] },
  { topicId: 'functions-algebra', subTopicKey: 'verticalLine', tasks: [437] },
  { topicId: 'functions-algebra', subTopicKey: 'quadraticsFactor', tasks: [299, 362, 363, 364] },
  { topicId: 'functions-algebra', subTopicKey: 'quadraticsGraph', tasks: [368] },
  { topicId: 'functions-algebra', subTopicKey: 'vertexForm', tasks: [416] },
  { topicId: 'functions-algebra', subTopicKey: 'transformations', tasks: [448, 449, 450, 451] },
  { topicId: 'functions-algebra', subTopicKey: 'solveGeneral', tasks: [418] },
  { topicId: 'functions-algebra', subTopicKey: 'solveFactor', tasks: [367] },
  { topicId: 'functions-algebra', subTopicKey: 'solveCompleteSquare', tasks: [415] },
  { topicId: 'functions-algebra', subTopicKey: 'solveFormula', tasks: [492, 417] },
  { topicId: 'functions-algebra', subTopicKey: 'solveGraphical', tasks: [421] },
  { topicId: 'functions-algebra', subTopicKey: 'rearrange', tasks: [201, 260, 391] },
  { topicId: 'functions-algebra', subTopicKey: 'algebraicFractions', tasks: [387, 388, 389, 390] },
  { topicId: 'functions-algebra', subTopicKey: 'proportions', tasks: [386] },
  { topicId: 'functions-algebra', subTopicKey: 'asymptotes', tasks: [493] },
  { topicId: 'functions-algebra', subTopicKey: 'exponential', tasks: [423, 424, 425] },

  // Topic 3 — Sequences
  { topicId: 'sequences', subTopicKey: 'linearGeneral', tasks: [202, 203, 204, 205] },
  { topicId: 'sequences', subTopicKey: 'linearProblems', tasks: [206] },
  { topicId: 'sequences', subTopicKey: 'geometric', tasks: [370, 371] },
  { topicId: 'sequences', subTopicKey: 'sumInfinity', tasks: [578] },

  // Topic 4 — Geometry & Trig
  { topicId: 'geometry-trig', subTopicKey: 'pythagoras', tasks: [288, 289, 338, 410] },
  { topicId: 'geometry-trig', subTopicKey: 'trig', tasks: [321, 322, 411] },
  { topicId: 'geometry-trig', subTopicKey: 'bearings', tasks: [264, 469] },
  { topicId: 'geometry-trig', subTopicKey: 'sineCosine', tasks: [465, 466] },
  { topicId: 'geometry-trig', subTopicKey: 'triangleArea', tasks: [467] },
  { topicId: 'geometry-trig', subTopicKey: 'circleTheorems', tasks: [317, 442] },
  { topicId: 'geometry-trig', subTopicKey: 'sectors', tasks: [211, 212, 318, 319] },
  { topicId: 'geometry-trig', subTopicKey: 'segments', tasks: ['213h', '467i', '467j', '467k'] },
  { topicId: 'geometry-trig', subTopicKey: 'intersectingChords', tasks: [443, 444] },

  // Topic 5 — Stats & Prob
  { topicId: 'stats-prob', subTopicKey: 'representation', tasks: [316, 403] },
  { topicId: 'stats-prob', subTopicKey: 'stemLeaf', tasks: [240] },
  { topicId: 'stats-prob', subTopicKey: 'grouped', tasks: [312, 313] },
  { topicId: 'stats-prob', subTopicKey: 'boxPlots', tasks: [396, 399, 536] },
  { topicId: 'stats-prob', subTopicKey: 'histograms', tasks: [314, 401] },
  { topicId: 'stats-prob', subTopicKey: 'cumulativeFreq', tasks: [398] },
  { topicId: 'stats-prob', subTopicKey: 'stdDev', tasks: [534] },
  { topicId: 'stats-prob', subTopicKey: 'pieCharts', tasks: [131, 246] },
];

export function getDrFrostTasksForTopic(topicId: MathTopicId): DrFrostGroup[] {
  return DR_FROST_TASKS.filter((g) => g.topicId === topicId);
}
