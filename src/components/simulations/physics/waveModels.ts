// Canvas distance is measured in pixels; frequency and time retain Hz and seconds.
export function wavePhase(position: number, wavelength: number, frequency: number, time: number) {
  return 2 * Math.PI * (position / wavelength - frequency * time);
}

export function wavefrontPhase(wavelength: number, speed: number, time: number) {
  return ((speed * time) % wavelength + wavelength) % wavelength;
}

// In a longitudinal mechanical wave, excess pressure is proportional to
// minus the spatial derivative of displacement. Values here are normalized.
export function soundSnapshot(phase: number) {
  return { displacement: Math.sin(phase), pressure: -Math.cos(phase) };
}

export const EM_EXAMPLES = [
  { id: 'radio', frequency: 3e6 },
  { id: 'micro', frequency: 3e9 },
  { id: 'ir', frequency: 3e13 },
  { id: 'visible', frequency: 6e14 },
  { id: 'uv', frequency: 3e15 },
  { id: 'xray', frequency: 3e18 },
  { id: 'gamma', frequency: 3e20 },
] as const;

export const vacuumWavelength = (frequency: number) => 3e8 / frequency;
