import { wavePhase, soundSnapshot } from './waveModels';
import {FormulaTeaching} from '../../content/FormulaTeaching';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { useAnimationFrame } from '../../../hooks/useAnimationFrame';

const W = 560;
const H = 220;

export function SoundWave() {
  const { t, i18n } = useTranslation('physics');
  const ru = i18n.language.startsWith('ru');
  const [frequency, setFrequency] = useState(440);
  const [amplitude, setAmplitude] = useState(50);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAnimationFrame((_dt, elapsed) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    drawScene(ctx, frequency, amplitude, elapsed, ru);
  });

  let pitch = ru ? 'средняя' : 'mid';
  if (frequency < 150) pitch = ru ? 'очень низкая (бас)' : 'very low (bass)';
  else if (frequency < 400) pitch = ru ? 'низкая' : 'low';
  else if (frequency < 1500) pitch = ru ? 'средняя' : 'mid';
  else if (frequency < 6000) pitch = ru ? 'высокая' : 'high';
  else pitch = ru ? 'очень высокая (дискант)' : 'very high (treble)';

  let loudness = ru ? 'средняя' : 'medium';
  if (amplitude < 25) loudness = ru ? 'тихая' : 'quiet';
  else if (amplitude < 60) loudness = ru ? 'средняя' : 'medium';
  else loudness = ru ? 'громкая' : 'loud';

  return (
    <SimulationPanel
      title={t('wavesOptics.simSound.title')}
      description={t('wavesOptics.simSound.desc')}
    >
      <div className="space-y-4">
        <canvas role="img" aria-label={t('wavesOptics.simSound.desc')}
          ref={canvasRef}
          width={W}
          height={H}
          className="w-full bg-bg-primary rounded-md border border-border"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          <div className="space-y-3">
            <Slider
              label={t('wavesOptics.simSound.frequency')}
              unit={ru ? 'Гц' : 'Hz'}
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
              <p className="text-xs text-text-muted">{ru ? 'Высота' : 'Pitch'}</p>
              <p className="font-medium capitalize">{pitch}</p>
            </div>
            <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2">
              <p className="text-xs text-text-muted">{ru ? 'Громкость' : 'Loudness'}</p>
              <p className="font-medium capitalize">{loudness}</p>
            </div>
          </div>
        </div>

        <div className="text-xs text-text-muted leading-relaxed">
          {ru
            ? 'Звук в воздухе — продольная волна. Частота связана с высотой тона. При одной частоте большая амплитуда обычно воспринимается как большая громкость; восприятие зависит также от частоты и слуха. Вверху показано избыточное давление вдоль волны, внизу — сжатия и разрежения воздуха в тот же момент. Движение замедлено, а масштабы расстояния и амплитуды условны; это не график давления во времени.'
            : 'Sound in air is a longitudinal wave. Frequency relates to pitch. At the same frequency, greater amplitude usually sounds louder; perception also depends on frequency and hearing sensitivity. The top shows excess pressure along the wave, and the bottom shows air compressions and rarefactions at the same instant. Motion is slowed and distance/amplitude scales are schematic; this is not a pressure–time graph.'}
        </div>
      </div>
    <FormulaTeaching id="wave"/></SimulationPanel>
  );
}

function drawScene(ctx: CanvasRenderingContext2D, frequency: number, amplitude: number, time: number, ru: boolean) {
  ctx.clearRect(0, 0, W, H);

  const sineY = 65;
  const sineH = 50;
  const particleY = 165;

  // Spatial pressure snapshot, aligned with the displacement field below.
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
  // Deliberately schematic display mappings, not physical metres/seconds.
  const cyclesAcross = 1 + (frequency / 600);
  const phaseAt = (x: number) => wavePhase(x, W / cyclesAcross, frequency / 400, time);
  for (let x = 0; x <= W; x++) {
    const y = sineY - (amplitude / 90) * sineH * soundSnapshot(phaseAt(x)).pressure;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#6b5b47';
  ctx.font = '10px Inter';
  ctx.fillText(ru ? 'Давление вдоль волны (схема)' : 'Pressure along the wave (schematic)', 10, 18);
  ctx.fillText(ru ? 'Частицы воздуха (сжатие и разрежение)' : 'Air particles (compression / rarefaction)', 10, 140);

  // Particles row showing compression
  ctx.fillStyle = '#3d2f1f';
  const dotRadius = 2.5;
  const cols = 80;
  const spacing = W / cols;
  for (let i = 0; i < cols; i++) {
    const baseX = i * spacing + spacing / 2;
    const offset = (amplitude / 90) * 6 * soundSnapshot(phaseAt(baseX)).displacement;
    const x = baseX + offset;
    ctx.beginPath();
    ctx.arc(x, particleY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Footer info
  ctx.fillStyle = '#9c8b73';
  ctx.font = '10px JetBrains Mono';
  ctx.fillText(`f = ${frequency} ${ru ? 'Гц' : 'Hz'}`, W - 110, H - 8);
}
