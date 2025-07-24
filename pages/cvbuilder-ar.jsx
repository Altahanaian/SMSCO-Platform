import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CvbuilderAr() {
  const router = useRouter();

  const switchToEnglish = () => {
    router.push("/en/cvbuilder");
  };

  return (
    <div dir="rtl" className="bg-white min-h-screen">
      <Head>
        <title>منصة سمسكو - إنشاء السيرة الذاتية</title>
        <meta name="description" content="أنشئ سيرتك الذاتية باحترافية عبر منصة سمسكو للتوظيف الذكي" />
      </Head>

      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b relative">
        <div className="flex items-center">
          <Image
            src="/logo-ar.svg"
            alt="شعار سمسكو"
            width={200}
            height={60}
            className="h-auto w-auto"
          />
        </div>
        <div className="absolute top-4 left-4">
          <button
            onClick={switchToEnglish}
            className="bg-[#6C47D9] text-white px-4 py-2 rounded hover:bg-[#5a3fc2] transition"
          >
            English
          </button>
        </div>
      </header>

      {/* Form Section */}
      <main className="container py-5">
        <h2 className="text-center mb-4 text-2xl font-bold text-gray-800">أنشئ سيرتك الذاتية</h2>
        <form
          action="/api/cv/generate"
          method="POST"
          className="card p-4 shadow-sm bg-white rounded max-w-2xl mx-auto"
        >
          <div className="mb-3">
            <label className="form-label">الاسم الكامل</label>
            <input className="form-control" name="fullName" type="text" required />
          </div>

          <div className="mb-3">
            <label className="form-label">البريد الإلكتروني</label>
            <input className="form-control" name="email" type="email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">رقم الجوال</label>
            <input className="form-control" name="phone" type="text" />
          </div>

          <div className="mb-3">
            <label className="form-label">نبذة مختصرة</label>
            <textarea className="form-control" name="summary" rows="3" />
          </div>

          <div className="mb-3">
            <label className="form-label">الخبرات العملية</label>
            <textarea className="form-control" name="experience" rows="3" />
          </div>

          <div className="mb-3">
            <label className="form-label">المؤهلات التعليمية</label>
            <textarea className="form-control" name="education" rows="3" />
          </div>

          <div className="mb-3">
            <label className="form-label">المهارات</label>
            <input className="form-control" name="skills" type="text" />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            إنشاء السيرة الذاتية
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-500 border-t mt-10">
        © 2025 منصة سمسكو. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
