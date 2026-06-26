import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Stethoscope, 
  Utensils, 
  ShoppingBag, 
  Sparkles, 
  Home, 
  HardHat, 
  Car, 
  Heart, 
  GraduationCap, 
  Building, 
  Hotel, 
  Zap,
  Calendar
} from 'lucide-react';
import './Pages.css';

export default function Industries({ setCurrentPage }) {
  const { locale, t } = useLanguage();

  const industryMeta = [
    { key: 'healthcare', icon: <Stethoscope size={24} /> },
    { key: 'restaurants', icon: <Utensils size={24} /> },
    { key: 'retail', icon: <ShoppingBag size={24} /> },
    { key: 'fashion', icon: <Sparkles size={24} /> },
    { key: 'realestate', icon: <Home size={24} /> },
    { key: 'construction', icon: <HardHat size={24} /> },
    { key: 'automotive', icon: <Car size={24} /> },
    { key: 'beauty', icon: <Heart size={24} /> },
    { key: 'education', icon: <GraduationCap size={24} /> },
    { key: 'corporate', icon: <Building size={24} /> },
    { key: 'hospitality', icon: <Hotel size={24} /> },
    { key: 'startups', icon: <Zap size={24} /> }
  ];

  return (
    <div className="page-wrapper fade-in">
      <div className="ambient-glow" style={{ top: '15%', right: '12%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '65%', left: '8%' }}></div>

      <section className="industries-page-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('industries.badge')}</span>
            <h1 className="section-title">{t('industries.title')}</h1>
            <p className="section-subtitle">{t('industries.subtitle')}</p>
          </div>

          {/* 12 Industries Grid */}
          <div className="industries-grid mt-4">
            {industryMeta.map((ind) => (
              <div key={ind.key} className="industry-card glass-panel glass-panel-interactive">
                <div className="industry-icon-box glass-panel">
                  {ind.icon}
                </div>
                <h3>{t(`industries.list.${ind.key}.name`)}</h3>
                <p>{t(`industries.list.${ind.key}.desc`)}</p>
                <div className="industry-glow-dot"></div>
              </div>
            ))}
          </div>

          {/* Segment CTA */}
          <div className="industry-cta-box mt-5 glass-panel">
            <h2>{locale === 'en' ? 'Need a Sector-Specific Marketing Plan?' : 'هل تحتاج لخطة تسويقية مخصصة لقطاعك؟'}</h2>
            <p>{locale === 'en' ? 'Our strategists will formulate a customized client acquisition campaign tailored to your industry compliance standards.' : 'سيقوم خبراؤنا بإعداد حملة تسويقية مخصصة لجذب العملاء بما يتوافق مع معايير ومتطلبات قطاعك.'}</p>
            <button onClick={() => setCurrentPage('contact')} className="btn btn-primary mt-2">
              <Calendar size={16} />
              <span>{t('cta.primary')}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
