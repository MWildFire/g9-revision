import { RichText } from '../../../components/content/RichText';
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

  const bigDryResponses = Object.entries((t('atmosphericHazards.sections.bigDry.responses', { returnObjects: true }) as Record<string, string> | null) ?? {});

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
            <span className="text-text-muted">{l('Location: ', 'Место: ')}</span>
            {t('atmosphericHazards.sections.haiyan.location')}
          </div>
          <div>
            <span className="text-text-muted">{l('Scale: ', 'Масштаб: ')}</span>
            {t('atmosphericHazards.sections.haiyan.scale')}
          </div>
        </div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-3 mb-2">{l('SEEP', 'Последствия (SEEP):')}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {['social', 'economic', 'environmental', 'political'].map((k) => (
            <div key={k}>· {t(`atmosphericHazards.sections.haiyan.seep.${k}`)}</div>
          ))}
        </div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-4 mb-2">{l('Responses', 'Меры реагирования:')}</h4>
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
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-3 mb-2">{l('SEEP', 'Последствия (SEEP):')}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {['social', 'economic', 'environmental', 'political'].map((k) => (
            <div key={k}>· {t(`atmosphericHazards.sections.bigDry.seep.${k}`)}</div>
          ))}
        </div>
        {bigDryResponses.length > 0 && (
          <>
            <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-4 mb-2">{l('Responses', 'Меры реагирования:')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {bigDryResponses.map(([k, text]) => (
                <div key={k}>· {text}</div>
              ))}
            </div>
          </>
        )}
      </div>

      <DefinitionSupport review={geographyReviews.bigDry} />
      <SectionHeading>{t('atmosphericHazards.sections.climateChange.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-2 text-sm">
        <div><strong>{l('Evidence', 'Доказательства')}</strong><RichText text={t('atmosphericHazards.sections.climateChange.evidence')} /></div>
        <p>{t('atmosphericHazards.sections.climateChange.mitigation')}</p>
        <p>{t('atmosphericHazards.sections.climateChange.adaptation')}</p>
      </div>

      <SectionHeading>{l('Active recall', 'Активное повторение')}</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="enso"
          prompt={l("Contrast El Niño and La Niña and explain the forecast limitation.", "Сравни Эль-Ниньо и Ла-Нинья и объясни, в чём ограничение прогноза.")}
          modelAnswer={l("El Niño involves unusually warm water in the central and eastern equatorial Pacific and weakened trade winds. La Niña has unusually cool water there and stronger trade winds. The probability of rainfall changes; a phase does not guarantee flooding or drought in a particular place.", "Эль-Ниньо — это аномально тёплая вода в центральной и восточной экваториальной части Тихого океана и ослабление пассатов. Ла-Нинья — аномально холодная вода в тех же районах и более сильные пассаты. Вероятность осадков меняется, но ни одна фаза не гарантирует наводнение или засуху в конкретном месте.")}
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="haiyan"
          prompt={l('Why can an accurate storm forecast still fail to prevent deaths?', 'Почему точный прогноз шторма может не предотвратить гибель людей?')}
          modelAnswer={l('Warnings must explain the hazard in terms people understand and lead to decisions people can act on, such as evacuating. GIZ found that some shelters were exposed to storm surge. Its recommendations include clearer communication, improved maps and safer evacuation centres. A recommendation shows what should change, not that it has changed.', 'Предупреждения должны понятно объяснять природную опасность (hazard) и помогать принять решение об эвакуации. GIZ установила, что некоторые убежища оказались в зоне штормового нагона (storm surge). Среди рекомендаций — более понятное информирование населения, улучшенные карты и безопасные центры эвакуации. Рекомендация показывает, что нужно изменить, но не то, что изменения уже сделаны.')}
        />
      </div>
    </div>
  );
}
