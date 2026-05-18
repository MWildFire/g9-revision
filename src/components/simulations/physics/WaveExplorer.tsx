import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel, Tabs } from '../../ui/Tabs';
import { Formula } from '../../ui/Formula';
import { useAnimationFrame } from '../../../hooks/useAnimationFrame';
import { waveSpeed, format } from '../../../lib/physics';

const W = 560;
const H = 200;

export function WaveExplorer() {
  const { t } = useTranslation('physics');
  const [amplitude, setAmplitude] = useState(40);
  const [wavelength, setWavelength] = useState(120);
  const [frequency, setFrequency] = useState(1.5);
  const [type, setType] = useState<'transverse' | 'longitudinal'>('transverse');

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAnimationFrame((_dt, elapsed) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    if (type === 'transverse') drawTransverse(ctx, amplitude, wavelength, frequency, elapsed);
    else drawLongitudinal(ctx, amplitude, wavelength, frequency, elapsed);
  });

  const v = waveSpeed(frequency, wavelength / 100);

  return (
    <SimulationPanel title={t('wavesOptics.sim1.title')} description={t('wavesOptics.sim1.desc')}>
      <div className="space-y-4">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="w-full bg-bg-primary rounded-md border border-border"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="space-y-3">
            <Slider label={t('wavesOptics.sim1.amplitude')} unit="px" min={10} max={80} step={1} value={amplitude} onChange={setAmplitude} />
            <Slider label={t('wavesOptics.sim1.wavelength')} unit="px" min={20} max={300} step={5} value={wavelength} onChange={setWavelength} />
            <Slider label={t('wavesOptics.sim1.frequency')} unit="Hz" min={0.2} max={5} step={0.1} value={frequency} onChange={setFrequency} />
          </div>
          <div className="space-y-3">
            <Tabs
              tabs={[
                { id: 'transverse', label: t('common.transverse') },
                { id: 'longitudinal', label: t('common.longitudinal') },
              ]}
              activeId={type}
              onChange={(id) => setType(id as 'transverse' | 'longitudinal')}
            />
            <Formula caption={t('wavesOptics.sim1.speed')}>
              v = f × λ = {frequency.toFixed(1)} × {(wavelength / 100).toFixed(2)} ={' '}
              <span className="text-accent-warm">{format(v, 2)} m/s</span>
            </Formula>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function drawTransverse(
  ctx: CanvasRenderingContext2D,
  amp: number,
  lam: number,
  freq: number,
  time: number,
) {
  ctx.clearRect(0, 0, W, H);
  const baseY = H / 2;
  ctx.strokeStyle = '#9c8b73';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(0, baseY);
  ctx.lineTo(W, baseY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = '#c9a876';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let x = 0; x <= W; x += 1) {
    const y = baseY - amp * Math.sin((2 * Math.PI * (x - freq * time * 60)) / lam);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // wavelength marker
  ctx.strokeStyle = '#a8b8c8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(40, baseY + amp + 10);
  ctx.lineTo(40 + lam, baseY + amp + 10);
  ctx.stroke();
  ctx.fillStyle = '#6b5b47';
  ctx.font = '10px JetBrains Mono';
  ctx.textAlign = 'center';
  ctx.fillText(`λ = ${lam}px`, 40 + lam / 2, baseY + amp + 24);
}

function drawLongitudinal(
  ctx: CanvasRenderingContext2D,
  amp: number,
  lam: number,
  freq: number,
  time: number,
) {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#c9a876';
  const dotSize = 3;
  const cols = 40;
  const rows = 6;
  const spacing = W / cols;
  for (let r = 0; r < rows; r++) {
    for (let i = 0; i < cols; i++) {
      const baseX = i * spacing + spacing / 2;
      const offset = (amp / 50) * 8 * Math.sin((2 * Math.PI * (baseX - freq * time * 60)) / lam);
      const x = baseX + offset;
      const y = H / 2 - 50 + r * 18;
      ctx.beginPath();
      ctx.arc(x, y, dotSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // compression label
  ctx.fillStyle = '#6b5b47';
  ctx.font = '10px JetBrains Mono';
  ctx.textAlign = 'center';
  ctx.fillText(`λ = ${lam}px`, W / 2, H - 14);
}
