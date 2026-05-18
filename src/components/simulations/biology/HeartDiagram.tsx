import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

const CHAMBERS = [
  { id: 'ra', label: 'Right atrium', desc: 'Receives deoxygenated blood from the body via the vena cava.', x: 90, y: 80, w: 80, h: 50, fill: '#7b95b0' },
  { id: 'rv', label: 'Right ventricle', desc: 'Pumps deoxygenated blood to the lungs via the pulmonary artery.', x: 90, y: 140, w: 80, h: 80, fill: '#7b95b0' },
  { id: 'la', label: 'Left atrium', desc: 'Receives oxygenated blood from the lungs via pulmonary veins.', x: 230, y: 80, w: 80, h: 50, fill: '#c44848' },
  { id: 'lv', label: 'Left ventricle', desc: 'Pumps oxygenated blood to the entire body via the aorta. Thickest wall (high pressure).', x: 230, y: 140, w: 80, h: 80, fill: '#c44848' },
];

const VESSELS = [
  { id: 'vc', label: 'Vena cava', desc: 'Largest vein. Carries deoxygenated blood from body → right atrium.' },
  { id: 'pa', label: 'Pulmonary artery', desc: 'Only artery carrying deoxygenated blood. Right ventricle → lungs.' },
  { id: 'pv', label: 'Pulmonary vein', desc: 'Only vein carrying oxygenated blood. Lungs → left atrium.' },
  { id: 'ao', label: 'Aorta', desc: 'Largest artery. Carries oxygenated blood from left ventricle → body.' },
];

export function HeartDiagram() {
  const { t } = useTranslation('biology');
  const [active, setActive] = useState<string | null>(null);
  const part = [...CHAMBERS, ...VESSELS].find((p) => p.id === active);

  return (
    <SimulationPanel title={t('simulations.heartDiagram.title')} description={t('simulations.heartDiagram.description')}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-4 items-start">
        <svg viewBox="0 0 400 320" className="w-full bg-bg-tertiary/30 rounded-md border border-border">
          {/* Heart outline */}
          <path d="M 60 60 Q 60 30 200 30 Q 340 30 340 60 L 340 230 Q 340 280 200 290 Q 60 280 60 230 Z" fill="var(--color-bg-secondary)" stroke="var(--color-accent-clay)" strokeWidth={2} />

          {/* Septum */}
          <line x1={200} y1={50} x2={200} y2={280} stroke="var(--color-text-secondary)" strokeWidth={1.5} strokeDasharray="3 3" />

          {/* Chambers */}
          {CHAMBERS.map((c) => (
            <g key={c.id} onMouseEnter={() => setActive(c.id)} onMouseLeave={() => setActive(null)} style={{ cursor: 'pointer' }}>
              <rect x={c.x} y={c.y} width={c.w} height={c.h} fill={c.fill} fillOpacity={active === c.id ? 0.6 : 0.35} stroke={c.fill} strokeWidth={active === c.id ? 2 : 1} rx={8} />
              <text x={c.x + c.w / 2} y={c.y + c.h / 2 + 4} textAnchor="middle" fontSize={11} fill="var(--color-text-primary)" fontWeight={600}>{c.label.split(' ').map((w) => w[0]).join('')}</text>
            </g>
          ))}

          {/* Vessels (top, leading in) */}
          <g onMouseEnter={() => setActive('vc')} onMouseLeave={() => setActive(null)} style={{ cursor: 'pointer' }}>
            <rect x={110} y={20} width={20} height={40} fill="#7b95b0" stroke="#7b95b0" strokeWidth={1} />
            <text x={120} y={15} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)">VC</text>
          </g>
          <g onMouseEnter={() => setActive('pa')} onMouseLeave={() => setActive(null)} style={{ cursor: 'pointer' }}>
            <rect x={140} y={20} width={20} height={40} fill="#7b95b0" stroke="#7b95b0" strokeWidth={1} />
            <text x={150} y={15} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)">PA</text>
          </g>
          <g onMouseEnter={() => setActive('pv')} onMouseLeave={() => setActive(null)} style={{ cursor: 'pointer' }}>
            <rect x={240} y={20} width={20} height={40} fill="#c44848" stroke="#c44848" strokeWidth={1} />
            <text x={250} y={15} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)">PV</text>
          </g>
          <g onMouseEnter={() => setActive('ao')} onMouseLeave={() => setActive(null)} style={{ cursor: 'pointer' }}>
            <rect x={270} y={20} width={20} height={40} fill="#c44848" stroke="#c44848" strokeWidth={1} />
            <text x={280} y={15} textAnchor="middle" fontSize={9} fill="var(--color-text-secondary)">AO</text>
          </g>

          <text x={130} y={300} textAnchor="middle" fontSize={10} fill="#7b95b0" fontWeight={600}>Deoxygenated</text>
          <text x={270} y={300} textAnchor="middle" fontSize={10} fill="#c44848" fontWeight={600}>Oxygenated</text>
        </svg>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm min-h-[200px]">
          {part ? (
            <div>
              <p className="font-medium text-base mb-1">{part.label}</p>
              <p className="text-text-secondary">{part.desc}</p>
            </div>
          ) : (
            <p className="text-text-muted italic">Hover a chamber or vessel to see its function.</p>
          )}
          <div className="mt-4 pt-3 border-t border-border space-y-1 text-xs text-text-muted">
            <p><strong>RA</strong> = right atrium, <strong>RV</strong> = right ventricle</p>
            <p><strong>LA</strong> = left atrium, <strong>LV</strong> = left ventricle</p>
            <p><strong>VC</strong> vena cava, <strong>PA</strong> pulmonary artery, <strong>PV</strong> pulmonary vein, <strong>AO</strong> aorta</p>
            <p className="pt-2">Double circulation: blood passes the heart TWICE per circuit — once for the body, once for the lungs.</p>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
