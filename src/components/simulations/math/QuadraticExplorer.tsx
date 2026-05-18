import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine, ReferenceDot, Tooltip as RTooltip } from 'recharts';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { solveQuadratic, evalQuadratic, fmt } from '../../../lib/math';

export function QuadraticExplorer() {
  const { t } = useTranslation('math');
  const [a, setA] = useState(1);
  const [b, setB] = useState(-3);
  const [c, setC] = useState(2);

  const result = solveQuadratic(a, b, c);
  const data = useMemo(() => {
    const xs: { x: number; y: number }[] = [];
    for (let x = -10; x <= 10; x += 0.2) {
      xs.push({ x, y: evalQuadratic(a, b, c, x) });
    }
    return xs;
  }, [a, b, c]);

  return (
    <SimulationPanel
      title={t('simulations.quadraticExplorer.title')}
      description={t('simulations.quadraticExplorer.description')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Slider label="a" min={-5} max={5} step={0.1} value={a} onChange={setA} />
          <Slider label="b" min={-10} max={10} step={0.5} value={b} onChange={setB} />
          <Slider label="c" min={-10} max={10} step={0.5} value={c} onChange={setC} />

          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-2">
            <p className="font-mono">
              y = {fmt(a)}x² {b >= 0 ? '+' : '−'} {fmt(Math.abs(b))}x {c >= 0 ? '+' : '−'} {fmt(Math.abs(c))}
            </p>
            <p>
              <span className="text-text-muted">Vertex:</span>{' '}
              <span className="font-mono">({fmt(result.vertex.h)}, {fmt(result.vertex.k)})</span>
            </p>
            <p>
              <span className="text-text-muted">Axis of symmetry:</span>{' '}
              <span className="font-mono">x = {fmt(result.vertex.h)}</span>
            </p>
            <p>
              <span className="text-text-muted">Discriminant:</span>{' '}
              <span className="font-mono">{fmt(result.discriminant)}</span>
            </p>
            <p>
              <span className="text-text-muted">Roots:</span>{' '}
              {result.roots.length === 0 ? (
                <span className="italic text-text-muted">none (real)</span>
              ) : (
                <span className="font-mono">{result.roots.map((r) => fmt(r)).join(', ')}</span>
              )}
            </p>
          </div>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: -10 }}>
              <XAxis
                type="number"
                dataKey="x"
                domain={[-10, 10]}
                tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }}
                stroke="var(--color-border)"
              />
              <YAxis
                type="number"
                domain={[-20, 20]}
                tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }}
                stroke="var(--color-border)"
              />
              <ReferenceLine x={0} stroke="var(--color-border)" />
              <ReferenceLine y={0} stroke="var(--color-border)" />
              <ReferenceLine x={result.vertex.h} stroke="var(--color-accent-warm)" strokeDasharray="3 3" />
              <ReferenceDot
                x={result.vertex.h}
                y={result.vertex.k}
                r={5}
                fill="var(--color-accent-warm)"
                stroke="var(--color-bg-secondary)"
                strokeWidth={2}
              />
              {result.roots.map((r, i) => (
                <ReferenceDot
                  key={i}
                  x={r}
                  y={0}
                  r={4}
                  fill="var(--color-accent-sage)"
                  stroke="var(--color-bg-secondary)"
                  strokeWidth={2}
                />
              ))}
              <Line
                type="monotone"
                dataKey="y"
                stroke="var(--color-accent-sky-deep)"
                strokeWidth={2}
                dot={false}
              />
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
