import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { format } from '../../../lib/physics';

interface DeviceRow {
  key: 'lamp' | 'kettle' | 'laptop' | 'ac' | 'fridge';
  defaultPower: number;
  defaultHours: number;
}

const DEVICES: DeviceRow[] = [
  { key: 'lamp', defaultPower: 10, defaultHours: 5 },
  { key: 'kettle', defaultPower: 2000, defaultHours: 0.2 },
  { key: 'laptop', defaultPower: 65, defaultHours: 6 },
  { key: 'ac', defaultPower: 1200, defaultHours: 4 },
  { key: 'fridge', defaultPower: 100, defaultHours: 24 },
];

export function PowerConsumption() {
  const { t } = useTranslation();
  const [rate, setRate] = useState(0.38);
  const [rows, setRows] = useState(
    DEVICES.map((d) => ({ key: d.key, power: d.defaultPower, hours: d.defaultHours })),
  );

  let totalKwh = 0;
  const data = rows.map((r) => {
    const kwh = (r.power * r.hours * 30) / 1000;
    totalKwh += kwh;
    return { ...r, kwh };
  });

  const totalCost = totalKwh * rate;

  return (
    <SimulationPanel title={t('electricity.sim4.title')} description={t('electricity.sim4.desc')}>
      <div className="space-y-4">
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="text-xs uppercase text-text-muted">
                <th className="px-2 py-2 font-medium">{t('electricity.sim4.device')}</th>
                <th className="px-2 py-2 font-medium">{t('electricity.sim4.powerW')}</th>
                <th className="px-2 py-2 font-medium">{t('electricity.sim4.hoursPerDay')}</th>
                <th className="px-2 py-2 font-medium text-right">{t('electricity.sim4.kwhPerMonth')}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={row.key} className="border-t border-border">
                  <td className="px-2 py-3 font-medium">
                    {t(`electricity.sim4.devices.${row.key}`)}
                  </td>
                  <td className="px-2 py-3 w-40">
                    <Slider
                      label=""
                      min={5}
                      max={3000}
                      step={5}
                      unit="W"
                      value={row.power}
                      onChange={(v) =>
                        setRows((prev) => prev.map((r, j) => (i === j ? { ...r, power: v } : r)))
                      }
                    />
                  </td>
                  <td className="px-2 py-3 w-40">
                    <Slider
                      label=""
                      min={0}
                      max={24}
                      step={0.1}
                      unit="h"
                      value={row.hours}
                      onChange={(v) =>
                        setRows((prev) => prev.map((r, j) => (i === j ? { ...r, hours: v } : r)))
                      }
                    />
                  </td>
                  <td className="px-2 py-3 text-right font-mono">{row.kwh.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-border">
          <div>
            <p className="text-sm font-medium text-text-secondary mb-1.5">{t('electricity.sim4.costPerKwh')}</p>
            <Slider label="" min={0.05} max={1.0} step={0.01} unit="AED" value={rate} onChange={setRate} format={(v) => v.toFixed(2)} />
          </div>
          <div className="bg-bg-tertiary border border-border rounded-md px-4 py-3">
            <p className="text-xs uppercase tracking-wider text-text-muted">{t('electricity.sim4.kwhPerMonth')}</p>
            <p className="font-mono text-2xl text-text-primary">{format(totalKwh, 1)}</p>
            <p className="text-xs text-text-muted">kWh</p>
          </div>
          <div className="bg-bg-secondary border border-border rounded-md px-4 py-3" style={{ borderLeft: '4px solid var(--color-accent-warm)' }}>
            <p className="text-xs uppercase tracking-wider text-text-muted">{t('electricity.sim4.monthlyCost')}</p>
            <p className="font-mono text-2xl text-text-primary">{format(totalCost, 1)}</p>
            <p className="text-xs text-text-muted">AED</p>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
