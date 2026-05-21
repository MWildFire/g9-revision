import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel, Tabs } from '../../ui/Tabs';

type Mode = 'animal' | 'plant';

export function CellDiagram() {
  const { t } = useTranslation('biology');
  const [mode, setMode] = useState<Mode>('animal');
  const [hovered, setHovered] = useState<string | null>(null);

  const partLabel = (id: string) => t(`simulations.cellDiagram.parts.${id}.label`);
  const partDesc = (id: string) => t(`simulations.cellDiagram.parts.${id}.desc`);

  const handle = (id: string) => ({
    role: 'button' as const,
    tabIndex: 0,
    'aria-label': partLabel(id),
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
    onFocus: () => setHovered(id),
    onBlur: () => setHovered(null),
    style: { cursor: 'pointer' as const },
  });

  return (
    <SimulationPanel title={t('simulations.cellDiagram.title')} description={t('simulations.cellDiagram.description')}>
      <div className="space-y-4">
        <Tabs
          tabs={[
            { id: 'animal', label: t('simulations.cellDiagram.animalTab') },
            { id: 'plant', label: t('simulations.cellDiagram.plantTab') },
          ]}
          activeId={mode}
          onChange={(id) => setMode(id as Mode)}
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-4 items-start">
          <svg viewBox="0 0 400 280" className="w-full bg-bg-tertiary/30 rounded-md border border-border">
            {mode === 'plant' ? (
              <rect x={40} y={20} width={320} height={240} rx={10} fill="var(--color-accent-sage)" fillOpacity={0.15} stroke="var(--color-accent-clay)" strokeWidth={4} />
            ) : (
              <ellipse cx={200} cy={140} rx={170} ry={120} fill="var(--color-accent-sky)" fillOpacity={0.15} stroke="var(--color-accent-sage)" strokeWidth={2} />
            )}

            {mode === 'plant' ? (
              <rect x={48} y={28} width={304} height={224} rx={8} fill="none" stroke="var(--color-accent-sage)" strokeWidth={1.5} strokeDasharray="3 3" />
            ) : null}

            {mode === 'plant' ? <circle cx={280} cy={220} r={30} fill="var(--color-accent-sky-deep)" fillOpacity={0.2} stroke="var(--color-accent-sky-deep)" strokeWidth={1.5} {...handle('vacuole')} /> : null}

            {mode === 'plant' ? (
              <g {...handle('chloroplast')}>
                <ellipse cx={130} cy={170} rx={20} ry={10} fill="var(--color-accent-sage)" fillOpacity={0.7} />
                <circle cx={125} cy={170} r={2} fill="#3a5c3a" />
                <circle cx={135} cy={170} r={2} fill="#3a5c3a" />
              </g>
            ) : null}

            <g {...handle('mitochondria')}>
              <ellipse cx={280} cy={170} rx={18} ry={9} fill="var(--color-accent-clay)" fillOpacity={0.7} />
              <line x1={266} y1={170} x2={294} y2={170} stroke="#6b3a2a" strokeWidth={0.5} />
            </g>

            <g {...handle('nucleus')}>
              <circle cx={200} cy={130} r={38} fill="var(--color-accent-warm)" fillOpacity={0.4} stroke="var(--color-accent-warm)" strokeWidth={2} />
              <circle cx={210} cy={125} r={8} fill="#7a5230" />
            </g>

            {[[130, 90], [290, 110], [110, 230], [320, 100]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={3} fill="#6b4226" {...handle('ribosome')} />
            ))}

            <text x={200} y={100} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)" fontWeight={hovered === 'nucleus' ? 700 : 400}>{partLabel('nucleus')}</text>
            <text x={280} y={155} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)" fontWeight={hovered === 'mitochondria' ? 700 : 400}>{partLabel('mitochondria')}</text>
            {mode === 'plant' ? <text x={130} y={188} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)" fontWeight={hovered === 'chloroplast' ? 700 : 400}>{partLabel('chloroplast')}</text> : null}
            {mode === 'plant' ? <text x={280} y={258} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)" fontWeight={hovered === 'vacuole' ? 700 : 400}>{partLabel('vacuole')}</text> : null}
            {mode === 'plant' ? <text x={200} y={15} textAnchor="middle" fontSize={9} fill="var(--color-accent-clay)" fontWeight={600}>{partLabel('wall')}</text> : null}
            <text x={200} y={275} textAnchor="middle" fontSize={9} fill="var(--color-accent-sage)" fontWeight={600}>{partLabel('membrane')}</text>
          </svg>

          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm min-h-[180px]">
            {hovered ? (
              <div>
                <p className="font-medium text-base mb-1">{partLabel(hovered)}</p>
                <p className="text-text-secondary">{partDesc(hovered)}</p>
              </div>
            ) : (
              <p className="text-text-muted italic">{t('simulations.cellDiagram.hoverHint')}</p>
            )}
            <div className="mt-4 pt-3 border-t border-border">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                {mode === 'plant'
                  ? t('simulations.cellDiagram.plantOnlyLabel')
                  : t('simulations.cellDiagram.animalLacksLabel')}
              </p>
              <p className="text-xs text-text-secondary">{t('simulations.cellDiagram.plantExtras')}</p>
            </div>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
