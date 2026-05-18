import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Formula } from '../../ui/Formula';
import { formatPressure } from '../../../lib/physics';

const PRESETS = {
  knife: { force: 50, area: 0.0001, label: 'knife' },
  shoe: { force: 700, area: 0.015, label: 'shoe' },
  elephant: { force: 30000, area: 0.05, label: 'elephant' },
};

const VB_W = 360;
const VB_H = 240;
const GROUND_Y = 200;

export function PressureSim() {
  const { t } = useTranslation();
  const [force, setForce] = useState(100);
  const [area, setArea] = useState(0.01);

  const pressure = area > 0 ? force / area : 0;

  // Block visual width: logarithmic-ish scale so very small and very large areas both visible
  const blockWidth = Math.max(16, Math.min(240, 18 + Math.sqrt(area) * 220));
  const blockHeight = 50;
  const blockTopY = GROUND_Y - blockHeight;
  const blockLeftX = VB_W / 2 - blockWidth / 2;

  // Force arrow: above the block, pointing DOWN at the block top.
  // Length scales with force in a visible range.
  const arrowLen = Math.max(28, Math.min(90, 25 + Math.log10(Math.max(force, 1)) * 22));
  const arrowTipY = blockTopY - 6;
  const arrowStartY = arrowTipY - arrowLen;
  const labelY = arrowStartY - 6;

  // Pressure indicator color intensity under the block
  const intensity = Math.min(1, Math.log10(Math.max(pressure, 1)) / 8);
  const pressureBarColor = `rgba(201, 154, 142, ${0.25 + intensity * 0.75})`;

  return (
    <SimulationPanel title={t('forcesEnergy.sim2.title')} description={t('forcesEnergy.sim2.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-3">
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full bg-bg-primary rounded-md border border-border">
            {/* surface */}
            <rect x="0" y={GROUND_Y} width={VB_W} height={VB_H - GROUND_Y} fill="#a8b5a0" opacity="0.4" />
            <line x1="0" y1={GROUND_Y} x2={VB_W} y2={GROUND_Y} stroke="#6b5b47" strokeWidth="1.5" />
            {/* ground hatching */}
            {Array.from({ length: 18 }).map((_, i) => (
              <line
                key={i}
                x1={i * 20}
                y1={GROUND_Y}
                x2={i * 20 + 10}
                y2={GROUND_Y + 12}
                stroke="#9c8b73"
                strokeWidth="1"
                opacity="0.4"
              />
            ))}

            {/* force arrow above block, pointing DOWN */}
            <g>
              <line
                x1={VB_W / 2}
                y1={arrowStartY}
                x2={VB_W / 2}
                y2={arrowTipY - 6}
                stroke="#3d2f1f"
                strokeWidth="3"
              />
              <polygon
                points={`${VB_W / 2 - 7},${arrowTipY - 8} ${VB_W / 2 + 7},${arrowTipY - 8} ${VB_W / 2},${arrowTipY}`}
                fill="#3d2f1f"
              />
              <text
                x={VB_W / 2}
                y={labelY}
                textAnchor="middle"
                fontSize="12"
                fontFamily="JetBrains Mono"
                fill="#3d2f1f"
              >
                F = {force.toFixed(0)} N
              </text>
            </g>

            {/* block */}
            <rect
              x={blockLeftX}
              y={blockTopY}
              width={blockWidth}
              height={blockHeight}
              fill="#c9a876"
              stroke="#6b5b47"
              strokeWidth="1.5"
              rx="3"
            />

            {/* pressure indicator on contact surface */}
            <rect
              x={blockLeftX}
              y={GROUND_Y}
              width={blockWidth}
              height="5"
              fill={pressureBarColor}
            />

            {/* area label */}
            <text
              x={VB_W / 2}
              y={GROUND_Y + 26}
              textAnchor="middle"
              fontSize="11"
              fontFamily="JetBrains Mono"
              fill="#6b5b47"
            >
              A = {area.toFixed(4)} m²
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          <Slider label={t('forcesEnergy.sim2.force')} unit="N" min={1} max={1000} step={5} value={force} onChange={setForce} />
          <Slider
            label={t('forcesEnergy.sim2.area')}
            unit="m²"
            min={0.0001}
            max={1}
            step={0.001}
            value={area}
            onChange={setArea}
            format={(v) => v.toFixed(4)}
          />

          <Formula caption={t('forcesEnergy.sim2.pressure')}>
            P = {force.toFixed(0)} / {area.toFixed(4)}
            <br />
            <span className="text-accent-warm">= {formatPressure(pressure)}</span>
          </Formula>

          <div>
            <p className="text-xs uppercase tracking-wider text-text-muted mb-2">
              {t('forcesEnergy.sim2.scenarios')}
            </p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(PRESETS) as Array<keyof typeof PRESETS>).map((key) => {
                const p = PRESETS[key];
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setForce(p.force);
                      setArea(p.area);
                    }}
                    className="px-3 py-1.5 text-xs rounded-md bg-bg-tertiary border border-border hover:bg-bg-secondary transition-colors"
                  >
                    {t(`forcesEnergy.sim2.${key}`)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}
