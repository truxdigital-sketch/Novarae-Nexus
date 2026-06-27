import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, Paintbrush, TrendingUp, Eye, Handshake } from 'lucide-react';
import LeadershipTeam from '../components/LeadershipTeam';
import './Pages.css';

export default function About() {
  const { locale, t } = useLanguage();

  const pillars = [
    { key: 'innovation', icon: <Cpu size={24} /> },
    { key: 'creativity', icon: <Paintbrush size={24} /> },
    { key: 'performance', icon: <TrendingUp size={24} /> },
    { key: 'transparency', icon: <Eye size={24} /> },
    { key: 'partnerships', icon: <Handshake size={24} /> }
  ];



  return (
    <div className="page-wrapper fade-in">
      <div className="ambient-glow" style={{ top: '10%', left: '15%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '60%', right: '10%' }}></div>

      {/* Intro section */}
      <section className="about-intro-section section-padding">
        <div className="container">
          <div className="about-intro-content">
            <span className="badge">{t('about.badge')}</span>
            <h1>{t('about.title')}</h1>
            <p className="large-desc">{t('about.description')}</p>
            <p className="normal-desc">
              {locale === 'en' 
                ? 'Novarae Nexus was established with a singular mission: to eliminate generic marketing templates and deliver luxury, high-performing digital channels. We serve client partners across all emirates, from boutique local outlets to multi-national conglomerates.'
                : 'تأسست نوفاراي نيكسس بمهمة واحدة محددة: القضاء على القوالب التسويقية التقليدية وتوفير قنوات رقمية فاخرة وعالية الأداء. نحن نخدم شركاءنا من العملاء في جميع أنحاء الدولة، بدءاً من المتاجر المحلية المتميزة إلى المجموعات متعددة الجنسيات.'}
            </p>
            
            <div className="about-metrics glass-panel w-100">
              <div className="metric-item">
                <span className="metric-num text-gradient">150+</span>
                <span className="metric-label">{locale === 'en' ? 'Clients Scaled' : 'عميل تم توسيع أعمالهم'}</span>
              </div>
              <div className="metric-item">
                <span className="metric-num text-gradient">4.8x</span>
                <span className="metric-label">{locale === 'en' ? 'Avg Ad ROAS' : 'متوسط عائد الإعلانات'}</span>
              </div>
              <div className="metric-item">
                <span className="metric-num text-gradient">7+</span>
                <span className="metric-label">{locale === 'en' ? 'Emirates Covered' : 'إمارات نغطيها بالكامل'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values-section section-padding bg-surface-wrap">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{locale === 'en' ? 'Our DNA' : 'ثقافتنا وقيمنا'}</span>
            <h2 className="section-title">{locale === 'en' ? 'Core Pillars of Excellence' : 'ركائز التميز الأساسية'}</h2>
          </div>

          <div className="about-pillars-detailed">
            {pillars.map((pillar) => (
              <div key={pillar.key} className="pillar-detail-card glass-panel">
                <div className="pillar-detail-icon">
                  {pillar.icon}
                </div>
                <div>
                  <h3>{t(`about.pillars.${pillar.key}.title`)}</h3>
                  <p>{t(`about.pillars.${pillar.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <LeadershipTeam />
    </div>
  );
}
