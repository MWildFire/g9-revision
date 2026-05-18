import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip as RTooltip } from 'recharts';
import { Slider } from '../../ui/Slider';
import { Formula } from '../../ui/Formula';
import { SimulationPanel } from '../../ui/Tabs';
import { Button } from '../../ui/Button';
import { useAnimationFrame } from '../../../hooks/useAnimationFrame';
import { acceleration, format } from '../../../lib/physics';
import { RotateCcw } from 'lucide-react';

const CANVAS_W = 560;
const CANVAS_H = 200;
const CART_W = 60;
const CART_H = 40;
const GROUND_Y = CANVAS_H - 40;
const M_PER_PX = 1 / 30;
const MAX_TIME = 10;

interface Sample {
  t: number;
  v: number;
}

export function NewtonSecondLaw() {
  const { t } = useTranslation('physics');
  const [mass, setMass] = useState(2);
  const [force, setForce] = useState(10);
  const [running, setRunning] = useState(true);

  const stateRef = useRef({ xMeters: 0, v: 0, t: 0 });
  const samplesRef = useRef<Sample[]>([{ t: 0, v: 0 }]);
  const [samples, setSamples] = useState<Sample[]>([{ t: 0, v: 0 }]);
  const [currentV, setCurrentV] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const a = acceleration(force, mass);

  const reset = () => {
    stateRef.current = { xMeters: 0, v: 0, t: 0 };
    samplesRef.current = [{ t: 0, v: 0 }];
    setSamples([{ t: 0, v: 0 }]);
    setCurrentV(0);
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mass, force]);

  useAnimationFrame((dt) => {
    const s = stateRef.current;
    s.v += a * dt;
    s.xMeters += s.v * dt;
    s.t += dt;

    const cartPx = 50 + s.xMeters / M_PER_PX;
    if (cartPx > CANVAS_W - CART_W - 10 || s.t > MAX_TIME) {
      reset();
      return;
    }

    const last = samplesRef.current[samplesRef.current.length - 1];
    if (!last || s.t - last.t > 0.1) {
      samplesRef.current = [
        ...samplesRef.current,
        { t: parseFloat(s.t.toFixed(2)), v: parseFloat(s.v.toFixed(2)) },
      ];
      if (samplesRef.current.length > 120) samplesRef.current.shift();
      setSamples([...samplesRef.current]);
      setCurrentV(s.v);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    drawScene(ctx, cartPx, force, mass, s.v);
  }, running);

  const maxV = a > 0 ? a * MAX_TIME : 10;
  const yMax = Math.max(2, Math.ceil(maxV / 5) * 5);

  return (
    <SimulationPanel title={t('forceMotion.sim1.title')} description={t('forceMotion.sim1.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-4">
          <canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            className="w-full bg-bg-primary rounded-md border border-border"
          />
          <Formula caption={`a = F / m`}>
            a = {force.toFixed(1)} N / {mass.toFixed(1)} kg ={' '}
            <span className="text-accent-warm">{format(a, 2)} m/s²</span>
          </Formula>
          <div className="h-44 bg-bg-primary rounded-md border border-border p-2">
            <p className="text-xs text-text-muted px-2 mb-1">{t('forceMotion.sim1.chartTitle')}</p>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={samples} margin={{ top: 5, right: 12, left: 0, bottom: 0 }}>
                <XAxis
                  dataKey="t"
                  type="number"
                  domain={[0, MAX_TIME]}
                  ticks={[0, 2, 4, 6, 8, 10]}
                  tickFormatter={(v) => `${v}s`}
                  stroke="var(--color-text-muted)"
                  fontSize={10}
                />
                <YAxis
                  stroke="var(--color-text-muted)"
                  fontSize={10}
                  domain={[0, yMax]}
                  tickFormatter={(v) => `${v}`}
                  unit=" m/s"
                  width={55}
                />
                <RTooltip
                  contentStyle={{
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => v.toFixed(2)}
                  labelFormatter={(v: number) => `t = ${v.toFixed(2)} s`}
                />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke="var(--color-accent-warm)"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                  name="v"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="space-y-4">
          <Slider label={t('forceMotion.sim1.mass')} unit="kg" min={0.5} max={10} step={0.1} value={mass} onChange={setMass} />
          <Slider label={t('forceMotion.sim1.force')} unit="N" min={0} max={50} step={1} value={force} onChange={setForce} />
          <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
            <Stat label={t('forceMotion.sim1.acceleration')} value={`${format(a, 2)} m/s²`} />
            <Stat label={t('forceMotion.sim1.velocity')} value={`${format(currentV, 1)} m/s`} />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={reset}>
              <RotateCcw size={14} /> {t('common.reset')}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setRunning((r) => !r)}>
              {running ? t('common.pause') : t('common.play')}
            </Button>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
      <div className="text-text-muted">{label}</div>
      <div className="font-mono text-text-primary text-sm">{value}</div>
    </div>
  );
}

function drawScene(
  ctx: CanvasRenderingContext2D,
  cartX: number,
  force: number,
  mass: number,
  velocity: number,
) {
  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

  ctx.strokeStyle = '#c9a876';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, GROUND_Y);
  ctx.lineTo(CANVAS_W, GROUND_Y);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(156, 139, 115, 0.4)';
  ctx.lineWidth = 1;
  for (let x = 0; x < CANVAS_W; x += 14) {
    ctx.beginPath();
    ctx.moveTo(x, GROUND_Y);
    ctx.lineTo(x + 10, GROUND_Y + 14);
    ctx.stroke();
  }

  const cartY = GROUND_Y - CART_H;

  ctx.fillStyle = '#3d2f1f';
  ctx.beginPath();
  ctx.arc(cartX + 14, GROUND_Y, 7, 0, Math.PI * 2);
  ctx.arc(cartX + CART_W - 14, GROUND_Y, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#c9a876';
  ctx.strokeStyle = '#6b5b47';
  ctx.lineWidth = 1.5;
  ctx.fillRect(cartX, cartY, CART_W, CART_H);
  ctx.strokeRect(cartX, cartY, CART_W, CART_H);

  ctx.fillStyle = '#3d2f1f';
  ctx.font = '12px JetBrains Mono';
  ctx.textAlign = 'center';
  ctx.fillText(`${mass.toFixed(1)} kg`, cartX + CART_W / 2, cartY + CART_H / 2 + 4);

  if (force > 0) {
    const arrowLen = Math.min(90, force * 1.8);
    const ax1 = cartX - 4;
    const ax2 = ax1 - arrowLen;
    const ay = cartY + CART_H / 2;
    ctx.strokeStyle = '#c99a8e';
    ctx.fillStyle = '#c99a8e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(ax2, ay);
    ctx.lineTo(ax1, ay);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ax1, ay);
    ctx.lineTo(ax1 - 9, ay - 6);
    ctx.lineTo(ax1 - 9, ay + 6);
    ctx.closePath();
    ctx.fill();
    ctx.font = '11px Inter';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#3d2f1f';
    ctx.fillText(`F = ${force.toFixed(0)} N`, (ax1 + ax2) / 2, ay - 10);
  }

  if (Math.abs(velocity) > 0.05) {
    const vLen = Math.min(70, Math.abs(velocity) * 6);
    const vy = cartY - 18;
    const vCenterX = cartX + CART_W / 2;
    ctx.strokeStyle = '#a8b5a0';
    ctx.fillStyle = '#a8b5a0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(vCenterX, vy);
    ctx.lineTo(vCenterX + vLen, vy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(vCenterX + vLen, vy);
    ctx.lineTo(vCenterX + vLen - 6, vy - 4);
    ctx.lineTo(vCenterX + vLen - 6, vy + 4);
    ctx.closePath();
    ctx.fill();
    ctx.font = '10px Inter';
    ctx.fillStyle = '#6b5b47';
    ctx.textAlign = 'left';
    ctx.fillText(`v = ${velocity.toFixed(1)} m/s`, vCenterX + vLen + 4, vy + 3);
  }
}
