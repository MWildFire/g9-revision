import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel, Tabs } from '../../ui/Tabs';

type Mode = 'normal' | 'elNino' | 'laNina';

export function EnsoToggle() {
  const { t } = useTranslation('geography');
  const [mode, setMode] = useState<Mode>('normal');

  const config = {
    normal: {
      windsArrow: 'east → west',
      warmPool: 'west',
      upwelling: 'strong off Peru',
      precipPeru: 'low',
      precipAus: 'normal',
    },
    elNino: {
      windsArrow: 'weakened',
      warmPool: 'centre / east',
      upwelling: 'suppressed',
      precipPeru: 'high (flooding)',
      precipAus: 'low (drought)',
    },
    laNina: {
      windsArrow: 'strengthened',
      warmPool: 'far west',
      upwelling: 'very strong',
      precipPeru: 'low (drought)',
      precipAus: 'high (flooding)',
    },
  }[mode];

  return (
    <SimulationPanel
      title={t('atmosphericHazards.sections.enso.title')}
      description={t(`atmosphericHazards.sections.enso.${mode}`)}
    >
      <div className="space-y-4">
        <Tabs
          tabs={[
            { id: 'normal', label: 'Normal' },
            { id: 'elNino', label: 'El Niño' },
            { id: 'laNina', label: 'La Niña' },
          ]}
          activeId={mode}
          onChange={(id) => setMode(id as Mode)}
        />

        <svg viewBox="0 0 400 180" className="w-full bg-bg-tertiary/30 rounded-md">
          <rect x={20} y={20} width={360} height={140} fill="var(--color-accent-sky)" fillOpacity={0.2} stroke="var(--color-border)" strokeWidth={1} />
          <rect x={20} y={120} width={360} height={40} fill="var(--color-accent-clay)" fillOpacity={0.3} />
          <text x={50} y={155} fontSize={11} fill="var(--color-text-secondary)">🇦🇺 Australia</text>
          <text x={310} y={155} fontSize={11} fill="var(--color-text-secondary)">🇵🇪 Peru</text>
          <text x={200} y={50} fontSize={10} fill="var(--color-text-muted)" textAnchor="middle">Trade winds: {config.windsArrow}</text>
          {mode === 'normal' && (
            <>
              <path d="M 320 85 L 90 85" stroke="var(--color-accent-warm)" strokeWidth={2} markerEnd="url(#arrow)" />
            </>
          )}
          {mode === 'elNino' && (
            <path d="M 200 100 Q 250 90 290 95" stroke="var(--color-accent-clay)" strokeWidth={3} fill="none" markerEnd="url(#arrow)" />
          )}
          {mode === 'laNina' && (
            <path d="M 380 85 L 60 85" stroke="var(--color-accent-warm)" strokeWidth={3} markerEnd="url(#arrow)" />
          )}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent-warm)" />
            </marker>
          </defs>
        </svg>

        <div className="grid grid-cols-2 gap-3 bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm">
          <div><span className="text-text-muted">Warm pool:</span> {config.warmPool}</div>
          <div><span className="text-text-muted">Upwelling:</span> {config.upwelling}</div>
          <div><span className="text-text-muted">Peru rainfall:</span> {config.precipPeru}</div>
          <div><span className="text-text-muted">Australia rainfall:</span> {config.precipAus}</div>
        </div>
      </div>
    </SimulationPanel>
  );
}
