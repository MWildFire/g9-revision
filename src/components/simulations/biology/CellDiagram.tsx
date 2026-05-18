import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel, Tabs } from '../../ui/Tabs';

type Mode = 'animal' | 'plant';

const PARTS_ANIMAL = [
  { id: 'nucleus', label: 'Nucleus', cx: 200, cy: 130, r: 38, colour: 'var(--color-accent-warm)', desc: 'Contains DNA; controls cell activities.' },
  { id: 'nucleolus', label: 'Nucleolus', cx: 210, cy: 125, r: 8, colour: '#7a5230', desc: 'Inside nucleus; makes ribosomes.' },
  { id: 'cytoplasm', label: 'Cytoplasm', cx: 100, cy: 200, r: 12, colour: 'var(--color-accent-sky)', desc: 'Jelly-like fluid where reactions occur.' },
  { id: 'membrane', label: 'Cell membrane', cx: 200, cy: 30, r: 0, colour: 'var(--color-accent-sage)', desc: 'Selectively permeable barrier; controls entry/exit.' },
  { id: 'mitochondria', label: 'Mitochondria', cx: 280, cy: 170, r: 14, colour: 'var(--color-accent-clay)', desc: 'Site of aerobic respiration; releases ATP energy.' },
  { id: 'ribosome', label: 'Ribosomes', cx: 130, cy: 90, r: 5, colour: '#6b4226', desc: 'Tiny dots; make proteins.' },
  { id: 'ribosome2', label: 'Ribosomes', cx: 290, cy: 110, r: 5, colour: '#6b4226', desc: 'Tiny dots; make proteins.' },
];

const PARTS_PLANT = [
  ...PARTS_ANIMAL,
  { id: 'wall', label: 'Cell wall', cx: 200, cy: 20, r: 0, colour: 'var(--color-accent-clay)', desc: 'Rigid cellulose layer outside membrane; gives shape.' },
  { id: 'chloroplast', label: 'Chloroplast', cx: 130, cy: 170, r: 16, colour: 'var(--color-accent-sage)', desc: 'Contains chlorophyll; site of photosynthesis.' },
  { id: 'vacuole', label: 'Vacuole', cx: 280, cy: 220, r: 30, colour: 'var(--color-accent-sky-deep)', desc: 'Large permanent vacuole stores cell sap.' },
];

export function CellDiagram() {
  const { t } = useTranslation('biology');
  const [mode, setMode] = useState<Mode>('animal');
  const [hovered, setHovered] = useState<string | null>(null);
  const parts = mode === 'animal' ? PARTS_ANIMAL : PARTS_PLANT;
  const active = parts.find((p) => p.id === hovered);

  return (
    <SimulationPanel title={t('simulations.cellDiagram.title')} description={t('simulations.cellDiagram.description')}>
      <div className="space-y-4">
        <Tabs
          tabs={[
            { id: 'animal', label: 'Animal cell' },
            { id: 'plant', label: 'Plant cell' },
          ]}
          activeId={mode}
          onChange={(id) => setMode(id as Mode)}
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-4 items-start">
          <svg viewBox="0 0 400 280" className="w-full bg-bg-tertiary/30 rounded-md border border-border">
            {/* Cell outline */}
            {mode === 'plant' ? (
              <rect x={40} y={20} width={320} height={240} rx={10} fill="var(--color-accent-sage)" fillOpacity={0.15} stroke="var(--color-accent-clay)" strokeWidth={4} />
            ) : (
              <ellipse cx={200} cy={140} rx={170} ry={120} fill="var(--color-accent-sky)" fillOpacity={0.15} stroke="var(--color-accent-sage)" strokeWidth={2} />
            )}

            {/* Inner cytoplasm boundary */}
            {mode === 'plant' ? (
              <rect x={48} y={28} width={304} height={224} rx={8} fill="none" stroke="var(--color-accent-sage)" strokeWidth={1.5} strokeDasharray="3 3" />
            ) : null}

            {/* Vacuole */}
            {mode === 'plant' ? <circle cx={280} cy={220} r={30} fill="var(--color-accent-sky-deep)" fillOpacity={0.2} stroke="var(--color-accent-sky-deep)" strokeWidth={1.5} onMouseEnter={() => setHovered('vacuole')} onMouseLeave={() => setHovered(null)} style={{ cursor: 'pointer' }} /> : null}

            {/* Chloroplast */}
            {mode === 'plant' ? (
              <g onMouseEnter={() => setHovered('chloroplast')} onMouseLeave={() => setHovered(null)} style={{ cursor: 'pointer' }}>
                <ellipse cx={130} cy={170} rx={20} ry={10} fill="var(--color-accent-sage)" fillOpacity={0.7} />
                <circle cx={125} cy={170} r={2} fill="#3a5c3a" />
                <circle cx={135} cy={170} r={2} fill="#3a5c3a" />
              </g>
            ) : null}

            {/* Mitochondria */}
            <g onMouseEnter={() => setHovered('mitochondria')} onMouseLeave={() => setHovered(null)} style={{ cursor: 'pointer' }}>
              <ellipse cx={280} cy={170} rx={18} ry={9} fill="var(--color-accent-clay)" fillOpacity={0.7} />
              <line x1={266} y1={170} x2={294} y2={170} stroke="#6b3a2a" strokeWidth={0.5} />
            </g>

            {/* Nucleus */}
            <g onMouseEnter={() => setHovered('nucleus')} onMouseLeave={() => setHovered(null)} style={{ cursor: 'pointer' }}>
              <circle cx={200} cy={130} r={38} fill="var(--color-accent-warm)" fillOpacity={0.4} stroke="var(--color-accent-warm)" strokeWidth={2} />
              <circle cx={210} cy={125} r={8} fill="#7a5230" />
            </g>

            {/* Ribosomes */}
            {[[130, 90], [290, 110], [110, 230], [320, 100]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={3} fill="#6b4226" onMouseEnter={() => setHovered('ribosome')} onMouseLeave={() => setHovered(null)} style={{ cursor: 'pointer' }} />
            ))}

            {/* Labels with leader lines */}
            <text x={200} y={100} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)" fontWeight={hovered === 'nucleus' ? 700 : 400}>Nucleus</text>
            <text x={280} y={155} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)" fontWeight={hovered === 'mitochondria' ? 700 : 400}>Mitochondria</text>
            {mode === 'plant' ? <text x={130} y={188} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)" fontWeight={hovered === 'chloroplast' ? 700 : 400}>Chloroplast</text> : null}
            {mode === 'plant' ? <text x={280} y={258} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)" fontWeight={hovered === 'vacuole' ? 700 : 400}>Vacuole</text> : null}
            {mode === 'plant' ? <text x={200} y={15} textAnchor="middle" fontSize={9} fill="var(--color-accent-clay)" fontWeight={600}>Cell wall</text> : null}
            <text x={200} y={275} textAnchor="middle" fontSize={9} fill="var(--color-accent-sage)" fontWeight={600}>Cell membrane</text>
          </svg>

          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm min-h-[180px]">
            {active ? (
              <div>
                <p className="font-medium text-base mb-1">{active.label}</p>
                <p className="text-text-secondary">{active.desc}</p>
              </div>
            ) : (
              <p className="text-text-muted italic">Hover an organelle to see its function.</p>
            )}
            <div className="mt-4 pt-3 border-t border-border">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">{mode === 'plant' ? 'Plant only' : 'Animal cells lack'}</p>
              <p className="text-xs text-text-secondary">Cell wall, chloroplasts, large permanent vacuole.</p>
            </div>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
