// Exact speed step for downward motion with constant mass and Fdrag = b v².
// Handles starting above or below terminal speed, including a parachute change.
export function fallingSpeed(speed: number, mass: number, drag: number, dt: number, gravity = 9.81): number {
  const terminal = Math.sqrt(mass * gravity / drag);
  const fraction = Math.tanh(gravity * dt / terminal);
  return terminal * (speed + terminal * fraction) / (terminal + speed * fraction);
}
