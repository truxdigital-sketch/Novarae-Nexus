import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Lock, 
  User, 
  LayoutDashboard, 
  FileText, 
  FileCheck, 
  Mail, 
  LogOut, 
  Printer, 
  Eye, 
  Send,
  DollarSign,
  TrendingUp,
  Award,
  ArrowRight
} from 'lucide-react';
import './Portal.css';

export default function Portal() {
  const { locale, t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Modals / Detail View overlays
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);

  // Auto loading screen transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setActiveTab('dashboard');
  };

  // Mock Invoice items
  const invoices = [
    { id: 'INV-2026-001', client: 'Al Hamra Realty', date: 'June 10, 2026', amount: 'AED 15,000', status: 'Paid', items: [{ desc: 'Bespoke Corporate Website Design & Dev', qty: 1, rate: 15000 }] },
    { id: 'INV-2026-002', client: 'Mina Restaurant', date: 'June 15, 2026', amount: 'AED 9,500', status: 'Paid', items: [{ desc: 'Meta & Google Campaign Management - Retainer', qty: 1, rate: 9500 }] },
    { id: 'INV-2026-003', client: 'Zabeel Jewelry', date: 'June 20, 2026', amount: 'AED 25,000', status: 'Pending', items: [{ desc: 'Shopify E-commerce Portal Development & Payment Sync', qty: 1, rate: 25000 }] }
  ];

  // Mock Proposals
  const proposals = [
    { id: 'PROP-2026-90', client: 'Falcon Aviation', title: 'Q3 Performance Ads & Local SEO Campaign', budget: 'AED 18,500 / month', duration: '6 Months', scope: ['Meta Pixel & Google PMax campaigns setup', 'Bilingual Search term SEO audit', '2 video reels/mo', 'Dedicated support'] },
    { id: 'PROP-2026-91', client: 'Jumeirah retail', title: 'Meta Ads scaling and Influencer Seeding', budget: 'AED 9,500 / month', duration: '3 Months', scope: ['Social media content calendar creation', 'Targeting premium Dubai demographics', 'A/B dynamic ad sets optimization'] }
  ];

  // Mock Email templates
  const emailTemplates = [
    {
      id: 'email-welcome',
      subject: 'Welcome to Novarae Nexus - Elite Partnership Activated',
      title: 'Active Digital Growth Partnership',
      body: 'Thank you for choosing Novarae Nexus as your digital scaling partner. We have initiated competitor analysis and funnels audit. Your dedicated Account Director will share wireframes in 48 hours.'
    },
    {
      id: 'email-report',
      subject: 'Monthly Campaign Performance Report - Novarae Nexus',
      title: 'Your Performance Metrics are Ready',
      body: 'Your live Google Looker Studio dashboard has been updated. Meta Ads ROAS has scaled to 4.8x this month, and organic search traffic has seen an increase of 24%.'
    }
  ];

  // --- 1. RENDER LOADING SCREEN ---
  if (loading) {
    return (
      <div className="portal-loading-screen">
        <div className="pulse-logo-container">
          <img src="/logo.png" alt="Novarae Nexus Logo" className="pulse-logo" />
        </div>
      </div>
    );
  }

  // --- 2. RENDER LOGIN SCREEN ---
  if (!isLoggedIn) {
    return (
      <div className="portal-login-wrapper fade-in">
        <div className="login-card glass-panel">
          <div className="login-logo-header">
            <img src="/logo.png" alt="Novarae Nexus Logo" className="login-logo-img" />
            <p>{locale === 'en' ? 'Client Strategy Portal' : 'بوابة العميل الاستراتيجية'}</p>
          </div>
          
          <form className="login-form mt-3" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">{locale === 'en' ? 'Username / Client Email' : 'اسم المستخدم / البريد الإلكتروني'}</label>
              <div className="input-with-icon">
                <User size={16} className="input-icon-svg" />
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g. client@domain.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{locale === 'en' ? 'Portal Password' : 'كلمة المرور'}</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon-svg" />
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              <span>{locale === 'en' ? 'Secure Authentication' : 'تسجيل دخول آمن'}</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- 3. RENDER DASHBOARD DESKTOP SHELL ---
  return (
    <div className="portal-dashboard-wrapper fade-in">
      <div className="dashboard-container">
        
        {/* SIDEBAR */}
        <aside className="dashboard-sidebar glass-panel">
          <div className="sidebar-header">
            <img src="/logo.png" alt="Novarae Nexus Logo" className="sidebar-logo-img" />
          </div>
          
          <nav className="sidebar-nav">
            <button 
              className={`sidebar-link ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard size={18} />
              <span>{locale === 'en' ? 'Dashboard' : 'لوحة التحكم'}</span>
            </button>
            
            <button 
              className={`sidebar-link ${activeTab === 'invoices' ? 'active' : ''}`}
              onClick={() => setActiveTab('invoices')}
            >
              <FileText size={18} />
              <span>{locale === 'en' ? 'PDF Invoices' : 'الفواتير PDF'}</span>
            </button>
            
            <button 
              className={`sidebar-link ${activeTab === 'proposals' ? 'active' : ''}`}
              onClick={() => setActiveTab('proposals')}
            >
              <FileCheck size={18} />
              <span>{locale === 'en' ? 'PDF Proposals' : 'العروض PDF'}</span>
            </button>
            
            <button 
              className={`sidebar-link ${activeTab === 'emails' ? 'active' : ''}`}
              onClick={() => setActiveTab('emails')}
            >
              <Mail size={18} />
              <span>{locale === 'en' ? 'Email Templates' : 'نماذج البريد'}</span>
            </button>
            
            <div className="sidebar-spacer"></div>
            
            <button className="sidebar-link logout-link" onClick={handleLogout}>
              <LogOut size={18} />
              <span>{locale === 'en' ? 'Close Session' : 'تسجيل خروج'}</span>
            </button>
          </nav>
        </aside>

        {/* MAIN PANEL CONTENT */}
        <main className="dashboard-main-panel glass-panel">
          
          {/* TAB 1: GENERAL STATS */}
          {activeTab === 'dashboard' && (
            <div className="tab-view fade-in">
              <div className="tab-header">
                <h1>{locale === 'en' ? 'Performance Snapshot' : 'ملخص الأداء والنمو'}</h1>
                <p>{locale === 'en' ? 'Real-time billing, proposals, and newsletter integrations.' : 'متابعة الفواتير الحالية، مقترحات المشاريع ونماذج البريد المعتمدة.'}</p>
              </div>

              <div className="stats-cards-grid mt-3">
                <div className="stats-card glass-panel">
                  <div className="card-top">
                    <span className="card-lbl">{locale === 'en' ? 'Active Projects' : 'المشاريع القائمة'}</span>
                    <Award size={18} color="var(--primary)" />
                  </div>
                  <h2 className="text-gradient">4 Campaigns</h2>
                </div>

                <div className="stats-card glass-panel">
                  <div className="card-top">
                    <span className="card-lbl">{locale === 'en' ? 'Spend Managed' : 'الميزانيات المدارة'}</span>
                    <TrendingUp size={18} color="var(--secondary)" />
                  </div>
                  <h2 className="text-gradient">AED 45,000</h2>
                </div>

                <div className="stats-card glass-panel">
                  <div className="card-top">
                    <span className="card-lbl">{locale === 'en' ? 'Invoiced Amount' : 'المبالغ المفوترة'}</span>
                    <DollarSign size={18} color="var(--accent)" />
                  </div>
                  <h2 className="text-gradient">AED 49,500</h2>
                </div>
              </div>

              <div className="dashboard-brief mt-4 glass-panel">
                <h3>{locale === 'en' ? 'Strategic Advisor Update' : 'نصيحة أخصائي النمو الرقمي'}</h3>
                <p>
                  {locale === 'en'
                    ? 'Meta Campaigns targeting HNWI zones are driving 4.8x ROAS. We recommend initiating local SEO maps citation enhancements next week to secure local market capture. Check your invoices tab for active billing periods.'
                    : 'تحقق إعلانات ميتا التي تستهدف مناطق الأثرياء عائداً إعلانياً ROAS يصل إلى 4.8 ضعف. ننصح بتهيئة خرائط جوجل السيو المحلي الأسبوع المقبل لتعزيز انتشار علامتكم.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PDF INVOICES */}
          {activeTab === 'invoices' && (
            <div className="tab-view fade-in">
              <div className="tab-header">
                <h1>{locale === 'en' ? 'PDF Invoices Management' : 'إدارة الفواتير PDF'}</h1>
                <p>{locale === 'en' ? 'View and print official brand-logo invoices for auditing.' : 'عرض وطباعة الفواتير الرسمية للتدقيق والحسابات.'}</p>
              </div>

              <div className="invoices-list-table mt-3 glass-panel">
                <div className="table-header-row">
                  <span>{locale === 'en' ? 'Invoice ID' : 'رقم الفاتورة'}</span>
                  <span>{locale === 'en' ? 'Client' : 'العميل'}</span>
                  <span>{locale === 'en' ? 'Date' : 'التاريخ'}</span>
                  <span>{locale === 'en' ? 'Amount' : 'المبلغ'}</span>
                  <span>{locale === 'en' ? 'Action' : 'الإجراء'}</span>
                </div>
                {invoices.map((inv) => (
                  <div key={inv.id} className="table-data-row">
                    <span className="inv-code">{inv.id}</span>
                    <span>{inv.client}</span>
                    <span>{inv.date}</span>
                    <span className="inv-amt">{inv.amount}</span>
                    <button 
                      className="btn btn-secondary btn-icon-only"
                      onClick={() => setSelectedInvoice(inv)}
                      title="View Invoice"
                    >
                      <Eye size={14} />
                      <span>{locale === 'en' ? 'View PDF' : 'عرض الفاتورة'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PDF PROPOSALS */}
          {activeTab === 'proposals' && (
            <div className="tab-view fade-in">
              <div className="tab-header">
                <h1>{locale === 'en' ? 'PDF Growth Proposals' : 'مقترحات وعروض النمو PDF'}</h1>
                <p>{locale === 'en' ? 'Access active roadmaps, scopes of work, and ad briefs.' : 'الوصول لعروض العمل القائمة ومقترحات الميزانيات الترويجية.'}</p>
              </div>

              <div className="proposals-grid-list mt-3">
                {proposals.map((prop) => (
                  <div key={prop.id} className="proposal-brief-card glass-panel">
                    <div className="prop-header-info">
                      <span className="badge">{prop.id}</span>
                      <h3>{prop.title}</h3>
                      <p>{locale === 'en' ? 'Client: ' : 'العميل: '}{prop.client}</p>
                    </div>
                    <div className="prop-footer-info">
                      <span>{prop.budget}</span>
                      <button 
                        className="btn btn-primary"
                        onClick={() => setSelectedProposal(prop)}
                      >
                        <Eye size={14} />
                        <span>{locale === 'en' ? 'View Proposal' : 'عرض المقترح'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: EMAIL TEMPLATES */}
          {activeTab === 'emails' && (
            <div className="tab-view fade-in">
              <div className="tab-header">
                <h1>{locale === 'en' ? 'HTML Email Newsletters' : 'نماذج البريد الإلكتروني المجهزة'}</h1>
                <p>{locale === 'en' ? 'Bilingual branded email templates carrying the new logo headers.' : 'نماذج البريد المصممة للعلامة التجارية والتي تحتوي على شعارنا.'}</p>
              </div>

              <div className="emails-grid-list mt-3">
                {emailTemplates.map((email) => (
                  <div key={email.id} className="email-brief-card glass-panel">
                    <div className="email-card-info">
                      <h3>{email.subject}</h3>
                      <p>{locale === 'en' ? 'Template: ' : 'النموذج: '}{email.id}</p>
                    </div>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setSelectedEmail(email)}
                    >
                      <Eye size={14} />
                      <span>{locale === 'en' ? 'Preview Template' : 'معاينة النموذج'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* --- INVOICE PRINT LIGHTBOX OVERLAY --- */}
      {selectedInvoice && (
        <div className="print-overlay-backdrop" onClick={() => setSelectedInvoice(null)}>
          <div className="print-overlay-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-print-actions no-print">
              <button className="btn btn-secondary" onClick={() => setSelectedInvoice(null)}>
                <span>{locale === 'en' ? 'Close' : 'إغلاق'}</span>
              </button>
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Printer size={14} />
                <span>{locale === 'en' ? 'Print / Export PDF' : 'طباعة / حفظ كـ PDF'}</span>
              </button>
            </div>

            {/* ACTUAL INVOICE SHEET */}
            <div className="invoice-printable-sheet" id="invoice-sheet">
              <div className="sheet-header">
                <img src="/logo.png" alt="Novarae Nexus Logo" className="invoice-logo-img" />
                <div className="sheet-header-meta">
                  <h2>{locale === 'en' ? 'INVOICE' : 'فاتورة ضريبية'}</h2>
                  <p><strong>{selectedInvoice.id}</strong></p>
                  <p>{locale === 'en' ? 'Date: ' : 'التاريخ: '}{selectedInvoice.date}</p>
                </div>
              </div>

              <div className="sheet-parties mt-3">
                <div className="party-box">
                  <h4>{locale === 'en' ? 'From:' : 'من:'}</h4>
                  <p><strong>Novarae Nexus Digital</strong></p>
                  <p>Marina Plaza, Level 28</p>
                  <p>Dubai Marina, Dubai, UAE</p>
                  <p>growth@novaraenexus.ae</p>
                </div>
                <div className="party-box">
                  <h4>{locale === 'en' ? 'To:' : 'إلى:'}</h4>
                  <p><strong>{selectedInvoice.client}</strong></p>
                  <p>United Arab Emirates</p>
                </div>
              </div>

              <table className="sheet-table mt-3">
                <thead>
                  <tr>
                    <th>{locale === 'en' ? 'Description' : 'البيان'}</th>
                    <th>{locale === 'en' ? 'Qty' : 'الكمية'}</th>
                    <th>{locale === 'en' ? 'Rate' : 'السعر'}</th>
                    <th>{locale === 'en' ? 'Total' : 'الإجمالي'}</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoice.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.desc}</td>
                      <td>{item.qty}</td>
                      <td>{item.rate.toLocaleString()} AED</td>
                      <td>{(item.qty * item.rate).toLocaleString()} AED</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="sheet-footer mt-4">
                <div className="sheet-payment-terms">
                  <h4>{locale === 'en' ? 'Payment Terms' : 'شروط الدفع'}</h4>
                  <p>{locale === 'en' ? 'Payable within 14 days from date of issuance. Supports Stripe, Tabby, and local bank transfers.' : 'يتم السداد خلال ١٤ يوماً من تاريخ الإصدار. يدعم تابي، تمارا وبطاقات الائتمان.'}</p>
                </div>
                <div className="sheet-total-block">
                  <div className="total-row">
                    <span>{locale === 'en' ? 'Subtotal:' : 'الإجمالي الفرعي:'}</span>
                    <span>{selectedInvoice.amount}</span>
                  </div>
                  <div className="total-row grand-total">
                    <span>{locale === 'en' ? 'Grand Total (VAT Incl.):' : 'الإجمالي الكلي شامل الضريبة:'}</span>
                    <span>{selectedInvoice.amount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PROPOSAL PRINT LIGHTBOX OVERLAY --- */}
      {selectedProposal && (
        <div className="print-overlay-backdrop" onClick={() => setSelectedProposal(null)}>
          <div className="print-overlay-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-print-actions no-print">
              <button className="btn btn-secondary" onClick={() => setSelectedProposal(null)}>
                <span>{locale === 'en' ? 'Close' : 'إغلاق'}</span>
              </button>
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Printer size={14} />
                <span>{locale === 'en' ? 'Print / Export PDF' : 'حفظ كـ PDF'}</span>
              </button>
            </div>

            {/* ACTUAL PROPOSAL SHEET */}
            <div className="proposal-printable-sheet">
              <div className="proposal-cover-page">
                <img src="/logo.png" alt="Novarae Nexus Logo" className="proposal-logo-img" />
                <h1 className="text-gradient mt-3">{selectedProposal.title}</h1>
                <p className="subtitle">{locale === 'en' ? 'Prepared for: ' : 'معد خصيصاً لـ: '}{selectedProposal.client}</p>
                <div className="meta-footer mt-5">
                  <p><strong>{locale === 'en' ? 'Agency: ' : 'الوكالة: '}</strong>Novarae Nexus UAE</p>
                  <p><strong>{locale === 'en' ? 'Budget Proposal: ' : 'الميزانية المقترحة: '}</strong>{selectedProposal.budget}</p>
                  <p><strong>{locale === 'en' ? 'Project duration: ' : 'فترة العمل: '}</strong>{selectedProposal.duration}</p>
                </div>
              </div>

              <div className="page-break"></div>

              <div className="proposal-content-page mt-4">
                <h2>{locale === 'en' ? 'Scope of Deliverables' : 'نطاق المخرجات الفنية'}</h2>
                <ul className="proposal-scope-list mt-2">
                  {selectedProposal.scope.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot"></span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- EMAIL PREVIEW LIGHTBOX OVERLAY --- */}
      {selectedEmail && (
        <div className="print-overlay-backdrop" onClick={() => setSelectedEmail(null)}>
          <div className="print-overlay-modal email-modal-width glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-print-actions no-print">
              <button className="btn btn-secondary" onClick={() => setSelectedEmail(null)}>
                <span>{locale === 'en' ? 'Close' : 'إغلاق'}</span>
              </button>
            </div>

            {/* EMAIL TEMPLATE WRAPPER */}
            <div className="email-template-sheet">
              <div className="email-header-banner">
                <img src="/logo.png" alt="Novarae Nexus Logo" className="email-logo-img" />
              </div>
              <div className="email-body-content mt-3">
                <h2>{selectedEmail.title}</h2>
                <p className="greeting">{locale === 'en' ? 'Dear Client Partner,' : 'شريكنا العزيز،'}</p>
                <p className="body-text">{selectedEmail.body}</p>
                
                <div className="email-button-wrapper mt-3">
                  <a href="https://novaraenexus.ae" target="_blank" rel="noopener noreferrer" className="email-action-btn">
                    <span>{locale === 'en' ? 'Access Looker Studio' : 'لوحة التحكم الفورية'}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <p className="signoff mt-4">
                  {locale === 'en' ? 'Warm regards,' : 'مع فائق الاحترام والتقدير،'}<br />
                  <strong>Novarae Nexus Support</strong>
                </p>
              </div>
              <div className="email-footer-banner mt-4">
                <p>&copy; {new Date().getFullYear()} Novarae Nexus UAE. Marina Plaza Level 28, Dubai Marina, Dubai.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
