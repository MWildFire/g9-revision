import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel } from '../../ui/Tabs';

const CELLS = [
  { id: 'hadley-n', name: 'Hadley (N)', latLow: 0, latHigh: 30, colour: '#e76f51', desc: 'Warm air rises at equator (0°), travels north, descends at ~30°N. Trade winds at the surface flow back to equator.' },
  { id: 'ferrel-n', name: 'Ferrel (N)', latLow: 30, latHigh: 60, colour: '#a890a0', desc: 'Air rises at ~60°N, descends at ~30°N. Westerlies at the surface. Driven by neighbouring cells.' },
  { id: 'polar-n', name: 'Polar (N)', latLow: 60, latHigh: 90, colour: '#7b95b0', desc: 'Cold air descends at the pole, flows south at the surface, rises at ~60°N.' },
  { id: 'polar-s', name: 'Polar (S)', latLow: -90, latHigh: -60, colour: '#7b95b0', desc: 'Mirror image of Polar (N). Cold descending air at South Pole.' },
  { id: 'ferrel-s', name: 'Ferrel (S)', latLow: -60, latHigh: -30, colour: '#a890a0', desc: 'Mirror image of Ferrel (N). Westerlies in southern hemisphere.' },
  { id: 'hadley-s', name: 'Hadley (S)', latLow: -30, latHigh: 0, colour: '#e76f51', desc: 'Mirror image of Hadley (N). Air rises at equator, descends at 30°S.' },
];

const PRESSURE_ZONES = [
  { lat: 0, type: 'L', desc: 'Equatorial low — rising warm air → rain. Tropical rainforests here.' },
  { lat: 30, type: 'H', desc: 'Subtropical high — descending air → dry. Major deserts (Sahara, Atacama).' },
  { lat: -30, type: 'H', desc: 'Subtropical high (S) — descending air. Australian deserts here.' },
  { lat: 60, type: 'L', desc: 'Polar front — rising warm air meets cold polar air. Storms.' },
  { lat: -60, type: 'L', desc: 'Polar front (S).' },
  { lat: 90, type: 'H', desc: 'Polar high — cold descending air.' },
  { lat: -90, type: 'H', desc: 'Polar high (S).' },
];

export function AtmosphericCirculation() {
  const { t } = useTranslation('geography');
  const [active, setActive] = useState<string | null>(null);
  const activeCell = CELLS.find((c) => c.id === active);

  // Map vertical SVG: latitude 90 to -90 → y 20 to 240
  const W = 380;
  const H = 280;
  const padX = 60;
  const yOfLat = (lat: number) => 20 + ((90 - lat) / 180) * 220;

  return (
    <SimulationPanel title={t('simulations.circulation.title')} description={t('simulations.circulation.description')}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-4 items-start">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full bg-bg-tertiary/20 rounded-md border border-border">
          {/* Earth edge */}
          <line x1={padX} y1={20} x2={padX} y2={240} stroke="var(--color-text-secondary)" strokeWidth={2} />
          {/* Latitude lines */}
          {[90, 60, 30, 0, -30, -60, -90].map((lat) => (
            <g key={lat}>
              <line x1={padX - 5} y1={yOfLat(lat)} x2={W - 20} y2={yOfLat(lat)} stroke="var(--color-border)" strokeDasharray="2 3" />
              <text x={padX - 8} y={yOfLat(lat) + 3} textAnchor="end" fontSize={9} fill="var(--color-text-muted)">{lat > 0 ? `${lat}°N` : lat < 0 ? `${-lat}°S` : '0°'}</text>
            </g>
          ))}

          {/* Cells (curved arrows representing circulation) */}
          {CELLS.map((c) => {
            const y1 = yOfLat(c.latLow);
            const y2 = yOfLat(c.latHigh);
            const midX = (padX + W - 40) / 2;
            const isActive = active === c.id;
            return (
              <g key={c.id} onMouseEnter={() => setActive(c.id)} onMouseLeave={() => setActive(null)} style={{ cursor: 'pointer' }}>
                <path
                  d={`M ${padX + 20} ${y1} Q ${midX + 40} ${(y1 + y2) / 2} ${padX + 20} ${y2}`}
                  fill={c.colour}
                  fillOpacity={isActive ? 0.4 : 0.18}
                  stroke={c.colour}
                  strokeWidth={isActive ? 2.5 : 1.5}
                />
                <text x={midX + 30} y={(y1 + y2) / 2 + 4} fontSize={10} fill={c.colour} fontWeight={600}>
                  {c.name}
                </text>
              </g>
            );
          })}

          {/* Pressure zones */}
          {PRESSURE_ZONES.map((p) => (
            <g key={`${p.lat}-${p.type}`}>
              <circle cx={padX + 10} cy={yOfLat(p.lat)} r={10} fill={p.type === 'L' ? 'var(--color-accent-sky-deep)' : 'var(--color-accent-warm)'} fillOpacity={0.6} stroke={p.type === 'L' ? 'var(--color-accent-sky-deep)' : 'var(--color-accent-warm)'} />
              <text x={padX + 10} y={yOfLat(p.lat) + 3} textAnchor="middle" fontSize={9} fill="white" fontWeight={700}>{p.type}</text>
            </g>
          ))}
        </svg>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm min-h-[200px]">
          {activeCell ? (
            <div>
              <p className="font-medium text-base mb-1" style={{ color: activeCell.colour }}>{activeCell.name}</p>
              <p className="text-text-secondary">{activeCell.desc}</p>
            </div>
          ) : (
            <p className="text-text-muted italic">Hover a cell to see its description.</p>
          )}
          <div className="mt-4 pt-3 border-t border-border space-y-1 text-xs text-text-muted">
            <p><span style={{ color: 'var(--color-accent-sky-deep)' }}>●</span> L = low pressure (rising air, rain)</p>
            <p><span style={{ color: 'var(--color-accent-warm)' }}>●</span> H = high pressure (descending air, dry)</p>
            <p className="pt-1">Equator: L → rainforest. 30°: H → desert. 60°: L → temperate storms. 90°: H → polar deserts.</p>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
