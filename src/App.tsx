import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HubPage } from './pages/HubPage';
import { TimetablePage } from './pages/TimetablePage';
import { AboutPage } from './pages/AboutPage';
import { PhysicsModule } from './modules/physics';
import { MathModule } from './modules/math';
import { GeographyModule } from './modules/geography';
import { BiologyModule } from './modules/biology';
import { ChemistryModule } from './modules/chemistry';
import { EnglishModule } from './modules/english';
import { FrenchModule } from './modules/french';
import { ArabicModule } from './modules/arabic';

export default function App() {
  const location = useLocation();
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
          <Routes location={location}>
            <Route path="/" element={<HubPage />} />
            <Route path="/timetable" element={<TimetablePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/physics/*" element={<PhysicsModule />} />
            <Route path="/math/*" element={<MathModule />} />
            <Route path="/geography/*" element={<GeographyModule />} />
            <Route path="/biology/*" element={<BiologyModule />} />
            <Route path="/chemistry/*" element={<ChemistryModule />} />
            <Route path="/english/*" element={<EnglishModule />} />
            <Route path="/french/*" element={<FrenchModule />} />
            <Route path="/arabic/*" element={<ArabicModule />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
