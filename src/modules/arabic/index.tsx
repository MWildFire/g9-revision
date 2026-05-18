import { Routes, Route } from 'react-router-dom';
import { Home as HomeIcon, Type, BookA, ScrollText, MessageCircle, Sparkles } from 'lucide-react';
import { SubjectSidebar, TopicNavItem } from '../../components/layout/SubjectSidebar';
import { ArabicHomePage } from './pages/ArabicHomePage';
import { AlphabetPage } from './pages/AlphabetPage';
import { VocabPage } from './pages/VocabPage';
import { GrammarPage } from './pages/GrammarPage';
import { PhrasesPage } from './pages/PhrasesPage';
import { ArabicExtrasPage } from './pages/ArabicExtrasPage';

const TOPICS: TopicNavItem[] = [
  { to: '/arabic', key: 'home', icon: HomeIcon },
  { to: '/arabic/alphabet', key: 'alphabet', icon: Type },
  { to: '/arabic/vocab', key: 'vocab', icon: BookA },
  { to: '/arabic/grammar', key: 'grammar', icon: ScrollText },
  { to: '/arabic/phrases', key: 'phrases', icon: MessageCircle },
  { to: '/arabic/extras', key: 'extras', icon: Sparkles },
];

export function ArabicModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8 flex gap-8">
      <SubjectSidebar subject="arabic" topics={TOPICS} />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route index element={<ArabicHomePage />} />
          <Route path="alphabet" element={<AlphabetPage />} />
          <Route path="vocab" element={<VocabPage />} />
          <Route path="grammar" element={<GrammarPage />} />
          <Route path="phrases" element={<PhrasesPage />} />
          <Route path="extras" element={<ArabicExtrasPage />} />
        </Routes>
      </main>
    </div>
  );
}
