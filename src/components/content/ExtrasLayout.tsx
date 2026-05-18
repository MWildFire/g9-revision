import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, AlertCircle } from 'lucide-react';
import { TopicHero, SectionHeading } from './TopicHero';

interface Props {
  title: string;
  intro: string;
  children: ReactNode;
}

export function ExtrasLayout({ title, intro, children }: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const noticeText = lang === 'ru'
    ? 'Это дополнение к revision-листу, не часть обязательной программы EOY. Изучай для углубления.'
    : 'This is supplementary content — beyond the revision list, not required for EOY. Read for enrichment.';
  const noticeTitle = lang === 'ru' ? 'За рамками revision-листа' : 'Beyond the revision list';

  return (
    <div>
      <TopicHero title={title} intro={intro} icon={<Sparkles size={28} />} />

      <div className="mt-6 flex items-start gap-3 bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-warm)', borderLeftWidth: '4px' }}>
        <AlertCircle size={18} className="text-accent-warm shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium mb-0.5">{noticeTitle}</p>
          <p className="text-xs text-text-secondary">{noticeText}</p>
        </div>
      </div>

      {children}
    </div>
  );
}

interface SectionProps {
  title: string;
  body?: string;
  items?: string[];
  bullets?: string[];
  borderColor?: string;
}

export function ExtraSection({ title, body, items, bullets, borderColor }: SectionProps) {
  return (
    <>
      <SectionHeading>{title}</SectionHeading>
      {body ? (
        <p
          className="bg-bg-secondary border border-border rounded-md p-4 text-sm whitespace-pre-line"
          style={borderColor ? { borderLeftColor: borderColor, borderLeftWidth: '3px' } : undefined}
        >
          {body}
        </p>
      ) : null}
      {items && items.length > 0 ? (
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {bullets && bullets.length > 0 ? (
        <ul className="space-y-1 list-disc list-inside text-sm text-text-secondary pl-2">
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
      ) : null}
    </>
  );
}
