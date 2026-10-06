import { energyProfileGeometry } from '../../../definitions/chemistryModels';
import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel, Tabs } from '../../ui/Tabs';
import { Slider } from '../../ui/Slider';

type Mode = 'exo' | 'endo';

export function EnergyProfile() {
  const { t } = useTranslation('chemistry');
  const [mode, setMode] = useState<Mode>('exo');
  const [activation, setActivation] = useState(80);
  const [deltaH, setDeltaH] = useState(60);

  const markerId = useId().replace(/:/g, '');
  const geometry = energyProfileGeometry(mode, activation, deltaH);
  const { reactantsY, productsY, peakY } = geometry;
  const W = 420;
  const reactantsX = 40;
  const productsX = W - 40;
  const peakX = (reactantsX + productsX) / 2;

  return (
    <SimulationPanel title={t('simulations.energyProfile.title')} description={t('simulations.energyProfile.description')}>
      <div className="space-y-4">
        <Tabs
          tabs={[
            { id: 'exo', label: t('simulations.energyProfile.exoTab') },
            { id: 'endo', label: t('simulations.energyProfile.endoTab') },
          ]}
          activeId={mode}
          onChange={(id) => setMode(id as Mode)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Slider label={t('simulations.energyProfile.activationLabel')} min={mode === 'endo' ? deltaH + 5 : 20} max={160} step={5} value={geometry.activation} onChange={setActivation} unit="kJ/mol" />
          <Slider label={mode === 'exo' ? t('simulations.energyProfile.deltaHExoLabel') : t('simulations.energyProfile.deltaHEndoLabel')} min={20} max={120} step={5} value={deltaH} onChange={setDeltaH} unit="kJ/mol" />
        </div>

        <div className="definition-diagram-viewport min-w-0" role="region" tabIndex={0} aria-label={t('simulations.energyProfile.title')}><svg style={{ minWidth: 640, maxWidth: 'none' }} role="img" aria-label={`${t('simulations.energyProfile.title')}; Ea = ${geometry.activation} kJ/mol; ΔH = ${geometry.deltaH} kJ/mol`} viewBox={`0 0 ${W} 280`} className="w-full bg-bg-tertiary/20 rounded-md border border-border">
          <title>{t('simulations.energyProfile.title')}</title>
          <desc>{t('simulations.energyProfile.description')}</desc>
          {/* Axes */}
          <line x1={30} y1={20} x2={30} y2={250} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={30} y1={250} x2={W - 10} y2={250} stroke="var(--color-border)" strokeWidth={1} />
          <text x={20} y={150} textAnchor="end" fontSize={10} fill="var(--color-text-muted)" transform="rotate(-90 10 150)">{t('simulations.energyProfile.yAxis')}</text>
          <text x={(W - 30) / 2 + 30} y={270} textAnchor="middle" fontSize={10} fill="var(--color-text-muted)">{t('simulations.energyProfile.xAxis')}</text>

          {/* Curve */}
          <path
            d={`M ${reactantsX} ${reactantsY} L ${reactantsX + 50} ${reactantsY} C ${reactantsX + 90} ${reactantsY}, ${peakX - 45} ${peakY}, ${peakX} ${peakY} C ${peakX + 45} ${peakY}, ${productsX - 90} ${productsY}, ${productsX - 50} ${productsY} L ${productsX} ${productsY}`}
            fill="none"
            stroke={mode === 'exo' ? 'var(--color-accent-clay)' : 'var(--color-accent-sky-deep)'}
            strokeWidth={3}
          />

          {/* Activation energy arrow */}
          <line x1={peakX - 5} y1={reactantsY} x2={peakX - 5} y2={peakY} stroke="var(--color-accent-warm)" strokeWidth={1.5} markerStart={`url(#${markerId}-arrow)`} markerEnd={`url(#${markerId}-arrow)`} />
          <text x={peakX + 5} y={(reactantsY + peakY) / 2} fontSize={10} fill="var(--color-accent-warm)">Eₐ = {geometry.activation}</text>

          {/* ΔH arrow */}
          <line x1={productsX - 25} y1={reactantsY} x2={productsX - 25} y2={productsY} stroke="var(--color-accent-sage)" strokeWidth={1.5} />
          <text x={productsX - 80} y={(reactantsY + productsY) / 2 + 4} fontSize={10} fill="var(--color-accent-sage)">
            ΔH = {mode === 'exo' ? '−' : '+'}{deltaH}
          </text>

          {/* Labels */}
          <text x={reactantsX + 5} y={reactantsY - 8} fontSize={11} fill="var(--color-text-secondary)" fontWeight={600}>{t('simulations.energyProfile.reactants')}</text>
          <text x={productsX - 5} y={productsY - 8} textAnchor="end" fontSize={11} fill="var(--color-text-secondary)" fontWeight={600}>{t('simulations.energyProfile.products')}</text>

          <defs>
            <marker id={`${markerId}-arrow`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent-warm)" /></marker>
          </defs>
        </svg></div>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p>
            <strong>{mode === 'exo' ? t('simulations.energyProfile.exoSummaryTitle') : t('simulations.energyProfile.endoSummaryTitle')}</strong> —{' '}
            {mode === 'exo' ? t('simulations.energyProfile.exoSummary') : t('simulations.energyProfile.endoSummary')}
          </p>
          <p className="text-xs text-text-muted">
            {t('simulations.energyProfile.catalystNote')}
          </p>
        </div>
      </div>
    <DefinitionSupport review={t('simulations.energyProfile.review', { returnObjects: true }) as DefinitionReview} />
    </SimulationPanel>
  );
}
