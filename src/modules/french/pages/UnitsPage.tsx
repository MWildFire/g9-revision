import { useTranslation } from 'react-i18next';
import { ListChecks, AlertCircle } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { Link } from 'react-router-dom';

const UNITS = ['unite1', 'unite2', 'unite3', 'unite4'];

export function UnitsPage() {
  const { t, i18n } = useTranslation('french');
  const ru = i18n.language.startsWith('ru');
  const lessons: Record<string, [string, string, string][]> = {
    unite1: [['f-health-community', 'Health: habits and explained tense practice', 'Здоровье: привычки и разбор времён']],
    unite2: [['f-solidarity-profile', 'Solidarity, communities and all ten learner qualities', 'Солидарность, сообщества и все десять качеств ученика']],
    unite3: [['g-tourism', 'Tourism: motivations, impacts and comparisons', 'Туризм: мотивы, последствия и сравнение']],
    unite4: [['f-france-education', 'School in France and a school of the future', 'Школа во Франции и школа будущего'], ['f-school-journeys', 'School journeys, Malala and evidence-based comparison', 'Дорога в школу, Малала и сравнение по свидетельствам']],
  };
  const emergentItems = (t('unitsContent.emergent.items', { returnObjects: true }) as string[]) ?? [];
  const grammarItems = (t('unitsContent.grammar.items', { returnObjects: true }) as string[]) ?? [];

  return (
    <div>
      <TopicHero title={t('unitsPage.title')} intro={t('unitsPage.intro')} icon={<ListChecks size={28} />} />

      <div className="mt-6 flex items-start gap-3 bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-rose-muted)', borderLeftWidth: '4px' }}>
        <AlertCircle size={18} className="text-accent-rose-muted shrink-0 mt-0.5" />
        <p className="text-sm">{t('unitsPage.notice')}</p>
      </div>

      {UNITS.map((u) => {
        const vocab = (t(`unitsContent.${u}.vocab`, { returnObjects: true }) as string[]) ?? [];
        return (
          <div key={u}>
            <SectionHeading>{t(`unitsContent.${u}.title`)}</SectionHeading>
            <div className="mb-4 space-y-2">
              {lessons[u].map(([id, en, translation]) => <p key={id}><Link className="underline" to={`/grade9/${id}`}>{ru ? translation : en} →</Link></p>)}
            </div>
            <ul className="space-y-2">
              {vocab.map((v, i) => (
                <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm" style={{ borderLeftColor: 'var(--color-accent-rose-muted)', borderLeftWidth: '3px' }}>{v}</li>
              ))}
            </ul>
          </div>
        );
      })}

      <SectionHeading>{t('unitsContent.grammar.title')}</SectionHeading>
      <ul className="space-y-2">
        {grammarItems.map((g, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{g}</li>
        ))}
      </ul>

      <SectionHeading>{t('unitsContent.emergent.title')}</SectionHeading>
      <ul className="space-y-2">
        {emergentItems.map((e, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm" style={{ borderLeftColor: 'var(--color-accent-warm)', borderLeftWidth: '3px' }}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
