import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages, BookA, Clock, Type, MessageCircle, ArrowRight } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { useLocalProgress } from '../../../hooks/useLocalProgress';

const TOPICS = [
  { to: '/french/vocab', key: 'vocab', icon: BookA, accent: 'var(--color-accent-rose-muted)' },
  { to: '/french/tenses', key: 'tenses', icon: Clock, accent: 'var(--color-accent-warm)' },
  { to: '/french/grammar', key: 'grammar', icon: Type, accent: 'var(--color-accent-sage)' },
  { to: '/french/phrases', key: 'phrases', icon: MessageCircle, accent: 'var(--color-accent-sky)' },
];

const LEVELS = ['emergent', 'capable', 'proficient'] as const;
type Level = (typeof LEVELS)[number];

export function FrenchHomePage() {
  const { t } = useTranslation('french');
  const [state, update] = useLocalProgress();
  const currentLevel = state.french.level;

  const setLevel = (level: Level) => {
    update((s) => ({ ...s, french: { ...s.french, level } }));
  };

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<Languages size={28} />} />

      <SectionHeading>{t('home.selectLevel')}</SectionHeading>
      <div className="grid grid-cols-3 gap-2">
        {LEVELS.map((level) => {
          const active = currentLevel === level;
          return (
            <button
              key={level}
              onClick={() => setLevel(level)}
              className={`px-4 py-3 rounded-md border text-sm font-medium transition-colors ${
                active ? 'bg-bg-secondary shadow-soft border-accent-rose-muted' : 'border-border hover:bg-bg-secondary/50'
              }`}
            >
              {t(`home.levels.${level}`)}
            </button>
          );
        })}
      </div>

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
                <h3 className="font-serif text-lg font-medium mb-1">{t(`nav.${key}`)}</h3>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover:text-text-primary transition-all shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
