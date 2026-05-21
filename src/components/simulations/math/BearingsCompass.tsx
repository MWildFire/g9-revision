import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { fmt } from '../../../lib/math';

export function BearingsCompass() {
  const { t } = useTranslation('math');
  const [bearing, setBearing] = useState(60);
  const [distance, setDistance] = useState(15);

  // Convert bearing (from N, clockwise) to standard math angle (from E, anticlockwise)
  const mathAngleRad = ((90 - bearing) * Math.PI) / 180;
  const dx = distance * Math.cos(mathAngleRad);
  const dy = -distance * Math.sin(mathAngleRad); // SVG y is down

  const cx = 150;
  const cy = 150;
  const scale = 5;
  const x2 = cx + dx * scale;
  const y2 = cy + dy * scale;

  const compassRadius = 100;

  const N = t('simulations.bearingsCompass.compassN');
  const E = t('simulations.bearingsCompass.compassE');
  const S = t('simulations.bearingsCompass.compassS');
  const W = t('simulations.bearingsCompass.compassW');
  const direction =
    bearing < 22.5 ? N
      : bearing < 67.5 ? `${N}${E}`
        : bearing < 112.5 ? E
          : bearing < 157.5 ? `${S}${E}`
            : bearing < 202.5 ? S
              : bearing < 247.5 ? `${S}${W}`
                : bearing < 292.5 ? W
                  : bearing < 337.5 ? `${N}${W}` : N;

  return (
    <SimulationPanel title={t('simulations.bearingsCompass.title')} description={t('simulations.bearingsCompass.description')}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="space-y-4">
          <Slider label={t('simulations.bearingsCompass.bearingLabel')} min={0} max={360} step={1} value={bearing} onChange={setBearing} unit="°" />
          <Slider label={t('simulations.bearingsCompass.distanceLabel')} min={1} max={20} step={0.5} value={distance} onChange={setDistance} unit="km" />

          <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 space-y-2 text-sm">
            <p>
              <span className="text-text-muted">{t('simulations.bearingsCompass.bearingLabel')}:</span>{' '}
              <span className="font-mono">{bearing.toString().padStart(3, '0')}°</span>{' '}
              <span className="text-text-muted">({direction})</span>
            </p>
            <p>
              <span className="text-text-muted">{t('simulations.bearingsCompass.eastOffset')}:</span>{' '}
              <span className="font-mono">{fmt(dx, 2)} km</span>
            </p>
            <p>
              <span className="text-text-muted">{t('simulations.bearingsCompass.northOffset')}:</span>{' '}
              <span className="font-mono">{fmt(-dy, 2)} km</span>
            </p>
          </div>
        </div>

        <svg viewBox="0 0 300 300" className="w-full max-w-[320px] mx-auto">
          <circle cx={cx} cy={cy} r={compassRadius} fill="var(--color-bg-tertiary)" fillOpacity={0.4} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={cx} y1={cy - compassRadius} x2={cx} y2={cy + compassRadius} stroke="var(--color-border)" />
          <line x1={cx - compassRadius} y1={cy} x2={cx + compassRadius} y2={cy} stroke="var(--color-border)" />

          <text x={cx} y={cy - compassRadius - 5} textAnchor="middle" fontSize={14} fill="var(--color-text-secondary)" fontWeight={600}>{N}</text>
          <text x={cx + compassRadius + 14} y={cy + 4} textAnchor="middle" fontSize={12} fill="var(--color-text-muted)">{E}</text>
          <text x={cx} y={cy + compassRadius + 15} textAnchor="middle" fontSize={12} fill="var(--color-text-muted)">{S}</text>
          <text x={cx - compassRadius - 14} y={cy + 4} textAnchor="middle" fontSize={12} fill="var(--color-text-muted)">{W}</text>

          {/* Bearing arc */}
          <path
            d={`M ${cx} ${cy - 40} A 40 40 0 ${bearing > 180 ? 1 : 0} 1 ${cx + 40 * Math.sin((bearing * Math.PI) / 180)} ${cy - 40 * Math.cos((bearing * Math.PI) / 180)}`}
            fill="none"
            stroke="var(--color-accent-warm)"
            strokeWidth={2}
          />
          <text x={cx + 8} y={cy - 30} fontSize={10} fill="var(--color-accent-warm)">
            {bearing}°
          </text>

          {/* Direction line */}
          <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="var(--color-accent-sky-deep)" strokeWidth={2.5} strokeLinecap="round" />
          <circle cx={cx} cy={cy} r={4} fill="var(--color-text-primary)" />
          <circle cx={x2} cy={y2} r={5} fill="var(--color-accent-warm)" stroke="var(--color-bg-secondary)" strokeWidth={2} />
          <text x={x2 + 6} y={y2 - 4} fontSize={10} fill="var(--color-text-secondary)">
            {fmt(distance, 1)} km
          </text>
        </svg>
      </div>
    </SimulationPanel>
  );
}
