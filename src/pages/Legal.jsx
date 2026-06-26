import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function Legal({ documentType }) {
  const { locale, t } = useLanguage();

  const isPrivacy = documentType === 'privacy';

  return (
    <div className="page-wrapper fade-in">
      <section className="legal-section section-padding">
        <div className="container">
          <div className="legal-content-card glass-panel">
            {isPrivacy ? (
              <>
                <h1>{locale === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}</h1>
                <span className="last-updated">{locale === 'en' ? 'Last Updated: June 26, 2026' : 'آخر تحديث: 26 يونيو 2026'}</span>
                
                <div className="legal-body mt-4">
                  <h2>1. {locale === 'en' ? 'Information We Collect' : '١. المعلومات التي نجمعها'}</h2>
                  <p>
                    {locale === 'en'
                      ? 'We collect personal information that you provide to us directly through contact forms, newsletter signups, and consultations, including name, email address, phone number, and company name.'
                      : 'نقوم بجمع المعلومات الشخصية التي تقدمها لنا مباشرة من خلال نماذج الاتصال، والاشتراك في النشرات البريدية، وطلبات الاستشارة، بما في ذلك الاسم، وعنوان البريد الإلكتروني، ورقم الهاتف، واسم الشركة.'}
                  </p>

                  <h2>2. {locale === 'en' ? 'How We Use Your Information' : '٢. كيف نستخدم معلوماتك'}</h2>
                  <p>
                    {locale === 'en'
                      ? 'We use the collected information to respond to inquiries, schedule consultations, deliver newsletters, improve website performance, and optimize marketing campaigns (such as using Meta Pixel and Google Analytics).'
                      : 'نحن نستخدم المعلومات التي نجمعها للرد على الاستفسارات، وجدولة الاستشارات، وإرسال النشرات الإخبارية، وتحسين أداء الموقع الإلكتروني، وتحسين الحملات التسويقية (مثل استخدام بكسل ميتا وتحليلات جوجل).'}
                  </p>

                  <h2>3. {locale === 'en' ? 'Data Security' : '٣. أمن وحماية البيانات'}</h2>
                  <p>
                    {locale === 'en'
                      ? 'We implement robust industry-standard security measures (such as SSL encryption) to safeguard your personal data from unauthorized access, disclosure, or alteration.'
                      : 'نحن نطبق إجراءات أمنية قوية ومتوافقة مع المعايير القياسية للقطاع (مثل تشفير SSL) لحماية بياناتك الشخصية من الوصول غير المصرح به أو الكشف عنها أو تعديلها.'}
                  </p>

                  <h2>4. {locale === 'en' ? 'Contact Us' : '٤. اتصل بنا'}</h2>
                  <p>
                    {locale === 'en'
                      ? 'If you have any questions regarding this Privacy Policy, please email us at privacy@novaraenexus.ae'
                      : 'إذا كانت لديك أي أسئلة بخصوص سياسة الخصوصية هذه، يرجى مراسلتنا عبر البريد الإلكتروني: privacy@novaraenexus.ae'}
                  </p>
                </div>
              </>
            ) : (
              <>
                <h1>{locale === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}</h1>
                <span className="last-updated">{locale === 'en' ? 'Last Updated: June 26, 2026' : 'آخر تحديث: 26 يونيو 2026'}</span>

                <div className="legal-body mt-4">
                  <h2>1. {locale === 'en' ? 'Agreement to Terms' : '١. الموافقة على الشروط'}</h2>
                  <p>
                    {locale === 'en'
                      ? 'By accessing the Novarae Nexus website, you agree to comply with and be bound by these Terms & Conditions, all applicable laws of the United Arab Emirates, and regional regulations.'
                      : 'من خلال الدخول إلى موقع نوفاراي نيكسس، فإنك توافق على الالتزام بشروط وأحكام الاستخدام هذه، وكافة القوانين المعمول بها في دولة الإمارات العربية المتحدة واللوائح الإقليمية.'}
                  </p>

                  <h2>2. {locale === 'en' ? 'Intellectual Property' : '٢. الملكية الفكرية'}</h2>
                  <p>
                    {locale === 'en'
                      ? 'All contents, layouts, designs, vector marks, graphics, and code symbols on this site are the exclusive property of Novarae Nexus and are protected by UAE copyright and intellectual property laws.'
                      : 'جميع المحتويات، والتخطيطات، والتصاميم، والعلامات، والرسومات، والأكواد البرمجية الموجودة على هذا الموقع هي ملكية حصرية لنوفاراي نيكسس ومحمية بموجب قوانين الملكية الفكرية وحقوق النشر بدولة الإمارات.'}
                  </p>

                  <h2>3. {locale === 'en' ? 'Limitation of Liability' : '٣. حدود المسؤولية'}</h2>
                  <p>
                    {locale === 'en'
                      ? 'Novarae Nexus and its directors shall not be liable for any indirect or consequential damages resulting from the use or inability to use this website or external linked assets.'
                      : 'لا تتحمل نوفاراي نيكسس أو مديروها المسؤولية عن أي أضرار غير مباشرة أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام هذا الموقع أو الأصول الخارجية المرتبطة به.'}
                  </p>

                  <h2>4. {locale === 'en' ? 'Governing Law' : '٤. القانون الحاكم'}</h2>
                  <p>
                    {locale === 'en'
                      ? 'These terms are governed by and construed in accordance with the laws of the Emirate of Dubai, United Arab Emirates, and any disputes will be subject to the exclusive jurisdiction of the Dubai Courts.'
                      : 'تخضع هذه الشروط وتُفسر وفقاً لقوانين إمارة دبي، دولة الإمارات العربية المتحدة، وتخضع أي نزاعات للاختصاص الحصري لمحاكم دبي.'}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
