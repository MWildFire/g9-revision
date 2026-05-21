import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen, FileText, Sparkles, PenTool, Search, Pencil, ArrowRight, Check, ScrollText, ClipboardCheck, Brain } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

const TOPICS = [
  { to: '/english/macbeth', key: 'macbeth', icon: ScrollText, accent: 'var(--color-accent-clay)' },
  { to: '/english/exam-format', key: 'examFormat', icon: ClipboardCheck, accent: 'var(--color-accent-sky-deep)' },
  { to: '/english/progress-test', key: 'progressTest', icon: Brain, accent: 'var(--color-accent-sage)' },
  { to: '/english/text-types', key: 'textTypes', icon: FileText, accent: 'var(--color-accent-sand)' },
  { to: '/english/devices', key: 'devices', icon: Sparkles, accent: 'var(--color-accent-warm)' },
  { to: '/english/grammar', key: 'grammar', icon: PenTool, accent: 'var(--color-accent-olive)' },
  { to: '/english/reading', key: 'reading', icon: Search, accent: 'var(--color-accent-sky)' },
  { to: '/english/essays', key: 'essays', icon: Pencil, accent: 'var(--color-accent-rose-muted)' },
];

export function EnglishHomePage() {
  const { t } = useTranslation('english');
  const checklist = (t('checklist', { returnObjects: true }) as string[]) ?? [];

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<BookOpen size={28} />} />

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

      <SectionHeading>{t('checklistHeading')}</SectionHeading>
      <ul className="space-y-2">
        {checklist.map((item, i) => (
          <li key={i} className="flex items-start gap-2 bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
            <Check size={14} className="mt-0.5 text-accent-sage shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
