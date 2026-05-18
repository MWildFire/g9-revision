export const G = 9.81;

export function acceleration(force: number, mass: number): number {
  if (mass <= 0) return 0;
  return force / mass;
}

export function ohmCurrent(voltage: number, resistance: number): number {
  if (resistance <= 0) return 0;
  return voltage / resistance;
}

export function power(voltage: number, current: number): number {
  return voltage * current;
}

export function hydrostaticPressure(rho: number, depth: number): number {
  return rho * G * depth;
}

export function waveSpeed(frequency: number, wavelength: number): number {
  return frequency * wavelength;
}

export function snellRefractedAngle(
  thetaInDeg: number,
  n1: number,
  n2: number,
): number | null {
  const thetaIn = (thetaInDeg * Math.PI) / 180;
  const ratio = (n1 / n2) * Math.sin(thetaIn);
  if (ratio > 1 || ratio < -1) return null;
  return (Math.asin(ratio) * 180) / Math.PI;
}

export function criticalAngle(n1: number, n2: number): number | null {
  if (n1 <= n2) return null;
  return (Math.asin(n2 / n1) * 180) / Math.PI;
}

export function thermistorResistance(tempC: number): number {
  const t = Math.max(0, Math.min(100, tempC));
  return 100000 * Math.exp(-0.05 * t);
}

export function ldrResistance(lightLevel: number): number {
  const l = Math.max(0.1, Math.min(1000, lightLevel));
  return 200000 / Math.pow(l, 0.9);
}

export function elasticCollision(
  m1: number,
  v1: number,
  m2: number,
  v2: number,
): { v1: number; v2: number } {
  const sum = m1 + m2;
  return {
    v1: ((m1 - m2) / sum) * v1 + ((2 * m2) / sum) * v2,
    v2: ((2 * m1) / sum) * v1 + ((m2 - m1) / sum) * v2,
  };
}

export function inelasticCollision(
  m1: number,
  v1: number,
  m2: number,
  v2: number,
): { v: number } {
  return { v: (m1 * v1 + m2 * v2) / (m1 + m2) };
}

export function brakingDistance(
  speedMs: number,
  friction: number,
): number {
  if (friction <= 0) return Infinity;
  return (speedMs * speedMs) / (2 * friction * G);
}

export function reactionDistance(speedMs: number, reactionTime: number): number {
  return speedMs * reactionTime;
}

export function lensImageDistance(u: number, f: number): number | null {
  const denom = 1 / f - 1 / u;
  if (Math.abs(denom) < 1e-6) return null;
  return 1 / denom;
}

export function format(value: number, digits: number = 2): string {
  if (!isFinite(value)) return '∞';
  const abs = Math.abs(value);
  if (abs >= 1e9) return (value / 1e9).toFixed(2) + 'G';
  if (abs >= 1e6) return (value / 1e6).toFixed(2) + 'M';
  if (abs >= 1e4) return (value / 1e3).toFixed(2) + 'k';
  if (abs >= 1000) return value.toLocaleString('en-US', { maximumFractionDigits: 0 });
  return value.toFixed(digits);
}

export function formatPressure(pa: number): string {
  if (!isFinite(pa)) return '∞ Pa';
  const abs = Math.abs(pa);
  if (abs >= 1e9) return (pa / 1e9).toFixed(2) + ' GPa';
  if (abs >= 1e6) return (pa / 1e6).toFixed(2) + ' MPa';
  if (abs >= 1000) return (pa / 1000).toFixed(2) + ' kPa';
  return pa.toFixed(0) + ' Pa';
}

export function formatResistance(ohms: number): string {
  if (!isFinite(ohms)) return '∞ Ω';
  const abs = Math.abs(ohms);
  if (abs >= 1e6) return (ohms / 1e6).toFixed(2) + ' MΩ';
  if (abs >= 1000) return (ohms / 1000).toFixed(2) + ' kΩ';
  return ohms.toFixed(0) + ' Ω';
}
