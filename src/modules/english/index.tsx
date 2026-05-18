import { Routes, Route } from 'react-router-dom';
import { Home as HomeIcon, FileText, Sparkles, PenTool, Search, Pencil } from 'lucide-react';
import { SubjectSidebar, TopicNavItem } from '../../components/layout/SubjectSidebar';
import { EnglishHomePage } from './pages/EnglishHomePage';
import { TextTypesPage } from './pages/TextTypesPage';
import { DevicesPage } from './pages/DevicesPage';
import { GrammarPage } from './pages/GrammarPage';
import { ReadingPage } from './pages/ReadingPage';
import { EssaysPage } from './pages/EssaysPage';

const TOPICS: TopicNavItem[] = [
  { to: '/english', key: 'home', icon: HomeIcon },
  { to: '/english/text-types', key: 'textTypes', icon: FileText },
  { to: '/english/devices', key: 'devices', icon: Sparkles },
  { to: '/english/grammar', key: 'grammar', icon: PenTool },
  { to: '/english/reading', key: 'reading', icon: Search },
  { to: '/english/essays', key: 'essays', icon: Pencil },
];

export function EnglishModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8 flex gap-8">
      <SubjectSidebar subject="english" topics={TOPICS} />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route index element={<EnglishHomePage />} />
          <Route path="text-types" element={<TextTypesPage />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="grammar" element={<GrammarPage />} />
          <Route path="reading" element={<ReadingPage />} />
          <Route path="essays" element={<EssaysPage />} />
        </Routes>
      </main>
    </div>
  );
}
