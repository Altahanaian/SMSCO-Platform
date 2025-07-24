import Head from "next/head";
import Link from "next/link";

export default function DetailAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>تفاصيل الوظيفة - سمسكو</title>
        <meta name="description" content="تفاصيل فرصة العمل عبر منصة سمسكو." />
      </Head>

      <div className="container py-5">
        <h2 className="text-center mb-4">تفاصيل الوظيفة</h2>

        <div className="card shadow-sm p-4 bg-white">
          <h4>أخصائي تسويق رقمي</h4>
          <p><strong>الموقع:</strong> الرياض</p>
          <p><strong>نوع العمل:</strong> دوام كامل</p>
          <p><strong>الراتب:</strong> من 8000 إلى 12000 ريال</p>

          <hr />

          <h5>الوصف الوظيفي:</h5>
          <p>نبحث عن أخصائي تسويق رقمي متمرس لإدارة الحملات الإعلانية وتحليل الأداء وتطوير الاستراتيجيات الرقمية لزيادة الوعي وتحقيق النتائج.</p>

          <h5>المهام:</h5>
          <ul>
            <li>إعداد وتنفيذ حملات Google Ads.</li>
            <li>إدارة حسابات وسائل التواصل الاجتماعي.</li>
            <li>تحليل النتائج وتحسين الأداء.</li>
          </ul>

          <h5>المتطلبات:</h5>
          <ul>
            <li>خبرة لا تقل عن سنتين في التسويق الرقمي.</li>
            <li>إجادة أدوات التحليل مثل Google Analytics.</li>
            <li>قدرة على كتابة محتوى تسويقي إبداعي.</li>
          </ul>

          <Link href="/apply">
            <a className="btn btn-primary mt-3">قدم الآن</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
