import {FormulaTeaching} from '../../content/FormulaTeaching';
import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';
import { simplifySurd, parseIntegerInput, fmt } from '../../../lib/math';

export function SurdSimplifier() {
  const { t, i18n } = useTranslation('math');
  const [input, setInput] = useState('48');
  const n = parseIntegerInput(input, 1, 1000);
  const result = simplifySurd(n ?? 0);
  const isExact = n !== null && result.coef * result.coef * result.radicand === n;

  return (
    <SimulationPanel title={t('simulations.surdSimplifier.title')} description={t('simulations.surdSimplifier.description')}>
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-text-secondary mb-1.5 block">{t('simulations.surdSimplifier.input')}</span>
          <input
            type="number"
            min={1}
            max={1000}
            step={1}
            value={input}
            aria-invalid={n === null}
            aria-describedby="surd-input-error"
            onChange={(e) => setInput(e.target.value)}
            className="w-32 bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono"
          />
        </label>

        {n === null && <p id="surd-input-error" role="alert" className="text-sm text-text-secondary">
          {i18n.language.startsWith('ru') ? 'Введи целое число от 1 до 1000. Запись 1e2 означает 100; дробные и неполные значения не рассчитываются.' : 'Enter a whole number from 1 to 1000. The notation 1e2 means 100; fractional or incomplete values are not calculated.'}
        </p>}
        {isExact ? (
          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4">
            <p className="text-text-muted text-xs mb-2">{t('simulations.surdSimplifier.working')}:</p>
            <p className="font-mono mb-1">
              √{n} = √({result.coef * result.coef} × {result.radicand}) = √{result.coef * result.coef} × √{result.radicand} = {result.coef}√{result.radicand}
            </p>
            <hr className="border-border my-3" />
            <p className="font-mono text-lg">
              <span className="text-text-muted">{t('simulations.surdSimplifier.simplified')}:</span>{' '}
              {result.radicand === 1 ? `${result.coef}` : `${result.coef === 1 ? '' : result.coef}√${result.radicand}`}
            </p>
            <p className="text-sm text-text-secondary mt-2">
              {t('simulations.surdSimplifier.decimal')}: √{n} ≈ {fmt(Math.sqrt(n), 4)}
            </p>
          </div>
        ) : null}

        <div className="text-xs text-text-muted">
          {t('simulations.surdSimplifier.strategy')}
        </div>
      </div>
      <DefinitionSupport review={t('simulations.surdSimplifier.review', { returnObjects: true }) as DefinitionReview} />
    <FormulaTeaching id="surds"/></SimulationPanel>
  );
}
