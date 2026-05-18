import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { snellRefractedAngle, criticalAngle, format } from '../../../lib/physics';

const PRESETS = { air: 1.0, water: 1.33, glass: 1.5, diamond: 2.42 };

const W = 420;
const H = 320;
const CX = W / 2;
const CY = H / 2;

export function ReflectionRefraction() {
  const { t } = useTranslation('physics');
  const [angle, setAngle] = useState(35);
  const [n1, setN1] = useState(1.0);
  const [n2, setN2] = useState(1.5);

  const refrAngle = snellRefractedAngle(angle, n1, n2);
  const critical = criticalAngle(n1, n2);
  const tir = refrAngle === null;

  // incoming ray comes from top-left at angle from normal
  const len = 130;
  const rad = (angle * Math.PI) / 180;
  const inFromX = CX - len * Math.sin(rad);
  const inFromY = CY - len * Math.cos(rad);

  const reflX = CX + len * Math.sin(rad);
  const reflY = CY - len * Math.cos(rad);

  let refrX = 0;
  let refrY = 0;
  if (refrAngle !== null) {
    const rad2 = (refrAngle * Math.PI) / 180;
    refrX = CX + len * Math.sin(rad2);
    refrY = CY + len * Math.cos(rad2);
  }

  return (
    <SimulationPanel title={t('wavesOptics.sim2.title')} description={t('wavesOptics.sim2.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full bg-bg-primary rounded-md border border-border">
          {/* top medium */}
          <rect x="0" y="0" width={W} height={CY} fill="#faf6ef" />
          {/* bottom medium */}
          <rect x="0" y={CY} width={W} height={CY} fill="#a8b8c8" opacity="0.4" />
          {/* boundary */}
          <line x1="0" y1={CY} x2={W} y2={CY} stroke="#6b5b47" strokeWidth="2" />
          {/* normal */}
          <line x1={CX} y1={20} x2={CX} y2={H - 20} stroke="#9c8b73" strokeDasharray="4 4" strokeWidth="1" />

          {/* incoming ray */}
          <line x1={inFromX} y1={inFromY} x2={CX} y2={CY} stroke="#c9a876" strokeWidth="2.5" />
          <ArrowHead x={CX} y={CY} fromX={inFromX} fromY={inFromY} color="#c9a876" />

          {/* reflected ray */}
          <line x1={CX} y1={CY} x2={reflX} y2={reflY} stroke="#a8b5a0" strokeWidth="2.5" strokeDasharray={tir ? '' : '4 4'} />
          <ArrowHead x={reflX} y={reflY} fromX={CX} fromY={CY} color="#a8b5a0" />

          {/* refracted ray */}
          {refrAngle !== null ? (
            <>
              <line x1={CX} y1={CY} x2={refrX} y2={refrY} stroke="#c99a8e" strokeWidth="2.5" />
              <ArrowHead x={refrX} y={refrY} fromX={CX} fromY={CY} color="#c99a8e" />
            </>
          ) : null}

          {/* labels */}
          <text x="10" y="20" fontSize="10" fill="#6b5b47">
            n₁ = {n1.toFixed(2)}
          </text>
          <text x="10" y={H - 12} fontSize="10" fill="#6b5b47">
            n₂ = {n2.toFixed(2)}
          </text>

          <AngleArc cx={CX} cy={CY} radius={32} from={-Math.PI / 2 - rad} to={-Math.PI / 2} color="#c9a876" />
          <AngleArc cx={CX} cy={CY} radius={32} from={-Math.PI / 2} to={-Math.PI / 2 + rad} color="#a8b5a0" />
          {refrAngle !== null ? (
            <AngleArc cx={CX} cy={CY} radius={42} from={Math.PI / 2 - (refrAngle * Math.PI) / 180} to={Math.PI / 2} color="#c99a8e" />
          ) : null}
        </svg>

        <div className="space-y-4">
          <Slider label={t('wavesOptics.sim2.angle')} unit="°" min={0} max={89} step={1} value={angle} onChange={setAngle} />
          <Slider label={t('wavesOptics.sim2.n1')} min={1.0} max={2.5} step={0.01} value={n1} onChange={setN1} />
          <Slider label={t('wavesOptics.sim2.n2')} min={1.0} max={2.5} step={0.01} value={n2} onChange={setN2} />

          <div>
            <p className="text-xs uppercase tracking-wider text-text-muted mb-2">
              {t('wavesOptics.sim2.preset')}
            </p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(PRESETS) as Array<keyof typeof PRESETS>).map((key) => (
                <button
                  key={key}
                  onClick={() => setN2(PRESETS[key])}
                  className="px-3 py-1.5 text-xs rounded-md bg-bg-tertiary border border-border hover:bg-bg-secondary transition-colors"
                >
                  {t(`wavesOptics.sim2.${key}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-bg-tertiary border border-border rounded-md px-4 py-3 text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-text-muted">θ₁ (incidence)</span>
              <span className="font-mono">{angle.toFixed(0)}°</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted" style={{ color: '#6b8a64' }}>
                θ (reflection)
              </span>
              <span className="font-mono">{angle.toFixed(0)}°</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted" style={{ color: '#a67367' }}>
                θ₂ (refraction)
              </span>
              <span className="font-mono">
                {refrAngle !== null ? `${refrAngle.toFixed(1)}°` : '—'}
              </span>
            </div>
            {critical !== null ? (
              <div
                className="flex justify-between pt-1 mt-1 border-t border-border"
                style={{ color: tir ? '#c99a8e' : '#6b5b47' }}
              >
                <span>θc (critical)</span>
                <span className="font-mono">{format(critical, 1)}°</span>
              </div>
            ) : null}
            {tir ? (
              <div className="mt-1 text-xs text-accent-clay font-medium">
                {t('wavesOptics.sim2.tir')}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function ArrowHead({ x, y, fromX, fromY, color }: { x: number; y: number; fromX: number; fromY: number; color: string }) {
  const angle = Math.atan2(y - fromY, x - fromX);
  const size = 6;
  return (
    <polygon
      points={`${x},${y} ${x - size * Math.cos(angle - 0.4)},${y - size * Math.sin(angle - 0.4)} ${x - size * Math.cos(angle + 0.4)},${y - size * Math.sin(angle + 0.4)}`}
      fill={color}
    />
  );
}

function AngleArc({ cx, cy, radius, from, to, color }: { cx: number; cy: number; radius: number; from: number; to: number; color: string }) {
  const x1 = cx + radius * Math.cos(from);
  const y1 = cy + radius * Math.sin(from);
  const x2 = cx + radius * Math.cos(to);
  const y2 = cy + radius * Math.sin(to);
  const large = Math.abs(to - from) > Math.PI ? 1 : 0;
  const sweep = to > from ? 1 : 0;
  return <path d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${large} ${sweep} ${x2} ${y2}`} fill="none" stroke={color} strokeWidth="1.5" />;
}
