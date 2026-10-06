import { DefinitionSupport } from '../../../components/content/DefinitionSupport';
import { geographyReviews } from '../../../definitions/geographyReviews';
import { useTranslation } from 'react-i18next';
import { Cloud } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { EnsoToggle } from '../../../components/simulations/geography/EnsoToggle';
import { AtmosphericCirculation } from '../../../components/simulations/geography/AtmosphericCirculation';
import { ActiveRecallBlock } from '../../../components/content/ActiveRecallBlock';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const ZONES = ['polar', 'temperate', 'arid', 'tropical', 'mediterranean', 'mountainous'];
const CELLS = ['hadley', 'ferrel', 'polar'];

export function AtmosphericHazardsPage() {
  const { t, i18n } = useTranslation('geography');
  const l = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
  const TOPIC = 'atmosphericHazards';
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { rule: 'Правило', use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;

  const renderDetailed = (path: string, keys: string[], borderColor: string) => (
    <div className="space-y-3">
      {keys.map((id) => {
        const item = t(`${path}.${id}`, { returnObjects: true }) as DetailedItem;
        return <DetailedCard key={id} item={item} borderColor={borderColor} labels={labels} />;
      })}
    </div>
  );

  return (
    <div>
      <TopicHero title={t('atmosphericHazards.title')} intro={t('atmosphericHazards.intro')} icon={<Cloud size={28} />} />

      <SectionHeading>{t('atmosphericHazards.sections.climateZones.title')}</SectionHeading>
      {renderDetailed('atmosphericHazards.sections.climateZones.detailed', ZONES, 'var(--color-accent-sky-deep)')}

      <SectionHeading>{t('atmosphericHazards.sections.latitudeSun.title')}</SectionHeading>
      {renderDetailed('atmosphericHazards.sections.latitudeSun.detailed', ['physics', 'tilt'], 'var(--color-accent-warm)')}

      <SectionHeading>{t('atmosphericHazards.sections.circulation.title')}</SectionHeading>
      {renderDetailed('atmosphericHazards.sections.circulation.detailed', CELLS, 'var(--color-accent-sage)')}
      <div className="mt-4">
        <AtmosphericCirculation />
      </div>

      <SectionHeading>{t('atmosphericHazards.sections.pressure.title')}</SectionHeading>
      {renderDetailed('atmosphericHazards.sections.pressure.detailed', ['high', 'low'], 'var(--color-accent-clay)')}

      <SectionHeading>{t('atmosphericHazards.sections.tropicalStorms.title')}</SectionHeading>
      {renderDetailed('atmosphericHazards.sections.tropicalStorms.detailed', ['formation', 'naming', 'impacts'], 'var(--color-accent-rose-muted)')}

      <SectionHeading>{t('atmosphericHazards.sections.enso.title')}</SectionHeading>
      {renderDetailed('atmosphericHazards.sections.enso.detailed', ['normal', 'elNino', 'laNina'], 'var(--color-accent-sky)')}
      <div className="mt-4">
        <EnsoToggle />
      </div>

      <SectionHeading>{t('atmosphericHazards.sections.haiyan.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-3">
          <div>
            <span className="text-text-muted">Location: </span>
            {t('atmosphericHazards.sections.haiyan.location')}
          </div>
          <div>
            <span className="text-text-muted">Scale: </span>
            {t('atmosphericHazards.sections.haiyan.scale')}
          </div>
        </div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-3 mb-2">SEEP</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {['social', 'economic', 'environmental', 'political'].map((k) => (
            <div key={k}>· {t(`atmosphericHazards.sections.haiyan.seep.${k}`)}</div>
          ))}
        </div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-4 mb-2">Responses</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {['local', 'government', 'shortTerm', 'longTerm'].map((k) => (
            <div key={k}>· {t(`atmosphericHazards.sections.haiyan.responses.${k}`)}</div>
          ))}
        </div>
      </div>

      <DefinitionSupport review={geographyReviews.haiyan} />
      <SectionHeading>{t('atmosphericHazards.sections.bigDry.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4">
        <p className="text-sm text-text-secondary mb-3">{t('atmosphericHazards.sections.bigDry.summary')}</p>
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-3 mb-2">SEEP</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {['social', 'economic', 'environmental', 'political'].map((k) => (
            <div key={k}>· {t(`atmosphericHazards.sections.bigDry.seep.${k}`)}</div>
          ))}
        </div>
      </div>

      <DefinitionSupport review={geographyReviews.bigDry} />
      <SectionHeading>{t('atmosphericHazards.sections.climateChange.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-2 text-sm">
        <p><strong>Evidence: </strong>{t('atmosphericHazards.sections.climateChange.evidence')}</p>
        <p>{t('atmosphericHazards.sections.climateChange.mitigation')}</p>
        <p>{t('atmosphericHazards.sections.climateChange.adaptation')}</p>
      </div>

      <SectionHeading>{l('Active recall', 'Активное повторение')}</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="enso"
          prompt={l("Contrast El Niño and La Niña and explain the forecast limitation.", "Сравни Эль-Ниньо и Ла-Нинья и объясни ограничение прогноза.")}
          modelAnswer={l("El Niño involves unusually warm central/eastern equatorial Pacific water and weakened trade winds. La Niña has unusually cool water there and stronger trades. Rainfall probabilities change; a phase does not guarantee flooding or drought in a particular place.", "Эль-Ниньо связано с аномально тёплой водой центральной и восточной экваториальной части Тихого океана и ослаблением пассатов. При Ла-Нинья вода там аномально холодная, пассаты сильнее. Меняются вероятности осадков; фаза не гарантирует наводнение или засуху в конкретном месте.")}
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="haiyan"
          prompt={l('Why can an accurate storm forecast still fail to prevent deaths?', 'Почему точный прогноз шторма может не предотвратить гибель людей?')}
          modelAnswer={l('Warnings must explain the hazard in understood terms and lead to usable evacuation decisions. GIZ found that some shelters were exposed to storm surge. Its recommendations include clearer communication, improved maps and safer evacuation centres; a recommendation is not proof that rebuilding has been completed.', 'Предупреждения должны понятно объяснять опасность и приводить к выполнимым решениям об эвакуации. GIZ установила, что некоторые убежища находились в зоне штормового нагона. Среди рекомендаций — понятная связь, улучшенные карты и безопасные центры эвакуации; рекомендация не доказывает завершения восстановления.')}
        />
      </div>
    </div>
  );
}
