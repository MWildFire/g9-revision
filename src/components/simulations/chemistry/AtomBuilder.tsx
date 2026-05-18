import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';

const ELEMENTS: Record<number, { symbol: string; name: string; configuration: string }> = {
  1: { symbol: 'H', name: 'Hydrogen', configuration: '1' },
  2: { symbol: 'He', name: 'Helium', configuration: '2' },
  3: { symbol: 'Li', name: 'Lithium', configuration: '2,1' },
  4: { symbol: 'Be', name: 'Beryllium', configuration: '2,2' },
  5: { symbol: 'B', name: 'Boron', configuration: '2,3' },
  6: { symbol: 'C', name: 'Carbon', configuration: '2,4' },
  7: { symbol: 'N', name: 'Nitrogen', configuration: '2,5' },
  8: { symbol: 'O', name: 'Oxygen', configuration: '2,6' },
  9: { symbol: 'F', name: 'Fluorine', configuration: '2,7' },
  10: { symbol: 'Ne', name: 'Neon', configuration: '2,8' },
  11: { symbol: 'Na', name: 'Sodium', configuration: '2,8,1' },
  12: { symbol: 'Mg', name: 'Magnesium', configuration: '2,8,2' },
  13: { symbol: 'Al', name: 'Aluminium', configuration: '2,8,3' },
  14: { symbol: 'Si', name: 'Silicon', configuration: '2,8,4' },
  15: { symbol: 'P', name: 'Phosphorus', configuration: '2,8,5' },
  16: { symbol: 'S', name: 'Sulfur', configuration: '2,8,6' },
  17: { symbol: 'Cl', name: 'Chlorine', configuration: '2,8,7' },
  18: { symbol: 'Ar', name: 'Argon', configuration: '2,8,8' },
  19: { symbol: 'K', name: 'Potassium', configuration: '2,8,8,1' },
  20: { symbol: 'Ca', name: 'Calcium', configuration: '2,8,8,2' },
};

const MASSES: Record<number, number> = {
  1: 1, 2: 4, 3: 7, 4: 9, 5: 11, 6: 12, 7: 14, 8: 16, 9: 19, 10: 20,
  11: 23, 12: 24, 13: 27, 14: 28, 15: 31, 16: 32, 17: 35, 18: 40, 19: 39, 20: 40,
};

export function AtomBuilder() {
  const { t } = useTranslation('chemistry');
  const [Z, setZ] = useState(11); // sodium default
  const el = ELEMENTS[Z];
  const mass = MASSES[Z] ?? 0;
  const neutrons = mass - Z;
  const shells = el?.configuration.split(',').map((s) => parseInt(s, 10)) ?? [];

  const cx = 180;
  const cy = 150;

  return (
    <SimulationPanel title={t('simulations.atomBuilder.title')} description={t('simulations.atomBuilder.description')}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6 items-center">
        <div className="space-y-3">
          <Slider label="Atomic number (Z)" min={1} max={20} step={1} value={Z} onChange={(v) => setZ(Math.round(v))} />

          {el ? (
            <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-2">
              <p className="text-xl font-serif font-medium">{el.symbol} <span className="text-text-muted text-base">— {el.name}</span></p>
              <p><span className="text-text-muted">Atomic number Z:</span> <span className="font-mono">{Z}</span> (protons)</p>
              <p><span className="text-text-muted">Mass number A:</span> <span className="font-mono">{mass}</span></p>
              <p><span className="text-text-muted">Neutrons:</span> <span className="font-mono">{neutrons}</span> (A − Z)</p>
              <p><span className="text-text-muted">Electrons:</span> <span className="font-mono">{Z}</span> (neutral atom)</p>
              <p><span className="text-text-muted">Configuration:</span> <span className="font-mono">{el.configuration}</span></p>
              <p className="text-xs text-text-muted pt-2 border-t border-border">
                Shell capacities: 2, 8, 8, 18… Fill inner shells first.
              </p>
            </div>
          ) : null}
        </div>

        <svg viewBox="0 0 360 300" className="w-full max-w-[360px] mx-auto">
          {/* Nucleus */}
          <circle cx={cx} cy={cy} r={22} fill="var(--color-accent-warm)" fillOpacity={0.4} stroke="var(--color-accent-warm)" strokeWidth={2} />
          <text x={cx} y={cy - 2} textAnchor="middle" fontSize={11} fill="var(--color-text-primary)" fontWeight={600}>{Z}p</text>
          <text x={cx} y={cy + 11} textAnchor="middle" fontSize={11} fill="var(--color-text-primary)" fontWeight={600}>{neutrons}n</text>

          {/* Shells */}
          {shells.map((electrons, shellIdx) => {
            const r = 40 + shellIdx * 28;
            return (
              <g key={shellIdx}>
                <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-border)" strokeDasharray="2 3" />
                {Array.from({ length: electrons }).map((_, eIdx) => {
                  const θ = (eIdx / electrons) * 2 * Math.PI - Math.PI / 2;
                  const ex = cx + r * Math.cos(θ);
                  const ey = cy + r * Math.sin(θ);
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
