import { DefinitionSupport } from '../../content/DefinitionSupport';
import { geographyReviews } from '../../../definitions/geographyReviews';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SimulationPanel, Tabs } from '../../ui/Tabs';
type Mode = 'normal' | 'elNino' | 'laNina';
export function EnsoToggle() {
  const { t, i18n } = useTranslation('geography');
  const l = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
  const [mode, setMode] = useState<Mode>('normal');
  const weakened = mode === 'elNino';
  const strengthened = mode === 'laNina';
  return <SimulationPanel title={t('atmosphericHazards.sections.enso.title')} description={t(`atmosphericHazards.sections.enso.${mode}`)}>
    <Tabs tabs={[{id:'normal',label:l('Neutral','Нейтральная фаза')},{id:'elNino',label:l('El Niño','Эль-Ниньо')},{id:'laNina',label:l('La Niña','Ла-Нинья')}]} activeId={mode} onChange={id => setMode(id as Mode)} />
    <div role="region" tabIndex={0} aria-label={l("Scrollable diagram. Use horizontal arrow keys to read all labels.", "Прокручиваемая схема. Используй стрелки влево и вправо, чтобы прочитать все подписи.")} className="min-w-0 max-w-full overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><svg style={{ minWidth: 615 }} viewBox="0 0 520 230" role="img" aria-label={l('Equatorial Pacific cross-section: west on the left, east on the right; westward trade winds and eastern upwelling change with ENSO.', 'Разрез экваториального Тихого океана: запад слева, восток справа; западное направление пассатов и подъём холодных вод на востоке меняются при ЭНСО.')} className="w-full">
      <title>{l('ENSO: wind, warm surface water and upwelling', 'ЭНСО: ветер, тёплая поверхностная вода и апвеллинг')}</title>
      <rect x="30" y="95" width="460" height="95" fill="#367fa0" opacity=".25" />
      <path d={weakened ? 'M30 95 H490 V127 L30 143 Z' : strengthened ? 'M30 95 H490 V100 L30 169 Z' : 'M30 95 H490 V105 L30 153 Z'} fill="#ce8150" opacity=".7" />
      <path d={weakened ? 'M315 65 H220 l12 -6 M220 65 l12 6' : 'M435 65 H95 l12 -6 M95 65 l12 6'} stroke="currentColor" strokeWidth={strengthened ? 4 : 2} fill="none" />
      <text x="260" y="32" textAnchor="middle" fontSize="12" fill="currentColor">{l('Trade winds east → west:', 'Пассаты с востока на запад:')} {weakened ? l('weaker','слабее') : strengthened ? l('stronger','сильнее') : l('typical','обычные')}</text>
      <path d="M457 175 V135 l-6 12 M457 135 l6 12" stroke="#246181" strokeWidth={weakened ? 1 : strengthened ? 4 : 2} strokeDasharray={weakened ? '3 3' : undefined} fill="none" />
      <text x="50" y="119" fontSize="12" fill="currentColor">{l('Warm surface layer','Тёплый поверхностный слой')}</text>
      <text x="50" y="183" fontSize="12" fill="currentColor">{l('Cooler water below','Более холодная вода в глубине')}</text>
      <text x="30" y="210" fontSize="12" fill="currentColor">{l('West · Indonesia / Australia','Запад · Индонезия / Австралия')}</text>
      <text x="490" y="229" textAnchor="end" fontSize="12" fill="currentColor">{l('East · South America','Восток · Южная Америка')}</text>
    </svg></div>
    <p className="text-sm">{weakened ? l('Warm water extends farther east; eastern upwelling is reduced.', 'Тёплая вода распространяется дальше на восток; апвеллинг на востоке ослабевает.') : l('Trade winds help accumulate warm water in the west; cooler water rises in the eastern Pacific.', 'Пассаты способствуют накоплению тёплой воды на западе; на востоке Тихого океана поднимаются более холодные воды.')}</p>
    <p className="text-sm text-text-muted">{l('Schematic, not to scale. ENSO changes the probabilities of rainfall and temperature patterns; season and event strength matter. A phase does not guarantee a particular flood or drought.', 'Схема без масштаба. ЭНСО изменяет вероятности режимов осадков и температуры; важны сезон и сила события. Фаза не гарантирует конкретного наводнения или засухи.')}</p>
  <DefinitionSupport review={geographyReviews.enso} /></SimulationPanel>;
}
