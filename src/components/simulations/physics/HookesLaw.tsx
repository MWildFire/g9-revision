import { useTranslation } from 'react-i18next';
import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip as RTooltip, ReferenceLine, ReferenceDot } from 'recharts';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Formula } from '../../ui/Formula';
import { format } from '../../../lib/physics';
import { AlertTriangle } from 'lucide-react';

const ELASTIC_LIMIT_EXTENSION = 0.4;

export function HookesLaw() {
  const { t } = useTranslation('physics');
  const [k, setK] = useState(50);
  const [force, setForce] = useState(15);

  const extension = force / k;
  const exceeded = extension > ELASTIC_LIMIT_EXTENSION;

  const chartXMax = Math.max(ELASTIC_LIMIT_EXTENSION * 1.5, extension * 1.1);

  const data = useMemo(() => {
    const arr: { x: number; F: number }[] = [];
    const steps = 30;
    for (let i = 0; i <= steps; i++) {
      const x = (chartXMax * i) / steps;
      arr.push({
        x: parseFloat(x.toFixed(3)),
        F:
          x <= ELASTIC_LIMIT_EXTENSION
            ? parseFloat((k * x).toFixed(2))
            : parseFloat((k * ELASTIC_LIMIT_EXTENSION + (x - ELASTIC_LIMIT_EXTENSION) * k * 0.3).toFixed(2)),
      });
    }
    return arr;
  }, [k, chartXMax]);

  const currentF = extension <= ELASTIC_LIMIT_EXTENSION
    ? k * extension
    : k * ELASTIC_LIMIT_EXTENSION + (extension - ELASTIC_LIMIT_EXTENSION) * k * 0.3;

  // visualize spring: longer when more force applied
  const springLen = 80 + extension * 200;

  return (
    <SimulationPanel title={t('forcesEnergy.sim1.title')} description={t('forcesEnergy.sim1.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        <div>
          <svg viewBox="0 0 240 320" className="w-full max-w-[280px] mx-auto bg-bg-primary rounded-md border border-border">
            {/* ceiling */}
            <rect x="20" y="10" width="200" height="14" fill="#6b5b47" />
            <line x1="20" y1="24" x2="220" y2="24" stroke="#3d2f1f" strokeWidth="1.5" />
            {/* spring */}
            <Spring x={120} y0={24} y1={24 + Math.min(springLen, 220)} exceeded={exceeded} />
            {/* mass */}
            <g transform={`translate(120, ${24 + Math.min(springLen, 220)})`}>
              <rect x="-25" y="0" width="50" height="40" rx="5" fill="#c9a876" stroke="#6b5b47" strokeWidth="1.5" />
              <text x="0" y="25" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#3d2f1f">
                {force.toFixed(0)} N
              </text>
            </g>
          </svg>
        </div>

        <div className="space-y-4">
          <Slider label={t('forcesEnergy.sim1.k')} unit="N/m" min={10} max={200} step={5} value={k} onChange={setK} />
          <Slider label={t('forcesEnergy.sim1.force')} unit="N" min={0} max={50} step={0.5} value={force} onChange={setForce} />

          <Formula caption="x = F / k">
            x = {force.toFixed(1)} / {k.toFixed(0)} ={' '}
            <span className="text-accent-warm">{format(extension, 3)} m</span>
          </Formula>

          {exceeded ? (
            <div className="flex items-start gap-2 bg-bg-tertiary border-l-4 border-l-[var(--color-accent-clay)] border-y border-r border-border rounded-md px-3 py-2 text-xs text-text-secondary">
              <AlertTriangle size={14} className="text-accent-clay mt-0.5 shrink-0" />
              <span>{t('forcesEnergy.sim1.warning')}</span>
            </div>
          ) : null}

          <div className="h-44 bg-bg-primary rounded-md border border-border p-2">
            <p className="text-xs text-text-muted px-2 mb-1">{t('forcesEnergy.sim1.chartTitle')}</p>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <XAxis dataKey="x" tickFormatter={(v) => v.toFixed(2)} stroke="var(--color-text-muted)" fontSize={10} />
                <YAxis stroke="var(--color-text-muted)" fontSize={10} />
                <RTooltip
                  contentStyle={{
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => v.toFixed(2)}
                />
                <ReferenceLine
                  x={ELASTIC_LIMIT_EXTENSION}
                  stroke="var(--color-accent-clay)"
                  strokeDasharray="3 3"
                  label={{ value: 'limit', fill: 'var(--color-accent-clay)', fontSize: 10, position: 'top' }}
                />
                <Line type="monotone" dataKey="F" stroke="var(--color-accent-warm)" strokeWidth={2} dot={false} isAnimationActive={false} />
                <ReferenceDot
                  x={parseFloat(Math.min(extension, chartXMax).toFixed(3))}
                  y={parseFloat(currentF.toFixed(2))}
                  r={5}
                  fill="var(--color-text-primary)"
                  stroke="var(--color-accent-warm)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function Spring({ x, y0, y1, exceeded }: { x: number; y0: number; y1: number; exceeded: boolean }) {
  const segments = 12;
  const dy = (y1 - y0) / segments;
  const w = 22;
  let path = `M ${x} ${y0}`;
  for (let i = 0; i < segments; i++) {
    const yA = y0 + i * dy;
    const yB = y0 + (i + 1) * dy;
    const xMid = x + (i % 2 === 0 ? w : -w);
    path += ` Q ${xMid} ${(yA + yB) / 2} ${x} ${yB}`;
  }
  return (
    <path
      d={path}
      stroke={exceeded ? 'var(--color-accent-clay)' : 'var(--color-accent-warm)'}
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
  );
}
