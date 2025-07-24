export default function ResetPasswordEn() {
  return (
    <div dir="ltr">
      <div className="container py-5">
        <h2 className="mb-4">Reset Password</h2>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="new-password">New Password</label>
            <input
              className="form-control"
              id="new-password"
              placeholder="Enter new password"
              type="password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
            <input
              className="form-control"
              id="confirm-password"
              placeholder="Re-enter new password"
              type="password"
            />
          </div>
          <button className="btn btn-success" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
