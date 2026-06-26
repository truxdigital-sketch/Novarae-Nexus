import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, MapPin, X, Upload, Send } from 'lucide-react';
import './Pages.css';

export default function Careers() {
  const { locale, t } = useLanguage();
  const [activeJob, setActiveJob] = useState(null); // Role title for modal
  const [modalForm, setModalForm] = useState({ name: '', email: '', portfolio: '', resume: '' });
  const [submitted, setSubmitted] = useState(false);

  const openings = t('careers.openings');

  const handleApply = (jobTitle) => {
    setActiveJob(jobTitle);
    setSubmitted(false);
  };

  const handleClose = () => {
    setActiveJob(null);
    setModalForm({ name: '', email: '', portfolio: '', resume: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="ambient-glow" style={{ top: '15%', left: '10%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '65%', right: '15%' }}></div>

      <section className="careers-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('careers.badge')}</span>
            <h1 className="section-title">{t('careers.title')}</h1>
            <p className="section-subtitle">{t('careers.subtitle')}</p>
          </div>

          {/* Job listings */}
          <div className="jobs-list mt-4">
            {openings.map((job, index) => (
              <div key={index} className="job-card glass-panel glass-panel-interactive">
                <div className="job-meta-left">
                  <div className="job-icon-box glass-panel"><Briefcase size={20} /></div>
                  <div className="job-details-text">
                    <h3>{job.title}</h3>
                    <div className="job-tags">
                      <span className="job-tag-item">{job.dept}</span>
                      <span className="job-tag-item">{job.type}</span>
                    </div>
                  </div>
                </div>
                <div className="job-meta-right">
                  <div className="job-location-item">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                  <button 
                    onClick={() => handleApply(job.title)}
                    className="btn btn-outline-gold"
                  >
                    <span>{t('careers.apply')}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {activeJob && (
        <div className="modal-backdrop" onClick={handleClose}>
          <div className="careers-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleClose}>
              <X size={24} />
            </button>
            <h2>{t('careers.modal.title')}</h2>
            <p className="modal-job-sub">{locale === 'en' ? 'Position: ' : 'الوظيفة: '}<span className="text-gradient font-bold">{activeJob}</span></p>

            {!submitted ? (
              <form className="careers-application-form mt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">{t('careers.modal.name')}</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Noura Al Kaabi"
                    value={modalForm.name}
                    onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('careers.modal.email')}</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="e.g. noura@domain.com"
                    value={modalForm.email}
                    onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('careers.modal.portfolio')}</label>
                  <input 
                    type="url" 
                    className="form-control" 
                    placeholder="https://behance.net/noura"
                    value={modalForm.portfolio}
                    onChange={(e) => setModalForm({ ...modalForm, portfolio: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('careers.modal.resume')}</label>
                  <input 
                    type="url" 
                    className="form-control" 
                    placeholder="https://drive.google.com/resume.pdf"
                    value={modalForm.resume}
                    onChange={(e) => setModalForm({ ...modalForm, resume: e.target.value })}
                    required 
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-2">
                  <Send size={16} />
                  <span>{t('careers.modal.submit')}</span>
                </button>
              </form>
            ) : (
              <div className="modal-success-state text-center py-4">
                <div className="success-icon-badge animate-float">✔</div>
                <p className="mt-2">{t('careers.modal.success')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
