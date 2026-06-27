import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Legal from './pages/Legal';
import Portal from './pages/Portal';
import ThankYou from './pages/ThankYou';

import './App.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [globalLoading, setGlobalLoading] = useState(true);

  // App boot loading screen transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setGlobalLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio />;
      case 'industries':
        return <Industries setCurrentPage={setCurrentPage} />;
      case 'pricing':
        return <Pricing setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <Blog />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'thank-you':
        return <ThankYou setCurrentPage={setCurrentPage} />;
      case 'portal':
        return <Portal />;
      case 'privacy':
        return <Legal documentType="privacy" />;
      case 'terms':
        return <Legal documentType="terms" />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  // 1. RENDER GLOBAL BOOT LOADER
  if (globalLoading) {
    return (
      <div className="portal-loading-screen">
        <div className="pulse-logo-container">
          <img src="/logo.png" alt="Novarae Nexus Logo" className="pulse-logo" />
        </div>
      </div>
    );
  }

  // 2. RENDER MASTER LAYOUT
  const isPortal = currentPage === 'portal';

  return (
    <div className="app-container">
      {/* Premium starfield particle overlay */}
      <div className="starfield"></div>

      {/* Hide standard Header inside Client Portal */}
      {!isPortal && (
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}

      {/* Primary viewport content */}
      <main className={isPortal ? 'portal-main-wrapper-no-pad' : 'main-content'}>
        {renderActivePage()}
      </main>

      {/* Hide standard Footer inside Client Portal */}
      {!isPortal && (
        <Footer setCurrentPage={setCurrentPage} />
      )}

      {/* Floating contact widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
