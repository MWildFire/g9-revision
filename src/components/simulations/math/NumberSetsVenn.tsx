import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

type SetKey = 'N' | 'Z' | 'Q' | 'R';
type NumberInfo = Record<SetKey, boolean> & { explanationKey: string; explanationParams?: Record<string, string | number> };

function classify(input: string): NumberInfo {
  const trimmed = input.trim();
  if (!trimmed) return { N: false, Z: false, Q: false, R: false, explanationKey: 'dash' };

  const irrationalPatterns = [/^√[2-9]$/, /^√1[0-9]$/, /^π$/, /^pi$/i, /^e$/, /^\d+√[2-9]$/];
  if (irrationalPatterns.some((re) => re.test(trimmed))) {
    return { N: false, Z: false, Q: false, R: true, explanationKey: 'irrational' };
  }

  const frac = trimmed.match(/^(-?\d+)\/(-?\d+)$/);
  if (frac) {
    const num = parseInt(frac[1], 10);
    const den = parseInt(frac[2], 10);
    if (den === 0) return { N: false, Z: false, Q: false, R: false, explanationKey: 'divisionByZero' };
    if (num % den === 0) {
      const integerVal = num / den;
      const isNat = integerVal > 0 && Number.isInteger(integerVal);
      return {
        N: isNat,
        Z: true,
        Q: true,
        R: true,
        explanationKey: 'simplifiesToInteger',
        explanationParams: { frac: `${num}/${den}`, value: integerVal },
      };
    }
    return { N: false, Z: false, Q: true, R: true, explanationKey: 'properFraction' };
  }

  // Strict numeric parse — reject trailing garbage like "5xyz".
  if (!/^-?\d+(?:\.\d+)?$/.test(trimmed)) {
    return { N: false, Z: false, Q: false, R: false, explanationKey: 'cannotParse' };
  }
  const num = parseFloat(trimmed);
  if (!Number.isFinite(num)) {
    return { N: false, Z: false, Q: false, R: false, explanationKey: 'cannotParse' };
  }

  const isInt = Number.isInteger(num);
  const isNat = isInt && num > 0;
  return {
    N: isNat,
    Z: isInt,
    Q: true,
    R: true,
    explanationKey: isNat ? 'positiveWhole' : isInt ? 'integer' : 'finiteDecimal',
  };
}

export function NumberSetsVenn() {
  const { t } = useTranslation('math');
  const [value, setValue] = useState('3.14');
  const info = classify(value);
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

        <svg viewBox="0 0 300 230" className="w-full max-w-[320px] mx-auto">
          {sets.slice().reverse().map((s) => {
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
    </SimulationPanel>
  );
}
