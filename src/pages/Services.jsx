import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  TrendingUp, 
  Share2, 
  Target, 
  Search, 
  LineChart, 
  Monitor, 
  ShoppingBag, 
  Sparkles, 
  Palette, 
  Camera, 
  Video, 
  PenTool, 
  Mail, 
  Compass, 
  ArrowLeft,
  CheckCircle,
  PhoneCall,
  Calendar,
  Tv,
  Play,
  Film,
  Award,
  Users
} from 'lucide-react';
import './Pages.css';

export default function Services({ initialServiceId = null, setCurrentPage }) {
  const { locale, t } = useLanguage();
  const [activeServiceId, setActiveServiceId] = useState(initialServiceId);

  // Sync state if initialServiceId changes
  useEffect(() => {
    setActiveServiceId(initialServiceId);
  }, [initialServiceId]);

  const serviceData = [
    { id: 'digital-marketing', icon: <TrendingUp size={24} /> },
    { id: 'social-media', icon: <Share2 size={24} /> },
    { id: 'meta-ads', icon: <Target size={24} /> },
    { id: 'google-ads', icon: <Search size={24} /> },
    { id: 'seo', icon: <LineChart size={24} /> },
    { id: 'web-design', icon: <Monitor size={24} /> },
    { id: 'ecommerce', icon: <ShoppingBag size={24} /> },
    { id: 'branding', icon: <Sparkles size={24} /> },
    { id: 'graphic-design', icon: <Palette size={24} /> },
    { id: 'photography', icon: <Camera size={24} /> },
    { id: 'videography', icon: <Video size={24} /> },
    { id: 'content-creation', icon: <PenTool size={24} /> },
    { id: 'email-marketing', icon: <Mail size={24} /> },
    { id: 'strategy-consulting', icon: <Compass size={24} /> },
    { id: 'event-photography', icon: <Camera size={24} /> },
    { id: 'event-videography', icon: <Video size={24} /> },
    { id: 'interview-videography', icon: <Users size={24} /> },
    { id: 'social-media-reels', icon: <Play size={24} /> },
    { id: 'highlight-videos', icon: <Film size={24} /> },
    { id: 'group-award-photography', icon: <Award size={24} /> }
  ];

  const handleSelectService = (id) => {
    setActiveServiceId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setActiveServiceId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Detailed single service view
  if (activeServiceId) {
    const selectedSvc = serviceData.find(s => s.id === activeServiceId);
    const key = selectedSvc.id;

    return (
      <div className="page-wrapper fade-in">
        <div className="ambient-glow" style={{ top: '10%', right: '15%' }}></div>
        <div className="ambient-glow-secondary" style={{ top: '50%', left: '5%' }}></div>

        <section className="service-detail-section section-padding">
          <div className="container">
            {/* Back Button */}
            <button className="btn-back btn-secondary mb-3" onClick={handleBackToList}>
              <ArrowLeft size={16} />
              <span>{locale === 'en' ? 'Back to Services' : 'العودة للخدمات'}</span>
            </button>

            {/* Service Detail Header */}
            <div className="service-detail-header glass-panel">
              <div className="detail-header-content">
                <span className="badge">{t('services.badge')}</span>
                <h1>{t(`services.items.${key}.title`)}</h1>
                <p className="detail-tagline">{t(`services.items.${key}.shortDesc`)}</p>
                <div className="detail-stat-pill">
                  <span className="stat-label">{locale === 'en' ? 'Performance metric:' : 'مؤشر الأداء:'}</span>
                  <span className="stat-value text-gradient">{t(`services.items.${key}.stat`)}</span>
                </div>
              </div>
              <div className="detail-header-icon glass-panel">
                {selectedSvc.icon}
              </div>
            </div>

            {/* Service Detail Content Grid */}
            <div className="service-detail-grid mt-4">
              {/* Left Column: Description & Features */}
              <div className="detail-info-col">
                <div className="detail-description glass-panel">
                  <h2>{locale === 'en' ? 'Strategic Approach' : 'النهج الاستراتيجي'}</h2>
                  <p>{t(`services.items.${key}.longDesc`)}</p>
                </div>

                <div className="detail-features mt-3">
                  <h2>{locale === 'en' ? 'Key Deliverables' : 'المخرجات الرئيسية'}</h2>
                  <div className="features-checklist-grid">
                    {t(`services.items.${key}.features`).map((feature, idx) => (
                      <div key={idx} className="checklist-item glass-panel">
                        <CheckCircle size={18} color="var(--primary)" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mini Lead Form */}
              <div className="detail-form-col">
                <div className="detail-cta-card glass-panel">
                  <h3>{locale === 'en' ? 'Request Consultation' : 'طلب استشارة الخدمة'}</h3>
                  <p>{locale === 'en' ? 'Schedule a 1-on-1 strategy audit for this service.' : 'احجز جلسة مراجعة استراتيجية مباشرة لهذه الخدمة.'}</p>
                  
                  <form className="service-mini-form" onSubmit={(e) => {
                    e.preventDefault();
                    alert(t('contact.form.success'));
                    e.target.reset();
                  }}>
                    <div className="form-group">
                      <input type="text" placeholder={t('contact.form.name')} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder={t('contact.form.email')} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <input type="tel" placeholder={t('contact.form.phone')} className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-2">
                      <PhoneCall size={16} />
                      <span>{t('cta.primary')}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Full Grid View
  return (
    <div className="page-wrapper fade-in">
      <div className="ambient-glow" style={{ top: '15%', right: '10%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '60%', left: '10%' }}></div>

      <section className="services-hub-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('services.badge')}</span>
            <h1 className="section-title">{t('services.title')}</h1>
            <p className="section-subtitle">{t('services.subtitle')}</p>
          </div>

          <div className="services-hub-grid">
            {serviceData.map((svc) => (
              <div 
                key={svc.id} 
                className="service-hub-card glass-panel glass-panel-interactive"
                onClick={() => handleSelectService(svc.id)}
              >
                <div className="svc-icon-box glass-panel">
                  {svc.icon}
                </div>
                <div className="svc-content-box">
                  <h3>{t(`services.items.${svc.id}.title`)}</h3>
                  <p>{t(`services.items.${svc.id}.shortDesc`)}</p>
                  <span className="svc-metric-text text-gradient">{t(`services.items.${svc.id}.stat`)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation panel */}
          <div className="services-cta-panel mt-5 glass-panel">
            <div className="cta-panel-text">
              <h2>{locale === 'en' ? 'Unsure Which Channel to Prioritize?' : 'غير متأكد أي قناة تسويقية تختار؟'}</h2>
              <p>{locale === 'en' ? 'Let our growth engineers audit your business and design a custom multi-channel funnel.' : 'دع مهندسي النمو لدينا يقومون بتدقيق عملك وتصميم قمع تسويق مخصص متعدد القنوات.'}</p>
            </div>
            <button onClick={() => setCurrentPage('contact')} className="btn btn-primary">
              <Calendar size={16} />
              <span>{t('cta.primary')}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
