import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

interface TypeBlock {
  key: string;
  hasPhrases: boolean;
  hasConventions: boolean;
}

const TYPES: TypeBlock[] = [
  { key: 'discours', hasPhrases: true, hasConventions: true },
  { key: 'article', hasPhrases: true, hasConventions: true },
  { key: 'lettre', hasPhrases: false, hasConventions: true },
  { key: 'blog', hasPhrases: false, hasConventions: false },
  { key: 'courriel', hasPhrases: false, hasConventions: false },
];

export function TextTypesPage() {
  const { t } = useTranslation('french');

  return (
    <div>
      <TopicHero title={t('textTypesPage.title')} intro={t('textTypesPage.intro')} icon={<FileText size={28} />} />

      {TYPES.map(({ key, hasPhrases, hasConventions }) => {
        const conventions = hasConventions ? ((t(`textTypesPage.${key}.conventions`, { returnObjects: true }) as string[]) ?? []) : [];
        const phrases = hasPhrases ? ((t(`textTypesPage.${key}.phrases`, { returnObjects: true }) as string[]) ?? []) : [];
        return (
          <div key={key}>
            <SectionHeading>{t(`textTypesPage.${key}.title`)}</SectionHeading>
            <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm mb-3" style={{ borderLeftColor: 'var(--color-accent-rose-muted)', borderLeftWidth: '3px' }}>
              {t(`textTypesPage.${key}.body`)}
            </p>
            {conventions.length > 0 ? (
              <div className="bg-bg-secondary border border-border rounded-md p-4 mb-3">
                <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2">Conventions / Конвенции</h4>
                <ul className="space-y-1 text-sm">
                  {conventions.map((c, i) => (<li key={i}>· {c}</li>))}
                </ul>
              </div>
            ) : null}
            {phrases.length > 0 ? (
              <div className="bg-bg-tertiary/30 border border-border rounded-md p-4">
                <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2">Phrases utiles / Полезные фразы</h4>
                <ul className="space-y-1 text-sm italic">
                  {phrases.map((p, i) => (<li key={i}>· {p}</li>))}
                </ul>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
