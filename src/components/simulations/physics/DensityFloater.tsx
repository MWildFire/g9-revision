import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Formula } from '../../ui/Formula';

const PRESETS = {
  water: 1.0,
  oil: 0.9,
  mercury: 13.6,
};

const VB_W = 360;
const VB_H = 280;
const CONTAINER_X = 60;
const CONTAINER_Y = 40;
const CONTAINER_W = 240;
const CONTAINER_H = 200;
const FLUID_LEVEL_Y = CONTAINER_Y + 12;
const FLUID_BOTTOM_Y = CONTAINER_Y + CONTAINER_H - 4;
const FLUID_DEPTH = FLUID_BOTTOM_Y - FLUID_LEVEL_Y;
const OBJECT_SIZE = 50;

export function DensityFloater() {
  const { t } = useTranslation('physics');
  const [objectRho, setObjectRho] = useState(0.7);
  const [fluidRho, setFluidRho] = useState(1.0);

  let verdictKey: 'sinks' | 'floats' | 'neutralBuoyancy';
  if (objectRho > fluidRho * 1.02) verdictKey = 'sinks';
  else if (objectRho < fluidRho * 0.98) verdictKey = 'floats';
  else verdictKey = 'neutralBuoyancy';

  // Determine object vertical position
  let objTopY: number;
  let submergedFraction: number;

  if (verdictKey === 'sinks') {
    objTopY = FLUID_BOTTOM_Y - OBJECT_SIZE;
    submergedFraction = 1.0;
  } else if (verdictKey === 'floats') {
    // Archimedes: fraction submerged = ρ_obj / ρ_fluid
    submergedFraction = Math.max(0.05, Math.min(0.95, objectRho / fluidRho));
    const submergedHeight = submergedFraction * OBJECT_SIZE;
    objTopY = FLUID_LEVEL_Y - (OBJECT_SIZE - submergedHeight);
  } else {
    // Neutral: fully submerged, mid-depth
    submergedFraction = 1.0;
    objTopY = FLUID_LEVEL_Y + FLUID_DEPTH / 2 - OBJECT_SIZE / 2;
  }

  const objCenterX = CONTAINER_X + CONTAINER_W / 2;

  return (
    <SimulationPanel title={t('forcesEnergy.sim3.title')} description={t('forcesEnergy.sim3.desc')}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full max-w-md mx-auto bg-bg-primary rounded-md border border-border">
          {/* container outline */}
          <rect
            x={CONTAINER_X}
            y={CONTAINER_Y}
            width={CONTAINER_W}
            height={CONTAINER_H}
            fill="none"
            stroke="#6b5b47"
            strokeWidth="2"
            rx="4"
          />
          {/* fluid */}
          <rect
            x={CONTAINER_X + 2}
            y={FLUID_LEVEL_Y}
            width={CONTAINER_W - 4}
            height={FLUID_BOTTOM_Y - FLUID_LEVEL_Y}
            fill={fluidColor(fluidRho)}
            opacity="0.5"
          />
          {/* fluid surface line */}
          <line
            x1={CONTAINER_X + 2}
            y1={FLUID_LEVEL_Y}
            x2={CONTAINER_X + CONTAINER_W - 2}
            y2={FLUID_LEVEL_Y}
            stroke="#6b5b47"
            strokeWidth="1"
            opacity="0.4"
          />

          {/* object */}
          <g>
            <rect
              x={objCenterX - OBJECT_SIZE / 2}
              y={objTopY}
              width={OBJECT_SIZE}
              height={OBJECT_SIZE}
              fill="#c9a876"
              stroke="#3d2f1f"
              strokeWidth="1.5"
              rx="6"
            />
            <text
              x={objCenterX}
              y={objTopY + OBJECT_SIZE / 2 + 4}
              textAnchor="middle"
              fontSize="11"
              fontFamily="JetBrains Mono"
              fill="#3d2f1f"
            >
              ρ = {objectRho.toFixed(2)}
            </text>
          </g>

          {/* fluid label */}
          <text x={CONTAINER_X + CONTAINER_W - 6} y={FLUID_BOTTOM_Y - 8} textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#6b5b47">
            ρ_fluid = {fluidRho.toFixed(2)}
          </text>

          {/* verdict */}
          <text
            x={VB_W / 2}
            y={VB_H - 10}
            textAnchor="middle"
            fontSize="13"
            fill={
              verdictKey === 'sinks'
                ? '#c99a8e'
                : verdictKey === 'floats'
                  ? '#6b8a64'
                  : '#6b5b47'
            }
            fontFamily="Lora"
          >
            {t(`common.${verdictKey}`)}
            {verdictKey === 'floats' ? ` — ${Math.round(submergedFraction * 100)}% submerged` : ''}
          </text>
        </svg>

        <div className="space-y-4">
          <Slider label={t('forcesEnergy.sim3.objectDensity')} unit="g/cm³" min={0.1} max={15} step={0.05} value={objectRho} onChange={setObjectRho} />
          <Slider label={t('forcesEnergy.sim3.fluidDensity')} unit="g/cm³" min={0.5} max={13.6} step={0.05} value={fluidRho} onChange={setFluidRho} />

          <div>
            <p className="text-xs uppercase tracking-wider text-text-muted mb-2">
              {t('forcesEnergy.sim3.fluidPreset')}
            </p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(PRESETS) as Array<keyof typeof PRESETS>).map((key) => (
                <button
                  key={key}
                  onClick={() => setFluidRho(PRESETS[key])}
                  className="px-3 py-1.5 text-xs rounded-md bg-bg-tertiary border border-border hover:bg-bg-secondary transition-colors"
                >
                  {t(`forcesEnergy.sim3.${key}`)}
                </button>
              ))}
            </div>
          </div>

          <Formula caption={`ρ_object ${objectRho > fluidRho ? '>' : objectRho < fluidRho ? '<' : '='} ρ_fluid`}>
            <span
              className={
                verdictKey === 'sinks'
                  ? 'text-accent-clay'
                  : verdictKey === 'floats'
                    ? 'text-accent-sage'
                    : 'text-text-primary'
              }
            >
              {t(`common.${verdictKey}`)}
            </span>
          </Formula>
        </div>
      </div>
    </SimulationPanel>
  );
}

function fluidColor(rho: number) {
  if (rho > 5) return '#9c8b73';
  if (rho > 1.05) return '#a8b8c8';
  if (rho > 0.95) return '#a8b8c8';
  return '#c9a876';
}
