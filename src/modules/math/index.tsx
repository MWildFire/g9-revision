import { Routes, Route } from 'react-router-dom';
import { Home as HomeIcon, Hash, Variable, GitBranch, Triangle, BarChart3, Layers, ClipboardCheck, Sparkles } from 'lucide-react';
import { SubjectSidebar, TopicNavItem } from '../../components/layout/SubjectSidebar';
import { MathHomePage } from './pages/MathHomePage';
import { MathExtrasPage } from './pages/MathExtrasPage';
import { NumberSystemsPage } from './pages/NumberSystemsPage';
import { FunctionsAlgebraPage } from './pages/FunctionsAlgebraPage';
import { SequencesPage } from './pages/SequencesPage';
import { GeometryTrigPage } from './pages/GeometryTrigPage';
import { StatsProbPage } from './pages/StatsProbPage';
import { EOYPracticePage } from './pages/EOYPracticePage';
import { CriteriaTrainerPage } from './pages/CriteriaTrainerPage';

const TOPICS: TopicNavItem[] = [
  { to: '/math', key: 'home', icon: HomeIcon },
  { to: '/math/number-systems', key: 'numberSystems', icon: Hash },
  { to: '/math/functions-algebra', key: 'functionsAlgebra', icon: Variable },
  { to: '/math/sequences', key: 'sequences', icon: GitBranch },
  { to: '/math/geometry-trig', key: 'geometryTrig', icon: Triangle },
  { to: '/math/stats-prob', key: 'statsProb', icon: BarChart3 },
  { to: '/math/eoy-practice', key: 'eoyPractice', icon: Layers },
  { to: '/math/criteria-trainer', key: 'criteriaTrainer', icon: ClipboardCheck },
  { to: '/math/extras', key: 'extras', icon: Sparkles },
];

export function MathModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8 flex gap-8">
      <SubjectSidebar subject="math" topics={TOPICS} />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route index element={<MathHomePage />} />
          <Route path="number-systems" element={<NumberSystemsPage />} />
          <Route path="functions-algebra" element={<FunctionsAlgebraPage />} />
          <Route path="sequences" element={<SequencesPage />} />
          <Route path="geometry-trig" element={<GeometryTrigPage />} />
          <Route path="stats-prob" element={<StatsProbPage />} />
          <Route path="eoy-practice" element={<EOYPracticePage />} />
          <Route path="criteria-trainer" element={<CriteriaTrainerPage />} />
          <Route path="extras" element={<MathExtrasPage />} />
        </Routes>
      </main>
    </div>
  );
}
