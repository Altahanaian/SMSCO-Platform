import Head from "next/head";

export default function DashboardAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>لوحة التحكم - طلباتي</title>
        <meta name="description" content="عرض الطلبات الوظيفية ضمن حساب المستخدم في منصة سمسكو." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4">طلباتي الوظيفية</h2>
        <table className="table table-bordered bg-white" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>الوظيفة</th>
              <th>اسم الشركة</th>
              <th>تاريخ التقديم</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>محلل نظم</td>
              <td>شركة سمسكو</td>
              <td>2025-07-14</td>
              <td>
                <span className="badge bg-info text-dark">قيد المراجعة</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
