import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { SimulationPanel } from '../../ui/Tabs';

interface Region {
  id: 'radio' | 'micro' | 'ir' | 'visible' | 'uv' | 'xray' | 'gamma';
  // log10 frequency in Hz (approx midpoints)
  freqLog: number;
  wavelength: string;
  color: string;
}

const REGIONS: Region[] = [
  { id: 'radio', freqLog: 6, wavelength: '~100 m', color: '#9c8b73' },
  { id: 'micro', freqLog: 10, wavelength: '~10 cm', color: '#a8b5a0' },
  { id: 'ir', freqLog: 12.5, wavelength: '~10 μm', color: '#c99a8e' },
  { id: 'visible', freqLog: 14.5, wavelength: '500 nm', color: '#c9a876' },
  { id: 'uv', freqLog: 16, wavelength: '~10 nm', color: '#a8b8c8' },
  { id: 'xray', freqLog: 18.5, wavelength: '~0.1 nm', color: '#6b5b47' },
  { id: 'gamma', freqLog: 21, wavelength: '~10⁻¹² m', color: '#3d2f1f' },
];

const F_MIN = 5;
const F_MAX = 22;

export function EMSpectrum() {
  const { t } = useTranslation();
  const [pos, setPos] = useState(14.5);

  // find closest region
  const current = REGIONS.reduce((best, r) =>
    Math.abs(r.freqLog - pos) < Math.abs(best.freqLog - pos) ? r : best,
  );

  const sliderPercent = ((pos - F_MIN) / (F_MAX - F_MIN)) * 100;

  return (
    <SimulationPanel title={t('wavesOptics.sim4.title')} description={t('wavesOptics.sim4.desc')}>
      <div className="space-y-5">
        <div>
          <div
            className="h-12 rounded-md border border-border overflow-hidden flex"
            aria-hidden
          >
            {REGIONS.map((r, i) => {
              const next = REGIONS[i + 1]?.freqLog ?? F_MAX;
              const prev = REGIONS[i - 1]?.freqLog ?? F_MIN;
              const width = ((next - prev) / 2 / (F_MAX - F_MIN)) * 100;
              return (
                <div
                  key={r.id}
                  style={{ background: r.color, width: `${width}%` }}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              );
            })}
          </div>
          <div className="relative mt-2">
            <input
              type="range"
              min={F_MIN}
              max={F_MAX}
              step={0.1}
              value={pos}
              onChange={(e) => setPos(parseFloat(e.target.value))}
            />
            <div
              className="absolute top-[-26px] -translate-x-1/2 transition-all pointer-events-none"
              style={{ left: `${sliderPercent}%` }}
            >
              <div className="w-0.5 h-3 bg-text-primary mx-auto" />
            </div>
          </div>
          <div className="flex justify-between text-xs text-text-muted mt-1 font-mono">
            <span>10⁵ Hz</span>
            <span>10¹⁰</span>
            <span>10¹⁵</span>
            <span>10²⁰ Hz</span>
          </div>
        </div>

        <div
          className="bg-bg-secondary border border-border rounded-md p-5"
          style={{ borderLeft: `4px solid ${current.color}` }}
        >
          <h3 className="font-serif text-2xl font-medium">
            {t(`wavesOptics.sim4.regions.${current.id}`)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-text-muted">
                {t('wavesOptics.sim4.frequency')}
              </p>
              <p className="font-mono">~10<sup>{current.freqLog.toFixed(0)}</sup> Hz</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-text-muted">
                {t('wavesOptics.sim4.wavelength')}
              </p>
              <p className="font-mono">{current.wavelength}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-text-muted">
                {t('wavesOptics.sim4.use')}
              </p>
              <p>{t(`wavesOptics.sim4.uses.${current.id}`)}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              onClick={() => setPos(r.freqLog)}
              className={`text-xs px-2 py-1.5 rounded-md border transition-colors text-center ${
                current.id === r.id
                  ? 'bg-bg-secondary border-text-primary'
                  : 'border-border bg-bg-tertiary hover:bg-bg-secondary'
              }`}
            >
              <span
                className="inline-block w-2 h-2 rounded-full mr-1 align-middle"
                style={{ background: r.color }}
              />
              {t(`wavesOptics.sim4.regions.${r.id}`)}
            </button>
          ))}
        </div>
      </div>
    </SimulationPanel>
  );
}
