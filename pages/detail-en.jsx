import Head from "next/head";
import Link from "next/link";

export default function DetailEn() {
  return (
    <div dir="ltr">
      <Head>
        <title>Job Details - SMSCO</title>
        <meta name="description" content="Job opportunity details via SMSCO platform." />
      </Head>

      <div className="container py-5">
        <h2 className="text-center mb-4">Job Details</h2>

        <div className="card shadow-sm p-4 bg-white">
          <h4>Digital Marketing Specialist</h4>
          <p><strong>Location:</strong> Riyadh</p>
          <p><strong>Type:</strong> Full-time</p>
          <p><strong>Salary:</strong> 8000 - 12000 SAR</p>

          <hr />

          <h5>Job Description:</h5>
          <p>We are seeking an experienced digital marketing specialist to manage advertising campaigns, analyze performance, and enhance our digital presence.</p>

          <h5>Responsibilities:</h5>
          <ul>
            <li>Plan and run Google Ads campaigns.</li>
            <li>Manage social media accounts.</li>
            <li>Analyze data and improve results.</li>
          </ul>

          <h5>Requirements:</h5>
          <ul>
            <li>At least 2 years of experience in digital marketing.</li>
            <li>Proficiency with tools like Google Analytics.</li>
            <li>Creative content writing skills.</li>
          </ul>

          <Link href="/apply">
            <a className="btn btn-primary mt-3">Apply Now</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
