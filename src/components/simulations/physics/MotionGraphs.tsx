import { motionGraphData } from '../../../definitions/physicsModels';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip as RTooltip, ReferenceLine } from 'recharts';
import { Slider } from '../../ui/Slider';
import { Tabs, SimulationPanel } from '../../ui/Tabs';

type Mode = 'constantV' | 'constantA' | 'decel';

const T_MAX = 10;
const STEPS = 50;

export function MotionGraphs() {
  const { t, i18n } = useTranslation('physics');
  const [mode, setMode] = useState<Mode>('constantA');
  const [u, setU] = useState(2);
  const [a, setA] = useState(2);

  const data = useMemo(() => {
    return motionGraphData(mode, u, a, T_MAX, STEPS);
  }, [mode, u, a]);

  return (
    <SimulationPanel title={t('forceMotion.simGraphs.title')} description={t('forceMotion.simGraphs.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-text-secondary mb-2">{t('forceMotion.simGraphs.scenario')}</p>
            <Tabs
              tabs={[
                { id: 'constantV', label: t('forceMotion.simGraphs.constantV') },
                { id: 'constantA', label: t('forceMotion.simGraphs.constantA') },
                { id: 'decel', label: t('forceMotion.simGraphs.decel') },
              ]}
              activeId={mode}
              onChange={(id) => setMode(id as Mode)}
            />
          </div>
          <Slider label={t('forceMotion.simGraphs.initialV')} unit="m/s" min={0} max={20} step={0.5} value={u} onChange={setU} />
          {mode !== 'constantV' ? (
            <Slider label={t('forceMotion.simGraphs.acceleration')} unit="m/s²" min={0.5} max={6} step={0.1} value={a} onChange={setA} />
          ) : null}
          <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2 text-xs space-y-1">
            <p className="text-text-secondary">
              {mode === 'constantV' && t('forceMotion.simGraphs.explainConstantV')}
              {mode === 'constantA' && t('forceMotion.simGraphs.explainConstantA')}
              {mode === 'decel' && t('forceMotion.simGraphs.explainDecel')}
            </p>
            <p className="text-text-muted font-mono">
              {t('forceMotion.simGraphs.distanceNote')}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <ChartPanel data={data} dataKey="d" title={i18n.language.startsWith('ru') ? 'Путь s − t' : 'Distance s − t'} yLabel="s (m)" color="#a8b5a0" />
          <ChartPanel data={data} dataKey="v" title={i18n.language.startsWith('ru') ? 'Скорость v − t' : 'Velocity v − t'} yLabel="v (m/s)" color="#c9a876" />
          <ChartPanel data={data} dataKey="a" title={i18n.language.startsWith('ru') ? 'Ускорение a − t' : 'Acceleration a − t'} yLabel="a (m/s²)" color="#c99a8e" />
        </div>
      </div>
    </SimulationPanel>
  );
}

function ChartPanel({
  data,
  dataKey,
  title,
  yLabel,
  color,
}: {
  data: any[];
  dataKey: string;
  title: string;
  yLabel: string;
  color: string;
}) {
  return (
    <div className="h-32 bg-bg-primary rounded-md border border-border p-2">
      <p className="text-[10px] text-text-muted px-2">{title}</p>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="t"
            type="number"
            domain={[0, T_MAX]}
            ticks={[0, 2, 4, 6, 8, 10]}
            tickFormatter={(v) => `${v}s`}
            stroke="var(--color-text-muted)"
            fontSize={9}
          />
          <YAxis stroke="var(--color-text-muted)" fontSize={9} width={42} />
          <ReferenceLine y={0} stroke="#9c8b73" strokeWidth={0.5} />
          <RTooltip
            contentStyle={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: 8,
              fontSize: 11,
            }}
            labelFormatter={(v: number) => `t = ${v.toFixed(1)} s`}
            formatter={(v: number) => [v.toFixed(2), yLabel]}
          />
          <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
