import { Link } from 'react-router-dom';
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

      <Link className="block p-4 border border-border rounded-md text-accent" to="/grade9/g-baikal-tourism">{l('Lake Baikal: dated evidence, tourism and wastewater evaluation →', 'Байкал: датированные данные, туризм и оценка стоков →')}</Link>

      <SectionHeading>{t('tourism.sections.butler.title')}</SectionHeading>
      <ButlerModel />

      <SectionHeading>{t('tourism.sections.jamaica.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-3" style={{ borderLeftColor: 'var(--color-accent-warm)', borderLeftWidth: '3px' }}>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Key facts', 'Ключевые факты')}</h4>
          {t('tourism.sections.jamaica.facts')}
        </div>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Attractions', 'Что привлекает')}</h4>
          {t('tourism.sections.jamaica.attractions')}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm pt-2 border-t border-border">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Positives', 'Положительные эффекты')}</h4>
            {t('tourism.sections.jamaica.positives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Negatives', 'Отрицательные эффекты')}</h4>
            {t('tourism.sections.jamaica.negatives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Management', 'Управление')}</h4>
            {t('tourism.sections.jamaica.management')}
          </div>
        </div>
      </div>

      <SectionHeading>{t('tourism.sections.antarctica.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-3" style={{ borderLeftColor: 'var(--color-accent-sky-deep)', borderLeftWidth: '3px' }}>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Key facts', 'Ключевые факты')}</h4>
          {t('tourism.sections.antarctica.facts')}
        </div>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Why is this growing?', 'Почему число посетителей растёт')}</h4>
          {t('tourism.sections.antarctica.whyGrowing')}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm pt-2 border-t border-border">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Positives', 'Положительные эффекты')}</h4>
            {t('tourism.sections.antarctica.positives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Negatives', 'Отрицательные эффекты')}</h4>
            {t('tourism.sections.antarctica.negatives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">{l('Management', 'Управление')}</h4>
            {t('tourism.sections.antarctica.management')}
          </div>
        </div>
      </div>

      <DefinitionSupport review={geographyReviews.antarctic} /><SectionHeading>{t('tourism.sections.otherTypes.title')}</SectionHeading>
      <div className="space-y-3">
        {OTHER_TYPES.map((id) => {
          const item = t(`tourism.sections.otherTypes.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          const practiceItem: DetailedItem = {
            ...item,
            body: item.rule,
            rule: undefined,
            watchOut: item.review?.contrast?.[lang] ?? item.watchOut,
            review: undefined,
          };
          return <DetailedCard key={`o-${id}`} item={practiceItem} borderColor="var(--color-accent-sky)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{l('Active recall', 'Активное повторение')}</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="butler-stages"
          prompt={l("Outline Butler’s model and state one limitation of it.", "Кратко опиши модель Батлера и назови одно её ограничение.")}
          modelAnswer={l("Butler’s model shows a tourist area’s life cycle in stages: exploration, involvement, development, consolidation and stagnation, then decline or rejuvenation. One limitation is that it sets no fixed timescale, so it cannot predict when a stage will begin.", "Модель Батлера описывает жизненный цикл туристического района как последовательность этапов: разведка (exploration), вовлечение, развитие, консолидация и стагнация, затем спад или возрождение. Одно ограничение: сроки этапов в модели не заданы, поэтому она не может предсказать, когда начнётся какой-либо этап.")}
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="jamaica-impacts"
          prompt={l("Explain three possible benefits and three possible costs of mass tourism.", "Объясни три возможные выгоды и три возможные издержки массового туризма.")}
          modelAnswer={l("Benefits: tourism creates jobs, brings spending to local shops and cafés, and generates tax revenue that can pay for local services. Costs: many tourism jobs are seasonal, so incomes are unstable. Profits can leave the area, for example when hotels are owned from abroad. Large numbers of visitors can also damage nature. The scale of each effect depends on the place.", "Выгоды: туризм создаёт рабочие места, приносит деньги местным магазинам и кафе и даёт налоговые поступления, которые можно потратить на местные услуги. Издержки: многие рабочие места в туризме сезонные, поэтому доходы нестабильны. Прибыль может уйти из района, например, если отели принадлежат владельцам из-за рубежа. Большой поток туристов может также навредить природе. Масштаб каждого эффекта зависит от места.")}
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="antarctica-management"
          prompt={l("Explain two ways visitor guidance protects Antarctica.", "Объясни два способа защиты Антарктики через правила посещения.")}
          modelAnswer={l("First, visitors must not disturb wildlife or bring in non-native organisms, which can upset local ecosystems. Second, they must follow protected-area permits and take all waste away, so the environment is not polluted.", "Во-первых, посетители не должны беспокоить животных и привозить чужеродные организмы: это может нарушить местные экосистемы. Во-вторых, нужно получать разрешения там, где они требуются, и увозить с собой весь мусор, чтобы не загрязнять природу.")}
        />
      </div>
    </div>
  );
}
