import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CasesPage } from './pages/CasesPage';
import { CaseDetailPage } from './pages/CaseDetailPage';
import { StatesPage } from './pages/StatesPage';
import { StateDetailPage } from './pages/StateDetailPage';
import { CourtCasesPage } from './pages/CourtCasesPage';
import { RescuedPage } from './pages/RescuedPage';
import { UnsolvedPage } from './pages/UnsolvedPage';
import { CauseListsPage } from './pages/CauseListsPage';
import { AboutPage } from './pages/AboutPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FCFCFA] text-stone-900 selection:bg-amber-900 selection:text-white">
        <Header />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CasesPage />} />
            <Route path="/catalog/:slug" element={<CaseDetailPage />} />
            {/* Backward-compatible redirect routes */}
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/cases/:slug" element={<CaseDetailPage />} />
            <Route path="/divisions" element={<StatesPage />} />
            <Route path="/divisions/:state" element={<StateDetailPage />} />
            <Route path="/states" element={<StatesPage />} />
            <Route path="/states/:state" element={<StateDetailPage />} />
            <Route path="/judgments" element={<CourtCasesPage />} />
            <Route path="/court-cases" element={<CourtCasesPage />} />
            <Route path="/state-laws" element={<RescuedPage />} />
            <Route path="/rescued" element={<RescuedPage />} />
            <Route path="/practice-directions" element={<UnsolvedPage />} />
            <Route path="/unsolved" element={<UnsolvedPage />} />
            <Route path="/cause-lists" element={<CauseListsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
