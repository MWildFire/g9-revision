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

      <SectionHeading>{t('atmosphericHazards.sections.climateChange.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-2 text-sm">
        <p><strong>Evidence: </strong>{t('atmosphericHazards.sections.climateChange.evidence')}</p>
        <p>{t('atmosphericHazards.sections.climateChange.mitigation')}</p>
        <p>{t('atmosphericHazards.sections.climateChange.adaptation')}</p>
      </div>

      <SectionHeading>Active recall</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="enso"
          prompt="Describe the difference between El Niño and La Niña conditions."
          modelAnswer="El Niño: trade winds weaken, warm water shifts east; Peru gets floods, Australia gets drought. La Niña: trade winds strengthen, cold water upwelling in east; opposite pattern."
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="haiyan"
          prompt="State three short-term and three long-term responses to Typhoon Haiyan."
          modelAnswer="Short-term: emergency rescue; UN/USAID/Red Cross aid; mass evacuation. Long-term: Build Back Better program; storm-resistant housing; mangrove restoration."
        />
      </div>
    </div>
  );
}
