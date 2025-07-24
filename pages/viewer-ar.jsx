export default function ViewerAr() {
  return (
    <div dir="rtl">
      <div className="container py-5 bg-white rounded shadow">
        <h2 className="mb-4">السيرة الذاتية</h2>
        <p><strong>الاسم:</strong> محمد العتيبي</p>
        <p><strong>البريد الإلكتروني:</strong> mohamed@example.com</p>
        <p><strong>رقم الجوال:</strong> +966 5 5555 5555</p>
        <p><strong>المسمى الوظيفي:</strong> محلل نظم معلومات</p>
        <p><strong>الخبرات:</strong></p>
        <ul>
          <li>3 سنوات خبرة في تحليل الأعمال</li>
          <li>سنة في إدارة المشاريع</li>
        </ul>
        <p><strong>المهارات:</strong> التحليل، إدارة الوقت، SQL، Agile</p>
      </div>
    </div>
  );
}
