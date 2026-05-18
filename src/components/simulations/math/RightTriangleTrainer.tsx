import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { fmt } from '../../../lib/math';

export function RightTriangleTrainer() {
  const { t } = useTranslation('math');
  const [adj, setAdj] = useState(4);
  const [opp, setOpp] = useState(3);

  const hyp = Math.sqrt(adj * adj + opp * opp);
  const angleA = Math.atan(opp / adj) * 180 / Math.PI; // angle adjacent to adj
  const angleB = 90 - angleA;

  const cx = 120;
  const cy = 180;
  const scale = 25;
  const adjPx = adj * scale;
  const oppPx = opp * scale;

  return (
    <SimulationPanel title={t('simulations.rightTriangle.title')} description={t('simulations.rightTriangle.description')}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-start">
        <div className="space-y-4">
          <Slider label="Adjacent side" min={1} max={8} step={0.5} value={adj} onChange={setAdj} unit="cm" />
          <Slider label="Opposite side" min={1} max={8} step={0.5} value={opp} onChange={setOpp} unit="cm" />

          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 space-y-2 text-sm">
            <p className="font-mono">
              Hypotenuse = √(a² + b²) = √({fmt(adj * adj)} + {fmt(opp * opp)}) = <strong>{fmt(hyp, 3)} cm</strong>
            </p>
            <p className="font-mono">
              tan(θ) = opp/adj = {fmt(opp)}/{fmt(adj)} → θ = <strong>{fmt(angleA, 1)}°</strong>
            </p>
            <p className="font-mono">
              Other angle = 90° − {fmt(angleA, 1)}° = <strong>{fmt(angleB, 1)}°</strong>
            </p>
            <p className="font-mono text-xs text-text-muted">
              sin θ = opp/hyp = {fmt(opp / hyp, 4)} · cos θ = adj/hyp = {fmt(adj / hyp, 4)}
            </p>
          </div>
        </div>

        <svg viewBox="0 0 280 220" className="w-full max-w-[280px] mx-auto">
          {/* Triangle */}
          <polygon
            points={`${cx},${cy} ${cx + adjPx},${cy} ${cx + adjPx},${cy - oppPx}`}
            fill="var(--color-accent-sky)"
            fillOpacity={0.25}
            stroke="var(--color-accent-sky-deep)"
            strokeWidth={2}
          />
          {/* Right angle */}
          <rect x={cx + adjPx - 8} y={cy - 8} width={8} height={8} fill="none" stroke="var(--color-text-secondary)" strokeWidth={1} />
          {/* Labels */}
          <text x={cx + adjPx / 2} y={cy + 14} textAnchor="middle" fontSize={11} fill="var(--color-text-secondary)">
            adj = {fmt(adj)}
          </text>
          <text x={cx + adjPx + 8} y={cy - oppPx / 2} fontSize={11} fill="var(--color-text-secondary)">
            opp = {fmt(opp)}
          </text>
          <text x={cx + adjPx / 2 - 10} y={cy - oppPx / 2 - 5} fontSize={11} fill="var(--color-accent-warm)">
            hyp = {fmt(hyp, 2)}
          </text>
          <text x={cx + 16} y={cy - 6} fontSize={11} fill="var(--color-accent-clay)">
            θ = {fmt(angleA, 1)}°
          </text>
        </svg>
      </div>
    </SimulationPanel>
  );
}
