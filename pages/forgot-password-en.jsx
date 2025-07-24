import Head from "next/head";

export default function ForgotPasswordEn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("A password reset link has been sent to your email.");
  };

  return (
    <div dir="ltr">
      <Head>
        <title>Forgot Password - SMSCO</title>
        <meta name="description" content="Reset your SMSCO account password." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              className="form-control"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
