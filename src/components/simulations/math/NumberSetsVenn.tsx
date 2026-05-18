import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

type NumberInfo = { N: boolean; Z: boolean; Q: boolean; R: boolean; explanation: string };

function classify(input: string): NumberInfo {
  const trimmed = input.trim();
  if (!trimmed) return { N: false, Z: false, Q: false, R: false, explanation: '—' };

  // Recognise common irrationals
  const irrationalPatterns = [/^√[2-9]/, /^√1[0-9]/, /^π$/, /^pi$/i, /^e$/, /^\d+√[2-9]/];
  if (irrationalPatterns.some((re) => re.test(trimmed))) {
    return { N: false, Z: false, Q: false, R: true, explanation: 'Irrational — belongs only to ℝ.' };
  }

  // Try parsing fractions like 3/4, -7/2
  const frac = trimmed.match(/^(-?\d+)\/(-?\d+)$/);
  if (frac) {
    const num = parseInt(frac[1], 10);
    const den = parseInt(frac[2], 10);
    if (den === 0) return { N: false, Z: false, Q: false, R: false, explanation: 'Division by zero is undefined.' };
    if (num % den === 0) {
      const integerVal = num / den;
      const isNat = integerVal > 0 && Number.isInteger(integerVal);
      return { N: isNat, Z: true, Q: true, R: true, explanation: `${num}/${den} simplifies to an integer (${integerVal}).` };
    }
    return { N: false, Z: false, Q: true, R: true, explanation: `Proper fraction — rational (ℚ) but not an integer.` };
  }

  const num = parseFloat(trimmed);
  if (!Number.isFinite(num)) {
    return { N: false, Z: false, Q: false, R: false, explanation: 'Cannot parse this value.' };
  }

  const isInt = Number.isInteger(num);
  const isNat = isInt && num > 0;
  // We assume any decimal entered terminates → rational
  return {
    N: isNat,
    Z: isInt,
    Q: true,
    R: true,
    explanation: isNat
      ? 'A positive whole number — belongs to all four sets.'
      : isInt
        ? 'An integer (including 0 or negative) — ℤ, ℚ, ℝ.'
        : 'A finite decimal — rational (ℚ) and real (ℝ).',
  };
}

export function NumberSetsVenn() {
  const { t } = useTranslation('math');
  const [value, setValue] = useState('3.14');
  const info = classify(value);

  const sets: { label: string; key: keyof Pick<NumberInfo, 'N' | 'Z' | 'Q' | 'R'>; cx: number; cy: number; r: number; color: string; description: string }[] = [
    { label: 'ℝ Real', key: 'R', cx: 150, cy: 100, r: 90, color: 'var(--color-accent-clay)', description: 'All numbers including irrationals.' },
    { label: 'ℚ Rational', key: 'Q', cx: 150, cy: 105, r: 70, color: 'var(--color-accent-warm)', description: 'Numbers expressible as a/b.' },
    { label: 'ℤ Integer', key: 'Z', cx: 150, cy: 110, r: 50, color: 'var(--color-accent-sky-deep)', description: 'Whole numbers, positive, negative, zero.' },
    { label: 'ℕ Natural', key: 'N', cx: 150, cy: 115, r: 30, color: 'var(--color-accent-sage)', description: 'Positive whole numbers 1, 2, 3…' },
  ];

  return (
    <SimulationPanel title={t('simulations.numberSetsVenn.title')} description={t('simulations.numberSetsVenn.description')}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-text-secondary mb-1.5 block">Enter a number (try: 5, -3, 1/2, 3.14, √2, π)</span>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono"
            />
          </label>

          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 space-y-2 text-sm">
            <p>{info.explanation}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {sets.map((s) => {
                const member = info[s.key];
                return (
                  <span
                    key={s.label}
                    className="text-xs px-2 py-1 rounded-md border font-mono"
                    style={{
                      borderColor: member ? s.color : 'var(--color-border)',
                      background: member ? s.color + '22' : 'transparent',
                      color: member ? s.color : 'var(--color-text-muted)',
                    }}
                  >
                    {member ? '✓' : '×'} {s.label}
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
              <g key={s.label}>
                <circle
                  cx={s.cx}
                  cy={s.cy}
                  r={s.r}
                  fill={s.color}
                  fillOpacity={member ? 0.35 : 0.08}
                  stroke={s.color}
                  strokeWidth={member ? 2 : 1}
                />
              </g>
            );
          })}
          {sets.map((s, i) => (
            <text
              key={s.label}
              x={s.cx}
              y={s.cy - s.r + 12 + i * 4}
              textAnchor="middle"
              fontSize={10}
              fill={info[s.key] ? s.color : 'var(--color-text-muted)'}
              fontWeight={info[s.key] ? 600 : 400}
            >
              {s.label}
            </text>
          ))}
        </svg>
      </div>
    </SimulationPanel>
  );
}
