/** Illustrative first-order gas-production model; the final amount is independent of k. */
export function reactionVolume(timeSeconds: number, rateConstant: number, finalVolume = 50): number {
  return finalVolume * (1 - Math.exp(-rateConstant * timeSeconds));
}

export function pHClassification(pH: number): 'acidic' | 'neutral' | 'alkaline' {
  return pH < 7 ? 'acidic' : pH > 7 ? 'alkaline' : 'neutral';
}

export function energyProfileGeometry(mode: 'exo' | 'endo', activation: number, magnitude: number) {
  const deltaH = mode === 'exo' ? -magnitude : magnitude;
  const effectiveActivation = Math.max(activation, Math.max(0, deltaH) + 5);
  const minimum = Math.min(0, deltaH);
  const maximum = effectiveActivation;
  const y = (energy: number) => 225 - (energy - minimum) / (maximum - minimum) * 170;
  return { deltaH, activation: effectiveActivation, reactantsY: y(0), productsY: y(deltaH), peakY: y(effectiveActivation) };
}

export type AmountDirection = 'm-to-n' | 'n-to-m' | 'n-to-V' | 'V-to-n';
export function convertChemicalAmount(direction: AmountDirection, input: number, molarMass: number): number | null {
  if (!Number.isFinite(input) || input < 0) return null;
  if ((direction === 'm-to-n' || direction === 'n-to-m') && (!Number.isFinite(molarMass) || molarMass <= 0)) return null;
  const result = direction === 'm-to-n' ? input / molarMass : direction === 'n-to-m' ? input * molarMass : direction === 'n-to-V' ? input * 22.7 : input / 22.7;
  return Number.isFinite(result) ? result : null;
}
