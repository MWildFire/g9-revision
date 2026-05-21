import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip as RTooltip } from 'recharts';
import { Slider } from '../../ui/Slider';
import { SimulationPanel, Tabs } from '../../ui/Tabs';
import { linearSequence, geometricSequence, fmt } from '../../../lib/math';

export function SequenceGenerator() {
  const { t } = useTranslation('math');
  const [mode, setMode] = useState<'linear' | 'geometric'>('linear');
  const [first, setFirst] = useState(2);
  const [param, setParam] = useState(3); // difference (linear) or ratio (geometric)
  const [count, setCount] = useState(8);

  const terms = mode === 'linear'
    ? linearSequence(first, param, count)
    : geometricSequence(first, param, count);

  const data = terms.map((y, i) => ({ n: i + 1, y }));
  const formula = mode === 'linear'
    ? `uₙ = ${fmt(first)} + (n − 1) × ${fmt(param)}`
    : `uₙ = ${fmt(first)} × ${fmt(param)}^(n − 1)`;

  return (
    <SimulationPanel
      title={t('simulations.sequenceGenerator.title')}
      description={t('simulations.sequenceGenerator.description')}
    >
      <div className="space-y-4">
        <Tabs
          tabs={[
            { id: 'linear', label: t('simulations.sequenceGenerator.linearTab') },
            { id: 'geometric', label: t('simulations.sequenceGenerator.geometricTab') },
          ]}
          activeId={mode}
          onChange={(id) => setMode(id as 'linear' | 'geometric')}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Slider label={t('simulations.sequenceGenerator.firstTermLabel')} min={-10} max={10} step={0.5} value={first} onChange={setFirst} />
          <Slider
            label={mode === 'linear' ? t('simulations.sequenceGenerator.differenceLabel') : t('simulations.sequenceGenerator.ratioLabel')}
            min={mode === 'linear' ? -10 : -3}
            max={mode === 'linear' ? 10 : 3}
            step={mode === 'linear' ? 0.5 : 0.1}
            value={param}
            onChange={setParam}
          />
          <Slider label={t('simulations.sequenceGenerator.countLabel')} min={3} max={20} step={1} value={count} onChange={(v) => setCount(Math.round(v))} />
        </div>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-3">
          <p className="text-xs text-text-muted mb-1">{t('simulations.sequenceGenerator.formulaLabel')}</p>
          <p className="font-mono">{formula}</p>
        </div>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-3">
          <p className="text-xs text-text-muted mb-1">{t('simulations.sequenceGenerator.termsLabel')}</p>
          <p className="font-mono text-sm flex flex-wrap gap-x-2">
            {terms.map((v, i) => (
              <span key={i}>{fmt(v, 3)}{i < terms.length - 1 ? ',' : ''}</span>
            ))}
          </p>
        </div>

        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="n" tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} stroke="var(--color-border)" />
              <YAxis tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} stroke="var(--color-border)" />
              <Line type="monotone" dataKey="y" stroke="var(--color-accent-sky-deep)" strokeWidth={2} dot={{ fill: 'var(--color-accent-warm)', r: 4 }} />
              <RTooltip
                contentStyle={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 6,
                }}
                formatter={(v: number) => fmt(Number(v))}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </SimulationPanel>
  );
}
