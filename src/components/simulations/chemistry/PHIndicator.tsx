import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';

function indicatorColour(indicator: string, ph: number): string {
  if (indicator === 'litmus') return ph < 5 ? '#c44848' : ph > 8 ? '#3a7bbf' : '#a890a0';
  if (indicator === 'phenolphthalein') return ph < 8.2 ? '#f5efe6' : '#e16ab7';
  if (indicator === 'universal') {
    if (ph < 1.5) return '#d62828';
    if (ph < 3) return '#e76f51';
    if (ph < 5) return '#f4a261';
    if (ph < 6.5) return '#e9c46a';
    if (ph < 7.5) return '#84a984';
    if (ph < 9) return '#4d908e';
    if (ph < 11) return '#577590';
    return '#5a3d8c';
  }
  return '#cccccc';
}

function label(ph: number): string {
  if (ph < 3) return 'Strong acid';
  if (ph < 7) return 'Weak acid';
  if (ph === 7) return 'Neutral';
  if (ph < 11) return 'Weak alkali';
  return 'Strong alkali';
}

export function PHIndicator() {
  const { t } = useTranslation('chemistry');
  const [ph, setPh] = useState(7);
  const [indicator, setIndicator] = useState<'universal' | 'litmus' | 'phenolphthalein'>('universal');
  const colour = indicatorColour(indicator, ph);

  const examples: Record<string, string> = {
    '0': 'Battery acid (pH 0)',
    '1': 'Stomach acid (pH 1)',
    '2': 'Lemon juice (pH 2)',
    '3': 'Vinegar (pH 3)',
    '4': 'Tomato (pH 4)',
    '5': 'Black coffee (pH 5)',
    '6': 'Milk (pH 6)',
    '7': 'Pure water (pH 7)',
    '8': 'Sea water (pH 8)',
    '9': 'Baking soda (pH 9)',
    '10': 'Soap (pH 10)',
    '11': 'Ammonia (pH 11)',
    '12': 'Bleach (pH 12)',
    '13': 'Drain cleaner (pH 13)',
    '14': 'NaOH 1M (pH 14)',
  };

  return (
    <SimulationPanel title={t('simulations.phIndicator.title')} description={t('simulations.phIndicator.description')}>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-text-secondary block mb-2">Indicator</label>
          <div className="flex gap-2 flex-wrap">
            {(['universal', 'litmus', 'phenolphthalein'] as const).map((id) => (
              <button
                key={id}
                onClick={() => setIndicator(id)}
                className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                  indicator === id ? 'bg-bg-secondary shadow-soft border-accent-clay' : 'border-border hover:bg-bg-secondary/50'
                }`}
              >
                {id === 'universal' ? 'Universal' : id === 'litmus' ? 'Litmus' : 'Phenolphthalein'}
              </button>
            ))}
          </div>
        </div>

        <Slider label="pH" min={0} max={14} step={0.5} value={ph} onChange={setPh} />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4 items-center">
          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-2">
            <p><span className="text-text-muted">pH:</span> <span className="font-mono font-medium">{ph}</span></p>
            <p><span className="text-text-muted">Classification:</span> <strong>{label(ph)}</strong></p>
            <p><span className="text-text-muted">Example:</span> {examples[Math.round(ph).toString()] ?? '—'}</p>
            <p className="text-xs text-text-muted pt-2 border-t border-border">
              Each pH unit = 10× change in [H⁺]. pH 1 has 10× more H⁺ than pH 2; 1000× more than pH 4.
            </p>
          </div>

          {/* Beaker visual */}
          <svg viewBox="0 0 200 240" className="w-full max-w-[220px] mx-auto">
            <path d="M 50 40 L 50 200 Q 50 220 70 220 L 130 220 Q 150 220 150 200 L 150 40" fill="none" stroke="var(--color-text-secondary)" strokeWidth={2} />
            <path d="M 55 50 L 55 198 Q 55 215 72 215 L 128 215 Q 145 215 145 198 L 145 50 Z" fill={colour} fillOpacity={0.7} />
            <line x1={45} y1={80} x2={55} y2={80} stroke="var(--color-text-muted)" />
            <line x1={45} y1={120} x2={55} y2={120} stroke="var(--color-text-muted)" />
            <line x1={45} y1={160} x2={55} y2={160} stroke="var(--color-text-muted)" />
            <text x={42} y={84} textAnchor="end" fontSize={9} fill="var(--color-text-muted)">300</text>
            <text x={42} y={124} textAnchor="end" fontSize={9} fill="var(--color-text-muted)">200</text>
            <text x={42} y={164} textAnchor="end" fontSize={9} fill="var(--color-text-muted)">100</text>
          </svg>
        </div>

        {/* pH spectrum bar */}
        <div className="space-y-2">
          <p className="text-xs text-text-muted">Universal indicator spectrum:</p>
          <div className="flex h-6 rounded-md overflow-hidden border border-border">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((p) => (
              <div key={p} className="flex-1 flex items-center justify-center" style={{ background: indicatorColour('universal', p) }}>
                <span className="text-[10px] font-mono" style={{ color: p > 6 && p < 9 ? '#fff' : 'rgba(0,0,0,0.7)' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
