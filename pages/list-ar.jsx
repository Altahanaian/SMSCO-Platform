import Head from "next/head";
import Link from "next/link";

export default function ListAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>الوظائف المتاحة - سمسكو</title>
        <meta name="description" content="قائمة بأحدث الوظائف المتاحة على منصة سمسكو." />
      </Head>

      <div className="container py-5">
        <h3 className="text-center mb-4">الوظائف المتاحة</h3>
        <div className="list-group">
          <Link href="/ar/detail">
            <a className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">أخصائي تسويق رقمي</h5>
                <small>الرياض</small>
              </div>
              <p className="mb-1">مطلوب أخصائي تسويق رقمي لديه خبرة في الحملات الإعلانية.</p>
              <small>دوام كامل</small>
            </a>
          </Link>

          <Link href="/ar/detail">
            <a className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">مبرمج Java</h5>
                <small>جدة</small>
              </div>
              <p className="mb-1">نبحث عن مبرمج Java ذو خبرة في Spring Boot وتطبيقات الويب.</p>
              <small>عن بعد</small>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
