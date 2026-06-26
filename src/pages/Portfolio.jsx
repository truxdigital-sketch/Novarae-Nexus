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
    { id: 'event-photo', label: translate('portfolio.categories.event-photo') },
    { id: 'event-video', label: translate('portfolio.categories.event-video') },
    { id: 'interview', label: translate('portfolio.categories.interview') },
    { id: 'reels', label: translate('portfolio.categories.reels') },
    { id: 'highlights', label: translate('portfolio.categories.highlights') },
    { id: 'group-photo', label: translate('portfolio.categories.group-photo') },
    { id: 'awards', label: translate('portfolio.categories.awards') },
    { id: 'corporate-events', label: translate('portfolio.categories.corporate-events') },
    { id: 'product-photo', label: translate('portfolio.categories.product-photo') },
    { id: 'brand-content', label: translate('portfolio.categories.brand-content') }
  ];

  const projects = translate('portfolio.items');

  // Static details for case studies (synced by project index)
  const caseStudiesData = [
    {
      challengeEn: "DTEC needed comprehensive, high-quality images of their annual tech summit delivered within hours for press releases.",
      challengeAr: "احتاجت ديتك إلى تغطية فوتوغرافية شاملة وعالية الجودة لقمة التكنولوجيا السنوية لتسليمها لوسائل الإعلام خلال ساعات.",
      solutionEn: "We deployed 3 professional photographers and a real-time editing station, uploading color-corrected photos to a live shared gallery.",
      solutionAr: "قمنا بنشر 3 مصورين محترفين مع محطة تحرير فورية في الموقع، مع رفع الصور المصححة إلى معرض مشاركة رقمي مباشر.",
      resultEn: "1,200+ retouched photos delivered, featured in 15+ publications.",
      resultAr: "أكثر من 1200 صورة معدلة تم تسليمها، ونشرت في 15+ وسيلة إعلامية."
    },
    {
      challengeEn: "Gulf Craft launched a new superyacht and required a cinematic masterpiece showcasing the engineering and luxury design.",
      challengeAr: "أطلقت شركة جلف كرافت يختاً سوبر جديداً وتطلبت عملاً سينمائياً يبرز تفاصيل الهندسة والجماليات الفاخرة لليخت.",
      solutionEn: "Our video crew shot over 2 days using 4K cinema cameras, aerial drones, and stabilized gimbal rigs during sunset cruises.",
      solutionAr: "قام فريق تصوير الفيديو بالعمل على مدار يومين باستخدام كاميرات سينمائية 4K وطائرات درون وكاميرات مثبتة أثناء جولات الغروب.",
      resultEn: "3 minute brand film delivering 100k+ views, 5 VIP leads.",
      resultAr: "فيلم ترويجي مدته 3 دقائق حقق 100ألف+ مشاهدة و5 عملاء محتملين كبار."
    },
    {
      challengeEn: "A UAE wealth management firm struggled to convert premium prospects online due to a lack of verified trust assets.",
      challengeAr: "واجهت شركة إدارة ثروات إماراتية صعوبة في تحويل العملاء الأثرياء عبر الإنترنت بسبب الافتقار للأصول الموثوقة والشهادات المعتمدة.",
      solutionEn: "We produced a series of 3 high-end executive testimonial videos featuring top-tier clients sharing their growth stories.",
      solutionAr: "أنتجنا سلسلة من 3 فيديوهات عالية الجودة لآراء العملاء التنفيذيين تضم عملاء مرموقين يتحدثون عن تجاربهم.",
      resultEn: "Inbound client acquisition increased by 42% in Q4.",
      resultAr: "ارتفع معدل استقطاب العملاء الجدد بنسبة 42% في الربع الرابع."
    },
    {
      challengeEn: "Nura Cosmetics launched a new organic lip gloss line but struggled to generate visual assets that met regional beauty standards.",
      challengeAr: "أطلقت شركة نورا خطاً جديداً لملمع الشفاه العضوي ولكنها كافحت لإنتاج أصول مرئية تلبي معايير الجمال والجاذبية في المنطقة.",
      solutionEn: "Our creative team organized high-end studio model shoots and created reels optimized for TikTok and Instagram Shopping.",
      solutionAr: "نظم فريقنا الإبداعي جلسات تصوير احترافية في الاستوديو مع عارضات أزياء، وأنتج مقاطع ريلز مهيأة لمتجر تيك توك وإنستغرام.",
      resultEn: "Over 2 million organic views, 100% checkout sync success.",
      resultAr: "أكثر من 2 مليون مشاهدة مجانية، ومزامنة كتالوج المنتجات بنسبة 100%."
    },
    {
      challengeEn: "Yas Marina Circuit needed a high-octane 60-second highlight reel summarizing the race weekend to drive ticket sales for next year.",
      challengeAr: "احتاجت حلبة مرسى ياس إلى فيديو ملخص مثير مدته 60 ثانية يلخص فعاليات عطلة السباق لزيادة مبيعات التذاكر للعام المقبل.",
      solutionEn: "We compiled high-speed race footage, fan activations, concert clips, and VIP lounge moments into a fast-paced edit.",
      solutionAr: "قمنا بجمع لقطات السباق عالية السرعة، وتفاعل الجماهير، وحفلات الغناء، وكبار الشخصيات في فيديو سريع الإيقاع.",
      resultEn: "1.5M+ impressions, record-breaking early bird sales.",
      resultAr: "أكثر من 1.5 مليون ظهور، ومبيعات قياسية للتذاكر المبكرة."
    },
    {
      challengeEn: "Emaar needed formal board portraits and department group photos with unified branding and lighting at their corporate HQ.",
      challengeAr: "احتاجت شركة إعمار إلى بورتريهات رسمية لأعضاء مجلس الإدارة وصور جماعية للأقسام بإضاءة وهوية بصرية موحدة في مقرها.",
      solutionEn: "We set up a mobile studio with softbox lighting grids in their main boardroom, capturing 12 distinct team lineups.",
      solutionAr: "أعددنا استوديو متنقلاً مع شبكات إضاءة في غرفة الاجتماعات الرئيسية، وصورنا 12 مجموعة مختلفة من فرق العمل.",
      resultEn: "Premium board portraits published in the annual report.",
      resultAr: "تم نشر صور مجلس الإدارة الفاخرة في التقرير السنوي بنجاح."
    },
    {
      challengeEn: "Covering a prestigious awards gala with VIP government officials, requiring strict security clearance and zero stage disruptions.",
      challengeAr: "تغطية حفل توزيع جوائز مرموق بحضور شخصيات حكومية رفيعة، مما تطلب تصاريح أمنية صارمة وعدم إحداث أي فوضى على المسرح.",
      solutionEn: "Our senior event photographers used silent shutter lenses and wireless lighting triggers to capture key handshake moments.",
      solutionAr: "استخدم مصورو الفعاليات المحترفون عدسات ذات غالق صامت وأجهزة تحكم في الإضاءة لالتقاط لحظات المصافحة الرئيسية.",
      resultEn: "Zero disruption, 100+ winner photos delivered live to press.",
      resultAr: "تغطية دون أي إزعاج، وتم تسليم أكثر من 100 صورة للفائزين مباشرة للصحافة."
    },
    {
      challengeEn: "ADNOC required full-service media coverage (photo, video, and recap reels) for an exclusive, closed-door strategy summit.",
      challengeAr: "طلبت مجموعة أدنوك تغطية إعلامية متكاملة (تصوير فوتوغرافي، فيديو، وفيديو ملخص) لمنتدى استراتيجي مغلق وحصري.",
      solutionEn: "We deployed a specialized 4-person crew with NDAs, shooting executive sessions, team-building outdoor activities, and panel talks.",
      solutionAr: "أرسلنا فريقاً متخصصاً من 4 أشخاص وقعوا على اتفاقيات سرية، لتصوير الجلسات والأنشطة وحلقات النقاش.",
      resultEn: "Delivered 400 premium photos and a 3-minute summary video.",
      resultAr: "تسليم 400 صورة مميزة وفيديو ملخص مدته 3 دقائق للاستخدام الداخلي."
    },
    {
      challengeEn: "Oud Royale wanted high-end product photos showing the gold details of their perfume bottles with a dark luxury look.",
      challengeAr: "أرادت عود رويال صور منتجات فاخرة تبرز تفاصيل الذهب لزجاجات العطور الخاصة بها بطابع فخم ومظلم.",
      solutionEn: "We used precision macro lighting, gold leaf reflections, and smoke effects in our studio to create high-resolution product stills.",
      solutionAr: "استخدمنا إضاءة ماكرو دقيقة وانعكاسات ورق الذهب وتأثيرات الدخان في الاستوديو لإنشاء صور منتجات عالية الدقة.",
      resultEn: "12 hero visuals used in Dubai Mall print advertisements.",
      resultAr: "استخدام 12 صورة بطلة في إعلانات مطبوعة في دبي مول."
    },
    {
      challengeEn: "A newly built luxury tower wanted to create a lifestyle campaign to attract wealthy tenants before official opening.",
      challengeAr: "أراد برج سكني فاخر جديد إنشاء حملة تسويقية لنمط الحياة لجذب مستأجرين أثرياء قبل الافتتاح الرسمي للبرج.",
      solutionEn: "We created a comprehensive campaign theme combining vertical video walk-throughs, lifestyle flat-lays, and resident persona reels.",
      solutionAr: "صممنا طابع حملة متكامل يجمع بين جولات الفيديو الرأسية وتصوير مساحات المعيشة وريلز تحاكي المقيمين.",
      resultEn: "95% occupancy achieved within 3 months of campaign.",
      resultAr: "تحقيق نسبة إشغال 95% خلال 3 أشهر من إطلاق الحملة."
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
