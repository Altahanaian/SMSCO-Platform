import Head from "next/head";

export default function DashboardEn() {
  return (
    <div dir="ltr">
      <Head>
        <title>Dashboard - My Applications</title>
        <meta name="description" content="View your job applications in your SMSCO dashboard." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4">My Applications</h2>
        <table className="table table-bordered bg-white" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Date Applied</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Systems Analyst</td>
              <td>SMSCO</td>
              <td>2025-07-14</td>
              <td>
                <span className="badge bg-info text-dark">Under Review</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
