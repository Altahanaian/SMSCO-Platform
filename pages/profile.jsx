export default function ProfileAr() {
  return (
    <div dir="rtl">
      <div className="container py-5">
        <h2 className="text-center mb-4">ملفي الشخصي</h2>
        <form action="/api/users/update" method="POST" className="card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label" htmlFor="fullName">الاسم الكامل</label>
            <input
              className="form-control"
              id="fullName"
              name="fullName"
              type="text"
              required
              defaultValue="جون دو"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">البريد الإلكتروني</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              required
              defaultValue="john@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="phone">رقم الجوال</label>
            <input
              className="form-control"
              id="phone"
              name="phone"
              type="text"
              defaultValue="+966..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="bio">نبذة مختصرة</label>
            <textarea
              className="form-control"
              id="bio"
              name="bio"
              rows="4"
              defaultValue="مرشح ذو خبرة يبحث عن فرص مهنية مميزة..."
            ></textarea>
          </div>
          <button className="btn btn-primary w-100" type="submit">
            تحديث الملف
          </button>
        </form>
      </div>
    </div>
  );
}
