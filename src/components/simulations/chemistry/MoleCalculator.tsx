import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';
import { fmt } from '../../../lib/math';

type Direction = 'm-to-n' | 'n-to-m' | 'n-to-V' | 'V-to-n';

const DIRECTION_KEYS: Record<Direction, string> = {
  'm-to-n': 'directionMassToMoles',
  'n-to-m': 'directionMolesToMass',
  'n-to-V': 'directionMolesToVolume',
  'V-to-n': 'directionVolumeToMoles',
};

const PRESETS: { label: string; mass: number }[] = [
  { label: 'H: 1', mass: 1 },
  { label: 'C: 12', mass: 12 },
  { label: 'O: 16', mass: 16 },
  { label: 'H₂O: 18', mass: 18 },
  { label: 'CO₂: 44', mass: 44 },
  { label: 'NaCl: 58.5', mass: 58.5 },
  { label: 'CaCO₃: 100', mass: 100 },
  { label: 'NaOH: 40', mass: 40 },
  { label: 'H₂SO₄: 98', mass: 98 },
  { label: 'HCl: 36.5', mass: 36.5 },
];

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
  else if (direction === 'n-to-V') { result = input * 22.7; unit = 'dm³'; formula = `V = n × 22.7 (STP) = ${input} × 22.7`; }
  else if (direction === 'V-to-n') { result = input / 22.7; unit = 'mol'; formula = `n = V / 22.7 (STP) = ${input} / 22.7`; }

  const showMolarMass = direction === 'm-to-n' || direction === 'n-to-m';

  const inputLabel = (() => {
    if (direction === 'm-to-n') return t('simulations.moleCalc.inputMass');
    if (direction === 'V-to-n') return t('simulations.moleCalc.inputVolume');
    return t('simulations.moleCalc.inputMoles');
  })();

  return (
    <SimulationPanel title={t('simulations.moleCalc.title')} description={t('simulations.moleCalc.description')}>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-text-secondary mb-2">{t('simulations.moleCalc.convertPrompt')}</p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(DIRECTION_KEYS) as Direction[]).map((id) => (
              <button
                key={id}
                onClick={() => setDirection(id)}
                className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                  direction === id ? 'bg-bg-secondary shadow-soft border-accent-clay' : 'border-border hover:bg-bg-secondary/50'
                }`}
              >
                {t(`simulations.moleCalc.${DIRECTION_KEYS[id]}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-medium text-text-secondary mb-1.5 block">{inputLabel}</span>
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(parseFloat(e.target.value) || 0)}
              className="w-full bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono"
            />
          </label>
          {showMolarMass ? (
            <label className="block">
              <span className="text-sm font-medium text-text-secondary mb-1.5 block">{t('simulations.moleCalc.molarMassInputLabel')}</span>
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
            {t('simulations.moleCalc.stpNote')}
          </p>
        </div>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm">
          <p className="text-xs uppercase tracking-wider text-text-muted mb-2">{t('simulations.moleCalc.presetLabel')}</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 font-mono text-xs">
            {PRESETS.map((p) => (
              <button key={p.label} onClick={() => setMolarMass(p.mass)} className="px-2 py-1 rounded border border-border hover:bg-bg-secondary">{p.label}</button>
            ))}
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
