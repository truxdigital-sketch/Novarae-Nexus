import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LeadershipTeam({ badge, title, subtitle }) {
  const { locale } = useLanguage();

  const team = [
    {
      name: locale === 'en' ? 'Hassan Al-Mansoori' : 'حسن المنصوري',
      role: locale === 'en' ? 'Founder & Managing Director' : 'المؤسس والمدير التنفيذي',
      desc: locale === 'en' ? 'Ex-corporate strategist with 12+ years of GCC market experience helping top brands scale.' : 'مستشار استراتيجي سابق للشركات مع خبرة تزيد عن 12 عاماً في السوق الخليجي لمساعدة العلامات الكبرى.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: locale === 'en' ? 'Sarah Jenkins' : 'سارة جينكينز',
      role: locale === 'en' ? 'Head of SEO & Search' : 'مديرة قسم السيو والبحث',
      desc: locale === 'en' ? 'Technical SEO mastermind specializing in GCC search algorithms and local indexing optimization.' : 'خبيرة السيو التقني المتخصصة في خوارزميات محركات البحث المحلية في الخليج العربي.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: locale === 'en' ? 'Rami El-Khoury' : 'رامي الخوري',
      role: locale === 'en' ? 'Creative & Video Director' : 'المدير الإبداعي والفني',
      desc: locale === 'en' ? 'Award-winning cinematographer shaping visual identities for luxury retail brands in Dubai.' : 'مصور سينمائي حائز على جوائز، يشكل الهويات البصرية لعلامات التجزئة الفاخرة في دبي.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
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
                <img src={member.image} alt={member.name} className="team-member-img" />
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
