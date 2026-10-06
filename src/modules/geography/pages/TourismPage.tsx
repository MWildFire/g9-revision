import { DefinitionSupport } from '../../../components/content/DefinitionSupport';
import { geographyReviews } from '../../../definitions/geographyReviews';
import { useTranslation } from 'react-i18next';
import { Plane } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { ButlerModel } from '../../../components/simulations/geography/ButlerModel';
import { ActiveRecallBlock } from '../../../components/content/ActiveRecallBlock';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const TYPES = ['mass', 'thanatourism', 'ecotourism', 'medical', 'extreme', 'voluntourism', 'nature'];
const OTHER_TYPES = ['thana', 'medical', 'eco', 'volun', 'extreme'];

export function TourismPage() {
  const { t, i18n } = useTranslation('geography');
  const l = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
  const TOPIC = 'tourism';
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { rule: 'Правило', use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;

  return (
    <div>
      <TopicHero title={t('tourism.title')} intro={t('tourism.intro')} icon={<Plane size={28} />} />

      <SectionHeading>{t('tourism.sections.types.title')}</SectionHeading>
      <div className="space-y-3">
        {TYPES.map((id) => {
          const item = t(`tourism.sections.types.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-warm)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('tourism.sections.butler.title')}</SectionHeading>
      <ButlerModel />

      <SectionHeading>{t('tourism.sections.jamaica.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-3" style={{ borderLeftColor: 'var(--color-accent-warm)', borderLeftWidth: '3px' }}>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Key facts</h4>
          {t('tourism.sections.jamaica.facts')}
        </div>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Attractions</h4>
          {t('tourism.sections.jamaica.attractions')}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm pt-2 border-t border-border">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Positives</h4>
            {t('tourism.sections.jamaica.positives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Negatives</h4>
            {t('tourism.sections.jamaica.negatives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Management</h4>
            {t('tourism.sections.jamaica.management')}
          </div>
        </div>
      </div>

      <SectionHeading>{t('tourism.sections.antarctica.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-3" style={{ borderLeftColor: 'var(--color-accent-sky-deep)', borderLeftWidth: '3px' }}>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Key facts</h4>
          {t('tourism.sections.antarctica.facts')}
        </div>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Why is this growing?</h4>
          {t('tourism.sections.antarctica.whyGrowing')}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm pt-2 border-t border-border">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Positives</h4>
            {t('tourism.sections.antarctica.positives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Negatives</h4>
            {t('tourism.sections.antarctica.negatives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Management</h4>
            {t('tourism.sections.antarctica.management')}
          </div>
        </div>
      </div>

      <DefinitionSupport review={geographyReviews.antarctic} /><SectionHeading>{t('tourism.sections.otherTypes.title')}</SectionHeading>
      <div className="space-y-3">
        {OTHER_TYPES.map((id) => {
          const item = t(`tourism.sections.otherTypes.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={`o-${id}`} item={item} borderColor="var(--color-accent-sky)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{l('Active recall', 'Активное повторение')}</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="butler-stages"
          prompt={l("Outline Butler’s model and one limitation.", "Опиши модель Батлера и одно ограничение.")}
          modelAnswer={l("Exploration, involvement, development, consolidation and stagnation; then possible decline, stabilisation or rejuvenation. These are conceptual pathways, not a fixed timetable.", "Разведочный этап, вовлечение, развитие, консолидация и стагнация; затем возможны спад, стабилизация или обновление. Это концептуальные траектории, а не фиксированное расписание.")}
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="jamaica-impacts"
          prompt={l("Explain three possible benefits and costs of mass tourism.", "Объясни три возможные выгоды и издержки массового туризма.")}
          modelAnswer={l("Benefits can include jobs, local business income and tax revenue. Costs can include seasonal insecurity, profit leakage and environmental pressure. Their scale and distribution require case-specific evidence.", "Выгоды могут включать рабочие места, доходы местного бизнеса и налоги. Издержки — сезонную нестабильность, утечку прибыли и нагрузку на природу. Их масштаб и распределение требуют фактов о конкретном месте.")}
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="antarctica-management"
          prompt={l("Explain two ways visitor guidance protects Antarctica.", "Объясни два способа защиты Антарктики через правила посещения.")}
          modelAnswer={l("Avoid disturbing wildlife and introducing non-native organisms; comply with protected-area permissions and remove waste. National authorisation, operator guidance and site rules are different instruments.", "Не беспокоить животных и не заносить чужеродные организмы; соблюдать разрешительный режим охраняемых участков и удалять отходы. Национальное разрешение, рекомендации операторов и правила участков — разные инструменты.")}
        />
      </div>
    </div>
  );
}
