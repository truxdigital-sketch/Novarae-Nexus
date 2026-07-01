import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { submitEnquiry } from '../utils/api';
import './Footer.css';

export default function Footer({ setCurrentPage, openContactPopup }) {
  const { locale, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePageClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await submitEnquiry({
          name: 'Newsletter Subscriber',
          email: email,
          phone: '-',
          message: 'Subscribed to Newsletter from Footer',
          source: 'Official Website'
        });
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      } catch (err) {
        console.error('[Footer Newsletter Sync Error]:', err);
      }
    }
  };

  const services = [
    { id: 'digital-marketing', label: t('services.items.digital-marketing.title') },
    { id: 'social-media', label: t('services.items.social-media.title') },
    { id: 'meta-ads', label: t('services.items.meta-ads.title') },
    { id: 'google-ads', label: t('services.items.google-ads.title') },
    { id: 'seo', label: t('services.items.seo.title') },
    { id: 'web-design', label: t('services.items.web-design.title') }
  ];

  const quickLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'packages', label: t('nav.pricing') }
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Col 1: About & Info */}
        <div className="footer-col brand-col">
          <div className="logo footer-logo" onClick={() => handlePageClick('home')}>
            <img src="/logo.png" alt="Novarae Nexus Logo" className="logo-img" />
          </div>
          <p className="footer-desc">
            {t('about.description')}
          </p>
          <div className="contact-details">
            <a href={`tel:${t('contact.phone')}`} className="contact-link">
              <Phone size={14} />
              <span>{t('contact.phone')}</span>
            </a>
            <a href={`mailto:${t('contact.email')}`} className="contact-link">
              <Mail size={14} />
              <span>{t('contact.email')}</span>
            </a>
            <div className="contact-link address-link">
              <MapPin size={14} />
              <span>{t('contact.address')}</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn glass-panel" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn glass-panel" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn glass-panel" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn glass-panel" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Services */}
        <div className="footer-col links-col">
          <h3>{t('nav.services')}</h3>
          <ul className="footer-links">
            {services.map((svc) => (
              <li key={svc.id}>
                {/* Clicking links can navigate to service details inside services page */}
                <button onClick={() => handlePageClick('services')}>{svc.label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Quick Links */}
        <div className="footer-col links-col">
          <h3>{t('nav.about')}</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button onClick={() => handlePageClick(link.id)}>{link.label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div className="footer-col newsletter-col">
          <h3>{locale === 'en' ? 'Newsletter' : 'النشرة البريدية'}</h3>
          <p>{t('footer.newsletter')}</p>
          
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="input-group">
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </div>
          </form>

          {submitted && (
            <p className="newsletter-success">{t('footer.newsletterSuccess')}</p>
          )}

          {/* Payment & Trust Integration Badges */}
          <div className="payment-badges">
            <span className="payment-badge">Tabby</span>
            <span className="payment-badge">Tamara</span>
            <span className="payment-badge">Apple Pay</span>
            <span className="payment-badge">Stripe</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Novarae Nexus. {t('footer.rights')}
          </p>
          <div className="legal-links">
            <button onClick={() => handlePageClick('privacy')}>{t('footer.legal.privacy')}</button>
            <button onClick={() => handlePageClick('terms')}>{t('footer.legal.terms')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
