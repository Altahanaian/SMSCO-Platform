import Head from "next/head";

export default function JobsEn() {
  return (
    <div dir="ltr">
      <Head>
        <title>Published Jobs - SMSCO</title>
        <meta name="description" content="List of jobs posted by your company on SMSCO platform." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4 text-center">Published Jobs</h2>
        <table className="table table-bordered bg-white">
          <thead className="table-light">
            <tr>
              <th>Job Title</th>
              <th>Location</th>
              <th>Applicants</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project Manager</td>
              <td>Riyadh</td>
              <td>12</td>
              <td>
                <a className="btn btn-sm btn-primary me-2" href="#">View</a>
                <a className="btn btn-sm btn-danger" href="#">Delete</a>
              </td>
            </tr>
            <tr>
              <td>Accountant</td>
              <td>Jeddah</td>
              <td>5</td>
              <td>
                <a className="btn btn-sm btn-primary me-2" href="#">View</a>
                <a className="btn btn-sm btn-danger" href="#">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
