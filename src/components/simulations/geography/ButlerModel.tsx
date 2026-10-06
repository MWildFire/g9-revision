import { DefinitionSupport } from '../../content/DefinitionSupport';
import { geographyReviews } from '../../../definitions/geographyReviews';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

const STAGES = [1, 2, 3, 4, 5, 6].map(id => ({ id }));

export function ButlerModel() {
  const { t, i18n } = useTranslation('geography');
  const l = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
  const [active, setActive] = useState(3);

  return (
    <SimulationPanel
      title={t('tourism.sections.butler.title')}
      description={t('tourism.sections.butler.examples')}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-start">
        <div role="region" tabIndex={0} aria-label={l("Scrollable diagram. Use horizontal arrow keys to read all labels.", "Прокручиваемая схема. Используй стрелки влево и вправо, чтобы прочитать все подписи.")} className="min-w-0 max-w-full overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><svg style={{ minWidth: 470 }} role="img" aria-label={l("Conceptual tourism life cycle with possible decline, stabilisation and rejuvenation", "Концептуальный жизненный цикл туризма с возможными спадом, стабилизацией и обновлением")} viewBox="0 0 400 220" className="w-full bg-bg-tertiary/30 rounded-md">
          <line x1={20} y1={200} x2={380} y2={200} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={20} y1={20} x2={20} y2={200} stroke="var(--color-border)" strokeWidth={1} />
          <text x={5} y={110} fontSize={12} fill="var(--color-text-muted)" transform="rotate(-90 10 110)">{l('Visitors', 'Посетители')}</text>
          <text x={200} y={215} fontSize={12} fill="var(--color-text-muted)" textAnchor="middle">{l('Time (no fixed duration)', 'Время (сроки не заданы)')}</text>

          <path d="M 20 195 Q 70 180 100 160 T 160 100 T 240 50 L 290 50 L 320 70 L 360 100" stroke="var(--color-accent-warm)" strokeWidth={2} fill="none" />
          <path d="M290 50 H375" stroke="currentColor" strokeDasharray="3 3" />
          <text x="390" y="23" textAnchor="end" fontSize="12" fill="currentColor">{l("Rejuvenation", "Обновление")}</text>
          <text x="390" y="115" textAnchor="end" fontSize="12" fill="currentColor">{l("Decline", "Спад")}</text>
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
                <text x={p.x} y={p.y + 22} fontSize={12} fill="var(--color-text-secondary)" textAnchor="middle">{s.id}</text>
              </g>
            );
          })}
        </svg></div>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4">
          <p className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Stage / pathway', 'Этап / траектория')} {active}</p>
          <p className="font-medium mb-2">{t(`tourism.sections.butler.stages.${active}`)}</p>
          <p className="text-sm text-text-secondary">{l("This is a conceptual model, not a timetable or a forecast. Destinations may stabilise, skip phases or experience renewed growth.", "Это концептуальная модель, а не расписание или прогноз. Дестинации могут стабилизироваться, пропускать этапы или снова расти.")}</p>
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
    <DefinitionSupport review={geographyReviews.butler} /></SimulationPanel>
  );
}
