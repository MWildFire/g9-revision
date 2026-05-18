import { useTranslation } from 'react-i18next';
import { Battery } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { ActiveRecallBlock } from '../../../components/content/ActiveRecallBlock';

const DEFS = ['resource', 'consumption', 'carrying'];

export function ResourceReliancePage() {
  const { t } = useTranslation('geography');
  const TOPIC = 'resourceReliance';

  return (
    <div>
      <TopicHero title={t('resourceReliance.title')} intro={t('resourceReliance.intro')} icon={<Battery size={28} />} />

      <SectionHeading>{t('resourceReliance.sections.definitions.title')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {DEFS.map((id) => (
          <div key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-3 text-sm">
            {t(`resourceReliance.sections.definitions.items.${id}`)}
          </div>
        ))}
      </div>

      <SectionHeading>{t('resourceReliance.sections.sustainability.title')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
          <strong className="block mb-1">Brundtland</strong>
          {t('resourceReliance.sections.sustainability.brundtland')}
        </div>
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
          <strong className="block mb-1">UN SDGs</strong>
          {t('resourceReliance.sections.sustainability.sdgs')}
        </div>
      </div>

      <SectionHeading>{t('resourceReliance.sections.energy.title')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderTopColor: 'var(--color-accent-sage)', borderTopWidth: '3px' }}>
          <strong className="block mb-1">Renewable</strong>
          {t('resourceReliance.sections.energy.renewable')}
        </div>
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderTopColor: 'var(--color-accent-clay)', borderTopWidth: '3px' }}>
          <strong className="block mb-1">Non-renewable</strong>
          {t('resourceReliance.sections.energy.nonRenewable')}
        </div>
      </div>

      <SectionHeading>{t('resourceReliance.sections.malthusBoserup.title')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderTopColor: 'var(--color-accent-clay)', borderTopWidth: '3px' }}>
          <strong className="block mb-1">Malthus — pessimist</strong>
          {t('resourceReliance.sections.malthusBoserup.malthus')}
        </div>
        <div className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderTopColor: 'var(--color-accent-sage)', borderTopWidth: '3px' }}>
          <strong className="block mb-1">Boserup — optimist</strong>
          {t('resourceReliance.sections.malthusBoserup.boserup')}
        </div>
      </div>

      <SectionHeading>{t('resourceReliance.sections.waterStress.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
        {t('resourceReliance.sections.waterStress.description')}
      </p>

      <SectionHeading>{t('resourceReliance.sections.foodSecurity.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
        {t('resourceReliance.sections.foodSecurity.factors')}
      </p>

      <SectionHeading>{t('resourceReliance.sections.players.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
        {t('resourceReliance.sections.players.items')}
      </p>

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
