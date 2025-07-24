import Head from "next/head";
import Link from "next/link";

export default function AboutEn() {
  return (
    <div dir="ltr">
      <Head>
        <title>About SMSCO</title>
        <meta name="description" content="Learn about SMSCO, a smart Saudi hiring and service platform." />
      </Head>

      <div className="container mt-5">
        <h2 className="text-center mb-4">SMSCO Platform</h2>
        <div className="card p-4 shadow-sm">
          <p className="lead">
            SMSCO is a smart Saudi platform designed to connect job seekers with employers offering permanent, temporary, or remote opportunities — through a professional and simplified experience.
          </p>
          <p>
            The platform offers integrated services including CV creation, job browsing, quick applications, and dedicated accounts for both individuals and companies — with full support for Arabic and English.
          </p>
          <p>
            At SMSCO, we aim to build a more efficient and flexible career future in Saudi Arabia by leveraging modern technology and delivering a high-quality user experience.
          </p>
        </div>

        <div className="mt-5 text-center">
          <Link href="/">
            <a className="btn btn-primary">Back to Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
