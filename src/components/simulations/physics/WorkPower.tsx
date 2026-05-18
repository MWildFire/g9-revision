import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { Formula } from '../../ui/Formula';
import { G, format } from '../../../lib/physics';

export function WorkPower() {
  const { t } = useTranslation('physics');
  const [mass, setMass] = useState(20);
  const [height, setHeight] = useState(2);
  const [time, setTime] = useState(4);

  const weight = mass * G;
  const work = weight * height;
  const power = time > 0 ? work / time : 0;

  return (
    <SimulationPanel
      title={t('forcesEnergy.simWorkPower.title')}
      description={t('forcesEnergy.simWorkPower.desc')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-3">
          <svg viewBox="0 0 360 280" className="w-full bg-bg-primary rounded-md border border-border">
            {/* floor */}
            <rect x="0" y="240" width="360" height="40" fill="#a8b5a0" opacity="0.3" />
            <line x1="0" y1="240" x2="360" y2="240" stroke="#6b5b47" strokeWidth="1.5" />

            {/* shelf at target height */}
            <line x1="170" y1={240 - height * 30} x2="320" y2={240 - height * 30} stroke="#6b5b47" strokeWidth="2" />
            <rect x="170" y={240 - height * 30 - 4} width="150" height="4" fill="#6b5b47" />

            {/* height dimension line */}
            <line x1="160" y1="240" x2="160" y2={240 - height * 30} stroke="#9c8b73" strokeWidth="1" strokeDasharray="3 3" />
            <text x="155" y={240 - (height * 30) / 2 + 4} fontSize="11" fontFamily="JetBrains Mono" fill="#6b5b47" textAnchor="end">
              h = {height.toFixed(1)} m
            </text>

            {/* box on floor */}
            <g>
              <rect x="50" y={240 - mass * 1.5 - 30} width={mass * 1.5 + 30} height={mass * 1.5 + 30} fill="#c9a876" stroke="#6b5b47" strokeWidth="1.5" rx="3" />
              <text x={50 + (mass * 1.5 + 30) / 2} y={240 - mass * 1.5 / 2 - 10} textAnchor="middle" fontSize="12" fontFamily="JetBrains Mono" fill="#3d2f1f">
                {mass} kg
              </text>
            </g>

            {/* up arrow showing lift */}
            <g transform="translate(255, 200)">
              <line x1="0" y1={Math.min(80, height * 30) - 10} x2="0" y2="0" stroke="#a8b5a0" strokeWidth="2.5" />
              <polygon points="-6,0 6,0 0,-9" fill="#a8b5a0" />
              <text x="10" y="-2" fontSize="11" fontFamily="JetBrains Mono" fill="#6b5b47">
                lift
              </text>
            </g>
          </svg>

          <Formula caption="W = F × d (F is the weight here)">
            W = (m × g) × h = ({mass} × 9.81) × {height} ={' '}
            <span className="text-accent-warm">{format(work, 1)} J</span>
          </Formula>
          <Formula caption="P = W / t">
            P = {format(work, 1)} / {time.toFixed(1)} ={' '}
            <span className="text-accent-sage">{format(power, 2)} W</span>
          </Formula>
        </div>

        <div className="space-y-4">
          <Slider label={t('forcesEnergy.simWorkPower.mass')} unit="kg" min={1} max={50} step={1} value={mass} onChange={setMass} />
          <Slider label={t('forcesEnergy.simWorkPower.height')} unit="m" min={0.5} max={6} step={0.1} value={height} onChange={setHeight} />
          <Slider label={t('forcesEnergy.simWorkPower.time')} unit="s" min={0.5} max={20} step={0.1} value={time} onChange={setTime} />

          <div className="grid grid-cols-1 gap-2 text-sm">
            <Stat label="Weight (F)" value={`${format(weight, 1)} N`} />
            <Stat label="Work (W)" value={`${format(work, 1)} J`} />
            <Stat label="Power (P)" value={`${format(power, 2)} W`} />
          </div>
        </div>
      </div>
    </SimulationPanel>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg-tertiary border border-border rounded-md px-3 py-2 flex justify-between">
      <span className="text-text-muted">{label}</span>
      <span className="font-mono text-text-primary">{value}</span>
    </div>
  );
}
