import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Type, Hourglass, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../components/content/TopicHero';

const TOPICS = ['vocabulary', 'grammar', 'reading', 'writing', 'speaking'];
const PHASES = ['1', '2', '3', '4', '5', '6'] as const;
type Phase = (typeof PHASES)[number];

const PHASE_KEY = 'g9-arabic-phase';

function ArabicHome() {
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

      <SectionHeading>{t('home.draftNotice')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4">
        <ul className="space-y-2">
          {TOPICS.map((id) => (
            <li key={id} className="flex items-center gap-2 text-sm">
              <Hourglass size={14} className="text-text-muted" />
              {t(`topics.${id}`)}
            </li>
          ))}
        </ul>
      </div>

      <SectionHeading>{t('alphabet.title')}</SectionHeading>
      <p className="text-sm text-text-secondary mb-3">{t('alphabet.intro')}</p>
      <div
        dir="rtl"
        className="bg-bg-secondary border border-border rounded-md p-6 text-center"
        style={{ borderTopColor: 'var(--color-accent-olive)', borderTopWidth: '3px' }}
      >
        <p
          className="font-serif text-3xl tracking-wider leading-relaxed"
          style={{ fontFamily: '"Noto Sans Arabic", "Amiri", serif' }}
        >
          {t('alphabet.letters')}
        </p>
      </div>
    </div>
  );
}

export function ArabicModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8">
      <Routes>
        <Route index element={<ArabicHome />} />
      </Routes>
    </div>
  );
}
