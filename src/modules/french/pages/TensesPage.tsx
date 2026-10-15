import { FRENCH_REVIEWS } from '../../../definitions/french';
import { DefinitionSupport } from '../../../components/content/DefinitionSupport';
import { Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { PRESENT_TENSE, PASSE_COMPOSE, FUTURE_TENSE, FUTUR_PROCHE_TENSE, IMPARFAIT_TENSE, CONDITIONNEL_TENSE, PLUS_QUE_PARFAIT_TENSE, ConjugationTable } from '../data/frenchData';

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
        intro={lang === 'ru' ? 'Основные времена: настоящее, сложное прошедшее (passé composé), простое будущее (futur simple), ближайшее будущее (futur proche), имперфект (imparfait), условное наклонение (conditionnel présent) и давнопрошедшее (plus-que-parfait).' : 'Main tenses: present, passé composé, futur simple, futur proche, imparfait, conditionnel présent and plus-que-parfait.'}
        icon={<Clock size={28} />}
      />
      <TenseSection title={lang === 'ru' ? 'Présent (Настоящее)' : 'Présent (Present)'} tables={PRESENT_TENSE} lang={lang} />
      <DefinitionSupport review={FRENCH_REVIEWS.present} language={lang} />
      <TenseSection title={lang === 'ru' ? 'Passé composé (Сложное прошедшее)' : 'Passé composé (Compound past)'} tables={PASSE_COMPOSE} lang={lang} />
      <DefinitionSupport review={FRENCH_REVIEWS.past} language={lang} />
      <TenseSection title={lang === 'ru' ? 'Futur simple (Простое будущее)' : 'Futur simple (Future)'} tables={FUTURE_TENSE} lang={lang} />
      <DefinitionSupport review={FRENCH_REVIEWS.future} language={lang} />
      <TenseSection title={lang === 'ru' ? 'Futur proche (Ближайшее будущее)' : 'Futur proche (Near future)'} tables={FUTUR_PROCHE_TENSE} lang={lang} />
      <TenseSection title={lang === 'ru' ? 'Imparfait (Имперфект)' : 'Imparfait (Imperfect)'} tables={IMPARFAIT_TENSE} lang={lang} />
      <TenseSection title={lang === 'ru' ? 'Conditionnel présent (Условное наклонение)' : 'Conditionnel présent (Conditional)'} tables={CONDITIONNEL_TENSE} lang={lang} />
      <TenseSection title={lang === 'ru' ? 'Plus-que-parfait (Давнопрошедшее)' : 'Plus-que-parfait (Pluperfect)'} tables={PLUS_QUE_PARFAIT_TENSE} lang={lang} />
    </div>
  );
}
