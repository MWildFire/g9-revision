import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

const CHAMBER_IDS = ['ra', 'rv', 'la', 'lv'] as const;
const VESSEL_IDS = ['vc', 'pa', 'pv', 'ao'] as const;

const CHAMBER_GEOM = {
  ra: { x: 90, y: 80, w: 80, h: 50, fill: '#7b95b0', initials: 'RA' },
  rv: { x: 90, y: 140, w: 80, h: 80, fill: '#7b95b0', initials: 'RV' },
  la: { x: 230, y: 80, w: 80, h: 50, fill: '#c44848', initials: 'LA' },
  lv: { x: 230, y: 140, w: 80, h: 80, fill: '#c44848', initials: 'LV' },
} as const;

const VESSEL_GEOM = {
  vc: { x: 110, y: 20, fill: '#7b95b0', initials: 'VC' },
  pa: { x: 140, y: 20, fill: '#7b95b0', initials: 'PA' },
  pv: { x: 240, y: 20, fill: '#c44848', initials: 'PV' },
  ao: { x: 270, y: 20, fill: '#c44848', initials: 'AO' },
} as const;

export function HeartDiagram() {
  const { t } = useTranslation('biology');
  const [active, setActive] = useState<string | null>(null);

  const activeLabel = active
    ? (CHAMBER_IDS.includes(active as typeof CHAMBER_IDS[number])
        ? t(`simulations.heartDiagram.chambers.${active}.label`)
        : t(`simulations.heartDiagram.vessels.${active}.label`))
    : null;
  const activeDesc = active
    ? (CHAMBER_IDS.includes(active as typeof CHAMBER_IDS[number])
        ? t(`simulations.heartDiagram.chambers.${active}.desc`)
        : t(`simulations.heartDiagram.vessels.${active}.desc`))
    : null;

  const focus = (id: string) => setActive(id);
  const blur = () => setActive(null);

  return (
    <SimulationPanel title={t('simulations.heartDiagram.title')} description={t('simulations.heartDiagram.description')}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-4 items-start">
        <svg viewBox="0 0 400 320" className="w-full bg-bg-tertiary/30 rounded-md border border-border">
          <path d="M 60 60 Q 60 30 200 30 Q 340 30 340 60 L 340 230 Q 340 280 200 290 Q 60 280 60 230 Z" fill="var(--color-bg-secondary)" stroke="var(--color-accent-clay)" strokeWidth={2} />
          <line x1={200} y1={50} x2={200} y2={280} stroke="var(--color-text-secondary)" strokeWidth={1.5} strokeDasharray="3 3" />

          {CHAMBER_IDS.map((id) => {
            const c = CHAMBER_GEOM[id];
            const label = t(`simulations.heartDiagram.chambers.${id}.label`);
            return (
              <g
                key={id}
                role="button"
                tabIndex={0}
                aria-label={label}
                onMouseEnter={() => focus(id)}
                onMouseLeave={blur}
                onFocus={() => focus(id)}
                onBlur={blur}
                style={{ cursor: 'pointer' }}
              >
                <rect x={c.x} y={c.y} width={c.w} height={c.h} fill={c.fill} fillOpacity={active === id ? 0.6 : 0.35} stroke={c.fill} strokeWidth={active === id ? 2 : 1} rx={8} />
                <text x={c.x + c.w / 2} y={c.y + c.h / 2 + 4} textAnchor="middle" fontSize={11} fill="var(--color-text-primary)" fontWeight={600}>{c.initials}</text>
              </g>
            );
          })}

          {VESSEL_IDS.map((id) => {
            const v = VESSEL_GEOM[id];
            const label = t(`simulations.heartDiagram.vessels.${id}.label`);
            return (
              <g
                key={id}
                role="button"
                tabIndex={0}
                aria-label={label}
                onMouseEnter={() => focus(id)}
                onMouseLeave={blur}
                onFocus={() => focus(id)}
                onBlur={blur}
                style={{ cursor: 'pointer' }}
              >
                <rect x={v.x} y={v.y} width={20} height={40} fill={v.fill} stroke={v.fill} strokeWidth={1} />
                <text x={v.x + 10} y={15} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)">{v.initials}</text>
              </g>
            );
          })}

          <text x={130} y={300} textAnchor="middle" fontSize={10} fill="#7b95b0" fontWeight={600}>{t('simulations.heartDiagram.deoxygenated')}</text>
          <text x={270} y={300} textAnchor="middle" fontSize={10} fill="#c44848" fontWeight={600}>{t('simulations.heartDiagram.oxygenated')}</text>
        </svg>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm min-h-[200px]">
          {activeLabel ? (
            <div>
              <p className="font-medium text-base mb-1">{activeLabel}</p>
              <p className="text-text-secondary">{activeDesc}</p>
            </div>
          ) : (
            <p className="text-text-muted italic">{t('simulations.heartDiagram.hoverHint')}</p>
          )}
          <div className="mt-4 pt-3 border-t border-border space-y-1 text-xs text-text-muted">
            <p><strong>RA</strong> {t('simulations.heartDiagram.chambers.ra.label')}, <strong>RV</strong> {t('simulations.heartDiagram.chambers.rv.label')}</p>
            <p><strong>LA</strong> {t('simulations.heartDiagram.chambers.la.label')}, <strong>LV</strong> {t('simulations.heartDiagram.chambers.lv.label')}</p>
            <p><strong>VC</strong> {t('simulations.heartDiagram.vessels.vc.label')}, <strong>PA</strong> {t('simulations.heartDiagram.vessels.pa.label')}, <strong>PV</strong> {t('simulations.heartDiagram.vessels.pv.label')}, <strong>AO</strong> {t('simulations.heartDiagram.vessels.ao.label')}</p>
            <p className="pt-2">{t('simulations.heartDiagram.doubleCirc')}</p>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
