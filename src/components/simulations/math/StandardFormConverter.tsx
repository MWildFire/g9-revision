import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';
import { fmt } from '../../../lib/math';
import { scientificNotation } from '../../../definitions/math-legacy-models';

export function StandardFormConverter() {
  const { t } = useTranslation('math');
  const [input, setInput] = useState('384000');
  const num = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(input.trim()) ? Number(input) : NaN;
  const valid = Number.isFinite(num) && num !== 0;
  const { a, exponent } = valid ? scientificNotation(num) : { a: 0, exponent: 0 };

  return (
    <SimulationPanel
      title={t('simulations.standardForm.title')}
      description={t('simulations.standardForm.description')}
    >
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-text-secondary mb-1.5 block">{t('simulations.standardForm.input')}</span>
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
              <span className="text-text-muted text-sm">{t('simulations.standardForm.ordinary')}:</span>
              <span className="font-mono text-lg">{num.toLocaleString('en-US', { useGrouping: false, maximumSignificantDigits: 15 })}</span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-text-muted text-sm">{t('simulations.standardForm.standard')}:</span>
              <span className="font-mono text-lg">
                {String(a)} × 10<sup>{exponent}</sup>
              </span>
            </div>
            <p className="text-xs text-text-muted">
              {t('simulations.standardForm.shift', { n: exponent })}
            </p>
          </div>
        ) : (
          <p className="text-sm text-text-muted">{t('simulations.standardForm.invalid')}</p>
        )}
      </div>
      <DefinitionSupport review={t('simulations.standardForm.review', { returnObjects: true }) as DefinitionReview} />
    </SimulationPanel>
  );
}
