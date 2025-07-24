import Head from "next/head";

export default function ForgotPasswordAr() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رابط الاستعادة إلى بريدك الإلكتروني.");
  };

  return (
    <div dir="rtl">
      <Head>
        <title>استعادة كلمة المرور - سمسكو</title>
        <meta name="description" content="استعادة كلمة المرور لحسابك في منصة سمسكو." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4">استعادة كلمة المرور</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">البريد الإلكتروني</label>
            <input
              className="form-control"
              id="email"
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            إرسال رابط الاستعادة
          </button>
        </form>
      </div>
    </div>
  );
}
