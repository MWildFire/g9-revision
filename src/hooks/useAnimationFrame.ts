import { useEffect, useRef } from 'react';

type Callback = (deltaSeconds: number, elapsedSeconds: number) => void;

export function useAnimationFrame(callback: Callback, active: boolean = true) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (!active) return;
    let rafId = 0;
    let last = performance.now();
    const start = last;

    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      callbackRef.current(dt, (now - start) / 1000);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [active]);
}
