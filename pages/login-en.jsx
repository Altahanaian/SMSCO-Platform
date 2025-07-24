import Head from "next/head";

export default function LoginEn() {
  return (
    <div dir="ltr">
      <Head>
        <title>Login - SMSCO</title>
        <meta name="description" content="Login page to access the SMSCO recruitment and admin platform." />
      </Head>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-sm p-4">
              <h3 className="text-center mb-4">Login</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="example@smsco.ai"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">Sign In</button>
                <div className="text-center mt-3">
                  <a href="#">Forgot password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
