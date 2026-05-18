import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';
import { toStandardForm, fmt } from '../../../lib/math';

export function StandardFormConverter() {
  const { t } = useTranslation('math');
  const [input, setInput] = useState('384000');
  const num = parseFloat(input);
  const valid = Number.isFinite(num) && num !== 0;
  const { a, exponent } = valid ? toStandardForm(num) : { a: 0, exponent: 0 };

  return (
    <SimulationPanel
      title={t('simulations.standardForm.title')}
      description={t('simulations.standardForm.description')}
    >
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-text-secondary mb-1.5 block">Enter a number</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono"
          />
        </label>
        {valid ? (
          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-text-muted text-sm">Ordinary:</span>
              <span className="font-mono text-lg">{num.toLocaleString('en-US', { useGrouping: false, maximumFractionDigits: 12 })}</span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-text-muted text-sm">Standard form:</span>
              <span className="font-mono text-lg">
                {fmt(a, 6)} × 10<sup>{exponent}</sup>
              </span>
            </div>
            <p className="text-xs text-text-muted">
              The decimal point shifts {exponent >= 0 ? 'left' : 'right'} by {Math.abs(exponent)} place{Math.abs(exponent) === 1 ? '' : 's'}.
            </p>
          </div>
        ) : (
          <p className="text-sm text-text-muted">Enter a non-zero number.</p>
        )}
      </div>
    </SimulationPanel>
  );
}
