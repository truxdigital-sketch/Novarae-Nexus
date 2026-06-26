import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  ExternalLink, 
  TrendingUp, 
  CheckCircle,
  Clock,
  Briefcase
} from 'lucide-react';
import './Pages.css';

export default function Portfolio() {
  const { locale, t: translate } = useLanguage();

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filters = [
    { id: 'all', label: translate('portfolio.all') },
    { id: 'web', label: translate('portfolio.categories.web') },
    { id: 'branding', label: translate('portfolio.categories.branding') },
    { id: 'social', label: translate('portfolio.categories.social') },
    { id: 'ads', label: translate('portfolio.categories.ads') },
    { id: 'media', label: translate('portfolio.categories.media') }
  ];

  const projects = translate('portfolio.items');

  // Static details for case studies (synced by project index)
  const caseStudiesData = [
    {
      challengeEn: "Al Hamra Realty needed to capture premium international real estate investors but their existing platform was slow, template-based, and lacked interactive filtering for villa communities.",
      challengeAr: "كانت شركة الحمراء العقارية بحاجة إلى جذب مستثمرين عقاريين دوليين، لكن منصتهم السابقة كانت بطيئة، وتعتمد على قوالب جاهزة وتفتقر إلى التصفية التفاعلية للمجمعات السكنية.",
      solutionEn: "We designed a bespoke headless React architecture with WebGL elements, smooth animations, and optimized WhatsApp lead routers, achieving less than 1s page load times.",
      solutionAr: "قمنا بتصميم بنية برمجية مخصصة تعتمد على واجهات React التفاعلية، مع استخدام تأثيرات حركية خفيفة، وتحسين مسارات واتساب المباشرة للعملاء، مما أدى لتحقيق سرعة تحميل أقل من ثانية.",
      resultEn: "420+ premium investor inquiries in 45 days, 3.2s reduction in load speed.",
      resultAr: "أكثر من 420 طلباً من مستثمرين مؤهلين خلال 45 يوماً، وخفض وقت التحميل بمعدل 3.2 ثانية."
    },
    {
      challengeEn: "Mina Restaurant lacked an authentic visual presence. Their social media channels looked uncoordinated, failing to capture their high-end Mediterranean aesthetic.",
      challengeAr: "كان مطعم مينا يفتقر لحضور بصري متكامل. بدت قنوات التواصل الاجتماعي غير متناسقة وفشلت في عكس الجماليات الفخامة للبحر الأبيض المتوسط.",
      solutionEn: "We completed a full corporate rebrand, designing premium packaging, menus, and producing cinematic reels highlighting signature dishes on location.",
      solutionAr: "أنجزنا إعادة بناء كاملة للهوية البصرية، وتصميم عبوات التغليف الفاخرة، وقوائم الطعام، مع إنتاج مقاطع فيديو سينمائية تسلط الضوء على الأطباق المميزة في الموقع.",
      resultEn: "Social engagements up 240%, fully booked table occupancy on weekends.",
      resultAr: "زيادة التفاعل على الشبكات بنسبة 240%، ونسبة إشغال كاملة للطاولات في عطلة نهاية الأسبوع."
    },
    {
      challengeEn: "Elite Wellness Clinic faced high customer acquisition costs (CAC) via traditional display networks, failing to fill aesthetic therapy slots.",
      challengeAr: "واجهت عيادة إيليت الطبية ارتفاعاً كبيراً في تكلفة جذب العميل (CAC) عبر الشبكات الإعلانية التقليدية، وفشلت في ملء حجوزات العلاج التجميلي.",
      solutionEn: "We implemented high-intent Meta Lead Ads with personalized video creatives targeting affluent Dubai and Abu Dhabi neighborhoods.",
      solutionAr: "قمنا بتطبيق حملات إعلانية ذكية عبر ميتا للحصول على عملاء مهتمين بالتجميل، مستهدفين الأحياء السكنية الفاخرة في دبي وأبوظبي.",
      resultEn: "5.2x increase in bookings, CAC dropped by 45%.",
      resultAr: "زيادة الحجوزات بمعدل 5.2 ضعف، وخفض تكلفة جذب العميل بنسبة 45%."
    },
    {
      challengeEn: "Nura Cosmetics launched a new organic lip gloss line but struggled to generate visual assets that met regional beauty standards.",
      challengeAr: "أطلقت شركة نورا خطاً جديداً لملمع الشفاه العضوي ولكنها كافحت لإنتاج أصول مرئية تلبي معايير الجمال والجاذبية في المنطقة.",
      solutionEn: "Our creative team organized high-end studio model shoots and created reels optimized for TikTok and Instagram Shopping.",
      solutionAr: "نظم فريقنا الإبداعي جلسات تصوير احترافية في الاستوديو مع عارضات أزياء، وأنتج مقاطع ريلز مهيأة لمتجر تيك توك وإنستغرام.",
      resultEn: "Over 2 million organic views, 100% catalog checkout sync success.",
      resultAr: "أكثر من 2 مليون مشاهدة مجانية، ومزامنة كتالوج المنتجات بنسبة 100%."
    },
    {
      challengeEn: "Zabeel Jewelry wanted an e-commerce platform that supported flexible payment retainers (BNPL) to match Middle Eastern buyer trends.",
      challengeAr: "أرادت مجوهرات زعبيل منصة تجارة إلكترونية تدعم خيارات الدفع المرنة (تابي وتمارا) للتوافق مع اتجاهات المشترين في الشرق الأوسط.",
      solutionEn: "We created a Shopify Custom design, integrating Tabby & Tamara installments seamlessly and implementing a premium checkout experience.",
      solutionAr: "قمنا بتطوير تصميم مخصص على شوبيفاي، مع دمج تيسيرات تابي وتمارا لتقسيط المبيعات بشكل سلس وتوفير تجربة دفع فاخرة.",
      resultEn: "32% increase in Average Order Value, cart abandonment dropped by 18%.",
      resultAr: "زيادة متوسط قيمة الطلب بنسبة 32%، وانخفاض سلات الشراء المتروكة بنسبة 18%."
    },
    {
      challengeEn: "Hyperion Automotive launched in UAE but had zero brand awareness on social platforms, resulting in slow showroom foot traffic.",
      challengeAr: "انطلقت شركة هايبريون للسيارات في الإمارات ولكنها لم تحظَ بأي وعي بالعلامة التجارية على شبكات التواصل، مما تسبب في ضعف حركة المعرض.",
      solutionEn: "We developed a premium social strategy combining high-octane videography with interactive stories and community targeting.",
      solutionAr: "قمنا بصياغة استراتيجية تفاعل قوية تجمع بين تصوير السيارات الرياضية والقصص التفاعلية واستهداف مجتمعات محبي السيارات.",
      resultEn: "50k+ local followers in 90 days, 350+ showroom visits generated.",
      resultAr: "أكثر من 50 ألف متابع محلي في 90 يوماً، وأكثر من 350 زيارة مؤكدة للمعرض."
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleOpenCaseStudy = (proj, index) => {
    // Map actual project to its case study details
    const caseDetails = caseStudiesData[index] || caseStudiesData[0];
    setSelectedCaseStudy({ ...proj, ...caseDetails });
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
            {filteredProjects.map((proj, idx) => {
              // Find global index in the original projects array to match correct case study data
              const originalIndex = projects.findIndex(p => p.title === proj.title);
              
              return (
                <div 
                  key={idx} 
                  className="portfolio-card glass-panel glass-panel-interactive"
                  onClick={() => handleOpenCaseStudy(proj, originalIndex)}
                >
                  <div className="portfolio-img-box">
                    <img src={proj.image} alt={proj.title} className="portfolio-img" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Lightbox Modal */}
      {selectedCaseStudy && (
        <div className="case-study-modal-backdrop" onClick={handleCloseCaseStudy}>
          <div className="case-study-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseCaseStudy} aria-label="Close modal">
              <X size={20} />
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
                    <p className="text-gradient font-bold">{locale === 'en' ? selectedCaseStudy.resultEn : selectedCaseStudy.resultAr}</p>
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
                  <p>{locale === 'en' ? selectedCaseStudy.challengeEn : selectedCaseStudy.challengeAr}</p>
                </div>
                
                <div className="details-box solution-box glass-panel">
                  <h3>{locale === 'en' ? 'The Solution' : 'الحل المبتكر'}</h3>
                  <p>{locale === 'en' ? selectedCaseStudy.solutionEn : selectedCaseStudy.solutionAr}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
