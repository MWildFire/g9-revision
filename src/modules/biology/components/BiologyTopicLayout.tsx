import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

interface Props {
  topicKey: string;
  icon: ReactNode;
  children: ReactNode;
}

export function BiologyTopicLayout({ topicKey, icon, children }: Props) {
  const { t } = useTranslation('biology');
  return (
    <div>
      <TopicHero title={t(`${topicKey}.title`)} intro={t(`${topicKey}.intro`)} icon={icon} />
      {children}
    </div>
  );
}

interface SectionProps {
  ns?: string;
  title: string;
  body?: string;
  items?: { key: string; text: string }[];
  borderColor?: string;
}

export function InfoSection({ title, body, items, borderColor }: SectionProps) {
  return (
    <>
      <SectionHeading>{title}</SectionHeading>
      {body ? (
        <p
          className="bg-bg-secondary border border-border rounded-md p-4 text-sm"
          style={borderColor ? { borderLeftColor: borderColor, borderLeftWidth: '3px' } : undefined}
        >
          {body}
        </p>
      ) : null}
      {items && items.length > 0 ? (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.key} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
              {item.text}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

interface KeyValueProps {
  title: string;
  pairs: { label: string; body: string }[];
}

export function KeyValueSection({ title, pairs }: KeyValueProps) {
  return (
    <>
      <SectionHeading>{title}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {pairs.map((p) => (
          <div key={p.label} className="bg-bg-secondary border border-border rounded-md p-4 text-sm">
            <strong className="block mb-1">{p.label}</strong>
            {p.body}
          </div>
        ))}
      </div>
    </>
  );
}
