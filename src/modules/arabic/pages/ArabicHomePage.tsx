import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Type, BookA, ScrollText, MessageCircle, ArrowRight, Info } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

const PHASES = ['1', '2', '3', '4', '5', '6'] as const;
type Phase = (typeof PHASES)[number];
const PHASE_KEY = 'g9-arabic-phase';

const TOPICS = [
  { to: '/arabic/alphabet', key: 'alphabet', icon: Type, accent: 'var(--color-accent-olive)' },
  { to: '/arabic/vocab', key: 'vocab', icon: BookA, accent: 'var(--color-accent-sage)' },
  { to: '/arabic/grammar', key: 'grammar', icon: ScrollText, accent: 'var(--color-accent-warm)' },
  { to: '/arabic/phrases', key: 'phrases', icon: MessageCircle, accent: 'var(--color-accent-sky)' },
];

export function ArabicHomePage() {
  const { t } = useTranslation('arabic');
  const [phase, setPhase] = useState<Phase | null>(() => {
    if (typeof window === 'undefined') return null;
    const stored = window.localStorage.getItem(PHASE_KEY);
    return PHASES.includes(stored as Phase) ? (stored as Phase) : null;
  });

  const updatePhase = (p: Phase) => {
    setPhase(p);
    window.localStorage.setItem(PHASE_KEY, p);
  };

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<Type size={28} />} />

      <div className="mt-6 flex items-start gap-2 text-sm text-text-secondary bg-bg-secondary border border-border rounded-md p-3">
        <Info size={14} className="mt-0.5 text-accent-olive shrink-0" />
        <span>{t('home.rtlNote')}</span>
      </div>

      <SectionHeading>{t('home.selectPhase')}</SectionHeading>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {PHASES.map((p) => {
          const active = phase === p;
          return (
            <button
              key={p}
              onClick={() => updatePhase(p)}
              className={`px-4 py-3 rounded-md border text-sm font-medium transition-colors ${
                active ? 'bg-bg-secondary shadow-soft border-accent-olive' : 'border-border hover:bg-bg-secondary/50'
              }`}
            >
              {t(`home.phases.${p}`)}
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
