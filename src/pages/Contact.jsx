import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import './Pages.css';

export default function Contact({ setCurrentPage }) {
  const { locale, t } = useLanguage();

  return (
    <div className="page-wrapper fade-in">
      <div className="ambient-glow" style={{ top: '10%', left: '10%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '70%', right: '15%' }}></div>

      <section className="contact-page-section section-padding">
        <div className="container contact-grid">
          {/* Column 1: Info & Details */}
          <div className="contact-info-col">
            <span className="badge">{t('nav.contact')}</span>
            <h1>{t('contact.title')}</h1>
            <p className="contact-subtitle-text">{t('contact.subtitle')}</p>

            <div className="contact-cards-container mt-4">
              <a href={`tel:${t('contact.phone')}`} className="contact-info-card glass-panel glass-panel-interactive">
                <div className="info-card-icon"><Phone size={20} /></div>
                <div>
                  <h3>{locale === 'en' ? 'Call Office' : 'اتصل بنا'}</h3>
                  <p>{t('contact.phone')}</p>
                </div>
              </a>

              <a href={`mailto:${t('contact.email')}`} className="contact-info-card glass-panel glass-panel-interactive">
                <div className="info-card-icon"><Mail size={20} /></div>
                <div>
                  <h3>{locale === 'en' ? 'Email Strategy' : 'راسلنا مباشرة'}</h3>
                  <p>{t('contact.email')}</p>
                </div>
              </a>

              <div className="contact-info-card glass-panel">
                <div className="info-card-icon"><MapPin size={20} /></div>
                <div>
                  <h3>{locale === 'en' ? 'HQ Location' : 'مقر الوكالة الرئيسي'}</h3>
                  <p>{t('contact.address')}</p>
                </div>
              </div>
            </div>

            {/* Stylized Google Map Placeholder (High-End Dark UI) */}
            <div className="map-placeholder-box glass-panel mt-3">
              <div className="map-grid-overlay"></div>
              <div className="map-pin-indicator">
                <div className="ping-effect"></div>
                <div className="pin-dot"></div>
              </div>
              <span className="map-label">{locale === 'en' ? 'Dubai, United Arab Emirates' : 'دبي، الإمارات العربية المتحدة'}</span>
            </div>
          </div>

          {/* Column 2: Lead Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-panel">
              <ContactForm 
                source="Contact Page" 
                onSuccess={() => {
                  setTimeout(() => {
                    if (setCurrentPage) {
                      setCurrentPage('thank-you');
                    }
                  }, 1500);
                }} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
