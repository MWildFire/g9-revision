import { pHClassification } from '../../../definitions/chemistryModels';
import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';

type Indicator = 'universal' | 'litmus' | 'phenolphthalein';

function indicatorColour(indicator: Indicator, ph: number): string {
  if (indicator === 'litmus') return ph < 5 ? '#c44848' : ph > 8 ? '#3a7bbf' : '#a890a0';
  if (indicator === 'phenolphthalein') return ph < 8.2 ? '#f5efe6' : '#e16ab7';
  if (ph < 1.5) return '#d62828';
  if (ph < 3) return '#e76f51';
  if (ph < 5) return '#f4a261';
  if (ph < 6.5) return '#e9c46a';
  if (ph < 7.5) return '#84a984';
  if (ph < 9) return '#4d908e';
  if (ph < 11) return '#577590';
  return '#5a3d8c';
}

export function PHIndicator() {
  const { t } = useTranslation('chemistry');
  const [ph, setPh] = useState(7);
  const [indicator, setIndicator] = useState<Indicator>('universal');
  const colour = indicatorColour(indicator, ph);

  const classify = (p: number) => t(`simulations.phIndicator.${pHClassification(p)}`);

  const exampleKey = Math.round(ph).toString();
  const exampleText = t(`simulations.phIndicator.examples.${exampleKey}`, { defaultValue: '—' });

  return (
    <SimulationPanel title={t('simulations.phIndicator.title')} description={t('simulations.phIndicator.description')}>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-text-secondary block mb-2">{t('simulations.phIndicator.indicatorLabel')}</label>
          <div className="flex gap-2 flex-wrap">
            {(['universal', 'litmus', 'phenolphthalein'] as const).map((id) => (
              <button
                key={id}
                onClick={() => setIndicator(id)}
                className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                  indicator === id ? 'bg-bg-secondary shadow-soft border-accent-clay' : 'border-border hover:bg-bg-secondary/50'
                }`}
              >
                {t(`simulations.phIndicator.${id}`)}
              </button>
            ))}
          </div>
        </div>

        <Slider label={t('simulations.phIndicator.phLabel')} min={0} max={14} step={0.5} value={ph} onChange={setPh} />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4 items-center">
          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-2">
            <p><span className="text-text-muted">pH:</span> <span className="font-mono font-medium">{ph}</span></p>
            <p><span className="text-text-muted">{t('simulations.phIndicator.classificationLabel')}:</span> <strong>{classify(ph)}</strong></p>
            <p><span className="text-text-muted">{t('simulations.phIndicator.exampleLabel')}:</span> {exampleText}</p>
            <p className="text-xs text-text-muted pt-2 border-t border-border">
              {t('simulations.phIndicator.scaleNote')}
            </p>
          </div>

          <svg role="img" aria-label={`${t(`simulations.phIndicator.${indicator}`)}; pH ${ph}; ${classify(ph)}`} viewBox="0 0 200 240" className="w-full max-w-[220px] mx-auto">
            <title>{t(`simulations.phIndicator.${indicator}`)} — pH {ph}</title>
            <desc>{t('simulations.phIndicator.scaleNote')}</desc>
            <path d="M 50 40 L 50 200 Q 50 220 70 220 L 130 220 Q 150 220 150 200 L 150 40" fill="none" stroke="var(--color-text-secondary)" strokeWidth={2} />
            <path d="M 55 50 L 55 198 Q 55 215 72 215 L 128 215 Q 145 215 145 198 L 145 50 Z" fill={colour} fillOpacity={0.7} />
          </svg>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-text-muted">{t('simulations.phIndicator.spectrumLabel')}:</p>
          <div className="flex h-6 rounded-md overflow-hidden border border-border">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((p) => (
              <div key={p} className="flex-1 flex items-center justify-center" style={{ background: indicatorColour('universal', p) }}>
                <span className="text-[10px] font-mono" style={{ color: p < 1.5 || p >= 9 ? '#ffffff' : '#000000' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    <DefinitionSupport review={t('simulations.phIndicator.review', { returnObjects: true }) as DefinitionReview} />
    </SimulationPanel>
  );
}
