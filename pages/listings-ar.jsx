import Head from "next/head";

export default function ListingsAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>الوظائف المتاحة - سمسكو</title>
        <meta name="description" content="استعرض الوظائف الشاغرة في منصة سمسكو للتوظيف الذكي." />
      </Head>

      <div className="container py-5">
        <h2 className="text-center mb-4">الوظائف المتاحة</h2>
        <div className="row g-4">
          {/* الوظيفة 1 */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">أخصائي تسويق رقمي</h5>
                <p className="card-text">
                  شركة ناشئة في الرياض تبحث عن أخصائي تسويق بخبرة في إعلانات Google ووسائل التواصل.
                </p>
                <p><strong>الموقع:</strong> الرياض</p>
                <p><strong>نوع العمل:</strong> دوام كامل</p>
                <a className="btn btn-primary" href="#">قدم الآن</a>
              </div>
            </div>
          </div>

          {/* الوظيفة 2 */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">محاسب قانوني</h5>
                <p className="card-text">
                  شركة مالية مرموقة تبحث عن محاسب ذو خبرة في التعاملات السعودية والمعايير الدولية.
                </p>
                <p><strong>الموقع:</strong> جدة</p>
                <p><strong>نوع العمل:</strong> دوام جزئي</p>
                <a className="btn btn-primary" href="#">قدم الآن</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
