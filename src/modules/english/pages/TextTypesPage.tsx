import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';

const TYPES = ['essay', 'letter', 'email', 'speech', 'newspaper', 'online', 'blog', 'guide', 'script'];

export function TextTypesPage() {
  const { t } = useTranslation('english');
  return (
    <div>
      <TopicHero title={t('textTypesPage.title')} intro={t('textTypesPage.intro')} icon={<FileText size={28} />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
        {TYPES.map((id) => (
          <article
            key={id}
            className="bg-bg-secondary border border-border rounded-md p-4"
            style={{ borderLeftColor: 'var(--color-accent-sand)', borderLeftWidth: '3px' }}
          >
            <h3 className="font-serif text-lg font-medium mb-1">{t(`textTypes.${id}.name`)}</h3>
            <p className="text-sm text-text-secondary">{t(`textTypes.${id}.description`)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
