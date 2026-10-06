import { DefinitionSupport } from '../../content/DefinitionSupport';
import type { DefinitionReview } from '../../content/definitionReview';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel, Tabs } from '../../ui/Tabs';
import { Slider } from '../../ui/Slider';
import { fmt } from '../../../lib/math';
import { chordGeometry } from '../../../definitions/math-legacy-models';

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
      <DefinitionSupport review={t('simulations.circleTheorems.review', { returnObjects: true }) as DefinitionReview} />
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
      <svg role="img" aria-label={t('simulations.circleTheorems.centreAlt', { angle: centreAngle, half: centreAngle / 2 })} viewBox="0 0 320 280" className="w-full max-w-[320px] mx-auto">
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

  const ca = Math.hypot(ax - cxC, ay - cyC), cb = Math.hypot(bx - cxC, by - cyC);
  const ua = { x: (ax-cxC)/ca*8, y: (ay-cyC)/ca*8 };
  const ub = { x: (bx-cxC)/cb*8, y: (by-cyC)/cb*8 };
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-center">
      <div className="space-y-3">
        <Slider label={t('simulations.circleTheorems.position')} min={0.05} max={0.95} step={0.05} value={pos} onChange={setPos} format={(v) => `${(v * 100).toFixed(0)}%`} />
        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p>∠ACB: <span className="font-mono">90°</span></p>
          <p className="text-xs text-text-muted pt-2 border-t border-border">
            {t('simulations.circleTheorems.ruleSemicircle')}
          </p>
        </div>
      </div>
      <svg role="img" aria-label={t('simulations.circleTheorems.semicircleAlt')} viewBox="0 0 320 280" className="w-full max-w-[320px] mx-auto">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-border)" strokeWidth={1.5} />
        <line x1={ax} y1={ay} x2={bx} y2={by} stroke="var(--color-accent-warm)" strokeWidth={2} strokeDasharray="3 3" />
        <line x1={ax} y1={ay} x2={cxC} y2={cyC} stroke="var(--color-accent-sky-deep)" strokeWidth={2} />
        <line x1={bx} y1={by} x2={cxC} y2={cyC} stroke="var(--color-accent-sky-deep)" strokeWidth={2} />

        <polyline points={`${cxC+ua.x},${cyC+ua.y} ${cxC+ua.x+ub.x},${cyC+ua.y+ub.y} ${cxC+ub.x},${cyC+ub.y}`} fill="none" stroke="var(--color-accent-clay)" />
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
  const alpha = angleA * Math.PI / 180;
  const points = [0, Math.PI - alpha, Math.PI, Math.PI + alpha].map((θ) => ({
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
      <svg role="img" aria-label={t('simulations.circleTheorems.cyclicAlt', { angle: angleA, other: 180 - angleA })} viewBox="0 0 320 280" className="w-full max-w-[320px] mx-auto">
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
  const construction = chordGeometry(ap, pb, cp);
  const pd = construction.pd;
  const scale = 90 / construction.radius;
  const point = (x: number, y: number) => ({ x: 160 + (x-construction.centre.x)*scale, y: 140 + (y-construction.centre.y)*scale });
  const points = construction.points.map(p => point(p.x, p.y));
  const crossing = point(0, 0);

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
      <svg role="img" aria-label={t('simulations.circleTheorems.chordsAlt', { ap, pb, cp, pd: fmt(pd) })} viewBox="0 0 320 280" className="w-full max-w-[320px] mx-auto">
        <circle cx={160} cy={140} r={90} fill="none" stroke="var(--color-border)" strokeWidth={1.5} />
        <line x1={points[0].x} y1={points[0].y} x2={points[1].x} y2={points[1].y} stroke="var(--color-accent-warm)" strokeWidth={2} />
        <line x1={points[2].x} y1={points[2].y} x2={points[3].x} y2={points[3].y} stroke="var(--color-accent-sky-deep)" strokeWidth={2} />
        {points.map((p,i) => <g key={i}><circle cx={p.x} cy={p.y} r={4} fill="var(--color-text-primary)" /><text x={p.x+6} y={p.y-6} fontSize={11} fill="var(--color-text-secondary)">{['A','B','C','D'][i]}</text></g>)}
        <circle cx={crossing.x} cy={crossing.y} r={4} fill="var(--color-accent-clay)" />
        <text x={crossing.x+6} y={crossing.y+14} fontSize={11} fill="var(--color-text-secondary)">P</text>
      </svg>
    </div>
  );
}
