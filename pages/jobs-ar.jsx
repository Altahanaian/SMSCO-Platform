import Head from "next/head";
import Link from "next/link";

export default function JobsAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>الوظائف المتوفرة - سمسكو</title>
        <meta name="description" content="قائمة الوظائف التي تم نشرها في منصة سمسكو." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4 text-center">الوظائف المتوفرة</h2>
        
        <table className="table table-bordered bg-white">
          <thead className="table-light">
            <tr>
              <th>المسمى الوظيفي</th>
              <th>الموقع</th>
              <th>عدد المتقدمين</th>
              <th>الإجراء</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>مدير مشاريع</td>
              <td>الرياض</td>
              <td>12</td>
              <td>
                <Link href="#" legacyBehavior>
                  <a className="btn btn-sm btn-primary me-2">عرض</a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="btn btn-sm btn-danger">حذف</a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>محاسب</td>
              <td>جدة</td>
              <td>5</td>
              <td>
                <Link href="#" legacyBehavior>
                  <a className="btn btn-sm btn-primary me-2">عرض</a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="btn btn-sm btn-danger">حذف</a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
