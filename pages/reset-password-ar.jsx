export default function ResetPasswordAr() {
  return (
    <div dir="rtl">
      <div className="container py-5">
        <h2 className="mb-4">إعادة تعيين كلمة المرور</h2>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="new-password">كلمة المرور الجديدة</label>
            <input
              className="form-control"
              id="new-password"
              placeholder="أدخل كلمة مرور جديدة"
              type="password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="confirm-password">تأكيد كلمة المرور</label>
            <input
              className="form-control"
              id="confirm-password"
              placeholder="أعد إدخال كلمة المرور"
              type="password"
            />
          </div>
          <button className="btn btn-success" type="submit">
            تأكيد
          </button>
        </form>
      </div>
    </div>
  );
}
