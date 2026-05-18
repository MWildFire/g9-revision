import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Slider } from '../../ui/Slider';
import { Tabs, SimulationPanel } from '../../ui/Tabs';
import { brakingDistance, reactionDistance, format } from '../../../lib/physics';

const FRICTION = {
  dry: 0.7,
  wet: 0.4,
  ice: 0.1,
};

const VIEWBOX_W = 420;
const ROAD_LEFT = 20;
const ROAD_RIGHT = 400;
const ROAD_WIDTH = ROAD_RIGHT - ROAD_LEFT;

export function ReactionBraking() {
  const { t } = useTranslation('physics');
  const [speedKmh, setSpeedKmh] = useState(60);
  const [reactionTime, setReactionTime] = useState(1.0);
  const [road, setRoad] = useState<keyof typeof FRICTION>('dry');

  const speedMs = speedKmh / 3.6;
  const rd = reactionDistance(speedMs, reactionTime);
  const bd = brakingDistance(speedMs, FRICTION[road]);
  const total = rd + bd;

  // Scale so the total fits roughly 75% of the available width
  const targetWidth = ROAD_WIDTH * 0.78;
  let scale = total > 0 ? targetWidth / total : 1;
  scale = Math.max(0.4, Math.min(10, scale));

  const rdPx = rd * scale;
  const bdPx = bd * scale;
  const totalPx = rdPx + bdPx;

  return (
    <SimulationPanel title={t('forceMotion.sim4.title')} description={t('forceMotion.sim4.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-3">
          <svg viewBox={`0 0 ${VIEWBOX_W} 200`} className="w-full bg-bg-primary rounded-md border border-border">
            {/* road background */}
            <rect x="0" y="110" width={VIEWBOX_W} height="70" fill="#a8b5a0" opacity="0.25" />
            {/* lane line */}
            <line x1="0" y1="145" x2={VIEWBOX_W} y2="145" stroke="#9c8b73" strokeDasharray="8 8" strokeWidth="1.5" />

            {/* reaction zone */}
            <rect x={ROAD_LEFT} y="125" width={rdPx} height="40" fill="#c9a876" opacity="0.45" />
            {/* braking zone */}
            <rect x={ROAD_LEFT + rdPx} y="125" width={bdPx} height="40" fill="#c99a8e" opacity="0.55" />

            {/* labels */}
            {rdPx > 30 && (
              <text x={ROAD_LEFT + rdPx / 2} y="120" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#6b5b47">
                {rd.toFixed(1)} m
              </text>
            )}
            {bdPx > 30 && (
              <text x={ROAD_LEFT + rdPx + bdPx / 2} y="120" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#6b5b47">
                {bd.toFixed(1)} m
              </text>
            )}

            {/* start marker */}
            <line x1={ROAD_LEFT} y1="115" x2={ROAD_LEFT} y2="175" stroke="#3d2f1f" strokeWidth="2" />
            <text x={ROAD_LEFT} y="185" fontSize="9" textAnchor="middle" fill="#6b5b47">0</text>

            {/* stop marker */}
            <line x1={ROAD_LEFT + totalPx} y1="115" x2={ROAD_LEFT + totalPx} y2="175" stroke="#3d2f1f" strokeWidth="2" />
            <text x={ROAD_LEFT + totalPx} y="185" fontSize="9" textAnchor="middle" fill="#6b5b47">
              {total.toFixed(1)} m
            </text>

            {/* car */}
            <g transform={`translate(${ROAD_LEFT + totalPx - 36}, 130)`}>
              <rect x="0" y="6" width="36" height="14" fill="#3d2f1f" rx="3" />
              <rect x="8" y="0" width="20" height="10" fill="#3d2f1f" rx="2" />
              <circle cx="9" cy="22" r="4" fill="#3d2f1f" />
              <circle cx="27" cy="22" r="4" fill="#3d2f1f" />
            </g>
          </svg>

          <div className="text-xs text-text-muted text-center">
            Scale: 1 m ≈ {scale.toFixed(2)} px
          </div>

          <div className="grid grid-cols-3 gap-2 text-sm">
            <Stat label={t('forceMotion.sim4.reactionDistance')} value={`${format(rd, 1)} m`} dot="#c9a876" />
            <Stat label={t('forceMotion.sim4.brakingDistance')} value={`${format(bd, 1)} m`} dot="#c99a8e" />
            <Stat label={t('forceMotion.sim4.stoppingDistance')} value={`${format(total, 1)} m`} dot="#3d2f1f" />
          </div>
        </div>

        <div className="space-y-4">
          <Slider label={t('forceMotion.sim4.speed')} unit="km/h" min={10} max={120} step={5} value={speedKmh} onChange={setSpeedKmh} />
          <Slider label={t('forceMotion.sim4.reactionTime')} unit="s" min={0.3} max={2.5} step={0.1} value={reactionTime} onChange={setReactionTime} />
          <div>
            <p className="text-sm font-medium text-text-secondary mb-2">{t('forceMotion.sim4.road')}</p>
            <Tabs
              tabs={[
                { id: 'dry', label: t('forceMotion.sim4.roadDry') },
                { id: 'wet', label: t('forceMotion.sim4.roadWet') },
                { id: 'ice', label: t('forceMotion.sim4.roadIce') },
              ]}
              activeId={road}
              onChange={(id) => setRoad(id as keyof typeof FRICTION)}
            />
          </div>
          <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2 text-xs space-y-0.5">
            <div className="text-text-muted">μ (friction): {FRICTION[road].toFixed(1)}</div>
            <div className="text-text-muted">v = {speedMs.toFixed(2)} m/s</div>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function Stat({ label, value, dot }: { label: string; value: string; dot: string }) {
  return (
    <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
      <div className="flex items-center gap-1.5 text-xs text-text-muted">
        <span className="inline-block w-2 h-2 rounded-full" style={{ background: dot }} />
        {label}
      </div>
      <div className="font-mono text-sm text-text-primary mt-0.5">{value}</div>
    </div>
  );
}
