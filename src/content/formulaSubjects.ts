// Where an automatically matched formula card may appear: the subjects of the page
// (src/components/content/SubjectScope.tsx). 'skills' = science skills pages (criteria B–D).
// A card that is not listed here is shown on every page — add new cards to this table.
// A card placed explicitly with <FormulaTeaching id="…"/> ignores this table.
const P = 'physics', C = 'chemistry', B = 'biology', M = 'math', G = 'geography', S = 'skills';

export const formulaSubjects: Record<string, string[]> = {
  // physics catalogue (formulaTeaching.ts)
  charge: [P, C], nanometre: [P, C], nucleons: [P, C],
  decay: [P], activity: [P], dose: [P], 'nuclear-equation': [P], 'mass-energy': [P],
  speed: [P], newton: [P], momentum: [P], moment: [P], hooke: [P], work: [P], 'mechanical-energy': [P],
  efficiency: [P], density: [P, C], pressure: [P], thermal: [P, C], gas: [P, C],
  current: [P], ohm: [P], circuit: [P], 'electrical-power': [P],
  wave: [P], refraction: [P], lens: [P], photon: [P],
  'activity-decay': [P], 'fission-power': [P], absorption: [P],
  // mathematics (mathFormulaTeaching.ts)
  integers: [M], line: [M, P, C, B, S], 'coordinate-distance': [M], perpendicular: [M],
  'linear-equation': [M], inequality: [M], sets: [M], indices: [M, P, C, B], surds: [M],
  function: [M], quadratic: [M], 'quadratic-formula': [M], transformation: [M], proportion: [M],
  sequences: [M], 'geometric-sum': [M], compound: [M], pythagoras: [M, P], 'trig-ratios': [M, P],
  'triangle-rules': [M], 'circle-parts': [M], chords: [M], 'trig-graph': [M],
  statistics: [M, S, G], histogram: [M, G], probability: [M], 'pie-angle': [M, G],
  'rational-cancel': [M],
  // chemistry and biology (chemBioFormulaTeaching.ts)
  moles: [C], concentration: [C], yield: [C], stoichiometry: [C], 'redox-equation': [C],
  'reaction-energy': [C], rate: [C, B], ph: [C], chromatography: [C, B],
  // SA:V is the key idea of nanoparticles (chemistry); both equations are balancing examples in chemistry too
  magnification: [B], 'surface-volume': [B, C], 'photosynthesis-equation': [B, C], 'respiration-equation': [B, C],
  'percent-change': [B, C, P, S, M, G],
  // additional catalogue (additionalFormulaTeaching.ts)
  exponential: [M], 'reaction-curve': [C], asymptote: [M], vectors: [P], bearings: [M, G],
  'circle-angles': [M], 'gas-volume': [C], 'first-law': [P], stopping: [P], absolute: [M],
  'zero-product': [M], complex: [M], derivative: [M], units: [P, C, B, M, S, G], 'diffraction-ratio': [P],
};

/** True when a matched card may be shown on a page of this subject (no subject = no restriction). */
export function formulaAllowedOn(id: string, subject: string | null | undefined): boolean {
  if (!subject) return true;
  const subjects = formulaSubjects[id];
  return !subjects || subjects.includes(subject);
}

// Page subject from the route alone. November units, papers and mock lessons set their own
// subject with <SubjectScope>, because their routes (/november/…, /mocks/…) are shared.
const PREFIXES: [RegExp, string][] = [
  [/^\/physics(-september-2026)?(\/|$)/, P],
  [/^\/chemistry(\/|$)/, C],
  [/^\/biology(\/|$)/, B],
  [/^\/math(-term-1-2026)?(\/|$)/, M],
  [/^\/geography(-tectonic-hazards)?(\/|$)/, G],
  [/^\/english(\/|$)/, 'english'],
  [/^\/french(\/|$)/, 'french'],
  [/^\/arabic(\/|$)/, 'arabic'],
];

export function subjectFromPath(pathname: string): string | null {
  for (const [pattern, subject] of PREFIXES) if (pattern.test(pathname)) return subject;
  return null;
}
