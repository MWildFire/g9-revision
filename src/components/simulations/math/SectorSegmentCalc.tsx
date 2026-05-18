import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { sectorArea, segmentArea, arcLength, fmt } from '../../../lib/math';

export function SectorSegmentCalc() {
  const { t } = useTranslation('math');
  const [radius, setRadius] = useState(5);
  const [angle, setAngle] = useState(60);

  const sec = sectorArea(radius, angle);
  const seg = segmentArea(radius, angle);
  const arc = arcLength(radius, angle);

  const cx = 110;
  const cy = 110;
  const r = 90;
  const rad = (angle * Math.PI) / 180;
  const x2 = cx + r * Math.cos(0);
  const y2 = cy - r * Math.sin(0);
  const x3 = cx + r * Math.cos(rad);
  const y3 = cy - r * Math.sin(rad);
  const largeArc = angle > 180 ? 1 : 0;
  const sectorPath = `M ${cx} ${cy} L ${x2} ${y2} A ${r} ${r} 0 ${largeArc} 0 ${x3} ${y3} Z`;
  const segmentPath = `M ${x2} ${y2} A ${r} ${r} 0 ${largeArc} 0 ${x3} ${y3} L ${x2} ${y2} Z`;

  return (
    <SimulationPanel
      title={t('simulations.sectorSegment.title')}
      description={t('simulations.sectorSegment.description')}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-6 items-start">
        <div className="space-y-4">
          <Slider label="Radius (r)" min={1} max={15} step={0.5} value={radius} onChange={setRadius} unit="cm" />
          <Slider label="Angle (θ)" min={10} max={350} step={5} value={angle} onChange={setAngle} unit="°" />

          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 space-y-2 text-sm">
            <p>
              <span className="text-text-muted">Arc length:</span>{' '}
              <span className="font-mono">{fmt(arc, 3)} cm</span>
            </p>
            <p>
              <span className="text-text-muted">Sector area:</span>{' '}
              <span className="font-mono">{fmt(sec, 3)} cm²</span>{' '}
              <span className="text-xs text-text-muted">= ½r²θ (radians)</span>
            </p>
            <p>
              <span className="text-text-muted">Segment area:</span>{' '}
              <span className="font-mono">{fmt(seg, 3)} cm²</span>{' '}
              <span className="text-xs text-text-muted">= ½r²(θ − sin θ)</span>
            </p>
          </div>
        </div>

        <svg viewBox="0 0 220 220" className="w-full max-w-[240px] mx-auto">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-border)" strokeWidth={1.5} />
          <path d={sectorPath} fill="var(--color-accent-sky)" fillOpacity={0.35} stroke="var(--color-accent-sky-deep)" strokeWidth={1.5} />
          <path d={segmentPath} fill="var(--color-accent-warm)" fillOpacity={0.55} stroke="var(--color-accent-warm)" strokeWidth={1.5} />
          <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="var(--color-text-secondary)" strokeWidth={1} />
          <line x1={cx} y1={cy} x2={x3} y2={y3} stroke="var(--color-text-secondary)" strokeWidth={1} />
          <text x={cx} y={cy - 10} textAnchor="middle" fill="var(--color-text-secondary)" fontSize={10}>
            {angle}°
          </text>
        </svg>
      </div>
    </SimulationPanel>
  );
}
