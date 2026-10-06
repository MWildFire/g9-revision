/** Small exact/domain-aware models used by the legacy teaching widgets. */
export type NumberInfo = Record<'N' | 'Z' | 'Q' | 'R', boolean> & { explanationKey: string; explanationParams?: Record<string, string | number> };
const invalid = (key = 'cannotParse'): NumberInfo => ({ N: false, Z: false, Q: false, R: false, explanationKey: key });
const integerInfo = (n: bigint): NumberInfo => ({ N: n > 0n, Z: true, Q: true, R: true, explanationKey: n > 0n ? 'positiveWhole' : 'integer' });
export function classifyNumber(input: string): NumberInfo {
  const value = input.trim();
  if (!value) return invalid('dash');
  if (/^[+-]?(π|pi|e)$/i.test(value)) return { N: false, Z: false, Q: false, R: true, explanationKey: 'irrational' };
  const root = value.match(/^([+-]?\d*)√(\d+)$/);
  if (root) {
    const coefficient = root[1] === '' || root[1] === '+' ? 1 : root[1] === '-' ? -1 : Number(root[1]);
    const radicand = Number(root[2]);
    // The supported integer bound avoids rounded floating point classifications.
    if (!Number.isSafeInteger(coefficient) || !Number.isSafeInteger(radicand) || radicand > 1_000_000) return invalid();
    const r = Math.sqrt(radicand);
    if (coefficient === 0 || radicand === 0) return integerInfo(0n);
    if (Number.isInteger(r)) return integerInfo(BigInt(coefficient) * BigInt(r));
    return { N: false, Z: false, Q: false, R: true, explanationKey: 'irrational' };
  }
  const fraction = value.match(/^([+-]?\d+)\s*\/\s*([+-]?\d+)$/);
  if (fraction) {
    const n = BigInt(fraction[1]), d = BigInt(fraction[2]);
    if (d === 0n) return invalid('divisionByZero');
    if (n % d === 0n) return integerInfo(n / d);
    return { N: false, Z: false, Q: true, R: true, explanationKey: 'properFraction' };
  }
  if (!/^[+-]?\d+(?:\.\d+)?$/.test(value)) return invalid();
  const [whole, decimal = ''] = value.split('.');
  if (!/[1-9]/.test(decimal)) return integerInfo(BigInt(whole));
  return { N: false, Z: false, Q: true, R: true, explanationKey: 'finiteDecimal' };
}
export function groupedPercentile(points: { x: number; y: number }[], percent: number): number | null {
  const total = points.at(-1)?.y ?? 0;
  if (points.length < 2 || total <= 0 || percent <= 0 || percent >= 100) return null;
  const target = total * percent / 100;
  for (let i = 1; i < points.length; i++) {
    const left = points[i - 1], right = points[i];
    if (right.y > left.y && left.y <= target && target <= right.y) {
      return left.x + (target - left.y) / (right.y - left.y) * (right.x - left.x);
    }
  }
  return null;
}
export function schoolQuartiles(sorted: number[]) {
  const median = (xs: number[]) => xs.length % 2 ? xs[(xs.length - 1) / 2] : (xs[xs.length / 2 - 1] + xs[xs.length / 2]) / 2;
  if (!sorted.length) return { q1: 0, median: 0, q3: 0, iqr: 0, min: 0, max: 0, outliers: [] as number[] };
  const mid = Math.floor(sorted.length / 2);
  const q1 = sorted.length === 1 ? sorted[0] : median(sorted.slice(0, mid));
  const q3 = sorted.length === 1 ? sorted[0] : median(sorted.slice(Math.ceil(sorted.length / 2)));
  const iqr = q3 - q1;
  const lo = q1 - 1.5 * iqr, hi = q3 + 1.5 * iqr;
  const retained = sorted.filter(n => n >= lo && n <= hi);
  return { q1, median: median(sorted), q3, iqr, min: retained[0], max: retained.at(-1)!, outliers: sorted.filter(n => n < lo || n > hi) };
}
/** Chords are placed on perpendicular axes through P. Product equality makes their endpoints concyclic. */
export function chordGeometry(ap: number, pb: number, cp: number) {
  const pd = ap * pb / cp;
  const ox = (pb - ap) / 2, oy = (pd - cp) / 2;
  const radius = Math.sqrt(ap * pb + ox * ox + oy * oy);
  return { pd, centre: { x: ox, y: oy }, radius, points: [{ x: -ap, y: 0 }, { x: pb, y: 0 }, { x: 0, y: -cp }, { x: 0, y: pd }] };
}

export function scientificNotation(value: number): { a: number; exponent: number } {
  if (!Number.isFinite(value) || value === 0) return { a: 0, exponent: 0 };
  const [coefficient, exponent] = value.toExponential(9).split('e');
  return { a: Number(coefficient), exponent: Number(exponent) };
}
