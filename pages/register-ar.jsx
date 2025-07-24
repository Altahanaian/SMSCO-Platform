export default function RegisterAr() {
  return (
    <div dir="rtl">
      <div className="container py-5">
        <h3 className="text-center mb-4">تسجيل الباحث عن عمل</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">الاسم الكامل</label>
            <input
              type="text"
              className="form-control"
              placeholder="مثال: محمد أحمد"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">البريد الإلكتروني</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">رقم الجوال</label>
            <input
              type="tel"
              className="form-control"
              placeholder="05xxxxxxxx"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">المجال الوظيفي</label>
            <input
              type="text"
              className="form-control"
              placeholder="مثال: التسويق الرقمي، البرمجة"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">نبذة تعريفية</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="أكتب نبذة قصيرة عنك ومهاراتك"
              required
            ></textarea>
          </div>
          <button className="btn btn-success w-100" type="submit">
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
}
