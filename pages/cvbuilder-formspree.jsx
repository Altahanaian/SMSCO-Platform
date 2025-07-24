import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function CvbuilderFormspree() {
  const router = useRouter();
  const [isArabic, setIsArabic] = useState(true);

  useEffect(() => {
    const pathLang = router.pathname.startsWith("/en") ? "en" : "ar";
    setIsArabic(pathLang === "ar");
  }, [router.pathname]);

  const toggleLang = () => {
    const newPath = isArabic ? "/en/cvbuilder" : "/ar/cvbuilder";
    router.push(newPath);
  };

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <Head>
        <title>{isArabic ? "إنشاء السيرة الذاتية - سمسكو" : "Build Your CV - SMSCO"}</title>
        <meta
          name="description"
          content={
            isArabic
              ? "نموذج إنشاء السيرة الذاتية عبر منصة سمسكو"
              : "Create your resume using SMSCO's smart platform"
          }
        />
      </Head>

      <div className="container py-5">
        <div className="d-flex justify-content-between mb-4">
          <h2>{isArabic ? "أنشئ سيرتك الذاتية" : "Build Your CV"}</h2>
          <button onClick={toggleLang} className="btn btn-outline-secondary">
            {isArabic ? "English" : "العربية"}
          </button>
        </div>

        <form
          action="https://formspree.io/f/myzjnvbl"
          method="POST"
          className="card p-4 shadow-sm"
        >
          <div className="mb-3">
            <label className="form-label">
              {isArabic ? "الاسم الكامل" : "Full Name"}
            </label>
            <input className="form-control" name="fullName" type="text" required />
          </div>

          <div className="mb-3">
            <label className="form-label">
              {isArabic ? "البريد الإلكتروني" : "Email"}
            </label>
            <input className="form-control" name="email" type="email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">
              {isArabic ? "رقم الجوال" : "Phone"}
            </label>
            <input className="form-control" name="phone" type="text" />
          </div>

          <div className="mb-3">
            <label className="form-label">
              {isArabic ? "نبذة مختصرة" : "Summary"}
            </label>
            <textarea className="form-control" name="summary" rows="3" />
          </div>

          <div className="mb-3">
            <label className="form-label">
              {isArabic ? "الخبرات العملية" : "Work Experience"}
            </label>
            <textarea className="form-control" name="experience" rows="3" />
          </div>

          <div className="mb-3">
            <label className="form-label">
              {isArabic ? "المؤهلات التعليمية" : "Education"}
            </label>
            <textarea className="form-control" name="education" rows="3" />
          </div>

          <div className="mb-3">
            <label className="form-label">
              {isArabic ? "المهارات" : "Skills"}
            </label>
            <input className="form-control" name="skills" type="text" />
          </div>

          <button className="btn btn-success w-100" type="submit">
            {isArabic ? "إرسال السيرة الذاتية" : "Submit CV"}
          </button>
        </form>
      </div>
    </div>
  );
}
