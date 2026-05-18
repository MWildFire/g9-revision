import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip as RTooltip, ReferenceLine } from 'recharts';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Button } from '../../ui/Button';
import { useAnimationFrame } from '../../../hooks/useAnimationFrame';
import { G, format } from '../../../lib/physics';
import { RotateCcw } from 'lucide-react';

const W = 320;
const H = 360;

interface Sample {
  t: number;
  v: number;
}

export function TerminalVelocity() {
  const { t } = useTranslation('physics');
  const [mass, setMass] = useState(80);
  const [drag, setDrag] = useState(0.4);
  const [parachuteOpen, setParachuteOpen] = useState(false);
  const [running, setRunning] = useState(true);

  const stateRef = useRef({ y: 30, v: 0, t: 0 });
  const samplesRef = useRef<Sample[]>([{ t: 0, v: 0 }]);
  const [samples, setSamples] = useState<Sample[]>([{ t: 0, v: 0 }]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentSpeed, setCurrentSpeed] = useState(0);

  const effectiveDrag = parachuteOpen ? drag * 12 : drag;
  const weight = mass * G;

  const reset = () => {
    stateRef.current = { y: 30, v: 0, t: 0 };
    samplesRef.current = [{ t: 0, v: 0 }];
    setSamples([{ t: 0, v: 0 }]);
    setParachuteOpen(false);
    setCurrentSpeed(0);
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mass, drag]);

  useAnimationFrame((dt) => {
    const s = stateRef.current;
    const fDrag = effectiveDrag * s.v * s.v;
    const fNet = weight - fDrag;
    const a = fNet / mass;
    s.v += a * dt;
    if (s.v < 0) s.v = 0;
    s.t += dt;
    s.y += s.v * 0.4 * dt;
    if (s.y > H - 30) {
      s.y = H - 30;
      s.v = 0;
    }

    const last = samplesRef.current[samplesRef.current.length - 1];
    if (s.t - (last?.t ?? -1) > 0.1) {
      samplesRef.current = [...samplesRef.current, { t: s.t, v: s.v }];
      if (samplesRef.current.length > 200) samplesRef.current.shift();
      setSamples([...samplesRef.current]);
      setCurrentSpeed(s.v);
    }

    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    drawScene(ctx, s.y, parachuteOpen, fDrag, weight);
  }, running);

  const fDrag = effectiveDrag * currentSpeed * currentSpeed;
  const vTerm = Math.sqrt(weight / effectiveDrag);

  return (
    <SimulationPanel title={t('forceMotion.sim2.title')} description={t('forceMotion.sim2.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="w-full max-w-[320px] mx-auto bg-bg-primary rounded-md border border-border"
        />
        <div className="space-y-4">
          <Slider label={t('forceMotion.sim2.skydiverMass')} unit="kg" min={50} max={120} step={1} value={mass} onChange={setMass} />
          <Slider label={t('forceMotion.sim2.dragCoefficient')} min={0.1} max={2.0} step={0.05} value={drag} onChange={setDrag} />

          <div className="flex gap-2">
            <Button
              variant={parachuteOpen ? 'secondary' : 'primary'}
              size="sm"
              onClick={() => setParachuteOpen(!parachuteOpen)}
            >
              {t('forceMotion.sim2.deployParachute')}
            </Button>
            <Button variant="ghost" size="sm" onClick={reset}>
              <RotateCcw size={14} /> {t('common.reset')}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <Stat label={t('forceMotion.sim2.weight')} value={`${format(weight, 0)} N`} accent="warm" />
            <Stat label={t('forceMotion.sim2.drag')} value={`${format(fDrag, 0)} N`} accent="sky" />
            <Stat label={t('forceMotion.sim2.currentSpeed')} value={`${format(currentSpeed, 1)} m/s`} accent="sage" />
          </div>

          <div className="h-44 bg-bg-primary rounded-md border border-border p-2">
            <p className="text-xs text-text-muted px-2 mb-1">{t('forceMotion.sim2.chartTitle')}</p>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={samples} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <XAxis
                  dataKey="t"
                  type="number"
                  domain={[0, 'dataMax']}
                  tickFormatter={(v) => `${v.toFixed(0)}s`}
                  stroke="var(--color-text-muted)"
                  fontSize={10}
                  tickCount={6}
                />
                <YAxis stroke="var(--color-text-muted)" fontSize={10} domain={[0, 'auto']} width={40} unit=" m/s" />
                <RTooltip
                  contentStyle={{
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => v.toFixed(1)}
                />
                <ReferenceLine y={vTerm} stroke="var(--color-accent-sage)" strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke="var(--color-accent-warm)"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-2 text-xs text-text-muted">
        v<sub>terminal</sub> ≈ √(mg/b) = {format(vTerm, 1)} m/s
      </div>
      <div className="mt-2">
        <Button variant="ghost" size="sm" onClick={() => setRunning((r) => !r)}>
          {running ? t('common.pause') : t('common.play')}
        </Button>
      </div>
    </SimulationPanel>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent: 'warm' | 'sky' | 'sage' }) {
  const colorMap = {
    warm: 'border-l-[var(--color-accent-warm)]',
    sky: 'border-l-[var(--color-accent-sky)]',
    sage: 'border-l-[var(--color-accent-sage)]',
  };
  return (
    <div className={`bg-bg-tertiary rounded-md px-3 py-2 border-l-4 border-border ${colorMap[accent]}`}>
      <div className="text-text-muted">{label}</div>
      <div className="font-mono text-text-primary text-sm">{value}</div>
    </div>
  );
}

function drawScene(ctx: CanvasRenderingContext2D, y: number, parachute: boolean, drag: number, weight: number) {
  ctx.clearRect(0, 0, W, H);
  // sky gradient
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#a8b8c8');
  grad.addColorStop(0.7, '#d9d0c0');
  grad.addColorStop(1, '#c9a876');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // ground
  ctx.fillStyle = '#a8b5a0';
  ctx.fillRect(0, H - 18, W, 18);

  const cx = W / 2;

  // Parachute
  if (parachute) {
    ctx.fillStyle = '#c99a8e';
    ctx.strokeStyle = '#6b5b47';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, y - 18, 36, Math.PI, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // strings
    ctx.beginPath();
    ctx.moveTo(cx - 36, y - 18);
    ctx.lineTo(cx, y);
    ctx.moveTo(cx + 36, y - 18);
    ctx.lineTo(cx, y);
    ctx.moveTo(cx - 18, y - 36);
    ctx.lineTo(cx, y);
    ctx.moveTo(cx + 18, y - 36);
    ctx.lineTo(cx, y);
    ctx.stroke();
  }

  // body
  ctx.fillStyle = '#3d2f1f';
  ctx.beginPath();
  ctx.arc(cx, y + 6, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(cx - 4, y + 10, 8, 14);

  // weight arrow (down)
  const arrowScale = Math.min(60, weight / 20);
  ctx.strokeStyle = '#c9a876';
  ctx.fillStyle = '#c9a876';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx + 16, y + 12);
  ctx.lineTo(cx + 16, y + 12 + arrowScale);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + 16, y + 12 + arrowScale);
  ctx.lineTo(cx + 11, y + 12 + arrowScale - 6);
  ctx.lineTo(cx + 21, y + 12 + arrowScale - 6);
  ctx.closePath();
  ctx.fill();

  // drag arrow (up)
  const dragScale = Math.min(60, drag / 20);
  if (drag > 1) {
    ctx.strokeStyle = '#a8b8c8';
    ctx.fillStyle = '#a8b8c8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(cx - 16, y + 12);
    ctx.lineTo(cx - 16, y + 12 - dragScale);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - 16, y + 12 - dragScale);
    ctx.lineTo(cx - 11, y + 12 - dragScale + 6);
    ctx.lineTo(cx - 21, y + 12 - dragScale + 6);
    ctx.closePath();
    ctx.fill();
  }
}
