export type MotionGraphMode = 'constantV' | 'constantA' | 'decel';

/** One-dimensional motion. Braking ends at rest instead of reversing direction. */
export function motionGraphData(mode: MotionGraphMode, u: number, a: number, duration = 10, steps = 50) {
    const points = [];
    for (let i = 0; i <= steps; i++) {
      const time = (i * duration) / steps;
      let acc = 0;
      let velocity = u;
      if (mode === 'constantV') {
        acc = 0;
        velocity = u;
      } else if (mode === 'constantA') {
        acc = a;
        velocity = u + a * time;
      } else {
        // decel: positive u, negative a, stops at t = u/|a|
        acc = -Math.abs(a);
        velocity = Math.max(0, u + acc * time);
        if (time >= u / Math.abs(a)) acc = 0;
      }
      // distance = integral of velocity. For uniformly varying motion:
      let distance;
      if (mode === 'constantV') {
        distance = u * time;
      } else if (mode === 'constantA') {
        distance = u * time + 0.5 * a * time * time;
      } else {
        const tStop = u / Math.abs(a);
        if (time <= tStop) distance = u * time - 0.5 * Math.abs(a) * time * time;
        else distance = u * tStop - 0.5 * Math.abs(a) * tStop * tStop;
      }
      points.push({
        t: parseFloat(time.toFixed(2)),
        v: parseFloat(velocity.toFixed(2)),
        a: parseFloat(acc.toFixed(2)),
        d: parseFloat(distance.toFixed(2)),
      });
    }
    return points;
}
