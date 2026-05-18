import { useState } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { useTranslation } from 'react-i18next';

export function BradshawModel() {
  const { t } = useTranslation('geography');
  const [pos, setPos] = useState(0.3); // 0 (upper) to 1 (lower)

  const discharge = Math.round(10 + pos * 90);
  const channelWidth = Math.round(3 + pos * 47);
  const velocity = (0.5 + pos * 2.0).toFixed(2);
  const sediment = Math.round(40 - pos * 35);
  const gradient = (0.05 - pos * 0.048).toFixed(3);

  return (
    <SimulationPanel
      title={t('rivers.sections.bradshaw.title')}
      description={t('rivers.sections.bradshaw.description')}
    >
      <div className="space-y-4">
        <Slider
          label="Downstream position (upper → lower)"
          min={0}
          max={1}
          step={0.05}
          value={pos}
          onChange={setPos}
          format={(v) => v < 0.33 ? 'Upper' : v < 0.66 ? 'Middle' : 'Lower'}
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 bg-bg-tertiary/40 border border-border rounded-md p-4">
          <Metric label="Discharge" value={`${discharge} m³/s`} accent="var(--color-accent-sky-deep)" />
          <Metric label="Channel width" value={`${channelWidth} m`} accent="var(--color-accent-sky)" />
          <Metric label="Velocity" value={`${velocity} m/s`} accent="var(--color-accent-warm)" />
          <Metric label="Sediment size" value={`${sediment} cm`} accent="var(--color-accent-clay)" />
          <Metric label="Gradient" value={gradient} accent="var(--color-accent-sage)" />
        </div>
        <svg viewBox="0 0 400 90" className="w-full">
          <path
            d={`M 20 30 L 380 ${30 + pos * 30}`}
            stroke="var(--color-accent-sky-deep)"
            strokeWidth={3 + pos * 8}
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={20 + pos * 360} cy={30 + pos * 30} r={6} fill="var(--color-accent-warm)" stroke="var(--color-bg-secondary)" strokeWidth={2} />
          <text x={20} y={70} fontSize={10} fill="var(--color-text-muted)">Upper course</text>
          <text x={340} y={70} fontSize={10} fill="var(--color-text-muted)">Lower course</text>
        </svg>
      </div>
    </SimulationPanel>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div>
      <div className="text-xs text-text-muted">{label}</div>
      <div className="font-mono text-sm font-medium" style={{ color: accent }}>{value}</div>
    </div>
  );
}
