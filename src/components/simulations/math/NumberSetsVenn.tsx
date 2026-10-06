import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

import { classifyNumber } from '../../../definitions/math-legacy-models';
type SetKey = 'N' | 'Z' | 'Q' | 'R';

export function NumberSetsVenn() {
  const { t } = useTranslation('math');
  const [value, setValue] = useState('3.14');
  const info = classifyNumber(value);
  const explanation = info.explanationKey === 'dash'
    ? '—'
    : t(`simulations.numberSetsVenn.${info.explanationKey}`, info.explanationParams ?? {});

  const sets: { labelKey: string; key: SetKey; cx: number; cy: number; r: number; color: string }[] = [
    { labelKey: 'labelR', key: 'R', cx: 150, cy: 100, r: 90, color: 'var(--color-accent-clay)' },
    { labelKey: 'labelQ', key: 'Q', cx: 150, cy: 105, r: 70, color: 'var(--color-accent-warm)' },
    { labelKey: 'labelZ', key: 'Z', cx: 150, cy: 110, r: 50, color: 'var(--color-accent-sky-deep)' },
    { labelKey: 'labelN', key: 'N', cx: 150, cy: 115, r: 30, color: 'var(--color-accent-sage)' },
  ];

  return (
    <SimulationPanel title={t('simulations.numberSetsVenn.title')} description={t('simulations.numberSetsVenn.description')}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-text-secondary mb-1.5 block">{t('simulations.numberSetsVenn.inputLabel')}</span>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono"
            />
          </label>

          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 space-y-2 text-sm">
            <p>{explanation}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {sets.map((s) => {
                const member = info[s.key];
                const label = t(`simulations.numberSetsVenn.${s.labelKey}`);
                return (
                  <span
                    key={s.key}
                    className="text-xs px-2 py-1 rounded-md border font-mono"
                    style={{
                      borderColor: member ? s.color : 'var(--color-border)',
                      background: member ? s.color + '22' : 'transparent',
                      color: member ? s.color : 'var(--color-text-muted)',
                    }}
                  >
                    {member ? '✓' : '×'} {label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <svg role="img" aria-label={t('simulations.numberSetsVenn.alt')} viewBox="0 0 300 230" className="w-full max-w-[320px] mx-auto">
          {sets.map((s) => {
            const member = info[s.key];
            return (
              <circle
                key={s.key}
                cx={s.cx}
                cy={s.cy}
                r={s.r}
                fill={s.color}
                fillOpacity={member ? 0.35 : 0.08}
                stroke={s.color}
                strokeWidth={member ? 2 : 1}
              />
            );
          })}
          {sets.map((s, i) => (
            <text
              key={s.key}
              x={s.cx}
              y={s.cy - s.r + 12 + i * 4}
              textAnchor="middle"
              fontSize={10}
              fill={info[s.key] ? s.color : 'var(--color-text-muted)'}
              fontWeight={info[s.key] ? 600 : 400}
            >
              {t(`simulations.numberSetsVenn.${s.labelKey}`)}
            </text>
          ))}
        </svg>
      </div>
      <DefinitionSupport review={t('simulations.numberSetsVenn.review', { returnObjects: true }) as DefinitionReview} />
    </SimulationPanel>
  );
}
