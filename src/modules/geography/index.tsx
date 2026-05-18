import { Routes, Route } from 'react-router-dom';
import { Home as HomeIcon, Waves, Plane, Battery, Cloud } from 'lucide-react';
import { SubjectSidebar, TopicNavItem } from '../../components/layout/SubjectSidebar';
import { GeographyHomePage } from './pages/GeographyHomePage';
import { RiversPage } from './pages/RiversPage';
import { TourismPage } from './pages/TourismPage';
import { ResourceReliancePage } from './pages/ResourceReliancePage';
import { AtmosphericHazardsPage } from './pages/AtmosphericHazardsPage';

const TOPICS: TopicNavItem[] = [
  { to: '/geography', key: 'home', icon: HomeIcon },
  { to: '/geography/rivers', key: 'rivers', icon: Waves },
  { to: '/geography/tourism', key: 'tourism', icon: Plane },
  { to: '/geography/resource-reliance', key: 'resourceReliance', icon: Battery },
  { to: '/geography/atmospheric-hazards', key: 'atmosphericHazards', icon: Cloud },
];

export function GeographyModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8 flex gap-8">
      <SubjectSidebar subject="geography" topics={TOPICS} />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route index element={<GeographyHomePage />} />
          <Route path="rivers" element={<RiversPage />} />
          <Route path="tourism" element={<TourismPage />} />
          <Route path="resource-reliance" element={<ResourceReliancePage />} />
          <Route path="atmospheric-hazards" element={<AtmosphericHazardsPage />} />
        </Routes>
      </main>
    </div>
  );
}
