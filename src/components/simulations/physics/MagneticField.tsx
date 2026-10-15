import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, SimulationPanel } from '../../ui/Tabs';
import { Slider } from '../../ui/Slider';

import { computeFieldAngle, compassRotation, solenoidInternalAngle, solenoidExternalAngle, type MagneticSource as Source } from './magneticModels';

const W = 480;
const H = 300;
const CX = W / 2;
const CY = H / 2;

const BAR_HALF_W = 80;
const BAR_HALF_H = 26;
const WIRE_R = 11;
const SOL_HALF_W = 110;
const SOL_HALF_H = 38;

export function MagneticField() {
  const { t, i18n } = useTranslation('physics');
  const [source, setSource] = useState<Source>('bar');
  const [current, setCurrent] = useState(2);
  const [showCompass, setShowCompass] = useState(true);

  const compasses: Array<{ x: number; y: number; angle: number }> = [];
  if (showCompass) {
    const xStep = 42;
    const yStep = 38;
    const xStart = 28;
    const yStart = 28;
    for (let y = yStart; y < H - 18; y += yStep) {
      for (let x = xStart; x < W - 18; x += xStep) {
        if (!compassFitsOutsideSource(source, x, y)) continue;
        const angle = computeFieldAngle(source, x, y, current);
        if (!isFinite(angle)) continue;
        compasses.push({ x, y, angle });
      }
    }
  }

  return (
    <SimulationPanel
      title={t('electricity.simMagnetic.title')}
      description={t('electricity.simMagnetic.desc')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <svg role="img" aria-label={t('electricity.simMagnetic.desc')} viewBox={`0 0 ${W} ${H}`} className="w-full bg-bg-primary rounded-md border border-border">
          <defs>
            <marker id="mf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#a8b8c8" />
            </marker>
          </defs>

          {/* compasses (below field lines so the source/lines feel "on top") */}
          {compasses.map((c, i) => (
            <Compass key={i} x={c.x} y={c.y} angle={c.angle} />
          ))}

          {/* field lines */}
          <g fill="none" stroke="#a8b8c8" strokeWidth="1.5" opacity="0.9">
            {source === 'bar' && <BarMagnetFieldLines />}
            {source === 'wire' && current !== 0 && <WireFieldLines current={current} />}
            {source === 'solenoid' && current !== 0 && <SolenoidFieldLines current={current} />}
          </g>

          {/* source object on top */}
          {source === 'bar' && <BarMagnet />}
          {source === 'wire' && <CurrentWire current={current} />}
          {source === 'solenoid' && <Solenoid current={current} />}
        </svg>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-text-secondary mb-2">{t('electricity.simMagnetic.source')}</p>
            <Tabs
              tabs={[
                { id: 'bar', label: t('electricity.simMagnetic.barMagnet') },
                { id: 'wire', label: t('electricity.simMagnetic.wire') },
                { id: 'solenoid', label: t('electricity.simMagnetic.solenoid') },
              ]}
              activeId={source}
              onChange={(id) => setSource(id as Source)}
            />
          </div>

          {source !== 'bar' && (
            <Slider
              label={t('electricity.simMagnetic.current')}
              unit={i18n.language.startsWith('ru') ? 'А' : 'A'}
              min={-5}
              max={5}
              step={0.2}
              value={current}
              onChange={setCurrent}
            />
          )}

          {source !== 'bar' && current === 0 && <p className="text-xs text-text-muted">{i18n.language.startsWith('ru')
            ? 'Ток равен нулю: поле этого источника отсутствует. Внешние поля здесь не учитываются.'
            : 'Zero current: this source produces no field. External fields are not modelled here.'}</p>}
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={showCompass}
              onChange={(e) => setShowCompass(e.target.checked)}
              className="w-4 h-4 accent-[var(--color-accent-warm)]"
            />
            {t('electricity.simMagnetic.showCompass')}
          </label>

          <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2 text-xs leading-relaxed">
            {source === 'bar' && (
              <span>
                {i18n.language.startsWith('ru') ? (
                  <>
                    Линии поля выходят из северного полюса <span className="text-accent-clay font-medium">N</span> и входят в южный полюс{' '}
                    <span className="text-accent-sky font-medium">S</span>. Стрелки компасов выстраиваются по направлению поля в этой точке.
                  </>
                ) : (
                  <>
                    Field lines emerge from the <span className="text-accent-clay font-medium">N</span> pole and curve back into the{' '}
                    <span className="text-accent-sky font-medium">S</span> pole. Compasses align with the local field direction.
                  </>
                )}
              </span>
            )}
            {source === 'wire' && (
              <span>
                {i18n.language.startsWith('ru') ? (
                  <>
                    Проводник с током создаёт круговые линии поля. Используй <em>правило правой руки</em>: большой палец — по току,
                    пальцы, обхватывающие провод, — по направлению поля.
                  </>
                ) : (
                  <>
                    A current-carrying wire produces circular field lines. Use the <em>right-hand rule</em>: thumb along the current,
                    fingers curl in the direction of the field.
                  </>
                )}
              </span>
            )}
            {source === 'solenoid' && (
              <span>
                {i18n.language.startsWith('ru')
                  ? 'Соленоид ведёт себя как полосовой магнит. Внутри длинной катушки вдали от её концов поле примерно однородно, снаружи линии выходят из N и возвращаются к S.'
                  : 'A solenoid behaves like a bar magnet. Inside a long coil, away from its ends, the field is approximately uniform; outside it loops back from N to S.'}
              </span>
            )}
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

// ─── Source visuals ─────────────────────────────────────────────────────────

function BarMagnet() {
  return (
    <g>
      {/* North half (warm red) */}
      <rect
        x={CX - BAR_HALF_W}
        y={CY - BAR_HALF_H}
        width={BAR_HALF_W}
        height={BAR_HALF_H * 2}
        rx="4"
        fill="#c99a8e"
        stroke="#3d2f1f"
        strokeWidth="1.5"
      />
      {/* South half (sky blue) */}
      <rect
        x={CX}
        y={CY - BAR_HALF_H}
        width={BAR_HALF_W}
        height={BAR_HALF_H * 2}
        rx="4"
        fill="#a8b8c8"
        stroke="#3d2f1f"
        strokeWidth="1.5"
      />
      {/* divider */}
      <line x1={CX} y1={CY - BAR_HALF_H} x2={CX} y2={CY + BAR_HALF_H} stroke="#3d2f1f" strokeWidth="1.5" />
      {/* labels */}
      <text
        x={CX - BAR_HALF_W / 2}
        y={CY + 8}
        textAnchor="middle"
        fontFamily="Lora"
        fontSize="22"
        fontWeight="600"
        fill="#faf6ef"
      >
        N
      </text>
      <text
        x={CX + BAR_HALF_W / 2}
        y={CY + 8}
        textAnchor="middle"
        fontFamily="Lora"
        fontSize="22"
        fontWeight="600"
        fill="#3d2f1f"
      >
        S
      </text>
    </g>
  );
}

function BarMagnetFieldLines() {
  const lines: JSX.Element[] = [];
  const radii = [40, 70, 100, 135];
  radii.forEach((r, i) => {
    // top loop (from N to S over the top)
    lines.push(
      <path
        key={`u${i}`}
        d={`M ${CX - BAR_HALF_W} ${CY} Q ${CX} ${CY - r} ${CX + BAR_HALF_W} ${CY}`}
        markerMid="url(#mf-arrow)"
      />,
    );
    // arrowhead at the top of each curve
    const topX = CX;
    const topY = CY - r * 0.5;
    lines.push(<ArrowOnPath key={`au${i}`} x={topX} y={topY} angle={0} />);

    // bottom loop
    lines.push(
      <path
        key={`d${i}`}
        d={`M ${CX - BAR_HALF_W} ${CY} Q ${CX} ${CY + r} ${CX + BAR_HALF_W} ${CY}`}
      />,
    );
    const botY = CY + r * 0.5;
    lines.push(<ArrowOnPath key={`ad${i}`} x={CX} y={botY} angle={0} />);
  });
  return <>{lines}</>;
}

function CurrentWire({ current }: { current: number }) {
  const { i18n } = useTranslation('physics');
  const inward = current < 0;
  return (
    <g>
      <circle cx={CX} cy={CY} r={WIRE_R} fill="#faf6ef" stroke="#3d2f1f" strokeWidth="1.6" />
      {current === 0 ? null : inward ? (
        <g stroke="#3d2f1f" strokeWidth="2.4" strokeLinecap="round">
          <line x1={CX - 5} y1={CY - 5} x2={CX + 5} y2={CY + 5} />
          <line x1={CX + 5} y1={CY - 5} x2={CX - 5} y2={CY + 5} />
        </g>
      ) : (
        <circle cx={CX} cy={CY} r="3.2" fill="#3d2f1f" />
      )}
      <text x={CX + WIRE_R + 8} y={CY + 4} fontSize="11" fontFamily="JetBrains Mono" fill="#6b5b47">
        I = {Math.abs(current).toFixed(1)} {i18n.language.startsWith('ru') ? 'А' : 'A'}
      </text>
    </g>
  );
}

function WireFieldLines({ current }: { current: number }) {
  const radii = [26, 50, 80, 115];
  // For positive current (out of page), field is counter-clockwise (when viewed)
  // For negative current (into page), field is clockwise
  const ccw = current > 0;
  return (
    <>
      {radii.map((r, i) => (
        <g key={i}>
          <circle cx={CX} cy={CY} r={r} fill="none" />
          {/* arrowhead at the top of each circle showing direction */}
          <ArrowAt
            x={CX + r}
            y={CY}
            angle={ccw ? -Math.PI / 2 : Math.PI / 2}
            color="#a8b8c8"
          />
          <ArrowAt
            x={CX - r}
            y={CY}
            angle={ccw ? Math.PI / 2 : -Math.PI / 2}
            color="#a8b8c8"
          />
        </g>
      ))}
    </>
  );
}

function Solenoid({ current }: { current: number }) {
  // positive current = N on left, S on right
  const leftLabel = current > 0 ? 'N' : 'S';
  const rightLabel = current > 0 ? 'S' : 'N';
  const leftColor = current > 0 ? '#c99a8e' : '#a8b8c8';
  const rightColor = current > 0 ? '#a8b8c8' : '#c99a8e';

  const coilCount = 7;
  const coilSpacing = (SOL_HALF_W * 2) / (coilCount + 1);
  const coils: JSX.Element[] = [];

  for (let i = 0; i < coilCount; i++) {
    const x = CX - SOL_HALF_W + (i + 1) * coilSpacing;
    // Top of solenoid: current "into" or "out of" page depending on direction
    const topInto = current > 0;
    coils.push(
      <CoilCrossSection key={`t${i}`} x={x} y={CY - SOL_HALF_H} into={topInto} active={current !== 0} />,
      <CoilCrossSection key={`b${i}`} x={x} y={CY + SOL_HALF_H} into={!topInto} active={current !== 0} />,
    );
  }

  return (
    <g>
      {/* outline (faint, helps see the solenoid extent) */}
      <rect
        x={CX - SOL_HALF_W - 6}
        y={CY - SOL_HALF_H - 9}
        width={SOL_HALF_W * 2 + 12}
        height={SOL_HALF_H * 2 + 18}
        fill="none"
        stroke="#ddd0bb"
        strokeWidth="1"
        strokeDasharray="3 3"
        rx="6"
      />

      {/* pole labels */}
      {current !== 0 && <>
      <g>
        <rect x={CX - SOL_HALF_W - 28} y={CY - 14} width="22" height="28" rx="3" fill={leftColor} stroke="#3d2f1f" strokeWidth="1" />
        <text
          x={CX - SOL_HALF_W - 17}
          y={CY + 6}
          textAnchor="middle"
          fontFamily="Lora"
          fontSize="16"
          fontWeight="600"
          fill={leftLabel === 'N' ? '#faf6ef' : '#3d2f1f'}
        >
          {leftLabel}
        </text>
      </g>
      <g>
        <rect x={CX + SOL_HALF_W + 6} y={CY - 14} width="22" height="28" rx="3" fill={rightColor} stroke="#3d2f1f" strokeWidth="1" />
        <text
          x={CX + SOL_HALF_W + 17}
          y={CY + 6}
          textAnchor="middle"
          fontFamily="Lora"
          fontSize="16"
          fontWeight="600"
          fill={rightLabel === 'N' ? '#faf6ef' : '#3d2f1f'}
        >
          {rightLabel}
        </text>
      </g>

      </>}
      {coils}
    </g>
  );
}

function CoilCrossSection({ x, y, into, active }: { x: number; y: number; into: boolean; active: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y} r="7.5" fill="#faf6ef" stroke="#3d2f1f" strokeWidth="1.2" />
      {!active ? null : into ? (
        <g stroke="#3d2f1f" strokeWidth="1.5" strokeLinecap="round">
          <line x1={x - 3.5} y1={y - 3.5} x2={x + 3.5} y2={y + 3.5} />
          <line x1={x + 3.5} y1={y - 3.5} x2={x - 3.5} y2={y + 3.5} />
        </g>
      ) : (
        <circle cx={x} cy={y} r="2" fill="#3d2f1f" />
      )}
    </g>
  );
}

function SolenoidFieldLines({ current }: { current: number }) {
  const lines: JSX.Element[] = [];

  // Inside the solenoid: 3 horizontal lines between the coil rows
  const insideYs = [CY - 18, CY, CY + 18];
  insideYs.forEach((y, i) => {
    lines.push(
      <line
        key={`in${i}`}
        x1={CX - SOL_HALF_W + 8}
        y1={y}
        x2={CX + SOL_HALF_W - 8}
        y2={y}
      />,
    );
    // arrowhead in middle
    lines.push(
      <ArrowAt
        key={`ia${i}`}
        x={CX}
        y={y}
        angle={solenoidInternalAngle(current)}
        color="#a8b8c8"
      />,
    );
  });

  // Outside loops
  const radii = [60, 95, 135];
  radii.forEach((r, i) => {
    // top loop: leaves from left pole, arcs over the top, enters right pole
    lines.push(
      <path
        key={`ou${i}`}
        d={`M ${CX - SOL_HALF_W - 4} ${CY} Q ${CX} ${CY - r} ${CX + SOL_HALF_W + 4} ${CY}`}
      />,
    );
    lines.push(
      <ArrowAt
        key={`oua${i}`}
        x={CX}
        y={CY - r * 0.5}
        angle={solenoidExternalAngle(current)}
        color="#a8b8c8"
      />,
    );

    // bottom loop
    lines.push(
      <path
        key={`od${i}`}
        d={`M ${CX - SOL_HALF_W - 4} ${CY} Q ${CX} ${CY + r} ${CX + SOL_HALF_W + 4} ${CY}`}
      />,
    );
    lines.push(
      <ArrowAt
        key={`oda${i}`}
        x={CX}
        y={CY + r * 0.5}
        angle={solenoidExternalAngle(current)}
        color="#a8b8c8"
      />,
    );
  });

  return <>{lines}</>;
}

// ─── Compass and arrow helpers ──────────────────────────────────────────────

function Compass({ x, y, angle }: { x: number; y: number; angle: number }) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${compassRotation(angle)})`}>
      <circle r="7" fill="#faf6ef" stroke="#ddd0bb" strokeWidth="0.6" />
      <polygon points="0,-5.5 1.6,1 0,1.5 -1.6,1" fill="#c99a8e" />
      <polygon points="0,5.5 1.6,-1 0,-1.5 -1.6,-1" fill="#9c8b73" opacity="0.6" />
      <circle r="0.8" fill="#3d2f1f" />
    </g>
  );
}

function ArrowAt({ x, y, angle, color }: { x: number; y: number; angle: number; color: string }) {
  const size = 6;
  return (
    <polygon
      points={`${x},${y} ${x - size * Math.cos(angle - 0.45)},${y - size * Math.sin(angle - 0.45)} ${x - size * Math.cos(angle + 0.45)},${y - size * Math.sin(angle + 0.45)}`}
      fill={color}
    />
  );
}

function ArrowOnPath({ x, y, angle, flipped }: { x: number; y: number; angle: number; flipped?: boolean }) {
  // Used on the bar magnet curves: lines flow N→S over the top (so on the top loop, the arrow points right)
  const dir = flipped ? -1 : 1;
  const size = 6;
  const ang = angle;
  return (
    <polygon
      points={`${x + size * dir},${y} ${x},${y - size * 0.7} ${x},${y + size * 0.7}`}
      fill="#a8b8c8"
      transform={`rotate(${ang} ${x} ${y})`}
    />
  );
}

// ─── Geometry helpers ────────────────────────────────────────────────────────

function compassFitsOutsideSource(source: Source, x: number, y: number): boolean {
  const dx = x - CX;
  const dy = y - CY;
  if (source === 'bar') {
    if (Math.abs(dx) < BAR_HALF_W + 14 && Math.abs(dy) < BAR_HALF_H + 14) return false;
    return true;
  }
  if (source === 'wire') {
    return dx * dx + dy * dy > (WIRE_R + 14) * (WIRE_R + 14);
  }
  // solenoid: skip inside the loop AND the side label boxes
  if (Math.abs(dx) < SOL_HALF_W + 12 && Math.abs(dy) < SOL_HALF_H + 16) return false;
  if (Math.abs(dx) < SOL_HALF_W + 36 && Math.abs(dy) < 22) return false;
  return true;
}

