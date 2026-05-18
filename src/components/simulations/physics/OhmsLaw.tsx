import { useTranslation } from 'react-i18next';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Formula } from '../../ui/Formula';
import { ohmCurrent, power, format } from '../../../lib/physics';

const ELECTRON_COUNT = 8;

const PATH_POINTS = [
  { x: 40, y: 122 },
  { x: 40, y: 50 },
  { x: 180, y: 50 },
  { x: 300, y: 50 },
  { x: 300, y: 120 },
  { x: 300, y: 170 },
  { x: 180, y: 170 },
  { x: 40, y: 170 },
  { x: 40, y: 122 },
];

function pathPoint(t: number) {
  const tNorm = ((t % 1) + 1) % 1;
  const segCount = PATH_POINTS.length - 1;
  const scaled = tNorm * segCount;
  const idx = Math.min(segCount - 1, Math.floor(scaled));
  const local = scaled - idx;
  const a = PATH_POINTS[idx];
  const b = PATH_POINTS[idx + 1];
  return { x: a.x + (b.x - a.x) * local, y: a.y + (b.y - a.y) * local };
}

export function OhmsLaw() {
  const { t } = useTranslation();
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(6);

  const current = ohmCurrent(voltage, resistance);
  const watt = power(voltage, current);

  const electronRefs = useRef<Array<SVGCircleElement | null>>([]);
  const phaseRef = useRef(0);
  const currentRef = useRef(current);
  currentRef.current = current;

  // Stable ref callbacks — created once per electron index, never change identity
  const refCallbacks = useMemo(
    () =>
      Array.from({ length: ELECTRON_COUNT }, (_, i) => (el: SVGCircleElement | null) => {
        electronRefs.current[i] = el;
      }),
    [],
  );

  // Initial positions for the JSX render (so electrons appear spread out immediately,
  // even before the rAF loop starts — e.g. with voltage = 0).
  const initialPositions = useMemo(
    () => Array.from({ length: ELECTRON_COUNT }, (_, i) => pathPoint(i / ELECTRON_COUNT)),
    [],
  );

  useEffect(() => {
    let rafId = 0;
    let last = performance.now();
    let firstFrame = true;

    const loop = (now: number) => {
      const dt = firstFrame ? 0 : Math.min(0.1, (now - last) / 1000);
      firstFrame = false;
      last = now;
      const I = currentRef.current;

      if (I > 0.001) {
        phaseRef.current = (phaseRef.current + dt * I * 0.6) % 1;
      }

      const baseOpacity = I > 0.001 ? Math.min(1, 0.4 + I / 2.5) : 0.25;

      for (let i = 0; i < ELECTRON_COUNT; i++) {
        const node = electronRefs.current[i];
        if (!node) continue;
        const tt = (phaseRef.current + i / ELECTRON_COUNT) % 1;
        const pos = pathPoint(tt);
        node.setAttribute('cx', String(pos.x));
        node.setAttribute('cy', String(pos.y));
        node.style.opacity = String(baseOpacity);
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <SimulationPanel title={t('electricity.sim1.title')} description={t('electricity.sim1.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <svg viewBox="0 0 360 220" className="w-full bg-bg-primary rounded-md border border-border">
          <rect x="20" y="20" width="320" height="180" rx="8" fill="none" stroke="#6b5b47" strokeWidth="2" />

          <g transform="translate(40, 100)">
            <line x1="0" y1="-22" x2="0" y2="-8" stroke="#3d2f1f" strokeWidth="3" />
            <line x1="-10" y1="-8" x2="10" y2="-8" stroke="#3d2f1f" strokeWidth="3" />
            <line x1="-6" y1="0" x2="6" y2="0" stroke="#3d2f1f" strokeWidth="2" />
            <line x1="0" y1="0" x2="0" y2="22" stroke="#3d2f1f" strokeWidth="3" />
            <text x="-26" y="-4" fontSize="10" fontFamily="JetBrains Mono" fill="#6b5b47">
              {voltage.toFixed(1)} V
            </text>
          </g>

          <g transform="translate(180, 50)">
            <rect x="-30" y="-12" width="60" height="24" fill="#ede4d3" stroke="#6b5b47" strokeWidth="1.5" rx="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#3d2f1f">
              {resistance.toFixed(0)} Ω
            </text>
          </g>

          <g transform="translate(300, 100)">
            <circle r="20" fill="#faf6ef" stroke="#6b5b47" strokeWidth="1.5" />
            <text y="-3" textAnchor="middle" fontSize="11" fontFamily="Lora" fill="#3d2f1f">
              A
            </text>
            <text y="10" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#6b5b47">
              {current.toFixed(2)}
            </text>
          </g>

          {/* electrons — animated via refs; initial positions distributed around the loop */}
          {initialPositions.map((pos, i) => (
            <circle
              key={i}
              ref={refCallbacks[i]}
              r="3.5"
              fill="var(--color-accent-warm)"
              cx={pos.x}
              cy={pos.y}
              style={{ opacity: 0.4 }}
            />
          ))}

          {/* status indicator under the ammeter when there's no current */}
          {current < 0.001 ? (
            <text x="300" y="148" textAnchor="middle" fontSize="9" fill="#9c8b73" fontStyle="italic">
              no current
            </text>
          ) : null}
        </svg>

        <div className="space-y-4">
          <Slider label={t('electricity.sim1.voltage')} unit="V" min={0} max={24} step={0.5} value={voltage} onChange={setVoltage} />
          <Slider label={t('electricity.sim1.resistance')} unit="Ω" min={1} max={100} step={1} value={resistance} onChange={setResistance} />

          <Formula caption="I = V / R">
            I = {voltage.toFixed(1)} / {resistance.toFixed(0)} ={' '}
            <span className="text-accent-warm">{format(current, 3)} A</span>
          </Formula>
          <Formula caption="P = V × I">
            P = {voltage.toFixed(1)} × {current.toFixed(3)} ={' '}
            <span className="text-accent-sage">{format(watt, 2)} W</span>
          </Formula>
        </div>
      </div>
    </SimulationPanel>
  );
}
