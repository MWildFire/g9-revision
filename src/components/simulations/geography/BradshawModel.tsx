import { DefinitionSupport } from '../../content/DefinitionSupport';
import { geographyReviews } from '../../../definitions/geographyReviews';
import { useState } from 'react';
import { Slider } from '../../ui/Slider';
import { SimulationPanel } from '../../ui/Tabs';
import { useTranslation } from 'react-i18next';

export function BradshawModel() {
  const { t, i18n } = useTranslation('geography');
  const ru = i18n.language.startsWith('ru');
  const l = (en: string, rus: string) => ru ? rus : en;
  const [pos, setPos] = useState(0.3);
  const x = 55 + pos * 370;
  const up = 175 - pos * 120;
  const down = 55 + pos * 120;
  return <SimulationPanel title={t('rivers.sections.bradshaw.title')} description={t('rivers.sections.bradshaw.description')}>
    <Slider label={l('Downstream position', 'Положение вниз по течению')} min={0} max={1} step={0.05} value={pos} onChange={setPos} format={v => v < .33 ? l('Upper', 'Верховье') : v < .66 ? l('Middle', 'Среднее течение') : l('Lower', 'Низовье')} />
    <div role="region" tabIndex={0} aria-label={l("Scrollable diagram. Use horizontal arrow keys to read all labels.", "Прокручиваемая схема. Используй стрелки влево и вправо, чтобы прочитать все подписи.")} className="min-w-0 max-w-full overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><svg style={{ minWidth: 590 }} viewBox="0 0 500 270" role="img" aria-label={l('Idealised downstream tendencies: discharge, width and mean velocity increase; gradient and typical bed-load size decrease.', 'Обобщённые тенденции вниз по течению: расход, ширина и средняя скорость растут; уклон и типичный размер донных частиц уменьшаются.')} className="w-full">
      <title>{l('Downstream tendencies, not measurements', 'Тенденции вниз по течению, не измерения')}</title>
      <path d="M55 40 V200 H445" stroke="currentColor" fill="none" />
      <text x="50" y="30" fontSize="12" fill="currentColor">{l('Relative size (each variable separately)', 'Относительная величина (для каждого показателя)')}</text>
      <path d="M55 175 L425 55" stroke="#248294" strokeWidth="3" fill="none" />
      <path d="M55 55 L425 175" stroke="#b85b35" strokeWidth="3" fill="none" />
      <path d={`M${x} 40 V200`} stroke="currentColor" strokeDasharray="4 4" />
      <circle cx={x} cy={up} r="5" fill="#248294" /><circle cx={x} cy={down} r="5" fill="#b85b35" />
      <text x="55" y="217" fontSize="12" fill="currentColor">{l('Source → downstream → mouth', 'Исток → вниз по течению → устье')}</text>
      <text x="55" y="239" fontSize="12" fill="#248294">↗ {l('Discharge · width · mean velocity', 'Расход · ширина · средняя скорость')}</text>
      <text x="55" y="258" fontSize="12" fill="#b85b35">↘ {l('Gradient · typical bed-load size', 'Уклон · типичный размер донных частиц')}</text>
    </svg></div>
    <p className="text-sm text-text-muted">{l('Schematic trends: slopes do not represent rates of change, and the variables have different units. Tributaries, rock, dams and abstraction can interrupt them. Velocity is distance per time; discharge is volume per time: Q = A × mean velocity.', 'Схема тенденций: наклоны не показывают темпы изменений, а единицы величин различаются. Притоки, породы, плотины и водозабор нарушают тенденции. Скорость — путь за время; расход — объём за время: Q = A × средняя скорость.')}</p>
  <DefinitionSupport review={geographyReviews.bradshaw} /></SimulationPanel>;
}
