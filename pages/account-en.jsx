import Head from "next/head";

export default function AccountEn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Changes saved successfully");
  };

  return (
    <div dir="ltr">
      <Head>
        <title>Account Settings - SMSCO</title>
        <meta name="description" content="Update your account information easily via the SMSCO platform." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4">Account Settings</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input className="form-control" id="name" placeholder="Enter your full name" type="text" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input className="form-control" id="email" placeholder="example@smsco.ai" type="email" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">New Password</label>
            <input className="form-control" id="password" type="password" />
          </div>

          <button className="btn btn-primary" type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
