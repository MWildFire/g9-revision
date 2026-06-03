import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Type,
  BookOpen,
  Layers,
  PencilLine,
  ListChecks,
  ArrowRight,
  Info,
  GraduationCap,
  BookA,
  ScrollText,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { SubjectProgress } from '../../../components/progress/SubjectProgress';
import { getSubject } from '../../../config/subjects';
import { ArabicText } from '../components/ArabicText';
import { VOCAB_BLOCKS, BOOKLET_THEMES } from '../data/content';

const ACTIONS = [
  { to: '/arabic/learn', key: 'learn', icon: BookOpen },
  { to: '/arabic/flashcards', key: 'flashcards', icon: Layers },
  { to: '/arabic/exercises', key: 'exercises', icon: PencilLine },
  { to: '/arabic/quiz', key: 'quiz', icon: ListChecks },
] as const;

const REFERENCE = [
  { to: '/arabic/mrs-hala', key: 'mrsHala', icon: GraduationCap },
  { to: '/arabic/alphabet', key: 'alphabet', icon: Type },
  { to: '/arabic/vocab', key: 'vocab', icon: BookA },
  { to: '/arabic/grammar', key: 'grammar', icon: ScrollText },
  { to: '/arabic/phrases', key: 'phrases', icon: MessageCircle },
  { to: '/arabic/extras', key: 'extras', icon: Sparkles },
] as const;

const OLIVE = 'var(--color-accent-olive)';

export function ArabicHomePage() {
  const { t, i18n } = useTranslation('arabic');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const subject = getSubject('arabic');

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<Type size={28} />} />

      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="flex items-start gap-2 text-sm text-text-secondary bg-bg-secondary border border-border rounded-md p-3">
          <Info size={14} className="mt-0.5 text-accent-olive shrink-0" />
          <span>
            {t('home.rtlNote')} <span className="text-text-muted">· {t('home.source')}</span>
          </span>
        </div>
        <div className="sm:w-48">
          <SubjectProgress subject={subject} />
        </div>
      </div>

      {/* What the booklet covers — the 5 themes from page 1 */}
      <SectionHeading description={t('home.coversIntro')}>{t('home.coversHeading')}</SectionHeading>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {BOOKLET_THEMES.map((theme, i) => (
          <li
            key={i}
            className="flex items-center gap-3 bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm"
          >
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium shrink-0"
              style={{ background: OLIVE + '22', color: OLIVE }}
            >
              {i + 1}
            </span>
            <span>{lang === 'ru' ? theme.ru : theme.en}</span>
          </li>
        ))}
      </ol>

      {/* Practise — the four interactive sections */}
      <SectionHeading>{t('home.practiceHeading')}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ACTIONS.map(({ to, key, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="group bg-bg-secondary border border-border rounded-lg shadow-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
            style={{ borderTopColor: OLIVE, borderTopWidth: '3px' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                style={{ background: OLIVE + '22', color: OLIVE }}
              >
                <Icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg font-medium mb-0.5">{t(`home.actions.${key}`)}</h3>
                <p className="text-sm text-text-secondary">{t(`home.actions.${key}Desc`)}</p>
              </div>
              <ArrowRight
                size={16}
                className="text-text-muted group-hover:text-text-primary transition-all shrink-0 mt-1"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* The seven vocabulary blocks */}
      <SectionHeading description={t('home.blocksIntro')}>{t('home.blocksHeading')}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {VOCAB_BLOCKS.map((b) => (
          <Link
            key={b.id}
            to={`/arabic/learn?block=${b.id}`}
            className="group bg-bg-secondary border border-border rounded-md p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="flex items-baseline justify-between gap-2 mb-2">
              <h3 className="font-serif text-base font-medium">{lang === 'ru' ? b.titleRu : b.titleEn}</h3>
              <ArabicText className="text-lg text-text-secondary">{b.titleAr}</ArabicText>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted">
                {b.words.length} {t('home.words')}
              </span>
              <ArrowRight
                size={14}
                className="text-text-muted group-hover:text-text-primary transition-colors"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Kept reference material */}
      <SectionHeading description={t('home.referenceIntro')}>{t('home.referenceHeading')}</SectionHeading>
      <div className="flex flex-wrap gap-2">
        {REFERENCE.map(({ to, key, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="inline-flex items-center gap-2 bg-bg-secondary border border-border rounded-full px-3.5 py-2 text-sm text-text-secondary hover:text-text-primary hover:border-accent-olive transition-colors"
          >
            <Icon size={14} />
            <span>{t(`nav.${key}`)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
