import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { submitEnquiry } from '../utils/api';

export default function ContactForm({ source = 'Official Website', onSuccess, initialService = '' }) {
  const { locale, t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    company: '',
    businessType: '',
    budget: '',
    contactMethod: '',
    service: initialService,
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  const servicesList = [
    { id: 'digital-marketing', name: t('services.items.digital-marketing.title') },
    { id: 'social-media', name: t('services.items.social-media.title') },
    { id: 'meta-ads', name: t('services.items.meta-ads.title') },
    { id: 'google-ads', name: t('services.items.google-ads.title') },
    { id: 'seo', name: t('services.items.seo.title') },
    { id: 'web-design', name: t('services.items.web-design.title') },
    { id: 'ecommerce', name: t('services.items.ecommerce.title') },
    { id: 'branding', name: t('services.items.branding.title') },
    { id: 'event-photography', name: t('services.items.event-photography.title') },
    { id: 'event-videography', name: t('services.items.event-videography.title') },
    { id: 'interview-videography', name: t('services.items.interview-videography.title') },
    { id: 'social-media-reels', name: t('services.items.social-media-reels.title') },
    { id: 'highlight-videos', name: t('services.items.highlight-videos.title') },
    { id: 'group-award-photography', name: t('services.items.group-award-photography.title') },
    { id: 'other', name: locale === 'en' ? 'Other Inquiry' : 'استفسارات أخرى' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setApiErrorMessage('');

    try {
      await submitEnquiry({
        ...formState,
        source: source
      });

      setStatus('success');
      setFormState({
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        company: '',
        businessType: '',
        budget: '',
        contactMethod: '',
        service: '',
        message: ''
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error('[CRM Submission Failure Details]:', err);
      setApiErrorMessage(err.message || 'Submission failed. Please verify your entries.');
      setStatus('error');
    }
  };

  return (
    <div className="lead-contact-form-wrapper">
      <form className="lead-contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
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
            <label className="form-label">{t('contact.form.company')}</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Al Ameri Group"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
            />
          </div>
        </div>

        <div className="form-row">
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
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">{t('contact.form.whatsapp')}</label>
            <input
              type="tel"
              className="form-control"
              placeholder="e.g. +971 50 000 0000"
              value={formState.whatsapp}
              onChange={(e) => setFormState({ ...formState, whatsapp: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t('contact.form.contactMethod')}</label>
            <select
              className="form-control"
              value={formState.contactMethod}
              onChange={(e) => setFormState({ ...formState, contactMethod: e.target.value })}
              required
            >
              <option value="" disabled>{locale === 'en' ? 'Select Contact Method' : 'اختر طريقة التواصل'}</option>
              <option value="email" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'Email' : 'البريد الإلكتروني'}</option>
              <option value="whatsapp" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'WhatsApp' : 'الواتساب'}</option>
              <option value="phone" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'Phone Call' : 'مكالمة هاتفية'}</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">{t('contact.form.businessType')}</label>
            <select
              className="form-control"
              value={formState.businessType}
              onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
              required
            >
              <option value="" disabled>{locale === 'en' ? 'Select Business Type' : 'اختر نوع العمل'}</option>
              <option value="ecommerce" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'E-commerce & Retail' : 'التجارة الإلكترونية والتجزئة'}</option>
              <option value="realestate" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'Real Estate & Investment' : 'العقارات والاستثمار'}</option>
              <option value="hospitality" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'Hospitality & F&B' : 'الضيافة والمطاعم'}</option>
              <option value="healthcare" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'Healthcare & Medical' : 'الرعاية الصحية والطبية'}</option>
              <option value="education" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'Education & Academy' : 'التعليم والأكاديميات'}</option>
              <option value="tech" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'Tech & Startup' : 'التقنية والشركات الناشئة'}</option>
              <option value="other" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'Other Industry' : 'قطاعات أخرى'}</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">{t('contact.form.budget')}</label>
            <select
              className="form-control"
              value={formState.budget}
              onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
              required
            >
              <option value="" disabled>{locale === 'en' ? 'Select Monthly Budget' : 'اختر الميزانية الشهرية'}</option>
              <option value="under-5k" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'Under AED 5,000' : 'أقل من 5,000 درهم'}</option>
              <option value="5k-10k" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'AED 5,000 - 10,000' : '5,000 - 10,000 درهم'}</option>
              <option value="10k-20k" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'AED 10,000 - 20,000' : '10,000 - 20,000 درهم'}</option>
              <option value="above-20k" style={{ backgroundColor: 'var(--bg-surface)' }}>{locale === 'en' ? 'AED 20,000+' : 'أكثر من 20,000 درهم'}</option>
            </select>
          </div>
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
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
        >
          {status === 'sending' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>{t('contact.form.sending')}</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>{t('contact.form.submit')}</span>
            </>
          )}
        </button>
      </form>

      {status === 'success' && (
        <div className="form-success-alert glass-panel mt-3" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderColor: 'var(--primary)', color: 'var(--text-primary)' }}>
          <CheckCircle size={20} color="var(--primary)" />
          <p style={{ margin: 0, whiteSpace: 'pre-line' }}>
            {locale === 'en' ? 'Thank you! Your enquiry has been submitted successfully.' : 'نشكرك! تم تقديم استفسارك بنجاح.'}
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="form-error-alert glass-panel mt-3" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderColor: '#ef4444', color: '#fca5a5' }}>
          <AlertCircle size={20} color="#ef4444" />
          <p style={{ margin: 0 }}>{apiErrorMessage}</p>
        </div>
      )}
    </div>
  );
}
