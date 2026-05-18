import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip as RTooltip, ReferenceDot, ReferenceLine } from 'recharts';
import { Slider } from '../../ui/Slider';
import { Tabs, SimulationPanel } from '../../ui/Tabs';

type Component = 'ohmic' | 'filament' | 'diode';

const V_MIN = -6;
const V_MAX = 6;
const STEPS = 80;

export function IVCharacteristics() {
  const { t } = useTranslation();
  const [component, setComponent] = useState<Component>('ohmic');
  const [voltage, setVoltage] = useState(3);

  const currentAt = (v: number) => {
    if (component === 'ohmic') {
      return v / 10;
    }
    if (component === 'filament') {
      // Filament lamp: resistance increases with current (T rises)
      // Approximate I(V) such that the curve flattens at high V
      const sign = v >= 0 ? 1 : -1;
      return sign * 0.6 * Math.sign(v) * Math.pow(Math.abs(v), 0.6);
    }
    // diode: only conducts above ~0.6V
    if (v < 0.6) return v < -6 ? -0.001 : 0.0;
    return 0.5 * (v - 0.6);
  };

  const data = useMemo(() => {
    const arr = [];
    for (let i = 0; i <= STEPS; i++) {
      const v = V_MIN + ((V_MAX - V_MIN) * i) / STEPS;
      arr.push({ v: parseFloat(v.toFixed(2)), i: parseFloat(currentAt(v).toFixed(4)) });
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [component]);

  const currentValue = currentAt(voltage);
  const apparentResistance = Math.abs(currentValue) > 1e-4 ? voltage / currentValue : Infinity;

  const description: Record<Component, string> = {
    ohmic: 'Straight line through origin — resistance is constant. This obeys Ohm\'s Law.',
    filament:
      'Curve flattens as voltage increases — the wire heats up, resistance rises. NOT ohmic.',
    diode: 'Current only flows in one direction once forward voltage > ~0.6 V. Strongly non-ohmic.',
  };

  return (
    <SimulationPanel
      title={t('electricity.simIV.title')}
      description={t('electricity.simIV.desc')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-text-secondary mb-2">{t('electricity.simIV.component')}</p>
            <Tabs
              tabs={[
                { id: 'ohmic', label: t('electricity.simIV.ohmic') },
                { id: 'filament', label: t('electricity.simIV.filament') },
                { id: 'diode', label: t('electricity.simIV.diode') },
              ]}
              activeId={component}
              onChange={(id) => setComponent(id as Component)}
            />
          </div>
          <Slider label={t('electricity.simIV.voltage')} unit="V" min={V_MIN} max={V_MAX} step={0.1} value={voltage} onChange={setVoltage} />

          <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2 text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-text-muted">I at V = {voltage.toFixed(1)} V</span>
              <span className="font-mono">{currentValue.toFixed(3)} A</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">V / I (effective R)</span>
              <span className="font-mono">{isFinite(apparentResistance) ? apparentResistance.toFixed(1) : '∞'} Ω</span>
            </div>
          </div>

          <p className="text-xs text-text-muted leading-relaxed">{description[component]}</p>
        </div>

        <div className="h-72 bg-bg-primary rounded-md border border-border p-2">
          <p className="text-xs text-text-muted px-2">I vs V</p>
          <ResponsiveContainer width="100%" height="92%">
            <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 4 }}>
              <XAxis
                dataKey="v"
                type="number"
                domain={[V_MIN, V_MAX]}
                stroke="var(--color-text-muted)"
                fontSize={10}
                unit=" V"
                tickFormatter={(v) => v.toFixed(0)}
              />
              <YAxis stroke="var(--color-text-muted)" fontSize={10} unit=" A" width={48} />
              <ReferenceLine x={0} stroke="#9c8b73" strokeWidth={0.6} />
              <ReferenceLine y={0} stroke="#9c8b73" strokeWidth={0.6} />
              <RTooltip
                contentStyle={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 8,
                  fontSize: 12,
                }}
                labelFormatter={(v: number) => `V = ${v.toFixed(2)} V`}
                formatter={(v: number) => v.toFixed(3)}
              />
              <Line type="monotone" dataKey="i" stroke="var(--color-accent-warm)" strokeWidth={2} dot={false} isAnimationActive={false} />
              <ReferenceDot x={voltage} y={parseFloat(currentValue.toFixed(4))} r={5} fill="var(--color-text-primary)" stroke="var(--color-accent-warm)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </SimulationPanel>
  );
}
