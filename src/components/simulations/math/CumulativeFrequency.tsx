import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip as RTooltip } from 'recharts';
import { SimulationPanel } from '../../ui/Tabs';
import { Slider } from '../../ui/Slider';
import { fmt } from '../../../lib/math';

interface Group { upper: number; freq: number; }

export function CumulativeFrequency() {
  const { t } = useTranslation('math');
  const [groups, setGroups] = useState<Group[]>([
    { upper: 10, freq: 5 },
    { upper: 15, freq: 15 },
    { upper: 20, freq: 20 },
    { upper: 25, freq: 8 },
    { upper: 30, freq: 2 },
  ]);
  const [percentile, setPercentile] = useState(50);

  const data = useMemo(() => {
    let cf = 0;
    return groups.map((g) => {
      cf += g.freq;
      return { x: g.upper, y: cf };
    });
  }, [groups]);

  const total = data.length > 0 ? data[data.length - 1].y : 0;
  const targetCF = (percentile / 100) * total;

  // Find value at targetCF via linear interpolation
  let estimatedX: number | null = null;
  if (data.length >= 2) {
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i].y <= targetCF && data[i + 1].y >= targetCF) {
        const x1 = data[i].x;
        const x2 = data[i + 1].x;
        const y1 = data[i].y;
        const y2 = data[i + 1].y;
        estimatedX = x1 + ((targetCF - y1) / (y2 - y1)) * (x2 - x1);
        break;
      }
    }
    if (estimatedX === null && data[0].y >= targetCF) estimatedX = data[0].x;
  }

  const updateFreq = (i: number, val: number) => {
    setGroups((gs) => gs.map((g, idx) => (idx === i ? { ...g, freq: Math.max(0, val) } : g)));
  };

  return (
    <SimulationPanel title={t('simulations.cumulativeFreq.title')} description={t('simulations.cumulativeFreq.description')}>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-text-secondary mb-2">Frequencies in each class:</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {groups.map((g, i) => (
              <label key={i} className="text-xs">
                <span className="block text-text-muted mb-1">≤ {g.upper}</span>
                <input
                  type="number"
                  min={0}
                  value={g.freq}
                  onChange={(e) => updateFreq(i, parseInt(e.target.value, 10) || 0)}
                  className="w-full bg-bg-tertiary/40 border border-border rounded-md px-2 py-1 font-mono"
                />
              </label>
            ))}
          </div>
        </div>

        <Slider label="Percentile" min={1} max={99} step={1} value={percentile} onChange={setPercentile} unit="%" />

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p><span className="text-text-muted">Total frequency (n):</span> <span className="font-mono">{total}</span></p>
          <p><span className="text-text-muted">Target cumulative freq ({percentile}%):</span> <span className="font-mono">{fmt(targetCF, 2)}</span></p>
          <p><span className="text-text-muted">Estimated value:</span>{' '}
            <span className="font-mono font-medium">{estimatedX !== null ? fmt(estimatedX, 2) : '—'}</span>
            {percentile === 25 ? ' (Q1)' : percentile === 50 ? ' (median)' : percentile === 75 ? ' (Q3)' : ''}
          </p>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis type="number" dataKey="x" domain={['dataMin', 'dataMax']} tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} stroke="var(--color-border)" label={{ value: 'value', position: 'insideBottom', offset: -5, fill: 'var(--color-text-muted)', fontSize: 11 }} />
              <YAxis tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} stroke="var(--color-border)" label={{ value: 'CF', angle: -90, position: 'insideLeft', fill: 'var(--color-text-muted)', fontSize: 11 }} />
              <ReferenceLine y={targetCF} stroke="var(--color-accent-warm)" strokeDasharray="3 3" label={{ value: `${percentile}%`, position: 'left', fill: 'var(--color-accent-warm)', fontSize: 10 }} />
              {estimatedX !== null ? (
                <ReferenceLine x={estimatedX} stroke="var(--color-accent-warm)" strokeDasharray="3 3" />
              ) : null}
              <Line type="monotone" dataKey="y" stroke="var(--color-accent-sky-deep)" strokeWidth={2} dot={{ fill: 'var(--color-accent-warm)', r: 4 }} />
              <RTooltip contentStyle={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </SimulationPanel>
  );
}
