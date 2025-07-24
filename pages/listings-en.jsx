import Head from "next/head";

export default function ListingsEn() {
  return (
    <div dir="ltr">
      <Head>
        <title>Available Jobs - SMSCO</title>
        <meta name="description" content="Explore job opportunities listed on SMSCO smart recruitment platform." />
      </Head>

      <div className="container py-5">
        <h2 className="text-center mb-4">Available Job Listings</h2>
        <div className="row g-4">
          {/* Job 1 */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Digital Marketing Specialist</h5>
                <p className="card-text">
                  A startup in Riyadh is looking for a marketing expert experienced in Google Ads and social media.
                </p>
                <p><strong>Location:</strong> Riyadh</p>
                <p><strong>Type:</strong> Full-time</p>
                <a className="btn btn-primary" href="#">Apply Now</a>
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Certified Accountant</h5>
                <p className="card-text">
                  A prestigious finance firm seeks an accountant experienced with Saudi standards and international practices.
                </p>
                <p><strong>Location:</strong> Jeddah</p>
                <p><strong>Type:</strong> Part-time</p>
                <a className="btn btn-primary" href="#">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
