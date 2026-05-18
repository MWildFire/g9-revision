import { Routes, Route } from 'react-router-dom';
import { Home as HomeIcon, Microscope, Heart, TreePine, Dna, Shield, FlaskRound } from 'lucide-react';
import { SubjectSidebar, TopicNavItem } from '../../components/layout/SubjectSidebar';
import { BiologyHomePage } from './pages/BiologyHomePage';
import { CellsPage } from './pages/CellsPage';
import { BodySystemsPage } from './pages/BodySystemsPage';
import { EcologyPage } from './pages/EcologyPage';
import { GeneticsPage } from './pages/GeneticsPage';
import { ImmunePage } from './pages/ImmunePage';
import { ExperimentPage } from './pages/ExperimentPage';

const TOPICS: TopicNavItem[] = [
  { to: '/biology', key: 'home', icon: HomeIcon },
  { to: '/biology/cells', key: 'cells', icon: Microscope },
  { to: '/biology/body-systems', key: 'bodySystems', icon: Heart },
  { to: '/biology/ecology', key: 'ecology', icon: TreePine },
  { to: '/biology/genetics', key: 'genetics', icon: Dna },
  { to: '/biology/immune', key: 'immune', icon: Shield },
  { to: '/biology/experiment', key: 'experiment', icon: FlaskRound },
];

export function BiologyModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8 flex gap-8">
      <SubjectSidebar subject="biology" topics={TOPICS} />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route index element={<BiologyHomePage />} />
          <Route path="cells" element={<CellsPage />} />
          <Route path="body-systems" element={<BodySystemsPage />} />
          <Route path="ecology" element={<EcologyPage />} />
          <Route path="genetics" element={<GeneticsPage />} />
          <Route path="immune" element={<ImmunePage />} />
          <Route path="experiment" element={<ExperimentPage />} />
        </Routes>
      </main>
    </div>
  );
}
