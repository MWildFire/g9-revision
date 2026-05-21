import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

export function PunnettSquare() {
  const { t } = useTranslation('biology');
  const [p1, setP1] = useState('Bb');
  const [p2, setP2] = useState('Bb');

  const valid = (g: string) => /^[A-Za-z]{2}$/.test(g);
  const v1 = valid(p1);
  const v2 = valid(p2);

  const alleles1 = v1 ? p1.split('') : ['?', '?'];
  const alleles2 = v2 ? p2.split('') : ['?', '?'];

  // Build the 4 offspring genotypes
  const offspring: string[][] = [];
  for (const a1 of alleles1) {
    const row: string[] = [];
    for (const a2 of alleles2) {
      const combined = [a1, a2].sort((x, y) => {
        if (x.toUpperCase() === y.toUpperCase()) return x === x.toUpperCase() ? -1 : 1;
        return x.toUpperCase() < y.toUpperCase() ? -1 : 1;
      }).join('');
      row.push(combined);
    }
    offspring.push(row);
  }

  const isDominant = (g: string) => /[A-Z]/.test(g);
  const counts: Record<string, number> = {};
  offspring.flat().forEach((g) => { counts[g] = (counts[g] || 0) + 1; });

  let dominantCount = 0;
  let recessiveCount = 0;
  offspring.flat().forEach((g) => {
    if (isDominant(g)) dominantCount += 1;
    else recessiveCount += 1;
  });

  return (
    <SimulationPanel title={t('simulations.punnett.title')} description={t('simulations.punnett.description')}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-medium text-text-secondary mb-1.5 block">{t('simulations.punnett.parent1Label')}</span>
            <input
              type="text"
              value={p1}
              onChange={(e) => setP1(e.target.value.slice(0, 2))}
              maxLength={2}
              placeholder="Bb"
              className="w-full bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono text-lg"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-text-secondary mb-1.5 block">{t('simulations.punnett.parent2Label')}</span>
            <input
              type="text"
              value={p2}
              onChange={(e) => setP2(e.target.value.slice(0, 2))}
              maxLength={2}
              placeholder="Bb"
              className="w-full bg-bg-tertiary/40 border border-border rounded-md px-3 py-2 font-mono text-lg"
            />
          </label>
        </div>

        <p className="text-xs text-text-muted">{t('simulations.punnett.alleleHint')}</p>

        {v1 && v2 ? (
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-4 items-start">
            <div className="bg-bg-secondary border border-border rounded-md p-4">
              <table className="w-full text-center font-mono text-lg">
                <thead>
                  <tr>
                    <th className="p-2"></th>
                    {alleles2.map((a, i) => (
                      <th key={i} className="p-2 text-text-muted font-medium">{a}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {alleles1.map((a, i) => (
                    <tr key={i}>
                      <th className="p-2 text-text-muted font-medium">{a}</th>
                      {offspring[i].map((g, j) => (
                        <td key={j} className="p-3 border border-border" style={{ background: /[A-Z]/.test(g) ? 'var(--color-accent-sage)' + '33' : 'var(--color-accent-clay)' + '33' }}>
                          {g}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-2">
              <p className="text-xs uppercase tracking-wider text-text-muted">{t('simulations.punnett.genotypeRatio')}</p>
              <div className="font-mono space-y-1">
                {Object.entries(counts).map(([g, c]) => (
                  <p key={g}><span style={{ color: /[A-Z]/.test(g) ? 'var(--color-accent-sage)' : 'var(--color-accent-clay)' }}>{g}</span>: {c}/4</p>
                ))}
              </div>
              <p className="text-xs uppercase tracking-wider text-text-muted pt-2 border-t border-border">{t('simulations.punnett.phenotypeRatio')}</p>
              <div className="font-mono space-y-1 text-sm">
                <p>{t('simulations.punnett.dominant')}: {dominantCount}/4</p>
                <p>{t('simulations.punnett.recessive')}: {recessiveCount}/4</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-text-muted">{t('simulations.punnett.invalidHint')}</p>
        )}
      </div>
    </SimulationPanel>
  );
}
