import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, User, Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import './Pages.css';

export default function Blog() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPostId, setSelectedPostId] = useState(null);

  const posts = t('blog.posts');

  const categories = [
    { id: 'all', label: locale === 'en' ? 'All Articles' : 'جميع المقالات' },
    { id: 'meta ads', label: locale === 'en' ? 'Meta Ads' : 'إعلانات ميتا' },
    { id: 'seo', label: locale === 'en' ? 'SEO' : 'تحسين محركات البحث' },
    { id: 'e-commerce', label: locale === 'en' ? 'E-commerce' : 'تجارة إلكترونية' }
  ];

  // Handle differences in translation casing for filtering
  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const handleOpenPost = (id) => {
    setSelectedPostId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Full Article Reader View
  if (selectedPostId !== null) {
    const post = posts.find(p => p.id === selectedPostId);
    return (
      <div className="page-wrapper fade-in">
        <div className="ambient-glow" style={{ top: '10%', right: '15%' }}></div>
        <div className="ambient-glow-secondary" style={{ top: '60%', left: '5%' }}></div>

        <section className="blog-reader-section section-padding">
          <div className="container">
            {/* Back Button */}
            <button className="btn-back btn-secondary mb-3" onClick={handleBackToList}>
              <ArrowLeft size={16} />
              <span>{locale === 'en' ? 'Back to Insights' : 'العودة للمقالات'}</span>
            </button>

            {/* Full Post Layout */}
            <article className="blog-full-article glass-panel">
              <div className="article-meta-header">
                <span className="badge">{post.category}</span>
                <h1>{post.title}</h1>
                <div className="author-pub-info">
                  <div className="pub-item">
                    <User size={14} />
                    <span>{t('blog.author')} {post.author}</span>
                  </div>
                  <div className="pub-item">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="pub-item">
                    <Clock size={14} />
                    <span>{post.readTime} {t('blog.readTime')}</span>
                  </div>
                </div>
              </div>

              <div className="article-body-text mt-3">
                {/* Paragraphs simulation */}
                <p className="article-lead">{post.excerpt}</p>
                <p>{post.content}</p>
                
                {/* Additional simulated blog content to make it a real deep article */}
                <h2>{locale === 'en' ? 'Core Implementations' : 'التنفيذ العملي والأدوات'}</h2>
                <p>
                  {locale === 'en'
                    ? 'To succeed in the highly competitive GCC digital space, brands must focus on localized landing architectures. Providing speed, high-end mobile support, and cultural context ensures trust. A/B testing creative sets and separating targeting metrics are critical steps to maximize conversions.'
                    : 'لتحقيق النجاح في الفضاء الرقمي التنافسي بمنطقة الخليج، يجب على العلامات التجارية التركيز على صفحات هبوط محلية وسريعة. توفير سرعة عالية، وتوافق تام مع الهواتف، وسياق ثقافي يبني الثقة المباشرة لدى العميل.'}
                </p>
                
                <div className="article-quote-box glass-panel mt-3">
                  <p>
                    {locale === 'en'
                      ? '"Generic marketing copy fails in the Middle East. Understanding localized search intent and integrating regional features like BNPL options are critical variables of growth."'
                      : '"تفشل القوالب التسويقية والرسائل العشوائية في الشرق الأوسط. فهم نية البحث المحلية ودمج خصائص الدفع المجزأ هي أدوات النمو الأساسية اليوم."'}
                  </p>
                  <span className="quote-author">- Novarae Nexus Growth Team</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }

  // Blog list view
  return (
    <div className="page-wrapper fade-in">
      <div className="ambient-glow" style={{ top: '15%', right: '10%' }}></div>
      <div className="ambient-glow-secondary" style={{ top: '65%', left: '10%' }}></div>

      <section className="blog-hub-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge">{t('blog.badge')}</span>
            <h1 className="section-title">{t('blog.title')}</h1>
            <p className="section-subtitle">{t('blog.subtitle')}</p>
          </div>

          {/* Categories bar */}
          <div className="filter-bar glass-panel">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn ${activeCategory.toLowerCase() === cat.id.toLowerCase() ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="blog-posts-grid mt-4">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="blog-post-card glass-panel glass-panel-interactive"
                onClick={() => handleOpenPost(post.id)}
              >
                <div className="post-header-meta">
                  <span className="badge">{post.category}</span>
                  <span className="read-time"><Clock size={12} /> {post.readTime} {t('blog.readTime')}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-footer">
                  <span className="author-name">{post.author}</span>
                  <button className="btn-text-link">
                    <span>{locale === 'en' ? 'Read Article' : 'اقرأ المقال'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
