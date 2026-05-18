import { Routes, Route } from 'react-router-dom';
import {
  BookOpen,
  Compass,
  Zap,
  Waves,
  Scale,
  ClipboardCheck,
  Link as LinkIcon,
} from 'lucide-react';
import { SubjectSidebar, TopicNavItem } from '../../components/layout/SubjectSidebar';
import { HomePage } from './pages/HomePage';
import { CommandTermsPage } from './pages/CommandTermsPage';
import { ForceMotionPage } from './pages/ForceMotionPage';
import { ForcesEnergyPage } from './pages/ForcesEnergyPage';
import { ElectricityPage } from './pages/ElectricityPage';
import { WavesOpticsPage } from './pages/WavesOpticsPage';
import { CriteriaPage } from './pages/CriteriaPage';
import { ResourcesPage } from './pages/ResourcesPage';

const TOPICS: TopicNavItem[] = [
  { to: '/physics', key: 'home', icon: BookOpen },
  { to: '/physics/command-terms', key: 'commandTerms', icon: BookOpen },
  { to: '/physics/force-motion', key: 'forceMotion', icon: Compass },
  { to: '/physics/forces-energy', key: 'forcesEnergy', icon: Scale },
  { to: '/physics/electricity', key: 'electricity', icon: Zap },
  { to: '/physics/waves-optics', key: 'wavesOptics', icon: Waves },
  { to: '/physics/criteria', key: 'criteria', icon: ClipboardCheck },
  { to: '/physics/resources', key: 'resources', icon: LinkIcon },
];

export function PhysicsModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8 flex gap-8">
      <SubjectSidebar subject="physics" topics={TOPICS} />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="command-terms" element={<CommandTermsPage />} />
          <Route path="force-motion" element={<ForceMotionPage />} />
          <Route path="forces-energy" element={<ForcesEnergyPage />} />
          <Route path="electricity" element={<ElectricityPage />} />
          <Route path="waves-optics" element={<WavesOpticsPage />} />
          <Route path="criteria" element={<CriteriaPage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Routes>
      </main>
    </div>
  );
}
