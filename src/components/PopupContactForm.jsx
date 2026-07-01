import React from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

export default function PopupContactForm({ isOpen, onClose, initialService }) {
  if (!isOpen) return null;

  return (
    <div className="case-study-modal-backdrop" onClick={onClose} style={{ zIndex: 9999 }}>
      <div className="case-study-modal glass-panel" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px', maxHeight: '90vh', overflowY: 'auto' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        <div style={{ padding: '2rem 1.5rem 1rem 1.5rem' }}>
          <h2 className="text-gradient" style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', textAlign: 'center' }}>
            Book Consultation
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Let's design a customized digital growth strategy for your brand.
          </p>
          <ContactForm 
            source="Popup Contact Form" 
            initialService={initialService} 
            onSuccess={() => setTimeout(onClose, 2000)} 
          />
        </div>
      </div>
    </div>
  );
}
