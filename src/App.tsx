import { loadSubjectTranslations } from './i18n';
import { lazy, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HubPage } from './pages/HubPage';
const TimetablePage = lazy(async () => { const [, m] = await Promise.all([Promise.all(['math','physics','chemistry','biology','geography','english','french','arabic'].map(loadSubjectTranslations)), import('./pages/TimetablePage')]); return { default: m.TimetablePage }; });
import { AboutPage } from './pages/AboutPage';
const PhysicsSeptemberModule = lazy(() => import('./modules/physics-september/PhysicsSeptemberModule').then(m => ({ default: m.PhysicsSeptemberModule })));
const GeographyTectonicsModule = lazy(() => import('./modules/geography-tectonics/GeographyTectonicsModule').then(m => ({ default: m.GeographyTectonicsModule })));
const MathTermOneModule = lazy(() => import('./modules/math-term-one/MathTermOneModule').then(m => ({ default: m.MathTermOneModule })));
const MocksPage = lazy(() => import('./pages/MocksPage').then(m => ({ default: m.MocksPage })));
const MockLessonPage = lazy(() => import('./pages/MockLessonPage').then(m => ({ default: m.MockLessonPage })));

const PhysicsModule = lazy(async () => { const [, m] = await Promise.all([loadSubjectTranslations('physics'), import('./modules/physics')]); return { default: m.PhysicsModule }; });
const MathModule = lazy(async () => { const [, m] = await Promise.all([loadSubjectTranslations('math'), import('./modules/math')]); return { default: m.MathModule }; });
const GeographyModule = lazy(async () => { const [, m] = await Promise.all([loadSubjectTranslations('geography'), import('./modules/geography')]); return { default: m.GeographyModule }; });
const BiologyModule = lazy(async () => { const [, m] = await Promise.all([loadSubjectTranslations('biology'), import('./modules/biology')]); return { default: m.BiologyModule }; });
const ChemistryModule = lazy(async () => { const [, m] = await Promise.all([loadSubjectTranslations('chemistry'), import('./modules/chemistry')]); return { default: m.ChemistryModule }; });
const EnglishModule = lazy(async () => { const [, m] = await Promise.all([loadSubjectTranslations('english'), import('./modules/english')]); return { default: m.EnglishModule }; });
const FrenchModule = lazy(async () => { const [, m] = await Promise.all([loadSubjectTranslations('french'), import('./modules/french')]); return { default: m.FrenchModule }; });
const ArabicModule = lazy(async () => { const [, m] = await Promise.all([loadSubjectTranslations('arabic'), import('./modules/arabic')]); return { default: m.ArabicModule }; });

export default function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation('common');
  const subject = location.pathname.split('/')[1];
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname.split('/')[1] || '_'}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="flex-1"
        >
          {['math','physics','chemistry','biology','geography','english','french','arabic'].includes(subject) && <div className="max-w-7xl w-full mx-auto px-4 md:px-6 pt-5 text-sm text-text-secondary">
            {i18n.language.startsWith('ru') ? 'Материалы Grade 9. Состав октябрьских mocks уточняется. ' : 'Grade 9 materials. October mock scope is awaiting confirmation. '}
            <Link to={`/mocks?subject=${subject}`} className="underline">{t('nav.mocks')} →</Link>
          </div>}
          <Suspense fallback={<p className="p-8" role="status">{t('loading')}</p>}>
          <Routes location={location}>
            <Route path="/" element={<HubPage />} />
            <Route path="/timetable" element={<TimetablePage />} />
            <Route path="/mocks" element={<MocksPage />} />
            <Route path="/mocks/:lessonId" element={<MockLessonPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/physics-september-2026/*" element={<PhysicsSeptemberModule />} />
            <Route path="/geography-tectonic-hazards/*" element={<GeographyTectonicsModule />} />
            <Route path="/math-term-1-2026/*" element={<MathTermOneModule />} />
            <Route path="/physics/*" element={<PhysicsModule />} />
            <Route path="/math/*" element={<MathModule />} />
            <Route path="/geography/*" element={<GeographyModule />} />
            <Route path="/biology/*" element={<BiologyModule />} />
            <Route path="/chemistry/*" element={<ChemistryModule />} />
            <Route path="/english/*" element={<EnglishModule />} />
            <Route path="/french/*" element={<FrenchModule />} />
            <Route path="/arabic/*" element={<ArabicModule />} />
          </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
