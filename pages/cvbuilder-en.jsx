import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CvbuilderEn() {
  const router = useRouter();

  const switchToArabic = () => {
    router.push("/ar/cvbuilder");
  };

  return (
    <div dir="ltr" className="bg-white min-h-screen">
      <Head>
        <title>SMSCO Platform - CV Builder</title>
        <meta name="description" content="Create your professional resume with SMSCO smart hiring platform" />
      </Head>

      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b relative">
        <div className="flex items-center">
          <Image
            src="/logo-en.svg"
            alt="SMSCO Logo"
            width={200}
            height={60}
            className="h-auto w-auto"
          />
        </div>
        <div className="absolute top-4 right-4">
          <button
            onClick={switchToArabic}
            className="bg-[#6C47D9] text-white px-4 py-2 rounded hover:bg-[#5a3fc2] transition"
          >
            العربية
          </button>
        </div>
      </header>

      {/* Form Section */}
      <main className="container py-5">
        <h2 className="text-center mb-4 text-2xl font-bold text-gray-800">Build Your CV</h2>
        <form
          action="/api/cv/generate"
          method="POST"
          className="card p-4 shadow-sm bg-white rounded max-w-2xl mx-auto"
        >
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input className="form-control" name="fullName" type="text" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" name="email" type="email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input className="form-control" name="phone" type="text" />
          </div>

          <div className="mb-3">
            <label className="form-label">Summary</label>
            <textarea className="form-control" name="summary" rows="3" />
          </div>

          <div className="mb-3">
            <label className="form-label">Work Experience</label>
            <textarea className="form-control" name="experience" rows="3" />
          </div>

          <div className="mb-3">
            <label className="form-label">Education</label>
            <textarea className="form-control" name="education" rows="3" />
          </div>

          <div className="mb-3">
            <label className="form-label">Skills</label>
            <input className="form-control" name="skills" type="text" />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Generate CV
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-500 border-t mt-10">
        © 2025 SMSCO Platform. All rights reserved.
      </footer>
    </div>
  );
}
