import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Leaf, ArrowRight, Microscope, Heart, Sun, TreePine, Dna, Shield, FlaskRound,
} from 'lucide-react';
import plan from '../../../data/revision-plan.json';
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

const SCOPE_GROUPS = [
  { group: 'A', to: '/biology/cells', labelKey: 'cells.sections.structure.title' },
  { group: 'B', to: '/biology/cells', labelKey: 'cells.sections.transport.title' },
  { group: 'C', topicId: 'b-nutrition' },
  { group: 'D', topicId: 'b-transport' },
  { group: 'E', topicId: 'b-respiration' },
  { group: 'F', topicId: 'b-biotech' },
  { group: 'G', to: '/biology/photosynthesis', labelKey: 'photosynthesis.sections.process.title' },
  { group: 'H', topicId: 'b-plants' },
  { group: 'I', topicId: 'b-disease' },
  { group: 'J', topicId: 'b-evolution' },
  { group: 'K', topicId: 'b-nervous' },
  { group: 'L', topicId: 'b-hormones' },
  { group: 'M', topicId: 'b-environment' },
];

const GLOSSARY_TERMS = [
  'immuneSystem', 'cellularRespiration', 'photosynthesis', 'ecosystem', 'dna',
  'evolution', 'mitosis', 'meiosis', 'foodWeb', 'biodiversity',
  'diffusion', 'osmosis', 'activeTransport', 'enzyme', 'homeostasis',
  'transpiration', 'xylem', 'phloem', 'antibiotic', 'vaccination',
];

export function BiologyHomePage() {
  const { t, i18n } = useTranslation('biology');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<Leaf size={28} />} />

      <SectionHeading>{t('home.topicsHeading')}</SectionHeading>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {SCOPE_GROUPS.map(({ group, topicId, to, labelKey }) => {
          const topic = plan.topics.find((entry) => entry.id === topicId);
          const route = topic?.route ?? to;
          if (!route) return null;
          return (
            <li key={group}>
              <Link to={route} className="flex items-start gap-3 border border-border rounded-md p-4 bg-bg-secondary h-full">
                <span className="font-semibold text-text-muted" aria-hidden="true">{group}</span>
                <span>{topic ? topic.title[lang] : t(labelKey!)}</span>
                <ArrowRight size={16} className="shrink-0 ml-auto mt-1" aria-hidden="true" />
              </Link>
            </li>
          );
        })}
      </ul>
      <SectionHeading>{t('home.practiceHeading')}</SectionHeading>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          ['/november/b-earlier', 'earlier'],
          ['/mocks/food-enzymes', 'food'],
          ['/mocks/osmosis-drugs', 'drugs'],
          ['/november/paper/biology', 'paper'],
        ].map(([to, key]) => (
          <li key={to}><Link className="block border border-border rounded-md p-4 bg-bg-secondary h-full" to={to}>{t(`home.practice.${key}`)}</Link></li>
        ))}
      </ul>
      <SectionHeading>{t('home.referenceHeading')}</SectionHeading>
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


      <SectionHeading>{t('glossary.title')}</SectionHeading>
      <p className="text-sm text-text-secondary mb-4">{t('glossary.intro')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {GLOSSARY_TERMS.map((id) => (
          <article key={id} className="bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-sage)', borderLeftWidth: '3px' }}>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
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
