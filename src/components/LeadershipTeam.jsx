import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LeadershipTeam({ badge, title, subtitle }) {
  const { locale } = useLanguage();

  const team = [
    {
      name: locale === 'en' ? 'Raees Abdullah' : 'رئيس عبد الله',
      role: locale === 'en' ? 'Founder & CEO' : 'المؤسس والرئيس التنفيذي',
      desc: '',
      image: '/raees abdullah.jpeg'
    },
    {
      name: locale === 'en' ? 'Dhamin Mudassir A V' : 'ضامن مدثر أ. ف',
      role: locale === 'en' ? 'Managing Director & Creative Director' : 'العضو المنتدب والمدير الإبداعي',
      desc: locale === 'en'
        ? 'Digital Marketing Professional with 2+ years of GCC experience, specializing in social media marketing, paid advertising, content strategy, and brand growth.'
        : 'محترف في التسويق الرقمي مع خبرة تزيد عن عامين في الخليج العربي، متخصص في التسويق عبر وسائل التواصل الاجتماعي، والإعلانات المدفوعة، واستراتيجية المحتوى، ونمو العلامة التجارية.',
      image: '/dhamin.jpeg'
    }
  ];

  const defaultBadge = locale === 'en' ? 'The Minds' : 'عقول الفريق';
  const defaultTitle = locale === 'en' ? 'Leadership Team' : 'فريق القيادة والشركاء';

  return (
    <section className="team-section section-padding">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="badge">{badge || defaultBadge}</span>
          <h2 className="section-title">{title || defaultTitle}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card glass-panel glass-panel-interactive">
              <div className="team-member-img-box">
                <img src={member.image} alt={member.name} className="team-member-img" loading="lazy" decoding="async" />
              </div>
              <h3>{member.name}</h3>
              <span className="team-member-role text-gradient">{member.role}</span>
              <p>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
