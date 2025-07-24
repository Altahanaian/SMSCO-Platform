import Head from "next/head";

export default function FormAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>نشر وظيفة جديدة - سمسكو</title>
        <meta name="description" content="نموذج نشر وظيفة جديدة عبر منصة سمسكو." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4">نشر وظيفة جديدة</h2>
        <form
          action="https://formspree.io/f/myzjnvbl"
          method="POST"
          className="bg-white p-4 rounded shadow-sm"
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="title">المسمى الوظيفي</label>
            <input
              className="form-control"
              name="title"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="company">اسم الشركة</label>
            <input
              className="form-control"
              name="company"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">الموقع</label>
            <input
              className="form-control"
              name="location"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="type">نوع الوظيفة</label>
            <select className="form-control" name="type" required>
              <option>دوام كامل</option>
              <option>دوام جزئي</option>
              <option>عن بُعد</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">الوصف الوظيفي</label>
            <textarea
              className="form-control"
              name="description"
              rows="4"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            نشر الوظيفة
          </button>
        </form>
      </div>
    </div>
  );
}
