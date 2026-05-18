import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { useAnimationFrame } from '../../../hooks/useAnimationFrame';

const W = 560;
const H = 240;
const WALL_X = Math.round(W * 0.35);
const SLIT_CENTER_Y = H / 2;

export function Diffraction() {
  const { t } = useTranslation('physics');
  const [slit, setSlit] = useState(80);
  const [wavelength, setWavelength] = useState(40);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAnimationFrame((_dt, elapsed) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    drawScene(ctx, slit, wavelength, elapsed);
  });

  const ratio = wavelength / slit;
  let intuition = 'Mild spreading — wave continues mostly straight';
  if (ratio > 0.6) intuition = 'Strong diffraction — wave spreads wide';
  else if (ratio > 0.3) intuition = 'Moderate diffraction — clear curving at edges';

  return (
    <SimulationPanel title={t('wavesOptics.sim3.title')} description={t('wavesOptics.sim3.desc')}>
      <div className="space-y-4">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="w-full bg-bg-primary rounded-md border border-border"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          <div className="space-y-3">
            <Slider label={t('wavesOptics.sim3.slitWidth')} unit="px" min={10} max={200} step={2} value={slit} onChange={setSlit} />
            <Slider label={t('wavesOptics.sim3.wavelength')} unit="px" min={10} max={100} step={2} value={wavelength} onChange={setWavelength} />
          </div>
          <div className="bg-bg-tertiary border border-border rounded-md px-4 py-3">
            <p className="text-xs text-text-muted">λ / slit</p>
            <p className="font-mono text-xl">{ratio.toFixed(2)}</p>
            <p className="text-xs text-text-secondary mt-1">{intuition}</p>
          </div>
        </div>
        <div className="text-xs text-text-muted leading-relaxed">
          When the slit is much wider than λ, the wave passes through almost as a plane wave with small bending at the edges.
          When the slit is similar in size to (or smaller than) λ, the wave spreads out widely — each point in the slit acts
          as a new source (Huygens' principle).
        </div>
      </div>
    </SimulationPanel>
  );
}

function drawScene(ctx: CanvasRenderingContext2D, slit: number, lam: number, time: number) {
  ctx.clearRect(0, 0, W, H);

  const slitHalf = slit / 2;
  const slitTop = SLIT_CENTER_Y - slitHalf;
  const slitBottom = SLIT_CENTER_Y + slitHalf;
  const speed = 50;

  // Incoming plane waves (left of wall)
  ctx.strokeStyle = '#c9a876';
  ctx.lineWidth = 2;
  for (let i = -1; i < 8; i++) {
    const x = WALL_X - 30 - i * lam + ((time * speed) % lam);
    if (x < 4 || x > WALL_X - 4) continue;
    ctx.beginPath();
    ctx.moveTo(x, 14);
    ctx.lineTo(x, H - 14);
    ctx.stroke();
  }

  // Wall (with slit)
  ctx.fillStyle = '#6b5b47';
  ctx.fillRect(WALL_X, 0, 6, slitTop);
  ctx.fillRect(WALL_X, slitBottom, 6, H - slitBottom);

  // Wavefronts after slit — Huygens-style envelope: straight middle + quarter arcs at the edges.
  // For narrow slits this naturally degenerates into a full semicircle (point-source-like).
  ctx.strokeStyle = '#a8b8c8';
  ctx.lineWidth = 2;
  const phase = (time * speed) % lam;
  const maxR = W - WALL_X - 8;
  for (let r = lam - phase; r < maxR; r += lam) {
    if (r < 4) continue;

    ctx.beginPath();
    // Top arc: from straight-up direction sweeping to the right
    ctx.arc(WALL_X + 3, slitTop, r, -Math.PI / 2, 0);
    // Straight middle (continues from end of top arc to start of bottom arc)
    ctx.lineTo(WALL_X + 3 + r, slitBottom);
    // Bottom arc: from right sweeping to straight-down
    ctx.arc(WALL_X + 3, slitBottom, r, 0, Math.PI / 2);
    ctx.stroke();
  }

  // Slit edge markers (small notches)
  ctx.fillStyle = '#3d2f1f';
  ctx.fillRect(WALL_X - 2, slitTop - 1, 10, 2);
  ctx.fillRect(WALL_X - 2, slitBottom - 1, 10, 2);
}
