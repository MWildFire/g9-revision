import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';

export function StormHydrograph() {
  const { t } = useTranslation('geography');
  const [intensity, setIntensity] = useState(50); // rainfall intensity 0-100
  const [saturation, setSaturation] = useState(40); // 0-100
  const [urbanization, setUrbanization] = useState(30); // 0-100

  // Compute hydrograph shape parameters
  // Lag time: shorter when intensity↑, saturation↑, urbanization↑
  const lagTime = 8 - (intensity + saturation + urbanization) * 0.02;
  // Peak discharge: higher with same factors
  const peakDischarge = 30 + (intensity + saturation + urbanization * 1.5) * 0.6;
  // Rising limb slope
  const flashy = (intensity + saturation + urbanization) > 150;

  // Generate hydrograph data points (24 hours)
  const points: { x: number; y: number }[] = [];
  const baseFlow = 10;
  const peakTime = 6 + lagTime * 0.3;
  const sigma = flashy ? 1.5 : 3;
  for (let t = 0; t <= 24; t += 0.5) {
    const y = baseFlow + (peakDischarge - baseFlow) * Math.exp(-Math.pow((t - peakTime) / sigma, 2));
    points.push({ x: t, y });
  }

  const W = 440;
  const H = 220;
  const padX = 40;
  const padY = 30;
  const xScale = (W - padX * 2) / 24;
  const yScale = (H - padY * 2) / 100;

  const pathD = points.map((p, i) => {
    const x = padX + p.x * xScale;
    const y = H - padY - p.y * yScale;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <SimulationPanel title={t('simulations.hydrograph.title')} description={t('simulations.hydrograph.description')}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Slider label="Rainfall intensity" min={0} max={100} step={5} value={intensity} onChange={setIntensity} unit="%" />
          <Slider label="Soil saturation" min={0} max={100} step={5} value={saturation} onChange={setSaturation} unit="%" />
          <Slider label="Urbanisation" min={0} max={100} step={5} value={urbanization} onChange={setUrbanization} unit="%" />
        </div>

        <svg viewBox={`0 0 ${W} ${H + 20}`} className="w-full bg-bg-tertiary/20 rounded-md border border-border">
          {/* Axes */}
          <line x1={padX} y1={padY} x2={padX} y2={H - padY} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={padX} y1={H - padY} x2={W - padX} y2={H - padY} stroke="var(--color-border)" strokeWidth={1} />

          {/* Y labels */}
          {[0, 25, 50, 75, 100].map((v) => (
            <g key={v}>
              <line x1={padX - 4} y1={H - padY - v * yScale} x2={padX} y2={H - padY - v * yScale} stroke="var(--color-text-muted)" />
              <text x={padX - 6} y={H - padY - v * yScale + 3} textAnchor="end" fontSize={9} fill="var(--color-text-muted)">{v}</text>
            </g>
          ))}
          {/* X labels */}
          {[0, 6, 12, 18, 24].map((v) => (
            <g key={v}>
              <line x1={padX + v * xScale} y1={H - padY} x2={padX + v * xScale} y2={H - padY + 4} stroke="var(--color-text-muted)" />
              <text x={padX + v * xScale} y={H - padY + 14} textAnchor="middle" fontSize={9} fill="var(--color-text-muted)">{v}h</text>
            </g>
          ))}

          {/* Axis titles */}
          <text x={20} y={H / 2} textAnchor="middle" fontSize={10} fill="var(--color-text-muted)" transform={`rotate(-90 20 ${H / 2})`}>Discharge</text>
          <text x={W / 2} y={H + 10} textAnchor="middle" fontSize={10} fill="var(--color-text-muted)">Time (hours)</text>

          {/* Rainfall bar */}
          <rect x={padX + 4 * xScale} y={padY} width={2 * xScale} height={intensity * 0.4} fill="var(--color-accent-sky)" fillOpacity={0.5} />
          <text x={padX + 5 * xScale} y={padY - 4} textAnchor="middle" fontSize={8} fill="var(--color-accent-sky-deep)">Rain</text>

          {/* Hydrograph line */}
          <path d={pathD} fill="none" stroke={flashy ? 'var(--color-accent-clay)' : 'var(--color-accent-sky-deep)'} strokeWidth={2.5} />
          <path d={pathD + ` L ${W - padX} ${H - padY} L ${padX} ${H - padY} Z`} fill={flashy ? 'var(--color-accent-clay)' : 'var(--color-accent-sky-deep)'} fillOpacity={0.15} />
        </svg>

        <div className="bg-bg-tertiary/40 border border-border rounded-md p-4 text-sm space-y-1">
          <p>Hydrograph shape: <strong>{flashy ? 'flashy (sharp peak — high flood risk)' : 'subdued (slow rise — low flood risk)'}</strong></p>
          <p className="text-xs text-text-muted">Peak discharge ≈ {peakDischarge.toFixed(0)} cumecs · Lag time ≈ {lagTime.toFixed(1)}h</p>
          <p className="text-xs text-text-muted pt-2 border-t border-border">
            Higher intensity, more saturation, and more urbanisation → shorter lag time, higher peak. Urban surfaces are impermeable → water runs straight to rivers.
          </p>
        </div>
      </div>
    </SimulationPanel>
  );
}
