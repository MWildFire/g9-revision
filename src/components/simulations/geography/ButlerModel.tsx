import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

const STAGES = [
  { id: 1, key: '1', example: 'Few visitors arrive at unspoiled destinations.' },
  { id: 2, key: '2', example: 'Local entrepreneurs open guesthouses and cafés.' },
  { id: 3, key: '3', example: 'Hotel chains, airports, mass marketing — Benidorm grew this way.' },
  { id: 4, key: '4', example: 'Tourism dominates the local economy and identity.' },
  { id: 5, key: '5', example: 'Resort feels tired, repeat visitors decrease — late-stage Blackpool.' },
  { id: 6, key: '6', example: 'Decline (Atlantic City circa 1970s) or rejuvenation through reinvestment (Barcelona).' },
];

export function ButlerModel() {
  const { t } = useTranslation('geography');
  const [active, setActive] = useState(3);

  return (
    <SimulationPanel
      title={t('tourism.sections.butler.title')}
      description={t('tourism.sections.butler.examples')}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-start">
        <svg viewBox="0 0 400 220" className="w-full bg-bg-tertiary/30 rounded-md">
          <line x1={20} y1={200} x2={380} y2={200} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={20} y1={20} x2={20} y2={200} stroke="var(--color-border)" strokeWidth={1} />
          <text x={5} y={110} fontSize={10} fill="var(--color-text-muted)" transform="rotate(-90 10 110)">Visitors</text>
          <text x={200} y={215} fontSize={10} fill="var(--color-text-muted)" textAnchor="middle">Time</text>

          <path d="M 20 195 Q 70 180 100 160 T 160 100 T 240 50 L 290 50 L 320 70 L 360 100" stroke="var(--color-accent-warm)" strokeWidth={2} fill="none" />
          <path d="M 290 50 L 320 30 L 360 35" stroke="var(--color-accent-sage)" strokeWidth={2} fill="none" strokeDasharray="3 3" />

          {STAGES.map((s, i) => {
            const positions = [
              { x: 50, y: 192 }, { x: 110, y: 165 }, { x: 170, y: 110 },
              { x: 240, y: 60 }, { x: 290, y: 50 }, { x: 340, y: 50 },
            ];
            const p = positions[i];
            const isActive = active === s.id;
            return (
              <g key={s.id}>
                <circle cx={p.x} cy={p.y} r={isActive ? 9 : 6} fill={isActive ? 'var(--color-accent-warm)' : 'var(--color-bg-secondary)'} stroke="var(--color-accent-warm)" strokeWidth={2} style={{ cursor: 'pointer' }} onClick={() => setActive(s.id)} />
                <text x={p.x} y={p.y + 22} fontSize={9} fill="var(--color-text-secondary)" textAnchor="middle">{s.id}</text>
              </g>
            );
          })}
        </svg>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4">
          <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Stage {active}</p>
          <p className="font-medium mb-2">{t(`tourism.sections.butler.stages.${active}`)}</p>
          <p className="text-sm text-text-secondary">{STAGES[active - 1].example}</p>
          <div className="flex gap-1 mt-3 flex-wrap">
            {STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`text-xs px-2 py-1 rounded-md border ${active === s.id ? 'bg-bg-secondary border-accent-warm' : 'border-border text-text-muted hover:text-text-primary'}`}
              >
                {s.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
