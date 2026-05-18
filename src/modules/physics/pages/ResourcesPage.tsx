import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';
import { ExternalLink, Link as LinkIcon } from 'lucide-react';

const RESOURCES = ['bbc', 'pmt', 'seneca', 'isaac', 'khan'];

export function ResourcesPage() {
  const { t } = useTranslation('physics');
  return (
    <div>
      <TopicHero
        title={t('resources.title')}
        intro={t('resources.intro')}
        icon={<LinkIcon size={28} />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {RESOURCES.map((id) => (
          <a
            key={id}
            href={t(`resources.items.${id}.url`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-bg-secondary border border-border rounded-lg shadow-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(61,47,31,0.12)]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-serif text-lg font-medium text-text-primary group-hover:text-accent-warm transition-colors">
                {t(`resources.items.${id}.title`)}
              </h3>
              <ExternalLink size={16} className="text-text-muted shrink-0 mt-1" />
            </div>
            <p className="mt-2 text-sm text-text-secondary">
              {t(`resources.items.${id}.desc`)}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
