import { useTranslation } from 'react-i18next';
import { Battery } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { ActiveRecallBlock } from '../../../components/content/ActiveRecallBlock';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const DEFS = ['resource', 'consumption', 'carrying'];
const ENERGY = ['solar', 'wind', 'hydro', 'geothermal', 'biofuels', 'fossilFuels', 'nuclear'];
const PLAYERS = ['un', 'ngos', 'businesses', 'governments', 'citizens'];

export function ResourceReliancePage() {
  const { t, i18n } = useTranslation('geography');
  const TOPIC = 'resourceReliance';
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
      <TopicHero title={t('resourceReliance.title')} intro={t('resourceReliance.intro')} icon={<Battery size={28} />} />

      <SectionHeading>{t('resourceReliance.sections.definitions.title')}</SectionHeading>
      {renderDetailed('resourceReliance.sections.definitions.detailed', DEFS, 'var(--color-accent-sage)')}

      <SectionHeading>{t('resourceReliance.sections.sustainability.title')}</SectionHeading>
      {renderDetailed('resourceReliance.sections.sustainability.detailed', ['brundtland', 'sdgs'], 'var(--color-accent-sky-deep)')}

      <SectionHeading>{t('resourceReliance.sections.energy.title')}</SectionHeading>
      {renderDetailed('resourceReliance.sections.energy.detailed', ENERGY, 'var(--color-accent-warm)')}

      <SectionHeading>{t('resourceReliance.sections.malthusBoserup.title')}</SectionHeading>
      {renderDetailed('resourceReliance.sections.malthusBoserup.detailed', ['malthus', 'boserup'], 'var(--color-accent-clay)')}

      <SectionHeading>{t('resourceReliance.sections.waterStress.title')}</SectionHeading>
      {renderDetailed('resourceReliance.sections.waterStress.detailed', ['definition', 'causes', 'solutions'], 'var(--color-accent-sky)')}

      <SectionHeading>{t('resourceReliance.sections.foodSecurity.title')}</SectionHeading>
      {renderDetailed('resourceReliance.sections.foodSecurity.detailed', ['definition', 'drivers', 'solutions'], 'var(--color-accent-sage)')}

      <SectionHeading>{t('resourceReliance.sections.players.title')}</SectionHeading>
      {renderDetailed('resourceReliance.sections.players.detailed', PLAYERS, 'var(--color-accent-rose-muted)')}

      <SectionHeading>Active recall</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="malthus-boserup"
          prompt="Contrast the views of Malthus and Boserup on population growth."
          modelAnswer="Malthus: pessimistic — food grows arithmetically while population grows geometrically; crisis inevitable. Boserup: optimistic — population pressure drives technological innovation."
        />
      </div>
    </div>
  );
}
