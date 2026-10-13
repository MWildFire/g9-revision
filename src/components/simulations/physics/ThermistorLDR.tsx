import { useTranslation } from 'react-i18next';
import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip as RTooltip, ReferenceDot } from 'recharts';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { thermistorResistance, ldrResistance, formatResistance } from '../../../lib/physics';

// formatResistance (lib/physics) prints Ω; the Russian UI uses Ом, кОм and МОм.
function localizeOhm(text: string, ru: boolean): string {
  return ru ? text.replace('MΩ', 'МОм').replace('kΩ', 'кОм').replace('Ω', 'Ом') : text;
}

export function ThermistorLDR() {
  const { t, i18n } = useTranslation('physics');
  const [temp, setTemp] = useState(25);
  const [light, setLight] = useState(50);

  const rTherm = thermistorResistance(temp);
  const rLdr = ldrResistance(light);

  const thermData = useMemo(() => {
    const a = [];
    for (let i = 0; i <= 100; i += 5) a.push({ x: i, y: parseFloat(thermistorResistance(i).toFixed(0)) });
    return a;
  }, []);

  const ldrData = useMemo(() => {
    const a = [];
    for (let i = 1; i <= 100; i += 3) a.push({ x: i, y: parseFloat(ldrResistance(i).toFixed(0)) });
    return a;
  }, []);

  return (
    <SimulationPanel title={t('electricity.sim3.title')} description={t('electricity.sim3.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="font-medium text-text-primary">{i18n.language.startsWith('ru') ? 'Термистор (NTC)' : 'Thermistor (NTC)'}</h4>
          <Slider label={t('electricity.sim3.temperature')} unit="°C" min={0} max={100} step={1} value={temp} onChange={setTemp} />
          <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2 text-sm">
            <span className="text-text-muted">{t('electricity.sim3.thermistorR')}: </span>
            <span className="font-mono">{localizeOhm(formatResistance(rTherm), i18n.language.startsWith('ru'))}</span>
          </div>
          <div className="h-44 bg-bg-primary rounded-md border border-border p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={thermData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <XAxis dataKey="x" stroke="var(--color-text-muted)" fontSize={10} unit="°C" />
                <YAxis stroke="var(--color-text-muted)" fontSize={10} />
                <RTooltip
                  contentStyle={{
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Line type="monotone" dataKey="y" stroke="var(--color-accent-clay)" strokeWidth={2} dot={false} isAnimationActive={false} />
                <ReferenceDot x={temp} y={rTherm} r={5} fill="var(--color-accent-warm)" stroke="var(--color-text-primary)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-text-primary">{i18n.language.startsWith('ru') ? 'LDR (фоторезистор)' : 'LDR'}</h4>
          <Slider label={t('electricity.sim3.lightLevel')} unit={i18n.language.startsWith('ru') ? 'лк' : 'lx'} min={1} max={100} step={1} value={light} onChange={setLight} />
          <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2 text-sm">
            <span className="text-text-muted">{t('electricity.sim3.ldrR')}: </span>
            <span className="font-mono">{localizeOhm(formatResistance(rLdr), i18n.language.startsWith('ru'))}</span>
          </div>
          <div className="h-44 bg-bg-primary rounded-md border border-border p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ldrData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <XAxis dataKey="x" stroke="var(--color-text-muted)" fontSize={10} unit={i18n.language.startsWith('ru') ? 'лк' : 'lx'} />
                <YAxis stroke="var(--color-text-muted)" fontSize={10} />
                <RTooltip
                  contentStyle={{
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Line type="monotone" dataKey="y" stroke="var(--color-accent-sky)" strokeWidth={2} dot={false} isAnimationActive={false} />
                <ReferenceDot x={light} y={rLdr} r={5} fill="var(--color-accent-warm)" stroke="var(--color-text-primary)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
