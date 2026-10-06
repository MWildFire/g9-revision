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
  const l = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
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

      <SectionHeading>{l('Active recall', 'Активное повторение')}</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="malthus-boserup"
          prompt={l("Contrast Malthus and Boserup without treating either as a guaranteed forecast.", "Сравни Мальтуса и Бозеруп, не представляя их идеи как гарантированный прогноз.")}
          modelAnswer={l("Malthus examined population pressure on subsistence under specified assumptions. Boserup explained how pressure can stimulate more intensive cultivation, often with greater labour input. Innovation and food access depend on institutions, resources and environmental limits.", "Мальтус рассматривал давление населения на средства существования при определённых предпосылках. Бозеруп объясняла, как давление стимулирует более интенсивное земледелие, нередко с большими затратами труда. Инновации и доступ к продовольствию зависят от институтов, ресурсов и природных ограничений.")}
        />
      </div>
    </div>
  );
}
