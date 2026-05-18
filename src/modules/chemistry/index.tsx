import { Routes, Route } from 'react-router-dom';
import { FlaskConical, Hourglass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../components/content/TopicHero';

const TOPICS = ['atomsPeriodic', 'bonding', 'reactions', 'stoichiometry', 'acidsBases', 'energy'];
const ESSENTIALS = ['protonsNeutrons', 'ionicVsCovalent', 'moles', 'balancing', 'pH', 'reactionTypes'];

function ChemistryHome() {
  const { t } = useTranslation('chemistry');
  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<FlaskConical size={28} />} />

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

      <SectionHeading>{t('home.essentialsHeading')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {ESSENTIALS.map((id) => (
          <article
            key={id}
            className="bg-bg-secondary border border-border rounded-md p-4"
            style={{ borderLeftColor: 'var(--color-accent-clay)', borderLeftWidth: '3px' }}
          >
            <h3 className="font-serif text-lg font-medium mb-1">{t(`essentials.${id}.title`)}</h3>
            <p className="text-sm text-text-secondary">{t(`essentials.${id}.body`)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ChemistryModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8">
      <Routes>
        <Route index element={<ChemistryHome />} />
      </Routes>
    </div>
  );
}
