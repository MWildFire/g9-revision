import { Routes, Route } from 'react-router-dom';
import { BookOpen, Hourglass, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../components/content/TopicHero';

const TOPICS = ['textTypes', 'literaryDevices', 'grammar', 'readingSkills', 'essayPractice'];
const TEXT_TYPES = ['essay', 'letter', 'email', 'speech', 'newspaper', 'online', 'blog', 'guide', 'script'];
const DEVICES = ['metaphor', 'simile', 'anaphora', 'alliteration', 'personification', 'hyperbole', 'rhetoricalQuestion', 'imagery'];

function EnglishHome() {
  const { t } = useTranslation('english');
  const checklist = (t('checklist', { returnObjects: true }) as string[]) ?? [];

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<BookOpen size={28} />} />

      <SectionHeading>{t('home.draftNotice')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4">
        <ul className="space-y-2">
          {TOPICS.map((id) => (
            <li key={id} className="flex items-center gap-2 text-sm">
              <Hourglass size={14} className="text-text-muted" />
              {t(`topics.${id}`)}
            </li>
          ))}
        </ul>
      </div>

      <SectionHeading>{t('home.textTypesHeading')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {TEXT_TYPES.map((id) => (
          <article
            key={id}
            className="bg-bg-secondary border border-border rounded-md p-4"
            style={{ borderLeftColor: 'var(--color-accent-sand)', borderLeftWidth: '3px' }}
          >
            <h3 className="font-serif text-lg font-medium mb-1">{t(`textTypes.${id}.name`)}</h3>
            <p className="text-sm text-text-secondary">{t(`textTypes.${id}.description`)}</p>
          </article>
        ))}
      </div>

      <SectionHeading>{t('home.devicesHeading')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {DEVICES.map((id) => (
          <article
            key={id}
            className="bg-bg-secondary border border-border rounded-md p-4"
          >
            <h3 className="font-serif text-lg font-medium mb-1">{t(`devices.${id}.name`)}</h3>
            <p className="text-sm text-text-secondary mb-2">{t(`devices.${id}.definition`)}</p>
            <p className="text-sm italic text-text-muted">"{t(`devices.${id}.example`)}"</p>
          </article>
        ))}
      </div>

      <SectionHeading>{t('home.checklistHeading')}</SectionHeading>
      <ul className="space-y-2">
        {checklist.map((item, i) => (
          <li key={i} className="flex items-start gap-2 bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
            <Check size={14} className="mt-0.5 text-accent-sage shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EnglishModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8">
      <Routes>
        <Route index element={<EnglishHome />} />
      </Routes>
    </div>
  );
}
