import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { useAnimationFrame } from '../../../hooks/useAnimationFrame';

const W = 560;
const H = 220;

export function SoundWave() {
  const { t } = useTranslation('physics');
  const [frequency, setFrequency] = useState(440);
  const [amplitude, setAmplitude] = useState(50);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAnimationFrame((_dt, elapsed) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    drawScene(ctx, frequency, amplitude, elapsed);
  });

  let pitch = 'mid';
  if (frequency < 150) pitch = 'very low (bass)';
  else if (frequency < 400) pitch = 'low';
  else if (frequency < 1500) pitch = 'mid';
  else if (frequency < 6000) pitch = 'high';
  else pitch = 'very high (treble)';

  let loudness = 'medium';
  if (amplitude < 25) loudness = 'quiet';
  else if (amplitude < 60) loudness = 'medium';
  else loudness = 'loud';

  return (
    <SimulationPanel
      title={t('wavesOptics.simSound.title')}
      description={t('wavesOptics.simSound.desc')}
    >
      <div className="space-y-4">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="w-full bg-bg-primary rounded-md border border-border"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          <div className="space-y-3">
            <Slider
              label={t('wavesOptics.simSound.frequency')}
              unit="Hz"
              min={50}
              max={8000}
              step={10}
              value={frequency}
              onChange={setFrequency}
            />
            <Slider
              label={t('wavesOptics.simSound.amplitude')}
              unit=""
              min={5}
              max={90}
              step={1}
              value={amplitude}
              onChange={setAmplitude}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
              <p className="text-xs text-text-muted">Pitch</p>
              <p className="font-medium capitalize">{pitch}</p>
            </div>
            <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
              <p className="text-xs text-text-muted">Loudness</p>
              <p className="font-medium capitalize">{loudness}</p>
            </div>
          </div>
        </div>

        <div className="text-xs text-text-muted leading-relaxed">
          Sound is a longitudinal wave. Frequency determines pitch (higher Hz = higher pitch). Amplitude determines
          loudness (larger amplitude = louder, more energy). The wave is shown both as a pressure-time graph (top) and
          as compression / rarefaction of air particles (bottom).
        </div>
      </div>
    </SimulationPanel>
  );
}

function drawScene(ctx: CanvasRenderingContext2D, frequency: number, amplitude: number, time: number) {
  ctx.clearRect(0, 0, W, H);

  const sineY = 65;
  const sineH = 50;
  const particleY = 165;

  // Sine wave (pressure-time view)
  ctx.strokeStyle = '#9c8b73';
  ctx.setLineDash([3, 3]);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, sineY);
  ctx.lineTo(W, sineY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = '#c9a876';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  // Convert frequency (Hz) to spatial wavelength on canvas
  const cyclesAcross = 1 + (frequency / 600);
  const k = (2 * Math.PI * cyclesAcross) / W;
  const w = 2 * Math.PI * (frequency / 400);
  for (let x = 0; x <= W; x++) {
    const y = sineY - (amplitude / 90) * sineH * Math.sin(k * x - w * time);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#6b5b47';
  ctx.font = '10px Inter';
  ctx.fillText('Pressure-time view', 10, 18);
  ctx.fillText('Air particles (compression / rarefaction)', 10, 140);

  // Particles row showing compression
  ctx.fillStyle = '#3d2f1f';
  const dotRadius = 2.5;
  const cols = 80;
  const spacing = W / cols;
  for (let i = 0; i < cols; i++) {
    const baseX = i * spacing + spacing / 2;
    const offset = (amplitude / 90) * 6 * Math.sin(k * baseX - w * time);
    const x = baseX + offset;
    ctx.beginPath();
    ctx.arc(x, particleY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Footer info
  ctx.fillStyle = '#9c8b73';
  ctx.font = '10px JetBrains Mono';
  ctx.fillText(`f = ${frequency} Hz`, W - 110, H - 8);
}
