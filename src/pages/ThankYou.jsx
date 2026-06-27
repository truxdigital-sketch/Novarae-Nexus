import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import './Pages.css';

export default function ThankYou({ setCurrentPage }) {
  const { locale } = useLanguage();

  return (
    <div className="page-wrapper fade-in" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="ambient-glow" style={{ top: '30%', left: '30%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '60%', right: '30%' }}></div>

      <section className="thank-you-section w-100" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div className="thank-you-card glass-panel" style={{ padding: '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="success-icon-wrapper" style={{ marginBottom: '2rem', animation: 'pulse 2s infinite' }}>
              <CheckCircle size={80} color="var(--primary)" />
            </div>

            <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
              {locale === 'en' ? 'Submission Received!' : 'تم استلام طلبك!'}
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              {locale === 'en' 
                ? 'Thank you! Your enquiry has been submitted successfully. A Novarae Nexus strategist will reach out to you shortly.' 
                : 'نشكرك! تم تقديم استفسارك بنجاح. سيتواصل معك أحد خبراء نوفاراي نيكسس قريباً.'}
            </p>

            <button 
              onClick={() => setCurrentPage('home')} 
              className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <ArrowLeft size={16} />
              <span>{locale === 'en' ? 'Return to Home' : 'العودة للرئيسية'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
