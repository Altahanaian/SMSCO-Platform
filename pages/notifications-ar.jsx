import Head from "next/head";

export default function NotificationsAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>إشعاراتي - سمسكو</title>
        <meta name="description" content="عرض أحدث الإشعارات الخاصة بك في منصة سمسكو." />
      </Head>

      <div className="container py-5">
        <h2 className="text-center mb-4">إشعاراتي</h2>
        <ul className="list-group shadow-sm">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            تم عرض طلبك لوظيفة <strong>أخصائي تسويق</strong>.
            <span className="badge bg-success rounded-pill">جديد</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            تمت جدولة مقابلة لوظيفة <strong>مدير مبيعات</strong>.
            <span className="badge bg-warning text-dark rounded-pill">قيد الانتظار</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            تم إغلاق وظيفة <strong>مصمم UI/UX</strong>.
            <span className="badge bg-secondary rounded-pill">مؤرشف</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
