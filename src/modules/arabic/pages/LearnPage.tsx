import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen } from 'lucide-react';
import { TopicHero } from '../../../components/content/TopicHero';
import { ArabicText } from '../components/ArabicText';
import { WordCard } from '../components/WordCard';
import { LEARN_BLOCKS } from '../data/content';

export function LearnPage() {
  const { t, i18n } = useTranslation('arabic');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const [params] = useSearchParams();
  const target = params.get('block');

  // Scroll to a specific block when arriving from an overview block card.
  useEffect(() => {
    if (!target) return;
    const el = document.getElementById(`block-${target}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [target]);

  const scrollTo = (id: string) => {
    document.getElementById(`block-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <TopicHero title={t('learn.title')} intro={t('learn.intro')} icon={<BookOpen size={28} />} />

      <p className="mt-4 text-xs text-text-muted">{t('learn.legend')}</p>

      {/* Jump-to chips */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs uppercase tracking-wider text-text-muted">{t('learn.jumpTo')}</span>
        {LEARN_BLOCKS.map((b) => (
          <button
            key={b.id}
            onClick={() => scrollTo(b.id)}
            className="inline-flex items-center gap-1.5 bg-bg-secondary border border-border rounded-full px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary hover:border-accent-olive transition-colors"
          >
            {lang === 'ru' ? b.titleRu : b.titleEn}
          </button>
        ))}
      </div>

      {LEARN_BLOCKS.map((b) => (
        <section key={b.id} id={`block-${b.id}`} className="mt-12 scroll-mt-24">
          <div className="flex items-baseline justify-between gap-3 mb-4 pb-2 border-b border-border">
            <h2 className="font-serif text-2xl font-medium text-text-primary">
              {lang === 'ru' ? b.titleRu : b.titleEn}
            </h2>
            <ArabicText className="text-2xl text-accent-olive">{b.titleAr}</ArabicText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {b.words.map((w) => (
              <WordCard key={w.id} word={w} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
