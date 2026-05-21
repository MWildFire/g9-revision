import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';

const SYMBOLS: Record<number, string> = {
  1: 'H', 2: 'He', 3: 'Li', 4: 'Be', 5: 'B', 6: 'C', 7: 'N', 8: 'O', 9: 'F', 10: 'Ne',
  11: 'Na', 12: 'Mg', 13: 'Al', 14: 'Si', 15: 'P', 16: 'S', 17: 'Cl', 18: 'Ar', 19: 'K', 20: 'Ca',
};

const CONFIGS: Record<number, string> = {
  1: '1', 2: '2', 3: '2,1', 4: '2,2', 5: '2,3', 6: '2,4', 7: '2,5', 8: '2,6', 9: '2,7', 10: '2,8',
  11: '2,8,1', 12: '2,8,2', 13: '2,8,3', 14: '2,8,4', 15: '2,8,5', 16: '2,8,6', 17: '2,8,7',
  18: '2,8,8', 19: '2,8,8,1', 20: '2,8,8,2',
};

const MASSES: Record<number, number> = {
  1: 1, 2: 4, 3: 7, 4: 9, 5: 11, 6: 12, 7: 14, 8: 16, 9: 19, 10: 20,
  11: 23, 12: 24, 13: 27, 14: 28, 15: 31, 16: 32, 17: 35, 18: 40, 19: 39, 20: 40,
};

export function AtomBuilder() {
  const { t } = useTranslation('chemistry');
  const [Z, setZ] = useState(11);
  const symbol = SYMBOLS[Z];
  const config = CONFIGS[Z] ?? '';
  const name = t(`simulations.atomBuilder.elements.${Z}`);
  const mass = MASSES[Z] ?? 0;
  const neutrons = mass - Z;
  const shells = config.split(',').map((s) => parseInt(s, 10));

  const cx = 180;
  const cy = 150;

  return (
    <SimulationPanel title={t('simulations.atomBuilder.title')} description={t('simulations.atomBuilder.description')}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6 items-center">
        <div className="space-y-3">
          <Slider label={t('simulations.atomBuilder.atomicNumberLabel')} min={1} max={20} step={1} value={Z} onChange={(v) => setZ(Math.round(v))} />

          {symbol ? (
            <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-2">
              <p className="text-xl font-serif font-medium">{symbol} <span className="text-text-muted text-base">— {name}</span></p>
              <p><span className="text-text-muted">{t('simulations.atomBuilder.protonsLabel')}:</span> <span className="font-mono">{Z}</span> {t('simulations.atomBuilder.protonsHint')}</p>
              <p><span className="text-text-muted">{t('simulations.atomBuilder.massLabel')}:</span> <span className="font-mono">{mass}</span></p>
              <p><span className="text-text-muted">{t('simulations.atomBuilder.neutronsLabel')}:</span> <span className="font-mono">{neutrons}</span> {t('simulations.atomBuilder.neutronsHint')}</p>
              <p><span className="text-text-muted">{t('simulations.atomBuilder.electronsLabel')}:</span> <span className="font-mono">{Z}</span> {t('simulations.atomBuilder.electronsHint')}</p>
              <p><span className="text-text-muted">{t('simulations.atomBuilder.configLabel')}:</span> <span className="font-mono">{config}</span></p>
              <p className="text-xs text-text-muted pt-2 border-t border-border">
                {t('simulations.atomBuilder.shellNote')}
              </p>
            </div>
          ) : null}
        </div>

        <svg viewBox="0 0 360 300" className="w-full max-w-[360px] mx-auto">
          <circle cx={cx} cy={cy} r={22} fill="var(--color-accent-warm)" fillOpacity={0.4} stroke="var(--color-accent-warm)" strokeWidth={2} />
          <text x={cx} y={cy - 2} textAnchor="middle" fontSize={11} fill="var(--color-text-primary)" fontWeight={600}>{Z}p</text>
          <text x={cx} y={cy + 11} textAnchor="middle" fontSize={11} fill="var(--color-text-primary)" fontWeight={600}>{neutrons}n</text>

          {shells.map((electrons, shellIdx) => {
            const r = 40 + shellIdx * 28;
            return (
              <g key={shellIdx}>
                <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-border)" strokeDasharray="2 3" />
                {Array.from({ length: electrons }).map((_, eIdx) => {
                  const angle = (eIdx / electrons) * 2 * Math.PI - Math.PI / 2;
                  const ex = cx + r * Math.cos(angle);
                  const ey = cy + r * Math.sin(angle);
                  return <circle key={eIdx} cx={ex} cy={ey} r={4.5} fill="var(--color-accent-sky-deep)" stroke="var(--color-bg-secondary)" strokeWidth={1.5} />;
                })}
              </g>
            );
          })}
        </svg>
      </div>
    </SimulationPanel>
  );
}
