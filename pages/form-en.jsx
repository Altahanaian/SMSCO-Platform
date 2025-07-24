import Head from "next/head";

export default function FormEn() {
  return (
    <div dir="ltr">
      <Head>
        <title>Post a New Job - SMSCO</title>
        <meta name="description" content="Job posting form for SMSCO platform." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4">Post a New Job</h2>
        <form
          action="https://formspree.io/f/myzjnvbl"
          method="POST"
          className="bg-white p-4 rounded shadow-sm"
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="title">Job Title</label>
            <input
              className="form-control"
              name="title"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="company">Company Name</label>
            <input
              className="form-control"
              name="company"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">Location</label>
            <input
              className="form-control"
              name="location"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="type">Job Type</label>
            <select className="form-control" name="type" required>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Remote</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">Job Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="4"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}
