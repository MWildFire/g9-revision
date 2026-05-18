import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip as RTooltip } from 'recharts';
import { Slider } from '../../ui/Slider';
import { SimulationPanel, Tabs } from '../../ui/Tabs';
import { fmt } from '../../../lib/math';

type FnType = 'square' | 'absolute' | 'sine' | 'reciprocal';

function baseFn(type: FnType, x: number): number {
  switch (type) {
    case 'square': return x * x;
    case 'absolute': return Math.abs(x);
    case 'sine': return Math.sin(x);
    case 'reciprocal': return x === 0 ? NaN : 1 / x;
  }
}

export function FunctionTransformations() {
  const { t } = useTranslation('math');
  const [fnType, setFnType] = useState<FnType>('square');
  const [h, setH] = useState(0);
  const [k, setK] = useState(0);
  const [a, setA] = useState(1);

  const data = useMemo(() => {
    const rows: { x: number; base: number; transformed: number }[] = [];
    for (let x = -10; x <= 10; x += 0.1) {
      const base = baseFn(fnType, x);
      const transformed = a * baseFn(fnType, x - h) + k;
      rows.push({ x: Number(x.toFixed(2)), base, transformed });
    }
    return rows;
  }, [fnType, h, k, a]);

  const baseFnName = { square: 'x²', absolute: '|x|', sine: 'sin(x)', reciprocal: '1/x' }[fnType];
  const formula = `y = ${a === 1 ? '' : a === -1 ? '−' : fmt(a)} ${baseFnName.replace('x', h === 0 ? 'x' : `(x ${h < 0 ? '+' : '−'} ${Math.abs(h)})`)}${k === 0 ? '' : ` ${k < 0 ? '−' : '+'} ${Math.abs(k)}`}`;

  return (
    <SimulationPanel title={t('simulations.transformations.title')} description={t('simulations.transformations.description')}>
      <div className="space-y-4">
        <Tabs
          tabs={[
            { id: 'square', label: 'y = x²' },
            { id: 'absolute', label: 'y = |x|' },
            { id: 'sine', label: 'y = sin x' },
            { id: 'reciprocal', label: 'y = 1/x' },
          ]}
          activeId={fnType}
          onChange={(id) => setFnType(id as FnType)}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Slider label="Stretch (a)" min={-3} max={3} step={0.1} value={a} onChange={setA} />
          <Slider label="Horizontal shift (h)" min={-5} max={5} step={0.5} value={h} onChange={setH} />
          <Slider label="Vertical shift (k)" min={-5} max={5} step={0.5} value={k} onChange={setK} />
        </div>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-3 font-mono">
          {formula}
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: -10 }}>
              <XAxis type="number" dataKey="x" domain={[-10, 10]} tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} stroke="var(--color-border)" />
              <YAxis type="number" domain={[-10, 10]} tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} stroke="var(--color-border)" />
              <ReferenceLine x={0} stroke="var(--color-border)" />
              <ReferenceLine y={0} stroke="var(--color-border)" />
              <Line type="monotone" dataKey="base" stroke="var(--color-text-muted)" strokeWidth={1} strokeDasharray="3 3" dot={false} />
              <Line type="monotone" dataKey="transformed" stroke="var(--color-accent-warm)" strokeWidth={2} dot={false} />
              <RTooltip contentStyle={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: 6 }} formatter={(v: number) => fmt(Number(v))} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-text-muted">Dashed line: base function. Solid: transformed.</p>
      </div>
    </SimulationPanel>
  );
}
