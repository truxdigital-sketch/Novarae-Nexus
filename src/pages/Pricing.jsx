import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, ShieldAlert, Sparkles, HelpCircle, Calendar } from 'lucide-react';
import './Pages.css';

export default function Pricing({ setCurrentPage }) {
  const { locale, t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'project'

  const plansKeys = ['growth', 'scale', 'enterprise'];

  const projectPlans = [
    {
      name: locale === 'en' ? 'Bespoke Corporate Website' : 'موقع مؤسسي مخصص',
      price: 'AED 15,000',
      period: locale === 'en' ? 'One-time' : 'دفعة واحدة',
      desc: locale === 'en' ? 'High-end custom-coded responsive site built for premium conversions.' : 'موقع إلكتروني متكامل مخصص، مبني ومطور للتفاعل والتحويلات الراقية.',
      features: [
        locale === 'en' ? 'Custom UI/UX Wireframing' : 'تصميم واجهات تجربة مستخدم مخصصة',
        locale === 'en' ? 'Fast React/Vite development' : 'تطوير سريع للغاية بالاعتماد على React',
        locale === 'en' ? 'SEO Tags & Metadata setup' : 'إعدادات أرشفة السيو والعناوين الوصفية',
        locale === 'en' ? 'English & Arabic Bilingual setup' : 'تهيئة الموقع باللغتين العربية والإنجليزية',
        locale === 'en' ? 'WhatsApp & Google Map integration' : 'دمج تواصل واتساب وخرائط جوجل',
        locale === 'en' ? '3 Months Technical Support' : 'دعم فني فني شامل لمدة 3 أشهر'
      ]
    },
    {
      name: locale === 'en' ? 'Elite E-commerce Portal' : 'متجر إلكتروني متكامل النخبة',
      price: 'AED 25,000',
      period: locale === 'en' ? 'One-time' : 'دفعة واحدة',
      desc: locale === 'en' ? 'Headless or custom Shopify setup integrated with local GCC payments.' : 'متجر شوبيفاي متطور أو متجر منفصل مدمج ببوابات الدفع المحلية.',
      features: [
        locale === 'en' ? 'Shopify Custom Architecture' : 'بنية مخصصة بالكامل على شوبيفاي',
        locale === 'en' ? 'Tabby & Tamara Instalment Setup' : 'إعدادات تقسيط الدفع عبر تابي وتمارا',
        locale === 'en' ? 'Apple Pay & Stripe Gateways' : 'دمج بوابات الدفع أبل باي وسترايب',
        locale === 'en' ? 'Inventory & ERP sync' : 'مزامنة المخازن والمبيعات مع أنظمة ERP',
        locale === 'en' ? 'Automated cart recovery flows' : 'أتمتة حملات استرجاع السلات المتروكة',
        locale === 'en' ? 'Speed Optimization (A+ Score)' : 'تحسين كامل لسرعة المتجر (نتيجة ممتازة)'
      ]
    }
  ];

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

          {/* Interactive cycle selector */}
          <div className="pricing-toggle-container">
            <button 
              className={`pricing-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              {locale === 'en' ? 'Monthly Retainers' : 'الاشتراكات الشهرية'}
            </button>
            <button 
              className={`pricing-toggle-btn ${billingCycle === 'project' ? 'active' : ''}`}
              onClick={() => setBillingCycle('project')}
            >
              {locale === 'en' ? 'Project Scopes' : 'المشاريع المنفصلة'}
            </button>
          </div>

          {/* Plans Grid */}
          <div className="pricing-grid mt-4">
            {billingCycle === 'monthly' ? (
              plansKeys.map((planKey) => {
                const plan = t(`pricing.plans.${planKey}`);
                const isFeatured = planKey === 'scale';
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
                    <div className="plan-price-wrapper">
                      <span className="plan-price text-gradient">{plan.price}</span>
                      <span className="plan-period">/ {plan.period}</span>
                    </div>
                    <ul className="plan-features">
                      {plan.features.map((feat, idx) => (
                        <li key={idx}>
                          <Check size={14} className="feature-check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => setCurrentPage('contact')} 
                      className={`btn w-100 ${isFeatured ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      <span>{t('cta.primary')}</span>
                    </button>
                  </div>
                );
              })
            ) : (
              projectPlans.map((plan, idx) => (
                <div key={idx} className="pricing-card project-pricing-card glass-panel">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-desc">{plan.desc}</p>
                  <div className="plan-price-wrapper">
                    <span className="plan-price text-gradient">{plan.price}</span>
                    <span className="plan-period">/ {plan.period}</span>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={14} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setCurrentPage('contact')} 
                    className="btn btn-secondary w-100"
                  >
                    <span>{locale === 'en' ? 'Request Proposal' : 'طلب عرض سعر تفصيلي'}</span>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Pricing FAQ notice */}
          <div className="pricing-note mt-5 glass-panel">
            <HelpCircle size={20} color="var(--primary)" />
            <div className="note-text">
              <h3>{locale === 'en' ? 'Need a Custom Managed retainer?' : 'تبحث عن إدارة مخصصة لحجم الإنفاق؟'}</h3>
              <p>{locale === 'en' ? 'We build bespoke pricing roadmaps for large corporate budgets exceeding AED 50,000 / month. Contact us for direct strategic discussions.' : 'نحن نقوم بصياغة ميزانيات مخصصة تماماً للشركات الكبرى التي يتجاوز إنفاقها الإعلاني 50,000 درهم شهرياً. اتصل بنا لمناقشة مباشرة.'}</p>
            </div>
            <button onClick={() => setCurrentPage('contact')} className="btn btn-outline-gold">
              <span>{locale === 'en' ? 'Consult Strategist' : 'استشر خبير النمو'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
