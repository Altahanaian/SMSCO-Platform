import Head from "next/head";

export default function CvAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>السيرة الذاتية - سمسكو</title>
        <meta name="description" content="مثال على سيرة ذاتية باللغة العربية ضمن منصة سمسكو." />
      </Head>

      <div className="cv-container" style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', background: '#fff', borderRadius: '8px' }}>
        <div className="cv-header" style={{ marginBottom: '2rem' }}>
          <h2>محمد أحمد</h2>
          <p>البريد الإلكتروني: mohammad@example.com | الجوال: +966 500000000</p>
        </div>

        <div className="cv-section" style={{ marginBottom: '1.5rem' }}>
          <h5>نبذة شخصية</h5>
          <p>محترف تسويق ذو خبرة وشغف في بناء الوعي بالعلامة التجارية وتحقيق النمو من خلال استراتيجيات مبتكرة.</p>
        </div>

        <div className="cv-section" style={{ marginBottom: '1.5rem' }}>
          <h5>الخبرات العملية</h5>
          <ul>
            <li><strong>مدير تسويق</strong> - شركة ABC (2020–الآن)</li>
            <li><strong>أخصائي علامة تجارية</strong> - وكالة XYZ (2017–2020)</li>
          </ul>
        </div>

        <div className="cv-section" style={{ marginBottom: '1.5rem' }}>
          <h5>المؤهلات العلمية</h5>
          <ul>
            <li>بكالوريوس إدارة أعمال - جامعة الرياض</li>
          </ul>
        </div>

        <div className="cv-section">
          <h5>المهارات</h5>
          <p>تحسين محركات البحث، التسويق بالمحتوى، قيادة الفرق، التواصل الفعال</p>
        </div>
      </div>
    </div>
  );
}
