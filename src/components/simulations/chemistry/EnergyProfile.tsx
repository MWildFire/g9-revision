import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel, Tabs } from '../../ui/Tabs';
import { Slider } from '../../ui/Slider';

type Mode = 'exo' | 'endo';

export function EnergyProfile() {
  const { t } = useTranslation('chemistry');
  const [mode, setMode] = useState<Mode>('exo');
  const [activation, setActivation] = useState(80);
  const [deltaH, setDeltaH] = useState(60);

  const reactantsY = mode === 'exo' ? 220 - 40 : 220 - 40;
  const productsY = mode === 'exo' ? reactantsY + deltaH : reactantsY - deltaH;
  const peakY = reactantsY - activation;
  const W = 420;
  const reactantsX = 40;
  const productsX = W - 40;
  const peakX = (reactantsX + productsX) / 2;

  return (
    <SimulationPanel title={t('simulations.energyProfile.title')} description={t('simulations.energyProfile.description')}>
      <div className="space-y-4">
        <Tabs
          tabs={[
            { id: 'exo', label: 'Exothermic (ΔH negative)' },
            { id: 'endo', label: 'Endothermic (ΔH positive)' },
          ]}
          activeId={mode}
          onChange={(id) => setMode(id as Mode)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Slider label="Activation energy E_a" min={20} max={140} step={5} value={activation} onChange={setActivation} unit="kJ/mol" />
          <Slider label={`|ΔH| ${mode === 'exo' ? '(reactants lose)' : '(products gain)'}`} min={20} max={120} step={5} value={deltaH} onChange={setDeltaH} unit="kJ/mol" />
        </div>

        <svg viewBox={`0 0 ${W} 280`} className="w-full bg-bg-tertiary/20 rounded-md border border-border">
          {/* Axes */}
          <line x1={30} y1={20} x2={30} y2={250} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={30} y1={250} x2={W - 10} y2={250} stroke="var(--color-border)" strokeWidth={1} />
          <text x={20} y={150} textAnchor="end" fontSize={10} fill="var(--color-text-muted)" transform="rotate(-90 10 150)">Energy</text>
          <text x={(W - 30) / 2 + 30} y={270} textAnchor="middle" fontSize={10} fill="var(--color-text-muted)">Reaction progress</text>

          {/* Curve */}
          <path
            d={`M ${reactantsX} ${reactantsY} L ${reactantsX + 50} ${reactantsY} Q ${peakX} ${peakY - 30} ${productsX - 50} ${productsY} L ${productsX} ${productsY}`}
            fill="none"
            stroke={mode === 'exo' ? 'var(--color-accent-clay)' : 'var(--color-accent-sky-deep)'}
            strokeWidth={3}
          />

          {/* Activation energy arrow */}
          <line x1={peakX - 5} y1={reactantsY} x2={peakX - 5} y2={peakY - 15} stroke="var(--color-accent-warm)" strokeWidth={1.5} markerStart="url(#arrowDown)" markerEnd="url(#arrowUp)" />
          <text x={peakX + 5} y={(reactantsY + peakY) / 2} fontSize={10} fill="var(--color-accent-warm)">E_a = {activation}</text>

          {/* ΔH arrow */}
          <line x1={productsX - 25} y1={reactantsY} x2={productsX - 25} y2={productsY} stroke="var(--color-accent-sage)" strokeWidth={1.5} />
          <text x={productsX - 80} y={(reactantsY + productsY) / 2 + 4} fontSize={10} fill="var(--color-accent-sage)">
            ΔH = {mode === 'exo' ? '−' : '+'}{deltaH}
          </text>

          {/* Labels */}
          <text x={reactantsX + 5} y={reactantsY - 8} fontSize={11} fill="var(--color-text-secondary)" fontWeight={600}>Reactants</text>
          <text x={productsX - 5} y={productsY - 8} textAnchor="end" fontSize={11} fill="var(--color-text-secondary)" fontWeight={600}>Products</text>

          <defs>
            <marker id="arrowDown" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent-warm)" /></marker>
            <marker id="arrowUp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent-warm)" /></marker>
          </defs>
        </svg>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p>
            <strong>{mode === 'exo' ? 'Exothermic' : 'Endothermic'}</strong> —{' '}
            {mode === 'exo'
              ? 'products end up at lower energy than reactants. Heat is released. ΔH is negative.'
              : 'products end up at higher energy than reactants. Heat is absorbed. ΔH is positive.'}
          </p>
          <p className="text-xs text-text-muted">
            A catalyst would lower the peak (smaller E_a) without changing the start or end positions — ΔH stays the same.
          </p>
        </div>
      </div>
    </SimulationPanel>
  );
}
