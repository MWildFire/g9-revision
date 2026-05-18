import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';
import { Card } from '../../../components/ui/Card';
import { BookOpen } from 'lucide-react';

const TERMS = ['state', 'describe', 'explain', 'compare', 'evaluate', 'calculate'];

export function CommandTermsPage() {
  const { t } = useTranslation('physics');
  return (
    <div>
      <TopicHero
        title={t('commandTerms.title')}
        intro={t('commandTerms.intro')}
        icon={<BookOpen size={28} />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TERMS.map((id) => (
          <Card key={id} padding="md">
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-medium text-text-primary">
                {t(`commandTerms.items.${id}.term`)}
              </h3>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                  {t('commandTerms.headerMeaning')}
                </p>
                <p className="text-sm text-text-secondary">
                  {t(`commandTerms.items.${id}.meaning`)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                  {t('commandTerms.headerHow')}
                </p>
                <p className="text-sm text-text-secondary">
                  {t(`commandTerms.items.${id}.how`)}
                </p>
              </div>
              <div className="pt-2 mt-2 border-t border-border">
                <p className="text-xs italic text-text-muted">
                  {t(`commandTerms.items.${id}.example`)}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
