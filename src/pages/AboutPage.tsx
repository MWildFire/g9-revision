import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation('common');
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-6 py-12">
      <h1 className="font-serif text-3xl font-medium mb-6">{t('nav.about')}</h1>
      <div className="prose prose-stone max-w-none text-text-secondary space-y-4">
        <p>
          G9 Revision — open, ad-free study companion built for Luka's preparation for the
          End-of-Year 2026 exams at NLCS Dubai. All progress is stored locally in your browser.
        </p>
        <p>
          Source content is drawn from the school's revision lists, the IGCSE Standard and Extended
          textbooks (Cambridge), and curated descriptions of the revision sheets shared by teachers.
        </p>
        <p>
          You can change the exam date in the Timetable, switch language any time, and pick up
          where you left off — everything is saved on your device.
        </p>
      </div>
    </main>
  );
}
