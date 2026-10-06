import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip as RTooltip } from 'recharts';
import { SimulationPanel } from '../../ui/Tabs';
import { Slider } from '../../ui/Slider';
import { fmt } from '../../../lib/math';
import { groupedPercentile } from '../../../definitions/math-legacy-models';

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
    return [{ x: 0, y: 0 }, ...groups.map((g) => {
      cf += g.freq;
      return { x: g.upper, y: cf };
    })];
  }, [groups]);

  const total = data.length > 0 ? data[data.length - 1].y : 0;
  const targetCF = (percentile / 100) * total;

  const estimatedX = groupedPercentile(data, percentile);

  const updateFreq = (i: number, val: number) => {
    setGroups((gs) => gs.map((g, idx) => (idx === i ? { ...g, freq: Math.max(0, val) } : g)));
  };

  return (
    <SimulationPanel title={t('simulations.cumulativeFreq.title')} description={t('simulations.cumulativeFreq.description')}>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-text-secondary mb-2">{t('simulations.cumulativeFreq.frequencyLabel')}:</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {groups.map((g, i) => (
              <label key={i} className="text-xs">
                <span className="block text-text-muted mb-1">{i === 0 ? 0 : groups[i - 1].upper} ≤ x {i === groups.length - 1 ? '≤' : '<'} {g.upper}</span>
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

        <Slider label={t('simulations.cumulativeFreq.percentileLabel')} min={1} max={99} step={1} value={percentile} onChange={setPercentile} unit="%" />

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p><span className="text-text-muted">{t('simulations.cumulativeFreq.total')}:</span> <span className="font-mono">{total}</span></p>
          <p><span className="text-text-muted">{t('simulations.cumulativeFreq.target')} ({percentile}%):</span> <span className="font-mono">{fmt(targetCF, 2)}</span></p>
          <p><span className="text-text-muted">{t('simulations.cumulativeFreq.valueAtLabel')}:</span>{' '}
            <span className="font-mono font-medium">{estimatedX !== null ? fmt(estimatedX, 2) : '—'}</span>
            {percentile === 25 ? ' (Q1)' : percentile === 50 ? ` (${t('simulations.boxPlot.median')})` : percentile === 75 ? ' (Q3)' : ''}
          </p>
        </div>

        <div className="h-64" role="img" aria-label={t('simulations.cumulativeFreq.alt', { count: total, percent: percentile, value: estimatedX === null ? '—' : fmt(estimatedX) })}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis type="number" dataKey="x" domain={['dataMin', 'dataMax']} tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} stroke="var(--color-border)" label={{ value: t('simulations.cumulativeFreq.value'), position: 'insideBottom', offset: -5, fill: 'var(--color-text-muted)', fontSize: 11 }} />
              <YAxis tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} stroke="var(--color-border)" label={{ value: 'CF', angle: -90, position: 'insideLeft', fill: 'var(--color-text-muted)', fontSize: 11 }} />
              <ReferenceLine y={targetCF} stroke="var(--color-accent-warm)" strokeDasharray="3 3" label={{ value: `${percentile}%`, position: 'left', fill: 'var(--color-accent-warm)', fontSize: 10 }} />
              {estimatedX !== null ? (
                <ReferenceLine x={estimatedX} stroke="var(--color-accent-warm)" strokeDasharray="3 3" />
              ) : null}
              <Line type="linear" dataKey="y" stroke="var(--color-accent-sky-deep)" strokeWidth={2} dot={{ fill: 'var(--color-accent-warm)', r: 4 }} />
              <RTooltip contentStyle={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <DefinitionSupport review={t('simulations.cumulativeFreq.review', { returnObjects: true }) as DefinitionReview} />
    </SimulationPanel>
  );
}
