import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowUpRight, 
  Calendar, 
  ArrowRight, 
  Cpu, 
  Paintbrush, 
  TrendingUp, 
  Eye, 
  Handshake, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Share2,
  Target,
  Search,
  LineChart,
  Monitor,
  Camera,
  Video
} from 'lucide-react';
import LeadershipTeam from '../components/LeadershipTeam';
import './Pages.css';

export default function Home({ setCurrentPage }) {
  const { locale, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState(null);

  const pillars = [
    { key: 'innovation', icon: <Cpu className="pillar-icon" /> },
    { key: 'creativity', icon: <Paintbrush className="pillar-icon" /> },
    { key: 'performance', icon: <TrendingUp className="pillar-icon" /> },
    { key: 'transparency', icon: <Eye className="pillar-icon" /> },
    { key: 'partnerships', icon: <Handshake className="pillar-icon" /> }
  ];

  const featuredServices = [
    { id: 'digital-marketing', key: 'digital-marketing', icon: <TrendingUp size={24} /> },
    { id: 'social-media', key: 'social-media', icon: <Share2 size={24} /> },
    { id: 'meta-ads', key: 'meta-ads', icon: <Target size={24} /> },
    { id: 'google-ads', key: 'google-ads', icon: <Search size={24} /> },
    { id: 'seo', key: 'seo', icon: <LineChart size={24} /> },
    { id: 'web-design', key: 'web-design', icon: <Monitor size={24} /> },
    { id: 'event-photography', key: 'event-photography', icon: <Camera size={24} /> },
    { id: 'event-videography', key: 'event-videography', icon: <Video size={24} /> }
  ];


  const processSteps = [0, 1, 2, 3, 4, 5];
  const faqItems = [0, 1, 2, 3, 4];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="page-wrapper fade-in">
      {/* Ambient background glows */}
      <div className="ambient-glow" style={{ top: '10%', right: '10%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '40%', left: '5%' }}></div>
      <div className="ambient-glow" style={{ top: '80%', right: '15%' }}></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge hero-badge">
              <Sparkles size={12} className="spin-slow" />
              <span>{t('hero.badge')}</span>
            </span>
            <h1 className="hero-title">
              {t('hero.title').split(' ').map((word, idx) => {
                const words = t('hero.title').split(' ');
                // Highlight the last words in gradient
                if (idx >= words.length - 2) {
                  return <span key={idx} className="text-gradient"> {word}</span>;
                }
                return <span key={idx}> {word}</span>;
              })}
            </h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <div className="hero-actions">
              <button 
                onClick={() => setCurrentPage('contact')} 
                className="btn btn-primary"
              >
                <Calendar size={16} />
                <span>{t('hero.ctaPrimary')}</span>
              </button>
              <button 
                onClick={() => setCurrentPage('portfolio')} 
                className="btn btn-secondary"
              >
                <span>{t('hero.ctaSecondary')}</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card-mesh glass-panel animate-float">
              <div className="card-glass-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="card-visual-body">
                <div className="visual-chart">
                  <div className="chart-bar bar-1"></div>
                  <div className="chart-bar bar-2"></div>
                  <div className="chart-bar bar-3"></div>
                  <div className="chart-bar bar-4"></div>
                  <div className="chart-bar bar-5"></div>
                </div>
                <div className="visual-stats">
                  <div className="stat-pill glass-panel">
                    <span className="pill-dot"></span>
                    <span>Meta: 4.8x ROAS</span>
                  </div>
                  <div className="stat-pill glass-panel">
                    <span className="pill-dot secondary"></span>
                    <span>SEO: +180%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Leadership Team Section */}
      <LeadershipTeam 
        badge={locale === 'en' ? 'OUR LEADERSHIP' : 'قيادتنا'}
        title={locale === 'en' ? 'Leadership Team' : 'فريق القيادة'}
        subtitle={locale === 'en' 
          ? 'Meet the professionals driving Novarae Nexus with creativity, innovation, and strategic digital excellence across the UAE.'
          : 'تعرف على المهنيين الذين يقودون نوفاراي نيكسس بالإبداع والابتكار والتميز الرقمي الاستراتيجي في جميع أنحاء الإمارات.'}
      />

      {/* About Teaser Section */}
      <section className="about-teaser-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('about.badge')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle">{t('about.description')}</p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar.key} className="pillar-card glass-panel glass-panel-interactive">
                <div className="pillar-icon-wrapper">
                  {pillar.icon}
                </div>
                <h3>{t(`about.pillars.${pillar.key}.title`)}</h3>
                <p>{t(`about.pillars.${pillar.key}.desc`)}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-3">
            <button onClick={() => setCurrentPage('about')} className="btn btn-outline-gold">
              <span>{t('about.readMore')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section-padding bg-surface-wrap">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('services.badge')}</span>
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">{t('services.subtitle')}</p>
          </div>

          <div className="services-grid">
            {featuredServices.map((svc) => (
              <div key={svc.id} className="service-card glass-panel glass-panel-interactive">
                <div className="svc-icon-box" style={{ width: 'fit-content', marginBottom: '0.5rem' }}>
                  {svc.icon}
                </div>
                <h3>{t(`services.items.${svc.key}.title`)}</h3>
                <p>{t(`services.items.${svc.key}.shortDesc`)}</p>
                <div className="svc-features">
                  {t(`services.items.${svc.key}.features`).map((feat, index) => (
                    <span key={index} className="svc-feature-tag">✔ {feat}</span>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="btn-text-link"
                >
                  <span>{t('services.viewDetails')}</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button onClick={() => setCurrentPage('services')} className="btn btn-primary">
              <span>{t('services.viewAll')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="process-section section-padding bg-surface-wrap">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('process.badge')}</span>
            <h2 className="section-title">{t('process.title')}</h2>
            <p className="section-subtitle">{t('process.subtitle')}</p>
          </div>

          <div className="process-timeline">
            {processSteps.map((index) => (
              <div key={index} className="process-step glass-panel">
                <div className="step-number">{t(`process.steps.${index}.num`)}</div>
                <h3>{t(`process.steps.${index}.title`)}</h3>
                <p>{t(`process.steps.${index}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="portfolio-teaser-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('portfolio.badge')}</span>
            <h2 className="section-title">{t('portfolio.title')}</h2>
            <p className="section-subtitle">{t('portfolio.subtitle')}</p>
          </div>

          {/* Quick teaser grid */}
          <div className="portfolio-teaser-grid">
            {t('portfolio.items').slice(0, 3).map((item, index) => (
              <div key={index} className="portfolio-teaser-card glass-panel glass-panel-interactive">
                <div className="portfolio-image-wrapper">
                  <img src={item.image} alt={item.title} className="portfolio-image" />
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-client">{item.client}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button onClick={() => setCurrentPage('portfolio')} className="btn btn-outline-gold">
              <span>{t('hero.ctaSecondary')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('faq.badge')}</span>
            <h2 className="section-title">{t('faq.title')}</h2>
            <p className="section-subtitle">{t('faq.subtitle')}</p>
          </div>

          <div className="faq-accordion-wrapper">
            {faqItems.map((index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className={`faq-item glass-panel ${isOpen ? 'faq-open' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question">
                    <h3>{t(`faq.items.${index}.q`)}</h3>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
                    <p>{t(`faq.items.${index}.a`)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section section-padding">
        <div className="container cta-container glass-panel">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.subtitle')}</p>
          <div className="cta-actions">
            <button onClick={() => setCurrentPage('contact')} className="btn btn-primary">
              <Calendar size={16} />
              <span>{t('cta.primary')}</span>
            </button>
            <button onClick={() => setCurrentPage('contact')} className="btn btn-secondary">
              <span>{t('cta.secondary')}</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
