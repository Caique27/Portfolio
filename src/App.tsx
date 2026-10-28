import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ResumeModal } from './components/ResumeModal';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
          
          {/* Header */}
          <Header />

          {/* Main Routing Views */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home onOpenResume={() => setIsResumeOpen(true)} />} />
              <Route path="/project/:slug" element={<ProjectDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />

          {/* Interactive Resume / CV Modal */}
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

