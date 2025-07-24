import Head from "next/head";

export default function LoginAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>تسجيل الدخول - سمسكو</title>
        <meta name="description" content="صفحة تسجيل الدخول إلى منصة سمسكو للتوظيف والخدمات الإدارية" />
      </Head>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-sm p-4">
              <h3 className="text-center mb-4">تسجيل الدخول</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">البريد الإلكتروني</label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="example@smsco.ai"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">كلمة المرور</label>
                  <input
                    className="form-control"
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">دخول</button>
                <div className="text-center mt-3">
                  <a href="#">نسيت كلمة المرور؟</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
