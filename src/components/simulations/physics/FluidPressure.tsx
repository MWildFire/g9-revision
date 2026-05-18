import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Formula } from '../../ui/Formula';
import { hydrostaticPressure, formatPressure } from '../../../lib/physics';

export function FluidPressure() {
  const { t } = useTranslation();
  const [depth, setDepth] = useState(20);
  const [rho, setRho] = useState(1000);

  const pressure = hydrostaticPressure(rho, depth);

  // SVG layout
  const tankX = 60;
  const tankY = 30;
  const tankW = 80;
  const tankH = 240;
  const probeY = tankY + (depth / 100) * tankH;

  return (
    <SimulationPanel title={t('forcesEnergy.sim4.title')} description={t('forcesEnergy.sim4.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 items-start">
        <svg viewBox="0 0 200 300" className="w-full max-w-[200px] mx-auto">
          {/* tank */}
          <rect x={tankX} y={tankY} width={tankW} height={tankH} fill="none" stroke="#6b5b47" strokeWidth="2" />
          <rect x={tankX + 2} y={tankY + 8} width={tankW - 4} height={tankH - 10} fill="#a8b8c8" opacity="0.5" />
          {/* depth indicators */}
          {[0, 25, 50, 75, 100].map((d) => {
            const y = tankY + (d / 100) * tankH;
            return (
              <g key={d}>
                <line x1={tankX - 5} y1={y} x2={tankX} y2={y} stroke="#6b5b47" strokeWidth="1" />
                <text x={tankX - 8} y={y + 3} textAnchor="end" fontSize="8" fill="#9c8b73">
                  {d}m
                </text>
              </g>
            );
          })}
          {/* probe */}
          <line x1={tankX + tankW + 2} y1={probeY} x2={tankX + tankW + 30} y2={probeY} stroke="#3d2f1f" strokeWidth="2" />
          <circle cx={tankX + tankW + 2} cy={probeY} r="4" fill="#c99a8e" stroke="#3d2f1f" strokeWidth="1" />
          <text x={tankX + tankW + 34} y={probeY + 4} fontSize="10" fontFamily="JetBrains Mono" fill="#3d2f1f">
            {depth} m
          </text>
        </svg>

        <div className="space-y-4">
          <Slider label={t('forcesEnergy.sim4.depth')} unit="m" min={0} max={100} step={1} value={depth} onChange={setDepth} />
          <Slider label={t('forcesEnergy.sim4.fluidDensity')} unit="kg/m³" min={500} max={13600} step={50} value={rho} onChange={setRho} format={(v) => v.toFixed(0)} />

          <Formula caption="P = ρ × g × h">
            P = {rho.toFixed(0)} × 9.81 × {depth.toFixed(0)}
            <br />
            <span className="text-accent-warm">= {formatPressure(pressure)}</span>
          </Formula>

          <div className="bg-bg-tertiary border border-border rounded-md px-4 py-3 text-sm">
            <span className="text-text-muted">{t('forcesEnergy.sim4.pressure')}: </span>
            <span className="font-mono text-text-primary">{formatPressure(pressure)}</span>
            <span className="text-text-muted ml-2 text-xs">≈ {(pressure / 101325).toFixed(2)} atm</span>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
