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
    <Slider label={l('Downstream position', 'Положение вниз по течению')} min={0} max={1} step={0.05} value={pos} onChange={setPos} format={v => v < .33 ? l('Upper course', 'Верхнее течение') : v < .66 ? l('Middle course', 'Среднее течение') : l('Lower course', 'Нижнее течение')} />
    <div role="region" tabIndex={0} aria-label={l("Scrollable graph. Use horizontal arrow keys to read the labels along the river.", "Прокручиваемый график. Используй стрелки влево и вправо, чтобы прочитать подписи по всей длине реки.")} className="min-w-0 max-w-full overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><svg style={{ height: 'auto' }} viewBox="0 0 500 270" role="img" aria-label={l('Idealised downstream tendencies: discharge, width and mean velocity increase; gradient and typical bed-load size decrease.', 'Идеализированные тенденции вниз по течению: расход воды, ширина и средняя скорость растут; уклон русла и типичный размер донных наносов уменьшаются.')} className="w-full">
      <title>{l('Downstream tendencies, not measurements', 'Тенденции вниз по течению, а не результаты измерений')}</title>
      <path d="M55 40 V200 H445" stroke="currentColor" fill="none" />
      <text x="50" y="30" fontSize="12" fill="currentColor">{l('Relative size (each variable separately)', 'Относительная величина (каждый показатель отдельно)')}</text>
      <path d="M55 175 L425 55" stroke="#248294" strokeWidth="3" fill="none" />
      <path d="M55 55 L425 175" stroke="#b85b35" strokeWidth="3" fill="none" />
      <path d={`M${x} 40 V200`} stroke="currentColor" strokeDasharray="4 4" />
      <circle cx={x} cy={up} r="5" fill="#248294" /><circle cx={x} cy={down} r="5" fill="#b85b35" />
      <text x="55" y="217" fontSize="12" fill="currentColor">{l('Source → downstream → mouth', 'Исток → вниз по течению → устье')}</text>
      <text x="55" y="239" fontSize="12" fill="#248294">↗ {l('Discharge · width · mean velocity', 'Расход · ширина · средняя скорость')}</text>
      <text x="55" y="258" fontSize="12" fill="#b85b35">↘ {l('Gradient · typical bed-load size', 'Уклон русла · типичный размер донных наносов')}</text>
    </svg></div>
    <p className="text-sm text-text-muted">{l('Schematic trends: slopes do not represent rates of change, and the variables have different units. Tributaries, rock type, dams and abstraction can interrupt them. Discharge Q is the volume passing a cross-section each second (m³/s). Q = A × v, where A is the cross-sectional area (m²) and v is the mean flow velocity (m/s). For A = 4 m² and v = 0.5 m/s, Q = 4 × 0.5 = 2 m³/s.', 'Тенденции показаны схематично: наклоны линий не показывают темп изменения, а величины измеряются в разных единицах. Притоки, смена пород, плотины и водозабор могут нарушать эти тенденции. Расход Q — объём воды, проходящий через сечение за секунду (м³/с). Q = A × v, где A — площадь сечения (м²), v — средняя скорость течения (м/с). При A = 4 м² и v = 0,5 м/с: Q = 4 × 0,5 = 2 м³/с.')}</p>
  <DefinitionSupport review={geographyReviews.bradshaw} /></SimulationPanel>;
}
