import { useTranslation } from 'react-i18next';
import { TermCard } from '../ui/TermCard';
import type { DefinitionReview } from './definitionReview';

interface TermsGridProps {
  ns: string;
  topicKey: string;
  termIds: string[];
}

export function TermsGrid({ ns, topicKey, termIds }: TermsGridProps) {
  const { t, i18n } = useTranslation(ns);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {termIds.map((id) => (
        <TermCard
          key={id}
          term={t(`${topicKey}.terms.${id}.name`)}
          altTerm={t(`${topicKey}.terms.${id}.alt`)}
          definition={t(`${topicKey}.terms.${id}.definition`)}
          example={t(`${topicKey}.terms.${id}.example`)}
          review={i18n.exists(`${topicKey}.terms.${id}.review`, { ns }) ? t(`${topicKey}.terms.${id}.review`, { returnObjects: true }) as DefinitionReview : undefined}
        />
      ))}
    </div>
  );
}
