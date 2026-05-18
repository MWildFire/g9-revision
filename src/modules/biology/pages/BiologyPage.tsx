import { useTranslation } from 'react-i18next';
import { Leaf, ExternalLink } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

const CRITERIA_LINKS = [
  { key: 'a', url: 'https://sites.google.com/nlcsdubai.ae/mypbiology/revision/g9-revision' },
  { key: 'b', url: 'https://sites.google.com/nlcsdubai.ae/mypbiology/revision/g9-revision' },
  { key: 'c', url: 'https://sites.google.com/nlcsdubai.ae/mypbiology/revision/g9-revision' },
  { key: 'd', url: 'https://sites.google.com/nlcsdubai.ae/mypbiology/revision/g9-revision' },
];

const GLOSSARY_TERMS = [
  'immuneSystem', 'cellularRespiration', 'photosynthesis', 'ecosystem', 'dna',
  'evolution', 'mitosis', 'meiosis', 'foodWeb', 'biodiversity',
];

export function BiologyPage() {
  const { t } = useTranslation('biology');

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<Leaf size={28} />} />

      <SectionHeading>External resources</SectionHeading>
      <p className="text-sm text-text-secondary mb-3">{t('home.externalNotice')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {CRITERIA_LINKS.map(({ key, url }) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-bg-secondary border border-border rounded-md p-4 hover:shadow-soft transition-shadow"
          >
            <span className="text-sm font-medium">{t(`criteria.${key}`)}</span>
            <ExternalLink size={14} className="text-text-muted" />
          </a>
        ))}
      </div>

      <SectionHeading>{t('glossary.title')}</SectionHeading>
      <p className="text-sm text-text-secondary mb-4">{t('glossary.intro')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {GLOSSARY_TERMS.map((id) => (
          <article key={id} className="bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-sage)', borderLeftWidth: '3px' }}>
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="font-serif text-lg font-medium">{t(`glossary.terms.${id}.en`)}</h3>
              <span className="text-sm text-text-muted">— {t(`glossary.terms.${id}.ru`)}</span>
            </div>
            <p className="text-sm text-text-secondary">{t(`glossary.terms.${id}.def`)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
