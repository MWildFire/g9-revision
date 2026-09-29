import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';
import { SUBJECTS } from '../config/subjects';
import { ROUTES } from '../config/routes';
import { HubSubjectCard } from '../components/HubSubjectCard';

export function HubPage() {
  const { t, i18n } = useTranslation('hub');

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <section className="mb-16 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-medium mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col items-center gap-4">
          <Link to="/physics-september-2026" className="rounded-md bg-[#184f46] text-white hover:text-white px-6 py-3 font-medium">{i18n.language.startsWith('ru') ? 'Физика · сентябрь 2026 →' : 'Physics · September 2026 →'}</Link>
          <Link to="/mocks" className="rounded-md bg-text-primary text-bg-primary px-6 py-3 font-medium">{t('common:nav.mocks')} →</Link>
          <Link
            to={ROUTES.TIMETABLE}
            className="inline-flex items-center gap-2 px-5 py-2 mt-2 bg-bg-secondary border border-border rounded-md hover:shadow-soft transition-shadow text-sm font-medium"
          >
            <Calendar size={14} />
            {t('hero.openTimetable')}
          </Link>
        </div>
      </section>

      <section className="mb-12 rounded-lg border border-border bg-bg-secondary p-6 md:p-8">
        <p className="text-sm uppercase tracking-wider text-text-secondary mb-2">Grade 10 · Criterion A</p>
        <h2 className="text-2xl mb-3">{i18n.language.startsWith('ru') ? 'Атомная и ядерная физика' : 'Atomic and nuclear physics'}</h2>
        <p className="mb-4 text-text-secondary">{i18n.language.startsWith('ru') ? '12 тем по списку контрольной: теория, 24 примера, 48 задач, интерактивные модели и два тренировочных варианта.' : '12 assessment topics: theory, 24 examples, 48 questions, interactive models and two practice papers.'}</p>
        <Link to="/physics-september-2026" className="underline font-medium">{i18n.language.startsWith('ru') ? 'Открыть подготовку →' : 'Open preparation pack →'}</Link>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-medium mb-6">{t('subjectsHeading')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SUBJECTS.map((s) => (
            <HubSubjectCard key={s.id} subject={s} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="bg-bg-secondary border border-border rounded-lg p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-medium mb-1">{t('timetablePreview.title')}</h3>
            <p className="text-sm text-text-secondary">{t('timetablePreview.description')}</p>
          </div>
          <Link
            to={ROUTES.TIMETABLE}
            className="text-sm font-medium text-accent-warm hover:underline whitespace-nowrap"
          >
            {t('timetablePreview.cta')}
          </Link>
        </div>
      </section>
    </main>
  );
}
