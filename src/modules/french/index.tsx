import { Routes, Route } from 'react-router-dom';
import { Home as HomeIcon, BookA, Clock, Type, MessageCircle, ListChecks, FileText, Sparkles } from 'lucide-react';
import { SubjectSidebar, TopicNavItem } from '../../components/layout/SubjectSidebar';
import { FrenchHomePage } from './pages/FrenchHomePage';
import { VocabPage } from './pages/VocabPage';
import { TensesPage } from './pages/TensesPage';
import { GrammarPage } from './pages/GrammarPage';
import { PhrasesPage } from './pages/PhrasesPage';
import { UnitsPage } from './pages/UnitsPage';
import { TextTypesPage } from './pages/TextTypesPage';
import { FrenchExtrasPage } from './pages/FrenchExtrasPage';

const TOPICS: TopicNavItem[] = [
  { to: '/french', key: 'home', icon: HomeIcon },
  { to: '/french/units', key: 'units', icon: ListChecks },
  { to: '/french/vocab', key: 'vocab', icon: BookA },
  { to: '/french/tenses', key: 'tenses', icon: Clock },
  { to: '/french/grammar', key: 'grammar', icon: Type },
  { to: '/french/phrases', key: 'phrases', icon: MessageCircle },
  { to: '/french/text-types', key: 'textTypes', icon: FileText },
  { to: '/french/extras', key: 'extras', icon: Sparkles },
];

export function FrenchModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8 flex gap-8">
      <SubjectSidebar subject="french" topics={TOPICS} />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route index element={<FrenchHomePage />} />
          <Route path="vocab" element={<VocabPage />} />
          <Route path="tenses" element={<TensesPage />} />
          <Route path="grammar" element={<GrammarPage />} />
          <Route path="phrases" element={<PhrasesPage />} />
          <Route path="units" element={<UnitsPage />} />
          <Route path="text-types" element={<TextTypesPage />} />
          <Route path="extras" element={<FrenchExtrasPage />} />
        </Routes>
      </main>
    </div>
  );
}
