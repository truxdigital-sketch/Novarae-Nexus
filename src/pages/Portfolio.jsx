import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  ExternalLink, 
  TrendingUp, 
  CheckCircle,
  Briefcase
} from 'lucide-react';
import './Pages.css';

export default function Portfolio() {
  const { locale, t: translate } = useLanguage();

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const projects = translate('portfolio.items') || [];

  // Generate categories dynamically from projects to ensure extensibility without layout breakage
  const dynamicCategories = Array.from(new Set(projects.map(p => p.category)));
  const filters = [
    { id: 'all', label: translate('portfolio.all') },
    ...dynamicCategories.map(catKey => ({
      id: catKey,
      label: translate(`portfolio.categories.${catKey}`) || catKey
    }))
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleOpenCaseStudy = (proj) => {
    setSelectedCaseStudy(proj);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="ambient-glow" style={{ top: '20%', left: '10%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '70%', right: '10%' }}></div>

      <section className="portfolio-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{translate('portfolio.badge')}</span>
            <h1 className="section-title">{translate('portfolio.title')}</h1>
            <p className="section-subtitle">{translate('portfolio.subtitle')}</p>
          </div>

          {/* Interactive Filters */}
          <div className="filter-bar glass-panel">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-grid mt-4">
            {filteredProjects.map((proj, idx) => (
              <div 
                key={idx} 
                className="portfolio-card glass-panel glass-panel-interactive"
                onClick={() => handleOpenCaseStudy(proj)}
              >
                <div className="portfolio-img-box">
                  <img src={proj.image} alt={proj.title} className="portfolio-img" loading="lazy" decoding="async" />
                  <div className="portfolio-hover-overlay">
                    <span className="btn btn-primary btn-view-case">
                      <span>{locale === 'en' ? 'View Case Study' : 'عرض دراسة الحالة'}</span>
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <span className="portfolio-client-tag">{proj.client}</span>
                  <span className="portfolio-cat-badge">{filters.find(f => f.id === proj.category)?.label}</span>
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Lightbox Modal */}
      {selectedCaseStudy && (
        <div className="case-study-modal-backdrop" onClick={handleCloseCaseStudy}>
          <div className="case-study-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseCaseStudy} aria-label="Close modal">
              <X size={24} />
            </button>
            
            <div className="modal-header-image" style={{ backgroundImage: `url(${selectedCaseStudy.image})` }}>
              <div className="modal-header-overlay">
                <span className="badge modal-client-badge">{selectedCaseStudy.client}</span>
                <h2>{selectedCaseStudy.title}</h2>
              </div>
            </div>

            <div className="modal-body-content">
              {/* Stats Bar */}
              <div className="modal-stats-bar glass-panel">
                <div className="modal-stat-item">
                  <TrendingUp size={20} color="var(--secondary)" />
                  <div>
                    <h4>{locale === 'en' ? 'Key Result' : 'النتيجة الرئيسية'}</h4>
                    <p className="text-gradient font-bold">{selectedCaseStudy.result}</p>
                  </div>
                </div>
                <div className="modal-stat-item">
                  <Briefcase size={20} color="var(--primary)" />
                  <div>
                    <h4>{locale === 'en' ? 'Project Area' : 'نطاق العمل'}</h4>
                    <p>{filters.find(f => f.id === selectedCaseStudy.category)?.label}</p>
                  </div>
                </div>
              </div>

              {/* Challenge vs Solution */}
              <div className="modal-details-grid">
                <div className="details-box challenge-box glass-panel">
                  <h3>{locale === 'en' ? 'The Challenge' : 'التحدي'}</h3>
                  <p>{selectedCaseStudy.challenge}</p>
                </div>
                
                <div className="details-box solution-box glass-panel">
                  <h3>{locale === 'en' ? 'The Solution' : 'الحل المبتكر'}</h3>
                  <p>{selectedCaseStudy.solution}</p>
                </div>
              </div>

              {/* Services Delivered */}
              {selectedCaseStudy.services && selectedCaseStudy.services.length > 0 && (
                <div className="details-box services-delivered-box mt-3 glass-panel">
                  <h3>{locale === 'en' ? 'Services Delivered' : 'الخدمات المقدمة'}</h3>
                  <div className="services-list-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.8rem', marginTop: '0.8rem' }}>
                    {selectedCaseStudy.services.map((svcName, idx) => (
                      <div key={idx} className="services-delivered-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={16} color="var(--primary)" />
                        <span>{svcName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
