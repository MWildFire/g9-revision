import { useTranslation } from 'react-i18next';
import { Waves } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { BradshawModel } from '../../../components/simulations/geography/BradshawModel';
import { StormHydrograph } from '../../../components/simulations/geography/StormHydrograph';
import { ActiveRecallBlock } from '../../../components/content/ActiveRecallBlock';

const EROSION_TYPES = ['abrasion', 'attrition', 'hydraulicAction', 'solution'];
const TRANSPORT_TYPES = ['traction', 'saltation', 'suspension', 'solution'];

export function RiversPage() {
  const { t } = useTranslation('geography');
  const TOPIC = 'rivers';

  return (
    <div>
      <TopicHero title={t('rivers.title')} intro={t('rivers.intro')} icon={<Waves size={28} />} />

      <SectionHeading>{t('rivers.sections.bradshaw.title')}</SectionHeading>
      <BradshawModel />

      <SectionHeading>{t('rivers.sections.erosion.title')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {EROSION_TYPES.map((id) => (
          <div key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-3 text-sm">
            {t(`rivers.sections.erosion.items.${id}`)}
          </div>
        ))}
      </div>

      <SectionHeading>{t('rivers.sections.transportation.title')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {TRANSPORT_TYPES.map((id) => (
          <div key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-3 text-sm">
            {t(`rivers.sections.transportation.items.${id}`)}
          </div>
        ))}
      </div>

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
          <strong className="block mb-1">Physical</strong>
          {t('rivers.sections.flooding.physical')}
        </div>
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
          <strong className="block mb-1">Human</strong>
          {t('rivers.sections.flooding.human')}
        </div>
      </div>

      <SectionHeading>{t('rivers.sections.management.title')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
          <strong className="block mb-1">Hard engineering</strong>
          {t('rivers.sections.management.hard')}
        </div>
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
          <strong className="block mb-1">Soft engineering</strong>
          {t('rivers.sections.management.soft')}
        </div>
      </div>

      <SectionHeading>{t('rivers.sections.boscastle.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 mb-4">
        <p className="text-sm text-text-secondary mb-3">{t('rivers.sections.boscastle.summary')}</p>
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-3 mb-2">SEEP impacts</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {['social', 'economic', 'environmental', 'political'].map((k) => (
            <div key={k}>· {t(`rivers.sections.boscastle.seep.${k}`)}</div>
          ))}
        </div>
        <h4 className="text-sm font-medium uppercase tracking-wider text-text-muted mt-4 mb-2">Responses (LGSL)</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {['local', 'government', 'shortTerm', 'longTerm'].map((k) => (
            <div key={k}>· {t(`rivers.sections.boscastle.responses.${k}`)}</div>
          ))}
        </div>
      </div>

      <SectionHeading>Active recall</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="erosion-types"
          prompt="List the four types of river erosion and one example of each."
          modelAnswer="Abrasion, attrition, hydraulic action, solution. See descriptions above for details."
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="boscastle-causes"
          prompt="State two physical and two human causes of the Boscastle floods."
          modelAnswer="Physical: 200+mm rainfall in 5h; saturated ground; funnel-shaped valley. Human: building on floodplain; impermeable urban surfaces; limited drainage."
        />
      </div>
    </div>
  );
}
