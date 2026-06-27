import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const { locale } = useLanguage();


  const whatsappUrl = 'https://wa.me/971542713775';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-whatsapp-btn glass-panel ${locale === 'ar' ? 'position-left' : 'position-right'}`}
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-icon-wrapper">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          className="whatsapp-svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.208h.004c5.505 0 9.988-4.478 9.99-9.986 0-2.67-1.037-5.178-2.922-7.062C17.199 3.037 14.697 2 12.012 2zm5.834 14.264c-.246.691-1.424 1.332-1.956 1.411-.479.071-.975.127-3.084-.746-2.554-1.059-4.179-3.664-4.306-3.834-.127-.17-1.029-1.37-1.029-2.613 0-1.243.648-1.854.877-2.103.229-.249.497-.311.663-.311h.473c.121 0 .284-.046.442.34.164.399.559 1.371.608 1.472.049.1.082.217.017.348-.066.131-.1.217-.197.33-.099.113-.208.252-.297.34-.1.1-.205.21-.088.41.117.2.52 1.01 1.114 1.541.765.684 1.408.896 1.61.996.202.1.322.085.442-.055.12-.14.516-.601.656-.807.139-.205.279-.172.47-.1.192.072 1.214.571 1.423.676.208.105.347.157.397.243.05.086.05.502-.196 1.193z" />
        </svg>
      </div>
      <span className="whatsapp-tooltip">
        {locale === 'ar' ? 'تواصل معنا' : 'Chat with Us'}
      </span>
    </a>
  );
}
