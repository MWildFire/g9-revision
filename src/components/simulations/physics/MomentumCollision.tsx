import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Button } from '../../ui/Button';
import { Tabs } from '../../ui/Tabs';
import { useAnimationFrame } from '../../../hooks/useAnimationFrame';
import { elasticCollision, inelasticCollision, format } from '../../../lib/physics';
import { RotateCcw } from 'lucide-react';

const W = 560;
const H = 180;

export function MomentumCollision() {
  const { t } = useTranslation();
  const [m1, setM1] = useState(2);
  const [m2, setM2] = useState(3);
  const [v1Init, setV1Init] = useState(4);
  const [v2Init, setV2Init] = useState(-2);
  const [type, setType] = useState<'elastic' | 'inelastic'>('elastic');

  const stateRef = useRef({
    x1: 120,
    x2: 440,
    v1: v1Init,
    v2: v2Init,
    collided: false,
    v1After: v1Init,
    v2After: v2Init,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [postCollision, setPostCollision] = useState<{ v1: number; v2: number }>({
    v1: v1Init,
    v2: v2Init,
  });

  const r1 = 18 + m1 * 4;
  const r2 = 18 + m2 * 4;

  const reset = () => {
    stateRef.current = {
      x1: 120,
      x2: 440,
      v1: v1Init,
      v2: v2Init,
      collided: false,
      v1After: v1Init,
      v2After: v2Init,
    };
    setPostCollision({ v1: v1Init, v2: v2Init });
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [m1, m2, v1Init, v2Init, type]);

  useAnimationFrame((dt) => {
    const s = stateRef.current;
    const speed = 50;
    s.x1 += s.v1 * dt * speed;
    s.x2 += s.v2 * dt * speed;

    const gap = s.x2 - s.x1;
    const minGap = r1 + r2;

    // Allow re-collision once balls are well separated again
    if (s.collided && gap > minGap + 6) {
      s.collided = false;
    }

    if (!s.collided && gap < minGap) {
      const closing = s.v1 - s.v2;
      if (closing > 0) {
        if (type === 'elastic') {
          const r = elasticCollision(m1, s.v1, m2, s.v2);
          s.v1 = r.v1;
          s.v2 = r.v2;
        } else {
          const r = inelasticCollision(m1, s.v1, m2, s.v2);
          s.v1 = r.v;
          s.v2 = r.v;
        }
        s.v1After = s.v1;
        s.v2After = s.v2;
        s.collided = true;
        setPostCollision({ v1: s.v1, v2: s.v2 });
        // Nudge them apart so they don't immediately re-collide
        const overlap = minGap - gap;
        s.x1 -= overlap / 2;
        s.x2 += overlap / 2;
      }
    }

    // Bounce off walls
    if (s.x1 < r1) {
      s.x1 = r1;
      s.v1 = Math.abs(s.v1);
    }
    if (s.x2 > W - r2) {
      s.x2 = W - r2;
      s.v2 = -Math.abs(s.v2);
    }
    if (s.x1 > W + 40 || s.x2 < -40) {
      reset();
      return;
    }

    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    drawScene(ctx, s.x1, s.x2, r1, r2, m1, m2, s.v1, s.v2);
  });

  const pBefore = m1 * v1Init + m2 * v2Init;
  const pAfter = m1 * postCollision.v1 + m2 * postCollision.v2;

  return (
    <SimulationPanel title={t('forceMotion.sim3.title')} description={t('forceMotion.sim3.desc')}>
      <div className="space-y-4">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="w-full bg-bg-primary rounded-md border border-border"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <Slider label={t('forceMotion.sim3.m1')} unit="kg" min={0.5} max={10} step={0.1} value={m1} onChange={setM1} />
            <Slider label={t('forceMotion.sim3.m2')} unit="kg" min={0.5} max={10} step={0.1} value={m2} onChange={setM2} />
          </div>
          <div className="space-y-3">
            <Slider label={t('forceMotion.sim3.v1')} unit="m/s" min={-5} max={5} step={0.1} value={v1Init} onChange={setV1Init} />
            <Slider label={t('forceMotion.sim3.v2')} unit="m/s" min={-5} max={5} step={0.1} value={v2Init} onChange={setV2Init} />
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Tabs
            tabs={[
              { id: 'elastic', label: t('common.elastic') },
              { id: 'inelastic', label: t('common.inelastic') },
            ]}
            activeId={type}
            onChange={(id) => setType(id as 'elastic' | 'inelastic')}
          />
          <Button variant="secondary" size="sm" onClick={reset}>
            <RotateCcw size={14} /> {t('common.reset')}
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          <Stat label={`v₁ ${t('common.before')}`} value={`${v1Init.toFixed(1)} m/s`} />
          <Stat label={`v₂ ${t('common.before')}`} value={`${v2Init.toFixed(1)} m/s`} />
          <Stat label={`v₁' ${t('common.after')}`} value={`${postCollision.v1.toFixed(2)} m/s`} accent />
          <Stat label={`v₂' ${t('common.after')}`} value={`${postCollision.v2.toFixed(2)} m/s`} accent />
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-bg-tertiary border border-border rounded-md px-4 py-2.5">
            <div className="text-xs text-text-muted">{t('forceMotion.sim3.totalBefore')}</div>
            <div className="font-mono text-text-primary">{format(pBefore, 2)} kg·m/s</div>
          </div>
          <div
            className="bg-bg-tertiary rounded-md px-4 py-2.5 border border-border"
            style={{ borderLeft: '4px solid var(--color-accent-sage)' }}
          >
            <div className="text-xs text-text-muted">{t('forceMotion.sim3.totalAfter')}</div>
            <div className="font-mono text-text-primary">{format(pAfter, 2)} kg·m/s</div>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function Stat({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-md px-3 py-2 border ${
        accent ? 'bg-bg-secondary border-l-4 border-l-[var(--color-accent-warm)] border-border' : 'bg-bg-tertiary border-border'
      }`}
    >
      <div className="text-xs text-text-muted">{label}</div>
      <div className="font-mono text-sm text-text-primary">{value}</div>
    </div>
  );
}

function drawScene(
  ctx: CanvasRenderingContext2D,
  x1: number,
  x2: number,
  r1: number,
  r2: number,
  m1: number,
  m2: number,
  v1: number,
  v2: number,
) {
  ctx.clearRect(0, 0, W, H);
  const groundY = H - 30;
  ctx.strokeStyle = '#c9a876';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(W, groundY);
  ctx.stroke();

  drawBall(ctx, x1, groundY - r1, r1, '#c9a876', m1, v1);
  drawBall(ctx, x2, groundY - r2, r2, '#a8b8c8', m2, v2);
}

function drawBall(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  color: string,
  m: number,
  v: number,
) {
  ctx.fillStyle = color;
  ctx.strokeStyle = '#6b5b47';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#3d2f1f';
  ctx.font = `${Math.max(10, r / 2)}px JetBrains Mono`;
  ctx.textAlign = 'center';
  ctx.fillText(`${m.toFixed(1)}`, x, y + 4);

  const arrowLen = Math.min(60, Math.abs(v) * 10);
  if (arrowLen > 4) {
    const dir = v >= 0 ? 1 : -1;
    const ay = y - r - 16;
    ctx.strokeStyle = '#3d2f1f';
    ctx.fillStyle = '#3d2f1f';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, ay);
    ctx.lineTo(x + arrowLen * dir, ay);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + arrowLen * dir, ay);
    ctx.lineTo(x + arrowLen * dir - 6 * dir, ay - 4);
    ctx.lineTo(x + arrowLen * dir - 6 * dir, ay + 4);
    ctx.closePath();
    ctx.fill();
    ctx.font = '10px Inter';
    ctx.fillStyle = '#6b5b47';
    ctx.fillText(`${v.toFixed(1)}`, x, ay - 6);
  }
}
