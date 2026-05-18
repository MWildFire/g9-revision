import { Routes, Route } from 'react-router-dom';
import { Home as HomeIcon, Atom, Link as LinkIcon, FlaskRound, Calculator, Droplet, Flame } from 'lucide-react';
import { SubjectSidebar, TopicNavItem } from '../../components/layout/SubjectSidebar';
import { ChemistryHomePage } from './pages/ChemistryHomePage';
import { AtomsPeriodicPage } from './pages/AtomsPeriodicPage';
import { BondingPage } from './pages/BondingPage';
import { ReactionsPage } from './pages/ReactionsPage';
import { StoichiometryPage } from './pages/StoichiometryPage';
import { AcidsBasesPage } from './pages/AcidsBasesPage';
import { EnergyPage } from './pages/EnergyPage';

const TOPICS: TopicNavItem[] = [
  { to: '/chemistry', key: 'home', icon: HomeIcon },
  { to: '/chemistry/atoms-periodic', key: 'atomsPeriodic', icon: Atom },
  { to: '/chemistry/bonding', key: 'bonding', icon: LinkIcon },
  { to: '/chemistry/reactions', key: 'reactions', icon: FlaskRound },
  { to: '/chemistry/stoichiometry', key: 'stoichiometry', icon: Calculator },
  { to: '/chemistry/acids-bases', key: 'acidsBases', icon: Droplet },
  { to: '/chemistry/energy', key: 'energy', icon: Flame },
];

export function ChemistryModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8 flex gap-8">
      <SubjectSidebar subject="chemistry" topics={TOPICS} />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route index element={<ChemistryHomePage />} />
          <Route path="atoms-periodic" element={<AtomsPeriodicPage />} />
          <Route path="bonding" element={<BondingPage />} />
          <Route path="reactions" element={<ReactionsPage />} />
          <Route path="stoichiometry" element={<StoichiometryPage />} />
          <Route path="acids-bases" element={<AcidsBasesPage />} />
          <Route path="energy" element={<EnergyPage />} />
        </Routes>
      </main>
    </div>
  );
}
