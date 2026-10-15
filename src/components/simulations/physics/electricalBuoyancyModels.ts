// Illustrative classroom models, not component calibration or fluid dynamics.
export function filamentCurrent(voltage: number): number {
  return 0.6 * Math.sign(voltage) * Math.pow(Math.abs(voltage), 0.6);
}
export function buoyancyState(objectDensity: number, fluidDensity: number) {
  const equal = Math.abs(objectDensity-fluidDensity) <= 1e-9*Math.max(objectDensity,fluidDensity);
  const verdict = equal ? 'neutralBuoyancy' : objectDensity > fluidDensity ? 'sinks' : 'floats';
  return { verdict, fraction: verdict === 'floats' ? objectDensity/fluidDensity : 1 } as const;
}
export function bulbCurrentLabel(intact: boolean, current: number) {
  return !intact ? 'burned' : current === 0 ? 'no-current' : current <= 0.05 ? 'dim' : 'lit';
}
