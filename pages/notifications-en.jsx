import Head from "next/head";

export default function Notifications() {
  return (
    <div dir="ltr">
      <Head>
        <title>My Notifications - SMSCO</title>
        <meta name="description" content="View all your recent notifications on the SMSCO platform." />
      </Head>

      <div className="container py-5">
        <h2 className="text-center mb-4">My Notifications</h2>
        <ul className="list-group shadow-sm">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Your application for <strong>Marketing Specialist</strong> has been viewed.
            <span className="badge bg-success rounded-pill">New</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Interview invitation for <strong>Sales Manager</strong> scheduled.
            <span className="badge bg-warning text-dark rounded-pill">Pending</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Job posting <strong>UI/UX Designer</strong> is now closed.
            <span className="badge bg-secondary rounded-pill">Archived</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
