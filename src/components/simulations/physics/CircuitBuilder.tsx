import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { Slider } from '../../ui/Slider';
import { Tabs, SimulationPanel } from '../../ui/Tabs';
import { Button } from '../../ui/Button';
import { format, formatResistance } from '../../../lib/physics';
import { Power } from 'lucide-react';

interface Bulb {
  id: number;
  r: number;
  on: boolean;
}

type BulbState = 'lit' | 'unlit' | 'burned';

const SERIES_BULB_XS = [110, 200, 290];
const PARALLEL_BULB_XS = [150, 240, 330];
const PARALLEL_BULB_Y = 120;
const PARALLEL_TOP_Y = 40;
const PARALLEL_BOTTOM_Y = 200;

const SERIES_LOOP_POINTS = [
  { x: 215, y: 200 },
  { x: 380, y: 200 },
  { x: 380, y: 50 },
  { x: 40, y: 50 },
  { x: 40, y: 200 },
  { x: 205, y: 200 },
];

const SERIES_ELECTRON_COUNT = 12;
const BRANCH_ELECTRON_COUNT = 4;

interface PathData {
  segs: Array<{ ax: number; ay: number; bx: number; by: number; len: number; cumStart: number }>;
  total: number;
}

function computePath(points: { x: number; y: number }[]): PathData {
  const segs: PathData['segs'] = [];
  let total = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    const len = Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
    segs.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, len, cumStart: total });
    total += len;
  }
  return { segs, total };
}

function pointAt(path: PathData, t: number): { x: number; y: number } {
  const tNorm = ((t % 1) + 1) % 1;
  const dist = tNorm * path.total;
  for (const seg of path.segs) {
    if (dist <= seg.cumStart + seg.len) {
      const local = seg.len === 0 ? 0 : (dist - seg.cumStart) / seg.len;
      return {
        x: seg.ax + (seg.bx - seg.ax) * local,
        y: seg.ay + (seg.by - seg.ay) * local,
      };
    }
  }
  const last = path.segs[path.segs.length - 1];
  return { x: last.bx, y: last.by };
}

export function CircuitBuilder() {
  const { t } = useTranslation('physics');
  const [mode, setMode] = useState<'series' | 'parallel'>('series');
  const [voltage, setVoltage] = useState(12);
  const [bulbs, setBulbs] = useState<Bulb[]>([
    { id: 1, r: 6, on: true },
    { id: 2, r: 6, on: true },
    { id: 3, r: 6, on: true },
  ]);

  const onBulbs = bulbs.filter((b) => b.on);
  const seriesBroken = mode === 'series' && bulbs.some((b) => !b.on);
  let totalR: number;
  let bulbCurrents: number[];

  if (mode === 'series') {
    if (seriesBroken) {
      totalR = Infinity;
    } else {
      totalR = bulbs.reduce((acc, b) => acc + b.r, 0);
    }
    const i = !seriesBroken && totalR > 0 ? voltage / totalR : 0;
    bulbCurrents = bulbs.map((b) => (b.on && !seriesBroken ? i : 0));
  } else {
    const totalConductance = onBulbs.reduce((acc, b) => acc + 1 / b.r, 0);
    totalR = totalConductance > 0 ? 1 / totalConductance : Infinity;
    bulbCurrents = bulbs.map((b) => (b.on ? voltage / b.r : 0));
  }

  const totalCurrent = bulbCurrents.reduce((a, b) => a + b, 0);

  const updateBulb = (id: number, patch: Partial<Bulb>) => {
    setBulbs((prev) => prev.map((b) => (b.id === id ? { ...b, ...patch } : b)));
  };

  // Animation: refs and a refs-only data channel so the rAF loop doesn't restart on every render.
  const seriesElectronRefs = useRef<Array<SVGCircleElement | null>>([]);
  const branchElectronRefs = useRef<Array<Array<SVGCircleElement | null>>>([[], [], []]);
  const animDataRef = useRef({ mode, bulbCurrents, totalCurrent });
  animDataRef.current = { mode, bulbCurrents, totalCurrent };

  useEffect(() => {
    let rafId = 0;
    let last = performance.now();
    const seriesPath = computePath(SERIES_LOOP_POINTS);
    let seriesPhase = 0;
    const branchPhases = [0, 0, 0];

    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const { mode: m, bulbCurrents: cur, totalCurrent: total } = animDataRef.current;

      if (m === 'series') {
        const I = cur[0] ?? 0;
        // Hide all parallel electrons
        for (let b = 0; b < 3; b++) {
          for (let i = 0; i < BRANCH_ELECTRON_COUNT; i++) {
            const n = branchElectronRefs.current[b]?.[i];
            if (n) n.style.opacity = '0';
          }
        }
        // Move series electrons; speed proportional to current
        seriesPhase = (seriesPhase + dt * I * 0.045) % 1;
        for (let i = 0; i < SERIES_ELECTRON_COUNT; i++) {
          const node = seriesElectronRefs.current[i];
          if (!node) continue;
          const t = (seriesPhase + i / SERIES_ELECTRON_COUNT) % 1;
          const pos = pointAt(seriesPath, t);
          node.setAttribute('cx', String(pos.x));
          node.setAttribute('cy', String(pos.y));
          node.style.opacity = I > 0.05 ? '0.9' : '0';
        }
      } else {
        // Hide series electrons
        for (let i = 0; i < SERIES_ELECTRON_COUNT; i++) {
          const n = seriesElectronRefs.current[i];
          if (n) n.style.opacity = '0';
        }
        // Per-branch animation
        for (let b = 0; b < 3; b++) {
          const branchI = cur[b] ?? 0;
          branchPhases[b] = (branchPhases[b] + dt * branchI * 0.35) % 1;
          for (let i = 0; i < BRANCH_ELECTRON_COUNT; i++) {
            const node = branchElectronRefs.current[b]?.[i];
            if (!node) continue;
            const t = (branchPhases[b] + i / BRANCH_ELECTRON_COUNT) % 1;
            const x = PARALLEL_BULB_XS[b];
            const y = PARALLEL_TOP_Y + t * (PARALLEL_BOTTOM_Y - PARALLEL_TOP_Y);
            node.setAttribute('cx', String(x));
            node.setAttribute('cy', String(y));
            node.style.opacity = branchI > 0.05 ? '0.9' : '0';
          }
        }
      }

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <SimulationPanel title={t('electricity.sim2.title')} description={t('electricity.sim2.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-4">
          <svg viewBox="0 0 420 240" className="w-full bg-bg-primary rounded-md border border-border">
            {mode === 'series' ? (
              <SeriesDiagram
                voltage={voltage}
                bulbs={bulbs}
                currents={bulbCurrents}
                electronRefs={seriesElectronRefs}
              />
            ) : (
              <ParallelDiagram
                voltage={voltage}
                bulbs={bulbs}
                currents={bulbCurrents}
                branchElectronRefs={branchElectronRefs}
              />
            )}
          </svg>

          {seriesBroken ? (
            <div
              className="bg-bg-tertiary border border-border rounded-md px-3 py-2 text-sm text-text-secondary"
              style={{ borderLeft: '4px solid var(--color-accent-clay)' }}
            >
              Open circuit — one bulb has burned out, so no current flows in the series loop.
              The intact bulbs are unlit but not damaged.
            </div>
          ) : null}

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
              <div className="text-xs text-text-muted">{t('electricity.sim2.totalResistance')}</div>
              <div className="font-mono">{formatResistance(totalR)}</div>
            </div>
            <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
              <div className="text-xs text-text-muted">{t('electricity.sim2.totalCurrent')}</div>
              <div className="font-mono">{format(totalCurrent, 2)} A</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-text-secondary mb-2">{t('electricity.sim2.mode')}</p>
            <Tabs
              tabs={[
                { id: 'series', label: t('common.series') },
                { id: 'parallel', label: t('common.parallel') },
              ]}
              activeId={mode}
              onChange={(id) => setMode(id as 'series' | 'parallel')}
            />
          </div>
          <Slider label={t('electricity.sim2.supplyVoltage')} unit="V" min={0} max={24} step={0.5} value={voltage} onChange={setVoltage} />

          <div className="space-y-2">
            {bulbs.map((b, i) => {
              const state: BulbState = !b.on ? 'burned' : bulbCurrents[i] > 0.05 ? 'lit' : 'unlit';
              const statusColor =
                state === 'burned' ? 'var(--color-accent-clay)' :
                state === 'lit' ? 'var(--color-accent-warm)' :
                'var(--color-text-muted)';
              return (
                <div key={b.id} className="bg-bg-tertiary border border-border rounded-md px-3 py-2" style={{ borderLeft: `3px solid ${statusColor}` }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-text-secondary">
                      {t('electricity.sim2.bulb')} {b.id}
                      <span className="ml-2 text-[10px] uppercase tracking-wider text-text-muted">
                        {state === 'burned' ? 'burned' : state === 'lit' ? 'lit' : 'no current'}
                      </span>
                    </span>
                    <Button
                      variant={b.on ? 'ghost' : 'secondary'}
                      size="sm"
                      onClick={() => updateBulb(b.id, { on: !b.on })}
                    >
                      <Power size={12} /> {b.on ? t('electricity.sim2.burnOut') : t('electricity.sim2.restore')}
                    </Button>
                  </div>
                  <Slider
                    label={t('electricity.sim2.resistance')}
                    unit="Ω"
                    min={1}
                    max={30}
                    step={1}
                    value={b.r}
                    onChange={(v) => updateBulb(b.id, { r: v })}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function BulbVisual({
  cx,
  cy,
  state,
  id,
  lightLevel,
}: {
  cx: number;
  cy: number;
  state: BulbState;
  id: number;
  lightLevel: number;
}) {
  const lit = state === 'lit';
  const burned = state === 'burned';

  const fill = lit ? '#c9a876' : burned ? '#ede4d3' : '#faf6ef';
  const fillOpacity = lit ? 0.95 : burned ? 0.35 : 0.7;
  const filamentColor = lit ? '#3d2f1f' : '#9c8b73';
  const strokeColor = burned ? '#9c8b73' : '#6b5b47';

  return (
    <g>
      {/* glow halo when lit */}
      {lit ? (
        <circle cx={cx} cy={cy} r="24" fill="#c9a876" opacity={Math.min(0.45, lightLevel * 0.35 + 0.1)} />
      ) : null}

      {/* bulb body */}
      <circle cx={cx} cy={cy} r="14" fill={fill} stroke={strokeColor} strokeWidth="1.5" opacity={fillOpacity} />

      {/* filament X */}
      {burned ? (
        <g stroke="#c99a8e" strokeWidth="1.4" strokeLinecap="round">
          {/* broken filament: two segments that don't connect in the middle */}
          <line x1={cx - 9} y1={cy - 9} x2={cx - 3} y2={cy - 3} />
          <line x1={cx + 9} y1={cy + 9} x2={cx + 3} y2={cy + 3} />
          <line x1={cx + 9} y1={cy - 9} x2={cx + 3} y2={cy - 3} />
          <line x1={cx - 9} y1={cy + 9} x2={cx - 3} y2={cy + 3} />
        </g>
      ) : (
        <g stroke={filamentColor} strokeWidth="1.2" strokeLinecap="round">
          <line x1={cx - 9} y1={cy - 9} x2={cx + 9} y2={cy + 9} />
          <line x1={cx + 9} y1={cy - 9} x2={cx - 9} y2={cy + 9} />
        </g>
      )}

      {/* "burned" marker: small red triangle/cross outside */}
      {burned ? (
        <g>
          <circle cx={cx + 12} cy={cy - 12} r="4.5" fill="#c99a8e" stroke="#3d2f1f" strokeWidth="0.8" />
          <line x1={cx + 10} y1={cy - 14} x2={cx + 14} y2={cy - 10} stroke="#3d2f1f" strokeWidth="1" />
          <line x1={cx + 14} y1={cy - 14} x2={cx + 10} y2={cy - 10} stroke="#3d2f1f" strokeWidth="1" />
        </g>
      ) : null}

      <text x={cx + 20} y={cy + 4} fontSize="10" fontFamily="JetBrains Mono" fill="#6b5b47">
        {id}
      </text>
    </g>
  );
}

function BatteryHorizontal({ cx, cy, voltage }: { cx: number; cy: number; voltage: number }) {
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      {/* long plate (-) */}
      <line x1="-5" y1="-12" x2="-5" y2="12" stroke="#3d2f1f" strokeWidth="3" />
      {/* short plate (+) */}
      <line x1="5" y1="-7" x2="5" y2="7" stroke="#3d2f1f" strokeWidth="3" />
      {/* signs */}
      <text x="-12" y="-16" fontSize="9" fill="#9c8b73" textAnchor="middle">−</text>
      <text x="12" y="-16" fontSize="9" fill="#9c8b73" textAnchor="middle">+</text>
      <text x="0" y="26" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#6b5b47">
        {voltage.toFixed(1)} V
      </text>
    </g>
  );
}

function BatteryVertical({ cx, cy, voltage }: { cx: number; cy: number; voltage: number }) {
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      {/* long plate (+, on top) */}
      <line x1="-14" y1="-7" x2="14" y2="-7" stroke="#3d2f1f" strokeWidth="3" />
      {/* short plate (-, on bottom) */}
      <line x1="-8" y1="7" x2="8" y2="7" stroke="#3d2f1f" strokeWidth="3" />
      <text x="20" y="-4" fontSize="9" fill="#9c8b73">+</text>
      <text x="20" y="11" fontSize="9" fill="#9c8b73">−</text>
      <text x="-32" y="3" fontSize="10" fontFamily="JetBrains Mono" fill="#6b5b47" textAnchor="end">
        {voltage.toFixed(1)} V
      </text>
    </g>
  );
}

function SeriesDiagram({
  voltage,
  bulbs,
  currents,
  electronRefs,
}: {
  voltage: number;
  bulbs: Bulb[];
  currents: number[];
  electronRefs: React.MutableRefObject<Array<SVGCircleElement | null>>;
}) {
  // Wire segments: break at each bulb so the bulbs sit ON the wire (typical schematic)
  const bulbR = 14;
  return (
    <>
      {/* Top wire, segmented around bulbs */}
      <line x1="40" y1="50" x2={SERIES_BULB_XS[0] - bulbR} y2="50" stroke="#6b5b47" strokeWidth="2" />
      <line x1={SERIES_BULB_XS[0] + bulbR} y1="50" x2={SERIES_BULB_XS[1] - bulbR} y2="50" stroke="#6b5b47" strokeWidth="2" />
      <line x1={SERIES_BULB_XS[1] + bulbR} y1="50" x2={SERIES_BULB_XS[2] - bulbR} y2="50" stroke="#6b5b47" strokeWidth="2" />
      <line x1={SERIES_BULB_XS[2] + bulbR} y1="50" x2="380" y2="50" stroke="#6b5b47" strokeWidth="2" />

      {/* Right wire */}
      <line x1="380" y1="50" x2="380" y2="200" stroke="#6b5b47" strokeWidth="2" />
      {/* Left wire */}
      <line x1="40" y1="50" x2="40" y2="200" stroke="#6b5b47" strokeWidth="2" />
      {/* Bottom wire, split for the battery */}
      <line x1="40" y1="200" x2="195" y2="200" stroke="#6b5b47" strokeWidth="2" />
      <line x1="225" y1="200" x2="380" y2="200" stroke="#6b5b47" strokeWidth="2" />

      <BatteryHorizontal cx={210} cy={200} voltage={voltage} />

      {/* Bulbs */}
      {bulbs.map((b, i) => (
        <BulbVisual
          key={b.id}
          cx={SERIES_BULB_XS[i]}
          cy={50}
          state={!b.on ? 'burned' : currents[i] > 0.05 ? 'lit' : 'unlit'}
          id={b.id}
          lightLevel={Math.min(1, currents[i] / 1.5)}
        />
      ))}

      {/* Animated current electrons (rendered last so they are above wires) */}
      {Array.from({ length: SERIES_ELECTRON_COUNT }).map((_, i) => (
        <circle
          key={i}
          ref={(el) => {
            electronRefs.current[i] = el;
          }}
          r="3"
          fill="var(--color-accent-warm)"
          cx="215"
          cy="200"
          style={{ opacity: 0 }}
        />
      ))}
    </>
  );
}

function ParallelDiagram({
  voltage,
  bulbs,
  currents,
  branchElectronRefs,
}: {
  voltage: number;
  bulbs: Bulb[];
  currents: number[];
  branchElectronRefs: React.MutableRefObject<Array<Array<SVGCircleElement | null>>>;
}) {
  const bulbR = 14;
  const rightX = PARALLEL_BULB_XS[2];
  return (
    <>
      {/* Top common wire */}
      <line x1="70" y1={PARALLEL_TOP_Y} x2={rightX} y2={PARALLEL_TOP_Y} stroke="#6b5b47" strokeWidth="2" />
      {/* Bottom common wire */}
      <line x1="70" y1={PARALLEL_BOTTOM_Y} x2={rightX} y2={PARALLEL_BOTTOM_Y} stroke="#6b5b47" strokeWidth="2" />

      {/* Battery branch on left */}
      <line x1="70" y1={PARALLEL_TOP_Y} x2="70" y2="113" stroke="#6b5b47" strokeWidth="2" />
      <line x1="70" y1="127" x2="70" y2={PARALLEL_BOTTOM_Y} stroke="#6b5b47" strokeWidth="2" />
      <BatteryVertical cx={70} cy={120} voltage={voltage} />

      {/* Bulb branches */}
      {bulbs.map((b, i) => {
        const x = PARALLEL_BULB_XS[i];
        return (
          <g key={b.id}>
            <line x1={x} y1={PARALLEL_TOP_Y} x2={x} y2={PARALLEL_BULB_Y - bulbR} stroke="#6b5b47" strokeWidth="2" />
            <line x1={x} y1={PARALLEL_BULB_Y + bulbR} x2={x} y2={PARALLEL_BOTTOM_Y} stroke="#6b5b47" strokeWidth="2" />
            <BulbVisual
              cx={x}
              cy={PARALLEL_BULB_Y}
              state={!b.on ? 'burned' : currents[i] > 0.05 ? 'lit' : 'unlit'}
              id={b.id}
              lightLevel={Math.min(1, currents[i] / 1.5)}
            />
          </g>
        );
      })}

      {/* Per-branch animated electrons */}
      {[0, 1, 2].map((bi) => (
        <g key={bi}>
          {Array.from({ length: BRANCH_ELECTRON_COUNT }).map((_, i) => (
            <circle
              key={i}
              ref={(el) => {
                if (!branchElectronRefs.current[bi]) branchElectronRefs.current[bi] = [];
                branchElectronRefs.current[bi][i] = el;
              }}
              r="3"
              fill="var(--color-accent-warm)"
              cx={PARALLEL_BULB_XS[bi]}
              cy={PARALLEL_TOP_Y}
              style={{ opacity: 0 }}
            />
          ))}
        </g>
      ))}
    </>
  );
}
