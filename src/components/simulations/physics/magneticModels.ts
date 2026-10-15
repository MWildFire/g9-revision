export type MagneticSource = 'bar' | 'wire' | 'solenoid';
type Source = MagneticSource;
const CX=240, CY=150, BAR_HALF_W=80, SOL_HALF_W=110;
export const compassRotation = (fieldAngle: number) => fieldAngle + 90;
export const solenoidInternalAngle = (current: number) => current > 0 ? Math.PI : 0;
export const solenoidExternalAngle = (current: number) => current > 0 ? 0 : Math.PI;
export function computeFieldAngle(source: Source, x: number, y: number, current: number): number {
  if (source !== 'bar' && current === 0) return NaN;
  if (source === 'wire') {
    const dx = x - CX;
    const dy = y - CY;
    const baseAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
    // tangent to circle: perpendicular to radial direction
    const sign = current > 0 ? -1 : 1; // positive current = out of page = CCW (in screen Y-down, that means rotate radial -90°)
    return baseAngle + 90 * sign;
  }
  // Dipole field model for bar magnet AND solenoid
  let np: { x: number; y: number };
  let sp: { x: number; y: number };
  if (source === 'bar') {
    np = { x: CX - BAR_HALF_W / 2, y: CY };
    sp = { x: CX + BAR_HALF_W / 2, y: CY };
  } else {
    // solenoid: poles at the ends; current sign determines orientation
    if (current >= 0) {
      np = { x: CX - SOL_HALF_W, y: CY };
      sp = { x: CX + SOL_HALF_W, y: CY };
    } else {
      np = { x: CX + SOL_HALF_W, y: CY };
      sp = { x: CX - SOL_HALF_W, y: CY };
    }
  }

  const r1x = x - np.x;
  const r1y = y - np.y;
  const r1 = Math.sqrt(r1x * r1x + r1y * r1y) || 1;
  const r2x = x - sp.x;
  const r2y = y - sp.y;
  const r2 = Math.sqrt(r2x * r2x + r2y * r2y) || 1;
  // Field from + monopole at N minus field toward + monopole at S
  const fx = r1x / (r1 * r1 * r1) - r2x / (r2 * r2 * r2);
  const fy = r1y / (r1 * r1 * r1) - r2y / (r2 * r2 * r2);
  return (Math.atan2(fy, fx) * 180) / Math.PI;
}
