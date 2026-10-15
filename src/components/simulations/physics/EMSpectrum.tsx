import {FormulaTeaching} from '../../content/FormulaTeaching';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { SimulationPanel } from '../../ui/Tabs';
import { EM_EXAMPLES, vacuumWavelength } from './waveModels';

const COLORS = ['#9c8b73', '#a8b5a0', '#c99a8e', '#c9a876', '#a8b8c8', '#6b5b47', '#3d2f1f'];

export function EMSpectrum() {
  const { t, i18n } = useTranslation('physics');
  const ru = i18n.language.startsWith('ru');
  const [selected, setSelected] = useState(3);
  const current = EM_EXAMPLES[selected];
  const wavelength = vacuumWavelength(current.frequency);
  const exponent = Math.floor(Math.log10(current.frequency));
  const number = (value: number) => value.toLocaleString(ru ? 'ru-RU' : 'en-GB', { maximumFractionDigits: 3 });
  const length = wavelength >= 1 ? [wavelength, ru ? 'м' : 'm']
    : wavelength >= .01 ? [wavelength * 100, ru ? 'см' : 'cm']
    : wavelength >= 1e-6 ? [wavelength * 1e6, ru ? 'мкм' : 'μm']
    : [wavelength * 1e9, ru ? 'нм' : 'nm'];

  return (
    <SimulationPanel title={t('wavesOptics.sim4.title')} description={t('wavesOptics.sim4.desc')}>
      <div className="space-y-5">
        <div className="h-12 rounded-md border border-border overflow-hidden flex" aria-hidden>
          {EM_EXAMPLES.map((region, index) => <div key={region.id} style={{ background: COLORS[index], width: `${100 / EM_EXAMPLES.length}%` }} className="opacity-80" />)}
        </div>
        <p className="text-xs text-text-muted">{ru ? 'Выбери пример. Цветные полосы обозначают порядок диапазонов, а не их ширину.' : 'Choose an example. The coloured bands show the order of regions, not their widths.'}</p>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
          {EM_EXAMPLES.map((region, index) => (
            <button key={region.id} onClick={() => setSelected(index)} aria-pressed={selected === index}
              className={`text-xs px-2 py-1.5 rounded-md border transition-colors text-center ${selected === index ? 'bg-bg-secondary border-text-primary' : 'border-border bg-bg-tertiary hover:bg-bg-secondary'}`}>
              <span className="inline-block w-2 h-2 rounded-full mr-1 align-middle" style={{ background: COLORS[index] }} />
              {t(`wavesOptics.sim4.regions.${region.id}`)}
            </button>
          ))}
        </div>
        <div className="bg-bg-secondary border border-border rounded-md p-5" style={{ borderLeft: `4px solid ${COLORS[selected]}` }}>
          <h3 className="font-serif text-2xl font-medium">{t(`wavesOptics.sim4.regions.${current.id}`)}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 text-sm">
            <div><p className="text-xs uppercase tracking-wider text-text-muted">{t('wavesOptics.sim4.frequency')}</p>
              <p className="font-mono">{number(current.frequency / 10 ** exponent)} × 10<sup>{exponent}</sup> {ru ? 'Гц' : 'Hz'}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-text-muted">{t('wavesOptics.sim4.wavelength')}</p>
              <p className="font-mono">≈ {number(Number(length[0]))} {length[1]}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-text-muted">{t('wavesOptics.sim4.use')}</p>
              <p>{t(`wavesOptics.sim4.uses.${current.id}`)}</p></div>
          </div>
        </div>
      </div>
      <FormulaTeaching id="wave"/><FormulaTeaching id="photon"/>
    </SimulationPanel>
  );
}
