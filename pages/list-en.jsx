import Head from "next/head";
import Link from "next/link";

export default function ListEn() {
  return (
    <div dir="ltr">
      <Head>
        <title>Available Jobs - SMSCO</title>
        <meta name="description" content="Browse the latest job opportunities on the SMSCO platform." />
      </Head>

      <div className="container py-5">
        <h3 className="text-center mb-4">Available Jobs</h3>
        <div className="list-group">
          <Link href="/en/detail">
            <a className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Digital Marketing Specialist</h5>
                <small>Riyadh</small>
              </div>
              <p className="mb-1">Looking for a digital marketing specialist with advertising experience.</p>
              <small>Full-time</small>
            </a>
          </Link>

          <Link href="/en/detail">
            <a className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Java Developer</h5>
                <small>Jeddah</small>
              </div>
              <p className="mb-1">We're hiring a Java developer experienced in Spring Boot and web apps.</p>
              <small>Remote</small>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
