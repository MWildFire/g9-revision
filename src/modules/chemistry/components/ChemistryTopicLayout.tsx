import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

interface Props {
  topicKey: string;
  icon: ReactNode;
  children: ReactNode;
}

export function ChemistryTopicLayout({ topicKey, icon, children }: Props) {
  const { t } = useTranslation('chemistry');
  return (
    <div>
      <TopicHero title={t(`${topicKey}.title`)} intro={t(`${topicKey}.intro`)} icon={icon} />
      {children}
    </div>
  );
}

interface SectionProps {
  title: string;
  body?: string;
  items?: { key: string; text: string }[];
  detailedItems?: DetailedItem[];
  borderColor?: string;
}

export function ChemSection({ title, body, items, detailedItems, borderColor }: SectionProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { rule: 'Правило', use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;
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
      {detailedItems && detailedItems.length > 0 ? (
        <div className="space-y-3">
          {detailedItems.map((item, i) => (
            <DetailedCard key={i} item={item} borderColor={borderColor} labels={labels} />
          ))}
        </div>
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
