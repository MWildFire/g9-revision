import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Leaf, ArrowRight, Microscope, Heart, Sun, TreePine, Dna, Shield, FlaskRound, ExternalLink,
} from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

const TOPICS = [
  { to: '/biology/cells', key: 'cells', icon: Microscope, accent: 'var(--color-accent-sage)' },
  { to: '/biology/body-systems', key: 'bodySystems', icon: Heart, accent: 'var(--color-accent-clay)' },
  { to: '/biology/photosynthesis', key: 'photosynthesis', icon: Sun, accent: 'var(--color-accent-warm)' },
  { to: '/biology/ecology', key: 'ecology', icon: TreePine, accent: 'var(--color-accent-sage)' },
  { to: '/biology/genetics', key: 'genetics', icon: Dna, accent: 'var(--color-accent-warm)' },
  { to: '/biology/immune', key: 'immune', icon: Shield, accent: 'var(--color-accent-clay)' },
  { to: '/biology/experiment', key: 'experiment', icon: FlaskRound, accent: 'var(--color-accent-sky)' },
];

const GLOSSARY_TERMS = [
  'immuneSystem', 'cellularRespiration', 'photosynthesis', 'ecosystem', 'dna',
  'evolution', 'mitosis', 'meiosis', 'foodWeb', 'biodiversity',
];

export function BiologyHomePage() {
  const { t } = useTranslation('biology');

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<Leaf size={28} />} />

      <SectionHeading>{t('home.topicsHeading')}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TOPICS.map(({ to, key, icon: Icon, accent }) => (
          <Link
            key={to}
            to={to}
            className="group bg-bg-secondary border border-border rounded-lg shadow-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
            style={{ borderTopColor: accent, borderTopWidth: '3px' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0" style={{ background: accent + '33', color: accent }}>
                <Icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg font-medium mb-1">{t(`${key}.title`)}</h3>
                <p className="text-sm text-text-secondary leading-snug line-clamp-2">{t(`${key}.intro`)}</p>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover:text-text-primary transition-all shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>

      <SectionHeading>School resources by criterion</SectionHeading>
      <p className="text-sm text-text-secondary mb-3">{t('home.externalNotice')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a
          href="https://sites.google.com/nlcsdubai.ae/mypbiology/revision/g9-revision"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-bg-secondary border border-border rounded-md p-4 hover:shadow-soft transition-shadow"
          style={{ borderLeftColor: 'var(--color-accent-sky)', borderLeftWidth: '3px' }}
        >
          <span className="text-sm">
            <strong>Criterion A</strong> — Question banks
          </span>
          <ExternalLink size={14} className="text-text-muted" />
        </a>
        <a
          href="https://sites.google.com/nlcsdubai.ae/mypbiology/revision/criterion-b-chooser"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-bg-secondary border border-border rounded-md p-4 hover:shadow-soft transition-shadow"
          style={{ borderLeftColor: 'var(--color-accent-sage)', borderLeftWidth: '3px' }}
        >
          <span className="text-sm">
            <strong>Criterion B</strong> — Inquiring & designing tasks
          </span>
          <ExternalLink size={14} className="text-text-muted" />
        </a>
        <a
          href="https://sites.google.com/nlcsdubai.ae/mypbiology/revision/criterion-c-practice"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-bg-secondary border border-border rounded-md p-4 hover:shadow-soft transition-shadow"
          style={{ borderLeftColor: 'var(--color-accent-warm)', borderLeftWidth: '3px' }}
        >
          <span className="text-sm">
            <strong>Criterion C</strong> — Processing & evaluating practice
          </span>
          <ExternalLink size={14} className="text-text-muted" />
        </a>
        <a
          href="https://sites.google.com/nlcsdubai.ae/mypbiology/revision/criterion-d-courtroom"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-bg-secondary border border-border rounded-md p-4 hover:shadow-soft transition-shadow"
          style={{ borderLeftColor: 'var(--color-accent-clay)', borderLeftWidth: '3px' }}
        >
          <span className="text-sm">
            <strong>Criterion D</strong> — Courtroom reflection task
          </span>
          <ExternalLink size={14} className="text-text-muted" />
        </a>
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
