import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';
import { simplifySurd, fmt } from '../../../lib/math';

export function SurdSimplifier() {
  const { t } = useTranslation('math');
  const [n, setN] = useState(48);
  const result = simplifySurd(n);
  const isExact = result.coef * result.coef * result.radicand === n;

  return (
    <SimulationPanel title={t('simulations.surdSimplifier.title')} description={t('simulations.surdSimplifier.description')}>
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-text-secondary mb-1.5 block">{t('simulations.surdSimplifier.input')}</span>
          <input
            type="number"
            min={1}
            max={1000}
            value={n}
            onChange={(e) => setN(Math.min(1000, Math.max(1, parseInt(e.target.value, 10) || 1)))}
            className="w-32 bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono"
          />
        </label>

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
    </SimulationPanel>
  );
}
