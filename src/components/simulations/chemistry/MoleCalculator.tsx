import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';
import { fmt } from '../../../lib/math';

type Direction = 'm-to-n' | 'n-to-m' | 'n-to-V' | 'V-to-n';

export function MoleCalculator() {
  const { t } = useTranslation('chemistry');
  const [direction, setDirection] = useState<Direction>('m-to-n');
  const [input, setInput] = useState(58.5);
  const [molarMass, setMolarMass] = useState(58.5);

  let result = 0;
  let unit = '';
  let formula = '';
  if (direction === 'm-to-n') { result = input / molarMass; unit = 'mol'; formula = `n = m / M = ${input} / ${molarMass}`; }
  else if (direction === 'n-to-m') { result = input * molarMass; unit = 'g'; formula = `m = n × M = ${input} × ${molarMass}`; }
  else if (direction === 'n-to-V') { result = input * 22.7; unit = 'dm³'; formula = `V = n × 22.7 (at STP) = ${input} × 22.7`; }
  else if (direction === 'V-to-n') { result = input / 22.7; unit = 'mol'; formula = `n = V / 22.7 (at STP) = ${input} / 22.7`; }

  const showMolarMass = direction === 'm-to-n' || direction === 'n-to-m';

  return (
    <SimulationPanel title={t('simulations.moleCalc.title')} description={t('simulations.moleCalc.description')}>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-text-secondary mb-2">Convert from / to:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'm-to-n', label: 'Mass (g) → moles' },
              { id: 'n-to-m', label: 'Moles → mass (g)' },
              { id: 'n-to-V', label: 'Moles → gas volume (dm³)' },
              { id: 'V-to-n', label: 'Gas volume (dm³) → moles' },
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => setDirection(b.id as Direction)}
                className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                  direction === b.id ? 'bg-bg-secondary shadow-soft border-accent-clay' : 'border-border hover:bg-bg-secondary/50'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-medium text-text-secondary mb-1.5 block">
              {direction === 'm-to-n' ? 'Mass (g)' : direction === 'n-to-m' ? 'Moles (n)' : direction === 'n-to-V' ? 'Moles (n)' : 'Volume (dm³)'}
            </span>
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(parseFloat(e.target.value) || 0)}
              className="w-full bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono"
            />
          </label>
          {showMolarMass ? (
            <label className="block">
              <span className="text-sm font-medium text-text-secondary mb-1.5 block">Molar mass M (g/mol)</span>
              <input
                type="number"
                value={molarMass}
                onChange={(e) => setMolarMass(parseFloat(e.target.value) || 1)}
                className="w-full bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono"
              />
            </label>
          ) : null}
        </div>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-2">
          <p className="font-mono text-xs text-text-muted">{formula}</p>
          <p className="text-lg font-medium font-mono">= {fmt(result, 4)} {unit}</p>
          <p className="text-xs text-text-muted pt-2 border-t border-border">
            STP = 0 °C, 100 kPa (IUPAC, 2019). 1 mole of any gas = 22.7 dm³. Particle count: 1 mol = 6.022 × 10²³ particles (Avogadro).
          </p>
        </div>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm">
          <p className="text-xs uppercase tracking-wider text-text-muted mb-2">Common molar masses</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 font-mono text-xs">
            <button onClick={() => setMolarMass(1)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">H: 1</button>
            <button onClick={() => setMolarMass(12)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">C: 12</button>
            <button onClick={() => setMolarMass(16)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">O: 16</button>
            <button onClick={() => setMolarMass(18)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">H₂O: 18</button>
            <button onClick={() => setMolarMass(44)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">CO₂: 44</button>
            <button onClick={() => setMolarMass(58.5)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">NaCl: 58.5</button>
            <button onClick={() => setMolarMass(100)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">CaCO₃: 100</button>
            <button onClick={() => setMolarMass(40)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">NaOH: 40</button>
            <button onClick={() => setMolarMass(98)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">H₂SO₄: 98</button>
            <button onClick={() => setMolarMass(36.5)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">HCl: 36.5</button>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
