import { Routes, Route } from 'react-router-dom';
import { BiologyPage } from './pages/BiologyPage';

export function BiologyModule() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-8">
      <Routes>
        <Route index element={<BiologyPage />} />
      </Routes>
    </div>
  );
}
