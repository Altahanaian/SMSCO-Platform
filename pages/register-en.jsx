export default function RegisterEn() {
  return (
    <div>
      <div className="container py-5">
        <h3 className="text-center mb-4">Job Seeker Registration</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., Mohammed Ahmed"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="+9665xxxxxxxx"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Field of Interest</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., Digital Marketing, Programming"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Short Bio</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write a short bio about yourself and your skills"
              required
            ></textarea>
          </div>
          <button className="btn btn-success w-100" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
