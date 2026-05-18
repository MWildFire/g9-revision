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
  if (n === 0) return { a: 0, exponent: 0 };
  const sign = n < 0 ? -1 : 1;
  const abs = Math.abs(n);
  const exponent = Math.floor(Math.log10(abs));
  const a = (abs / Math.pow(10, exponent)) * sign;
  return { a: Number(a.toPrecision(10)), exponent };
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

export function parseDataset(input: string): number[] {
  return input
    .split(/[\s,;]+/)
    .map((s) => parseFloat(s.trim()))
    .filter((n) => Number.isFinite(n))
    .sort((a, b) => a - b);
}

export function fmt(n: number, digits = 3): string {
  if (!Number.isFinite(n)) return '—';
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(digits).replace(/\.?0+$/, '');
}
