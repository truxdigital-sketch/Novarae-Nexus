import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import './Pages.css';

export default function Pricing({ setCurrentPage, openContactPopup }) {
  const { locale, t } = useLanguage();

  const plansKeys = ['basic', 'growth', 'elite'];

  const handleWhatsAppRedirect = (packageName) => {
    const message = `📦 *Package Selected:* ${packageName}\n\nHello Novarae Nexus,\n\nI am interested in your *${packageName}*.\n\nCan I get more details about this package, including pricing, features, and the next steps?\n\nThank you.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/971542713775?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="ambient-glow" style={{ top: '20%', left: '8%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '65%', right: '12%' }}></div>

      <section className="pricing-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('pricing.badge')}</span>
            <h1 className="section-title">{t('pricing.title')}</h1>
            <p className="section-subtitle">{t('pricing.subtitle')}</p>
          </div>

          {/* Plans Grid */}
          <div className="pricing-grid mt-5">
            {plansKeys.map((planKey) => {
              const plan = t(`pricing.plans.${planKey}`);
              const isFeatured = planKey === 'growth';
              return (
                <div 
                  key={planKey} 
                  className={`pricing-card glass-panel ${isFeatured ? 'featured-pricing-card' : ''}`}
                >
                  {isFeatured && (
                    <div className="featured-ribbon">
                      <Sparkles size={12} />
                      <span>{locale === 'en' ? 'Most Popular' : 'الأكثر طلباً'}</span>
                    </div>
                  )}
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-desc">{plan.desc}</p>
                  <ul className="plan-features">
                    {plan.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={14} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handleWhatsAppRedirect(plan.name)} 
                    className={`btn w-100 ${isFeatured ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    <span>{plan.cta}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Custom Solutions section */}
          <div className="pricing-note mt-5 glass-panel">
            <HelpCircle size={20} color="var(--primary)" />
            <div className="note-text">
              <h3>{t('pricing.custom.title')}</h3>
              <p>{t('pricing.custom.desc')}</p>
            </div>
            <button 
              onClick={() => handleWhatsAppRedirect(t('pricing.custom.title'))} 
              className="btn btn-outline-gold"
            >
              <span>{t('pricing.custom.cta')}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
