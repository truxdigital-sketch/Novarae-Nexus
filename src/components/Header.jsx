import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import './Header.css';

export default function Header({ currentPage, setCurrentPage, openContactPopup }) {
  const { locale, toggleLocale, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'about', label: t('nav.about') },
    { id: 'packages', label: t('nav.pricing') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header glass-panel">
      <div className="container header-container">
        {/* Brand Logo */}
        <div className="logo" onClick={() => handleNavClick('home')}>
          <img src="/logo.png" alt="Novarae Nexus Logo" className="logo-img" />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          {/* Language Switcher */}
          <button 
            className="lang-switcher btn-secondary" 
            onClick={toggleLocale}
            aria-label="Toggle Language"
          >
            <Globe size={16} />
            <span>{locale === 'en' ? 'عربي' : 'English'}</span>
          </button>

          {/* Consultation CTA */}
          <button 
            onClick={() => {
              if (openContactPopup) openContactPopup();
            }} 
            className="btn btn-primary btn-consult"
          >
            <PhoneCall size={14} />
            <span>{t('nav.getStarted')}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer glass-panel">
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="mobile-actions-divider"></div>
            
            <div className="mobile-drawer-actions">
              <button 
                className="lang-switcher btn-secondary mobile-btn" 
                onClick={() => {
                  toggleLocale();
                  setMobileMenuOpen(false);
                }}
              >
                <Globe size={18} />
                <span>{locale === 'en' ? 'اللغة العربية' : 'English Version'}</span>
              </button>
              
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (openContactPopup) openContactPopup();
                }} 
                className="btn btn-primary mobile-btn"
              >
                <PhoneCall size={16} />
                <span>{t('cta.primary')}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
