/** An illustrative response curve, not a calibrated rainfall–runoff model. */
export function hydrographModel(intensity: number, saturation: number, urbanisation: number) {
  const rainPeakTime = 5;
  const lagTime = 8 - (intensity + saturation + urbanisation) * 0.02;
  const peakTime = rainPeakTime + lagTime;
  const baseFlow = 10;
  const peakDischarge = baseFlow + intensity * (0.4 + saturation * 0.006 + urbanisation * 0.01);
  const discharge = (time: number) => {
    if (time <= 4) return baseFlow;
    const relative = (time - 4) / (peakTime - 4);
    return baseFlow + (peakDischarge - baseFlow) * relative ** 3 * Math.exp(3 * (1 - relative));
  };
  const times = [...new Set([...Array.from({ length: 97 }, (_, i) => i / 4), peakTime])].sort((a, b) => a - b);
  return { rainPeakTime, lagTime, peakTime, baseFlow, peakDischarge, points: times.map(x => ({ x, y: discharge(x) })) };
}
