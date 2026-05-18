import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Button } from '../../ui/Button';
import { useAnimationFrame } from '../../../hooks/useAnimationFrame';
import { G, format } from '../../../lib/physics';
import { RotateCcw } from 'lucide-react';

const W = 480;
const H = 280;
const PIVOT_X = W / 2;
const PIVOT_Y = 30;

export function EnergyTransformations() {
  const { t } = useTranslation('physics');
  const [mass, setMass] = useState(1.0);
  const [length, setLength] = useState(1.5);
  const [initialAngle, setInitialAngle] = useState(40);

  // State: angle (radians) and angular velocity
  const stateRef = useRef({ theta: (initialAngle * Math.PI) / 180, omega: 0 });
  const [angleDeg, setAngleDeg] = useState(initialAngle);
  const [speed, setSpeed] = useState(0);
  const [running, setRunning] = useState(true);

  const reset = () => {
    stateRef.current = { theta: (initialAngle * Math.PI) / 180, omega: 0 };
    setAngleDeg(initialAngle);
    setSpeed(0);
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialAngle, length]);

  // Energy values
  const lowestY = PIVOT_Y + length * 100; // px display only
  const currentY = PIVOT_Y + length * 100 * Math.cos(stateRef.current.theta);
  const heightAboveLowest = (length * 100 - (currentY - PIVOT_Y)) / 100; // m
  // Equivalent: h = L(1 - cos θ)
  const h = length * (1 - Math.cos(stateRef.current.theta));
  const v = length * Math.abs(stateRef.current.omega); // tangential speed = L × ω
  const PE = mass * G * h;
  const KE = 0.5 * mass * v * v;
  const totalE = PE + KE;
  // Reference total (initial PE)
  const hInit = length * (1 - Math.cos((initialAngle * Math.PI) / 180));
  const Etot = mass * G * hInit;

  void heightAboveLowest;
  void lowestY;

  useAnimationFrame((dt) => {
    if (!running) return;
    const s = stateRef.current;
    // Pendulum equation: theta'' = -(g/L) * sin theta
    const alpha = -(G / length) * Math.sin(s.theta);
    s.omega += alpha * dt;
    // small damping for stability
    s.omega *= 0.9995;
    s.theta += s.omega * dt;
    setAngleDeg((s.theta * 180) / Math.PI);
    setSpeed(length * Math.abs(s.omega));
  }, running);

  // Render pendulum bob position
  const bobX = PIVOT_X + length * 100 * Math.sin(stateRef.current.theta);
  const bobY = PIVOT_Y + length * 100 * Math.cos(stateRef.current.theta);

  return (
    <SimulationPanel
      title={t('forcesEnergy.simEnergy.title')}
      description={t('forcesEnergy.simEnergy.desc')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-3">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full bg-bg-primary rounded-md border border-border">
            {/* ceiling */}
            <line x1="0" y1={PIVOT_Y} x2={W} y2={PIVOT_Y} stroke="#6b5b47" strokeWidth="2" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1={i * (W / 11)}
                y1={PIVOT_Y}
                x2={i * (W / 11) + 8}
                y2={PIVOT_Y - 8}
                stroke="#9c8b73"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
            {/* pivot */}
            <circle cx={PIVOT_X} cy={PIVOT_Y} r="3" fill="#3d2f1f" />
            {/* string */}
            <line x1={PIVOT_X} y1={PIVOT_Y} x2={bobX} y2={bobY} stroke="#6b5b47" strokeWidth="1.5" />
            {/* lowest-point reference line */}
            <line
              x1={PIVOT_X - 70}
              y1={PIVOT_Y + length * 100}
              x2={PIVOT_X + 70}
              y2={PIVOT_Y + length * 100}
              stroke="#9c8b73"
              strokeDasharray="3 3"
              strokeWidth="1"
            />
            {/* bob */}
            <circle cx={bobX} cy={bobY} r={6 + mass * 4} fill="#c9a876" stroke="#3d2f1f" strokeWidth="1.5" />

            {/* angle indicator */}
            <text x="10" y="20" fontSize="11" fontFamily="JetBrains Mono" fill="#6b5b47">
              θ = {angleDeg.toFixed(0)}°
            </text>
            <text x={W - 10} y="20" fontSize="11" fontFamily="JetBrains Mono" fill="#6b5b47" textAnchor="end">
              h = {h.toFixed(2)} m
            </text>
          </svg>

          {/* Energy bars */}
          <div className="space-y-2">
            <EnergyBar label="PE (mgh)" value={PE} max={Etot} color="#a8b5a0" />
            <EnergyBar label="KE (½mv²)" value={KE} max={Etot} color="#c9a876" />
            <EnergyBar label="Total (PE + KE)" value={totalE} max={Etot} color="#6b5b47" />
          </div>
          <p className="text-xs text-text-muted">
            Total energy should stay constant (small drift from numerical damping). The pendulum trades PE ↔ KE as it swings.
          </p>
        </div>

        <div className="space-y-4">
          <Slider label={t('forcesEnergy.simEnergy.mass')} unit="kg" min={0.2} max={3} step={0.1} value={mass} onChange={setMass} />
          <Slider label={t('forcesEnergy.simEnergy.length')} unit="m" min={0.5} max={2.2} step={0.05} value={length} onChange={setLength} />
          <Slider label={t('forcesEnergy.simEnergy.initialAngle')} unit="°" min={5} max={75} step={1} value={initialAngle} onChange={setInitialAngle} />

          <div className="grid grid-cols-2 gap-2 text-xs">
            <Stat label="v" value={`${format(speed, 2)} m/s`} />
            <Stat label="h above lowest" value={`${format(h, 2)} m`} />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={reset}>
              <RotateCcw size={14} /> {t('common.reset')}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setRunning((r) => !r)}>
              {running ? t('common.pause') : t('common.play')}
            </Button>
          </div>
        </div>
      </div>

    </SimulationPanel>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
      <div className="text-text-muted">{label}</div>
      <div className="font-mono text-text-primary">{value}</div>
    </div>
  );
}

function EnergyBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const frac = max > 0 ? Math.min(1, Math.max(0, value / max)) : 0;
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-text-secondary font-medium">{label}</span>
        <span className="font-mono text-text-primary">{value.toFixed(2)} J</span>
      </div>
      <div className="h-3 bg-bg-tertiary rounded-full overflow-hidden border border-border">
        <div
          className="h-full rounded-full transition-[width] duration-100"
          style={{ width: `${frac * 100}%`, background: color }}
        />
      </div>
    </div>
  );
}
