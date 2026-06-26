import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Send, HelpCircle } from 'lucide-react';
import './Pages.css';

export default function Contact() {
  const { locale, t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const servicesList = [
    { id: 'digital-marketing', name: t('services.items.digital-marketing.title') },
    { id: 'social-media', name: t('services.items.social-media.title') },
    { id: 'meta-ads', name: t('services.items.meta-ads.title') },
    { id: 'google-ads', name: t('services.items.google-ads.title') },
    { id: 'seo', name: t('services.items.seo.title') },
    { id: 'web-design', name: t('services.items.web-design.title') },
    { id: 'ecommerce', name: t('services.items.ecommerce.title') },
    { id: 'branding', name: t('services.items.branding.title') },
    { id: 'other', name: locale === 'en' ? 'Other Inquiry' : 'استفسارات أخرى' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

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
              <span className="map-label">Marina Plaza, Dubai Marina</span>
            </div>
          </div>

          {/* Column 2: Lead Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-panel">
              <form className="lead-contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Salem Al Ameri"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="e.g. salem@company.ae"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="e.g. +971 50 000 0000"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('contact.form.service')}</label>
                  <select
                    className="form-control"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    required
                  >
                    <option value="" disabled>{t('contact.form.service')}</option>
                    {servicesList.map((svc) => (
                      <option key={svc.id} value={svc.id} style={{ backgroundColor: 'var(--bg-surface)' }}>{svc.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">{t('contact.form.message')}</label>
                  <textarea
                    className="form-control"
                    placeholder={locale === 'en' ? 'Describe your growth objectives...' : 'صف أهداف نمو نشاطك التجاري...'}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  disabled={status === 'sending'}
                >
                  <Send size={16} />
                  <span>{status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}</span>
                </button>
              </form>

              {status === 'success' && (
                <div className="form-success-alert glass-panel mt-3">
                  <p>{t('contact.form.success')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
