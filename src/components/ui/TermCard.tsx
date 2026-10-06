import { Card } from './Card';
import { DefinitionSupport } from '../content/DefinitionSupport';
import type { DefinitionReview } from '../content/definitionReview';

interface TermCardProps {
  term: string;
  altTerm?: string;
  definition: string;
  example?: string;
  review?: DefinitionReview;
}

export function TermCard({ term, altTerm, definition, example, review }: TermCardProps) {
  return (
    <Card padding="md" className="h-full">
      <div className="flex flex-col h-full gap-2">
        <h3 className="text-lg font-serif font-medium text-text-primary">
          {term}
          {altTerm ? (
            <span className="ml-2 text-sm text-text-secondary font-sans font-normal">
              · {altTerm}
            </span>
          ) : null}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">{definition}</p>
        {example ? (
          <p className="mt-auto pt-2 text-xs italic text-text-secondary border-t border-border">
            {example}
          </p>
        ) : null}
        {review && <DefinitionSupport review={review} />}
      </div>
    </Card>
  );
}
