import { FRENCH_REVIEWS } from '../../../definitions/french';
import { DefinitionSupport } from '../../../components/content/DefinitionSupport';
import { Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { PRESENT_TENSE, PASSE_COMPOSE, FUTURE_TENSE, ConjugationTable } from '../data/frenchData';

function TenseSection({ title, tables, lang }: { title: string; tables: ConjugationTable[]; lang: 'ru' | 'en' }) {
  return (
    <>
      <SectionHeading>{title}</SectionHeading>
      <div className="space-y-3">
        {tables.map((c) => (
          <article key={c.verb} className="bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-warm)', borderLeftWidth: '3px' }}>
            <h3 className="font-serif text-lg font-medium mb-1">
              {c.verb} {lang === 'ru' ? <span className="text-text-muted text-sm">— {c.ru}</span> : null}
            </h3>
            {c.notes ? <p className="text-xs text-text-secondary mb-2 italic">{lang === 'ru' ? c.notesRu ?? c.notes : c.notes}</p> : null}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 font-mono text-sm">
              {c.forms.map((f, i) => (<span key={i}>{f}</span>))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function TensesPage() {
  const { t, i18n } = useTranslation('french');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <div>
      <TopicHero
        title={t('nav.tenses')}
        intro={lang === 'ru' ? 'Три ключевых времени: настоящее, passé composé, futur simple.' : 'Three key tenses: present, passé composé, futur simple.'}
        icon={<Clock size={28} />}
      />
      <TenseSection title={lang === 'ru' ? 'Présent (Настоящее)' : 'Présent (Present)'} tables={PRESENT_TENSE} lang={lang} />
      <DefinitionSupport review={FRENCH_REVIEWS.present} language={lang} />
      <TenseSection title={lang === 'ru' ? 'Passé composé (Прошедшее)' : 'Passé composé (Past)'} tables={PASSE_COMPOSE} lang={lang} />
      <DefinitionSupport review={FRENCH_REVIEWS.past} language={lang} />
      <TenseSection title={lang === 'ru' ? 'Futur simple (Будущее)' : 'Futur simple (Future)'} tables={FUTURE_TENSE} lang={lang} />
      <DefinitionSupport review={FRENCH_REVIEWS.future} language={lang} />
    </div>
  );
}
