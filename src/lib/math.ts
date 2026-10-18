// Math utilities for simulations

export function solveQuadratic(a: number, b: number, c: number): { roots: number[]; vertex: { h: number; k: number }; discriminant: number } {
  if (a === 0) {
    return b === 0
      ? { roots: [], vertex: { h: 0, k: c }, discriminant: 0 }
      : { roots: [-c / b], vertex: { h: 0, k: c }, discriminant: 1 };
  }
  const d = b * b - 4 * a * c;
  const h = -b / (2 * a);
  const k = a * h * h + b * h + c;
  let roots: number[] = [];
  if (d > 0) {
    const sq = Math.sqrt(d);
    roots = [(-b - sq) / (2 * a), (-b + sq) / (2 * a)];
  } else if (d === 0) {
    roots = [h];
  }
  return { roots, vertex: { h, k }, discriminant: d };
}

export function evalQuadratic(a: number, b: number, c: number, x: number): number {
  return a * x * x + b * x + c;
}

/**
 * Simplify a surd √n by extracting the largest perfect square factor.
 * Returns { coef, radicand } such that result = coef * √radicand.
 */
export function simplifySurd(n: number): { coef: number; radicand: number } {
  if (n <= 0) return { coef: 0, radicand: 0 };
  let coef = 1;
  let radicand = n;
  for (let i = 2; i * i <= radicand; i++) {
    while (radicand % (i * i) === 0) {
      radicand /= i * i;
      coef *= i;
    }
  }
  return { coef, radicand };
}

/**
 * Convert a number to standard form a × 10^n where 1 ≤ |a| < 10.
 */
export function toStandardForm(n: number): { a: number; exponent: number } {
  if (!Number.isFinite(n) || n === 0) return { a: 0, exponent: 0 };
  // Exponential formatting normalises after rounding and supports subnormals,
  // without dividing by 10^-324 (which underflows to zero).
  const [coefficient, exponent] = n.toExponential(9).split('e');
  return { a: Number(coefficient), exponent: Number(exponent) };
}

/**
 * Linear sequence: a + d * (n-1)
 */
export function linearSequence(firstTerm: number, diff: number, count: number): number[] {
  return Array.from({ length: count }, (_, i) => firstTerm + diff * i);
}

/**
 * Geometric sequence: a * r^(n-1)
 */
export function geometricSequence(firstTerm: number, ratio: number, count: number): number[] {
  return Array.from({ length: count }, (_, i) => firstTerm * Math.pow(ratio, i));
}

/**
 * Sector area: ½ r² θ_rad
 */
export function sectorArea(radius: number, angleDeg: number): number {
  return 0.5 * radius * radius * (angleDeg * Math.PI) / 180;
}

/**
 * Segment area: ½ r² (θ - sin θ) in radians
 */
export function segmentArea(radius: number, angleDeg: number): number {
  const r = (angleDeg * Math.PI) / 180;
  return 0.5 * radius * radius * (r - Math.sin(r));
}

export function arcLength(radius: number, angleDeg: number): number {
  return ((angleDeg * Math.PI) / 180) * radius;
}

/**
 * Quartiles and IQR for a sorted dataset.
 */
export function quartiles(sorted: number[]): { q1: number; median: number; q3: number; iqr: number; min: number; max: number; outliers: number[] } {
  const n = sorted.length;
  if (n === 0) return { q1: 0, median: 0, q3: 0, iqr: 0, min: 0, max: 0, outliers: [] };

  const median = percentile(sorted, 50);
  const q1 = percentile(sorted, 25);
  const q3 = percentile(sorted, 75);
  const iqr = q3 - q1;
  const lowerFence = q1 - 1.5 * iqr;
  const upperFence = q3 + 1.5 * iqr;
  const outliers = sorted.filter((v) => v < lowerFence || v > upperFence);
  const filtered = sorted.filter((v) => v >= lowerFence && v <= upperFence);
  return {
    q1,
    median,
    q3,
    iqr,
    min: filtered[0] ?? sorted[0],
    max: filtered[filtered.length - 1] ?? sorted[sorted.length - 1],
    outliers,
  };
}

function percentile(sorted: number[], p: number): number {
  if (sorted.length === 0) return 0;
  const rank = (p / 100) * (sorted.length - 1);
  const lo = Math.floor(rank);
  const hi = Math.ceil(rank);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (rank - lo);
}

/** Complete decimal/scientific token; commas, semicolons and whitespace separate observations. */
const DECIMAL_TOKEN = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;

/** Reject the entire dataset if any observation is invalid; never calculate a partial dataset. */
export function parseDatasetInput(input: string): { values: number[]; invalidTokens: string[] } {
  const tokens = input.trim().split(/[\s,;]+/).filter(Boolean);
  const invalidTokens = tokens.filter(token => {
    const value = Number(token);
    // A nonzero decimal below the floating-point range must not silently become zero.
    const nonzeroMantissa = /[1-9]/.test(token.split(/[eE]/)[0]);
    return !DECIMAL_TOKEN.test(token) || !Number.isFinite(value) || (value === 0 && nonzeroMantissa);
  });
  if (invalidTokens.length) return { values: [], invalidTokens };
  return { values: tokens.map(Number).sort((a, b) => a - b), invalidTokens: [] };
}

export function parseDataset(input: string): number[] {
  return parseDatasetInput(input).values;
}

/** A whole decimal/scientific literal in the stated inclusive safe-integer range, or null. */
export function parseIntegerInput(input: string, min: number, max = Number.MAX_SAFE_INTEGER): number | null {
  const token = input.trim();
  if (!DECIMAL_TOKEN.test(token)) return null;
  const value = Number(token);
  if (!Number.isSafeInteger(value) || value < min || value > max) return null;
  // Check the decimal's exact fractional digits before accepting a rounded Number.
  // For example, 1.00000000000000000001 must not be accepted as the integer 1.
  const [mantissa, exponent = '0'] = token.toLowerCase().split('e');
  const digits = mantissa.replace(/[+.\-]/g, '');
  const fractionalPlaces = (mantissa.split('.')[1]?.length ?? 0) - Number(exponent);
  if (fractionalPlaces > 0) {
    const tail = fractionalPlaces >= digits.length ? digits : digits.slice(-fractionalPlaces);
    if (/[1-9]/.test(tail)) return null;
  }
  return value;
}

export function fmt(n: number, digits = 3, lang?: string): string {
  if (!Number.isFinite(n)) return '—';
  if (Number.isInteger(n)) return String(n);
  const s = n.toFixed(digits).replace(/\.?0+$/, '');
  return lang === 'ru' ? s.replace('.', ',') : s;
}
