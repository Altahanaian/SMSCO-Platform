import Head from "next/head";

export default function AccountAr() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم حفظ التغييرات بنجاح");
  };

  return (
    <div dir="rtl">
      <Head>
        <title>إعدادات الحساب - سمسكو</title>
        <meta name="description" content="قم بتحديث بيانات حسابك بسهولة عبر منصة سمسكو." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4">إعدادات الحساب</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">الاسم الكامل</label>
            <input className="form-control" id="name" placeholder="أدخل اسمك الكامل" type="text" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">البريد الإلكتروني</label>
            <input className="form-control" id="email" placeholder="example@smsco.ai" type="email" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">كلمة المرور الجديدة</label>
            <input className="form-control" id="password" type="password" />
          </div>

          <button className="btn btn-primary" type="submit">حفظ التغييرات</button>
        </form>
      </div>
    </div>
  );
}
