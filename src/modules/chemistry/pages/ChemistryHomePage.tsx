import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FlaskConical, Atom, Link as LinkIcon, FlaskRound, Calculator, Droplet, Flame, ArrowRight } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

const TOPICS = [
  { to: '/chemistry/atoms-periodic', key: 'atomsPeriodic', icon: Atom, accent: 'var(--color-accent-clay)' },
  { to: '/chemistry/bonding', key: 'bonding', icon: LinkIcon, accent: 'var(--color-accent-warm)' },
  { to: '/chemistry/reactions', key: 'reactions', icon: FlaskRound, accent: 'var(--color-accent-sage)' },
  { to: '/chemistry/stoichiometry', key: 'stoichiometry', icon: Calculator, accent: 'var(--color-accent-sky)' },
  { to: '/chemistry/acids-bases', key: 'acidsBases', icon: Droplet, accent: 'var(--color-accent-sky-deep)' },
  { to: '/chemistry/energy', key: 'energy', icon: Flame, accent: 'var(--color-accent-clay)' },
];

export function ChemistryHomePage() {
  const { t } = useTranslation('chemistry');

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<FlaskConical size={28} />} />

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
    </div>
  );
}
