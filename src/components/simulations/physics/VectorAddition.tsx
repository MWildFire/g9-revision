import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Formula } from '../../ui/Formula';
import { format } from '../../../lib/physics';

const W = 420;
const H = 320;
const CX = W / 2;
const CY = H / 2;
const SCALE = 6; // px per N

export function VectorAddition() {
  const { t } = useTranslation('physics');
  const [f1, setF1] = useState(20);
  const [a1, setA1] = useState(30);
  const [f2, setF2] = useState(15);
  const [a2, setA2] = useState(120);

  const f1x = f1 * Math.cos((a1 * Math.PI) / 180);
  const f1y = f1 * Math.sin((a1 * Math.PI) / 180);
  const f2x = f2 * Math.cos((a2 * Math.PI) / 180);
  const f2y = f2 * Math.sin((a2 * Math.PI) / 180);

  const rx = f1x + f2x;
  const ry = f1y + f2y;
  const rMag = Math.sqrt(rx * rx + ry * ry);
  const rAngle = (Math.atan2(ry, rx) * 180) / Math.PI;

  return (
    <SimulationPanel
      title={t('forceMotion.simVectors.title')}
      description={t('forceMotion.simVectors.desc')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full bg-bg-primary rounded-md border border-border">
          {/* grid */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={(i * W) / 8}
              y1="0"
              x2={(i * W) / 8}
              y2={H}
              stroke="#ede4d3"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={(i * H) / 6}
              x2={W}
              y2={(i * H) / 6}
              stroke="#ede4d3"
              strokeWidth="0.5"
            />
          ))}
          {/* axes */}
          <line x1="0" y1={CY} x2={W} y2={CY} stroke="#9c8b73" strokeWidth="1" />
          <line x1={CX} y1="0" x2={CX} y2={H} stroke="#9c8b73" strokeWidth="1" />

          {/* F1 from origin */}
          <Arrow x1={CX} y1={CY} x2={CX + f1x * SCALE} y2={CY - f1y * SCALE} color="#c9a876" label={`F₁ = ${f1.toFixed(0)} N`} />

          {/* F2 from tip of F1 (head-to-tail) for visual sum */}
          <Arrow
            x1={CX + f1x * SCALE}
            y1={CY - f1y * SCALE}
            x2={CX + (f1x + f2x) * SCALE}
            y2={CY - (f1y + f2y) * SCALE}
            color="#a8b5a0"
            label={`F₂ = ${f2.toFixed(0)} N`}
            dashed
          />

          {/* Resultant from origin */}
          <Arrow
            x1={CX}
            y1={CY}
            x2={CX + rx * SCALE}
            y2={CY - ry * SCALE}
            color="#3d2f1f"
            label={`R = ${rMag.toFixed(1)} N`}
            thick
          />
        </svg>

        <div className="space-y-4">
          <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
            <p className="text-xs uppercase tracking-wider text-text-muted mb-2">
              {t('forceMotion.simVectors.f1')}
            </p>
            <Slider label={t('forceMotion.simVectors.magnitude')} unit="N" min={1} max={30} step={1} value={f1} onChange={setF1} />
            <div className="mt-2">
              <Slider label={t('forceMotion.simVectors.angle')} unit="°" min={0} max={360} step={5} value={a1} onChange={setA1} />
            </div>
          </div>
          <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
            <p className="text-xs uppercase tracking-wider text-text-muted mb-2">
              {t('forceMotion.simVectors.f2')}
            </p>
            <Slider label={t('forceMotion.simVectors.magnitude')} unit="N" min={1} max={30} step={1} value={f2} onChange={setF2} />
            <div className="mt-2">
              <Slider label={t('forceMotion.simVectors.angle')} unit="°" min={0} max={360} step={5} value={a2} onChange={setA2} />
            </div>
          </div>

          <Formula caption="R = F₁ + F₂ (vector sum)">
            |R| = {format(rMag, 1)} N
            <br />
            <span className="text-xs text-text-muted">angle ≈ {rAngle.toFixed(0)}°</span>
          </Formula>

          <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2 text-xs font-mono space-y-0.5">
            <div>Rₓ = F₁ₓ + F₂ₓ = {format(rx, 1)} N</div>
            <div>Rᵧ = F₁ᵧ + F₂ᵧ = {format(ry, 1)} N</div>
            <div>|R| = √(Rₓ² + Rᵧ²) = {format(rMag, 1)} N</div>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  color,
  label,
  dashed = false,
  thick = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  label: string;
  dashed?: boolean;
  thick?: boolean;
}) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const size = 9;
  const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (dist < 3) return null;
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={thick ? 3 : 2}
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      <polygon
        points={`${x2},${y2} ${x2 - size * Math.cos(angle - 0.4)},${y2 - size * Math.sin(angle - 0.4)} ${x2 - size * Math.cos(angle + 0.4)},${y2 - size * Math.sin(angle + 0.4)}`}
        fill={color}
      />
      <text
        x={(x1 + x2) / 2}
        y={(y1 + y2) / 2 - 6}
        fontSize="10"
        fontFamily="JetBrains Mono"
        fill={color}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}
