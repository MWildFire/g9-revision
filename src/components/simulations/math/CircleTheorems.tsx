import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel, Tabs } from '../../ui/Tabs';
import { Slider } from '../../ui/Slider';
import { fmt } from '../../../lib/math';

type Theorem = 'centre-circumference' | 'semicircle' | 'cyclic-quad' | 'intersecting-chords';

export function CircleTheorems() {
  const { t } = useTranslation('math');
  const [theorem, setTheorem] = useState<Theorem>('centre-circumference');

  return (
    <SimulationPanel title={t('simulations.circleTheorems.title')} description={t('simulations.circleTheorems.description')}>
      <Tabs
        tabs={[
          { id: 'centre-circumference', label: t('simulations.circleTheorems.centreTab') },
          { id: 'semicircle', label: t('simulations.circleTheorems.semicircleTab') },
          { id: 'cyclic-quad', label: t('simulations.circleTheorems.cyclicTab') },
          { id: 'intersecting-chords', label: t('simulations.circleTheorems.chordsTab') },
        ]}
        activeId={theorem}
        onChange={(id) => setTheorem(id as Theorem)}
      />
      <div className="mt-4">
        {theorem === 'centre-circumference' ? <CentreCircTheorem /> : null}
        {theorem === 'semicircle' ? <SemicircleTheorem /> : null}
        {theorem === 'cyclic-quad' ? <CyclicQuadTheorem /> : null}
        {theorem === 'intersecting-chords' ? <ChordsTheorem /> : null}
      </div>
    </SimulationPanel>
  );
}

function CentreCircTheorem() {
  const { t } = useTranslation('math');
  const [centreAngle, setCentreAngle] = useState(100);
  const r = 90;
  const cx = 160;
  const cy = 160;
  // Arc subtends centreAngle°; we draw points A & B at ±half angle from top
  const half = (centreAngle / 2) * (Math.PI / 180);
  const ax = cx + r * Math.sin(-half);
  const ay = cy - r * Math.cos(-half);
  const bx = cx + r * Math.sin(half);
  const by = cy - r * Math.cos(half);
  // Point C on circumference at the bottom
  const cxC = cx;
  const cyC = cy + r;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-center">
      <div className="space-y-3">
        <Slider label={t('simulations.circleTheorems.centreAngle') + ' (AOB)'} min={20} max={170} step={5} value={centreAngle} onChange={setCentreAngle} unit="°" />
        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p>{t('simulations.circleTheorems.centreAngle')}: <span className="font-mono">{fmt(centreAngle)}°</span></p>
          <p>{t('simulations.circleTheorems.circumferenceAngle')}: <span className="font-mono">{fmt(centreAngle / 2)}°</span></p>
          <p className="text-xs text-text-muted pt-2 border-t border-border">
            {t('simulations.circleTheorems.ruleCentre')}
          </p>
        </div>
      </div>
      <svg viewBox="0 0 320 280" className="w-full max-w-[320px] mx-auto">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-border)" strokeWidth={1.5} />
        <line x1={cx} y1={cy} x2={ax} y2={ay} stroke="var(--color-accent-warm)" strokeWidth={2} />
        <line x1={cx} y1={cy} x2={bx} y2={by} stroke="var(--color-accent-warm)" strokeWidth={2} />
        <line x1={cxC} y1={cyC} x2={ax} y2={ay} stroke="var(--color-accent-sky-deep)" strokeWidth={2} />
        <line x1={cxC} y1={cyC} x2={bx} y2={by} stroke="var(--color-accent-sky-deep)" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={4} fill="var(--color-accent-warm)" />
        <circle cx={ax} cy={ay} r={4} fill="var(--color-text-primary)" />
        <circle cx={bx} cy={by} r={4} fill="var(--color-text-primary)" />
        <circle cx={cxC} cy={cyC} r={4} fill="var(--color-accent-sky-deep)" />
        <text x={cx + 6} y={cy - 6} fontSize={10} fill="var(--color-text-secondary)">O</text>
        <text x={ax - 12} y={ay - 4} fontSize={10} fill="var(--color-text-secondary)">A</text>
        <text x={bx + 4} y={by - 4} fontSize={10} fill="var(--color-text-secondary)">B</text>
        <text x={cxC + 4} y={cyC + 14} fontSize={10} fill="var(--color-text-secondary)">C</text>
      </svg>
    </div>
  );
}

function SemicircleTheorem() {
  const { t } = useTranslation('math');
  const [pos, setPos] = useState(0.4);
  const r = 90;
  const cx = 160;
  const cy = 160;
  // A, B at endpoints of diameter; C on upper arc
  const ax = cx - r;
  const ay = cy;
  const bx = cx + r;
  const by = cy;
  const angle = pos * Math.PI;
  const cxC = cx + r * Math.cos(Math.PI - angle);
  const cyC = cy - r * Math.sin(Math.PI - angle);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-center">
      <div className="space-y-3">
        <Slider label="C — position on arc" min={0.05} max={0.95} step={0.05} value={pos} onChange={setPos} format={(v) => `${(v * 100).toFixed(0)}%`} />
        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p>∠ACB: <span className="font-mono">90°</span></p>
          <p className="text-xs text-text-muted pt-2 border-t border-border">
            {t('simulations.circleTheorems.ruleSemicircle')}
          </p>
        </div>
      </div>
      <svg viewBox="0 0 320 280" className="w-full max-w-[320px] mx-auto">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-border)" strokeWidth={1.5} />
        <line x1={ax} y1={ay} x2={bx} y2={by} stroke="var(--color-accent-warm)" strokeWidth={2} strokeDasharray="3 3" />
        <line x1={ax} y1={ay} x2={cxC} y2={cyC} stroke="var(--color-accent-sky-deep)" strokeWidth={2} />
        <line x1={bx} y1={by} x2={cxC} y2={cyC} stroke="var(--color-accent-sky-deep)" strokeWidth={2} />
        <rect x={cxC - 6} y={cyC} width={6} height={6} fill="none" stroke="var(--color-accent-clay)" />
        <circle cx={ax} cy={ay} r={4} fill="var(--color-text-primary)" />
        <circle cx={bx} cy={by} r={4} fill="var(--color-text-primary)" />
        <circle cx={cxC} cy={cyC} r={4} fill="var(--color-accent-clay)" />
        <text x={ax - 12} y={ay + 4} fontSize={10} fill="var(--color-text-secondary)">A</text>
        <text x={bx + 6} y={by + 4} fontSize={10} fill="var(--color-text-secondary)">B</text>
        <text x={cxC} y={cyC - 8} fontSize={10} fill="var(--color-accent-clay)" textAnchor="middle">C (90°)</text>
      </svg>
    </div>
  );
}

function CyclicQuadTheorem() {
  const { t } = useTranslation('math');
  const [angleA, setAngleA] = useState(75);
  const r = 90;
  const cx = 160;
  const cy = 160;
  // 4 points around the circle
  const points = [Math.PI * 1.2, Math.PI * 1.7, Math.PI * 0.4, Math.PI * 0.9].map((θ) => ({
    x: cx + r * Math.cos(θ),
    y: cy + r * Math.sin(θ),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-center">
      <div className="space-y-3">
        <Slider label="∠A" min={30} max={150} step={5} value={angleA} onChange={setAngleA} unit="°" />
        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p>∠A: <span className="font-mono">{angleA}°</span></p>
          <p>∠C: <span className="font-mono">{180 - angleA}°</span></p>
          <p>∠A + ∠C: <span className="font-mono">180°</span></p>
          <p className="text-xs text-text-muted pt-2 border-t border-border">
            {t('simulations.circleTheorems.ruleCyclic')}
          </p>
        </div>
      </div>
      <svg viewBox="0 0 320 280" className="w-full max-w-[320px] mx-auto">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-border)" strokeWidth={1.5} />
        <polygon points={points.map((p) => `${p.x},${p.y}`).join(' ')} fill="var(--color-accent-sky)" fillOpacity={0.2} stroke="var(--color-accent-sky-deep)" strokeWidth={2} />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={4} fill="var(--color-text-primary)" />
            <text x={p.x + (i === 0 ? -14 : 6)} y={p.y + (i === 1 || i === 2 ? 14 : -4)} fontSize={11} fill="var(--color-text-secondary)" fontWeight={i === 0 || i === 2 ? 600 : 400}>
              {['A', 'B', 'C', 'D'][i]}
              {i === 0 ? `: ${angleA}°` : ''}
              {i === 2 ? `: ${180 - angleA}°` : ''}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function ChordsTheorem() {
  const { t } = useTranslation('math');
  const [ap, setAp] = useState(6);
  const [pb, setPb] = useState(4);
  const [cp, setCp] = useState(8);
  const pd = (ap * pb) / cp;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-center">
      <div className="space-y-3">
        <Slider label="AP" min={1} max={10} step={0.5} value={ap} onChange={setAp} unit="cm" />
        <Slider label="PB" min={1} max={10} step={0.5} value={pb} onChange={setPb} unit="cm" />
        <Slider label="CP" min={1} max={10} step={0.5} value={cp} onChange={setCp} unit="cm" />
        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p>AP · PB = <span className="font-mono">{fmt(ap * pb)}</span></p>
          <p>CP · PD = <span className="font-mono">{fmt(cp * pd, 2)}</span> (PD = <span className="font-mono">{fmt(pd, 3)}</span> cm)</p>
          <p className="text-xs text-text-muted pt-2 border-t border-border">
            {t('simulations.circleTheorems.ruleChords')}
          </p>
        </div>
      </div>
      <svg viewBox="0 0 320 280" className="w-full max-w-[320px] mx-auto">
        <circle cx={160} cy={140} r={100} fill="none" stroke="var(--color-border)" strokeWidth={1.5} />
        <line x1={60} y1={100} x2={260} y2={180} stroke="var(--color-accent-warm)" strokeWidth={2} />
        <line x1={100} y1={210} x2={220} y2={70} stroke="var(--color-accent-sky-deep)" strokeWidth={2} />
        <circle cx={60} cy={100} r={4} fill="var(--color-text-primary)" />
        <circle cx={260} cy={180} r={4} fill="var(--color-text-primary)" />
        <circle cx={100} cy={210} r={4} fill="var(--color-text-primary)" />
        <circle cx={220} cy={70} r={4} fill="var(--color-text-primary)" />
        <circle cx={160} cy={140} r={5} fill="var(--color-accent-clay)" />
        <text x={50} y={94} fontSize={11} fill="var(--color-text-secondary)">A</text>
        <text x={264} y={184} fontSize={11} fill="var(--color-text-secondary)">B</text>
        <text x={90} y={222} fontSize={11} fill="var(--color-text-secondary)">C</text>
        <text x={224} y={66} fontSize={11} fill="var(--color-text-secondary)">D</text>
        <text x={166} y={154} fontSize={11} fill="var(--color-accent-clay)">P</text>
      </svg>
    </div>
  );
}
