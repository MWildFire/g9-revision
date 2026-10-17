import { DefinitionSupport } from '../../../components/content/DefinitionSupport';
import { geographyReviews } from '../../../definitions/geographyReviews';
import { RiverProcesses } from '../../../components/simulations/geography/RiverProcesses';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Waves } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { BradshawModel } from '../../../components/simulations/geography/BradshawModel';
import { StormHydrograph } from '../../../components/simulations/geography/StormHydrograph';
import { ActiveRecallBlock } from '../../../components/content/ActiveRecallBlock';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const EROSION_TYPES = ['abrasion', 'attrition', 'hydraulicAction', 'solution'];
const TRANSPORT_TYPES = ['traction', 'saltation', 'suspension', 'solution'];
const FLOODING_CAUSES = ['prolongedRain', 'saturatedGround', 'snowmelt', 'reliefRock', 'deforestation', 'urbanisation', 'climate'];
const MANAGEMENT = ['dams', 'embankments', 'channelStraightening', 'floodWalls', 'floodplainZoning', 'afforestation', 'restoration', 'warnings'];

export function RiversPage() {
  const { t, i18n } = useTranslation('geography');
  const l = (en: string, ru: string) => i18n.language.startsWith('ru') ? ru : en;
  const TOPIC = 'rivers';
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { rule: 'Правило', use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;

  return (
    <div>
      <TopicHero title={t('rivers.title')} intro={t('rivers.intro')} icon={<Waves size={28} />} />

      <SectionHeading>{t('rivers.sections.bradshaw.title')}</SectionHeading>
      <BradshawModel />

      <SectionHeading>{t('rivers.sections.erosion.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm space-y-2">
        {t('rivers.sections.erosion.detailed.intro').split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <RiverProcesses />
      <div className="space-y-3">
        {EROSION_TYPES.map((id) => {
          const item = t(`rivers.sections.erosion.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-sky-deep)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('rivers.sections.transportation.title')}</SectionHeading>
      <div className="space-y-3">
        {TRANSPORT_TYPES.map((id) => {
          const item = t(`rivers.sections.transportation.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={`t-${id}`} item={item} borderColor="var(--color-accent-sky)" labels={labels} />;
        })}
      </div>

      <p className="bg-bg-secondary border border-border rounded-md p-4 my-4 text-sm"><Link className="underline" to="/grade9/g-river-cases">{l('Named applications: Niagara Falls and Gorge; lower Mississippi meanders, oxbows, floodplain and natural levees →', 'Примеры в природе: Ниагара и ущелье; меандры, старицы, пойма и природные валы нижней Миссисипи →')}</Link></p>

      <SectionHeading>{t('rivers.sections.waterfall.title')}</SectionHeading>
      <ol className="space-y-2">
        {[1, 2, 3, 4].map((n) => (
          <li key={n} className="flex items-start gap-3 bg-bg-secondary border border-border rounded-md px-4 py-3">
            <span className="w-7 h-7 rounded-full bg-accent-sky/30 text-accent-sky-deep flex items-center justify-center font-medium text-sm shrink-0">{n}</span>
            <span className="text-sm">{t(`rivers.sections.waterfall.stages.${n}`)}</span>
          </li>
        ))}
      </ol>

      <SectionHeading>{t('rivers.sections.meander.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
        {t('rivers.sections.meander.description')}
      </p>

      <SectionHeading>{t('rivers.sections.drainageBasin.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
        {t('rivers.sections.drainageBasin.description')}
      </p>

      <SectionHeading>{t('rivers.sections.hydrograph.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm mb-4">
        {t('rivers.sections.hydrograph.description')}
      </p>
      <StormHydrograph />

      <SectionHeading>{t('rivers.sections.flooding.title')}</SectionHeading>
      <div className="space-y-3">
        {FLOODING_CAUSES.map((id) => {
          const item = t(`rivers.sections.flooding.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-warm)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('rivers.sections.management.title')}</SectionHeading>
      <div className="space-y-3">
        {MANAGEMENT.map((id) => {
          const item = t(`rivers.sections.management.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-sage)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('rivers.sections.boscastle.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 mb-4">
        <p className="text-sm text-text-secondary mb-3">{t('rivers.sections.boscastle.summary')}</p>
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-3 mb-2">{l('SEEP impacts', 'Последствия (SEEP)')}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {['social', 'economic', 'environmental', 'political'].map((k) => (
            <div key={k}>· {t(`rivers.sections.boscastle.seep.${k}`)}</div>
          ))}
        </div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-4 mb-2">{l('Responses (LGSL)', 'Меры реагирования')}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {['local', 'government', 'shortTerm', 'longTerm'].map((k) => (
            <div key={k}>· {t(`rivers.sections.boscastle.responses.${k}`)}</div>
          ))}
        </div>
      </div>

      <DefinitionSupport review={geographyReviews.boscastle} />
      <SectionHeading>{l('Active recall', 'Активное повторение')}</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="erosion-types"
          prompt={l("Explain what is worn away during abrasion and attrition.", "Объясни, что разрушается при истирании русла (abrasion) и истирании обломков (attrition).")}
          modelAnswer={l("Abrasion: transported material scrapes or strikes the bed and banks. Attrition: collisions break and round the transported fragments. Hydraulic action removes material with the force of water; solution dissolves soluble minerals.", "Истирание русла: переносимые обломки скребут дно и берега или ударяют по ним. Истирание обломков: столкновения дробят и округляют сами обломки. Гидравлическое действие (hydraulic action) удаляет материал силой воды; растворение пород (solution) переводит растворимые минералы в раствор.")}
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="boscastle-causes"
          prompt={l("Distinguish flood generation from exposure in a narrow valley settlement.", "Отличи формирование паводка (flood generation) от подверженности ущербу (exposure) для поселения в узкой долине.")}
          modelAnswer={l("Flood generation: intense rain and rapid runoff produce a flood. Impermeable surfaces, such as roads and car parks, can increase runoff. Buildings on the floodplain increase exposure: they put more people and property in the flood's path, but they do not cause the rain. To apply this to Boscastle, support each factor with evidence from the 2004 event.", "Формирование паводка: сильный дождь и быстрый сток вызывают паводок. Непроницаемые поверхности, например дороги и парковки, могут усиливать сток. Застройка поймы повышает подверженность ущербу, но не вызывает дождь. Чтобы связать каждый фактор с Боскаслом, подкрепи его фактами о событии 2004 года.")}
        />
      </div>
    </div>
  );
}
