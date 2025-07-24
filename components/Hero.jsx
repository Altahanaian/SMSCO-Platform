import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  const isArabic = router.locale === "ar";

  return (
    <section
      className={`py-20 px-6 md:px-16 bg-white ${
        isArabic ? "rtl text-right" : "ltr text-left"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* النص */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
            {isArabic
              ? "منصة سمسكو الذكية للتوظيف والخدمات الإدارية"
              : "SMSCO Smart Platform for Hiring & Business Services"}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            {isArabic
              ? "انضم إلى الآلاف من الباحثين عن عمل والشركات واستفد من خدماتنا الذكية"
              : "Join thousands of job seekers and companies and benefit from our intelligent services"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/register-jobseeker"
              locale={router.locale}
              className="bg-[#6C47D9] hover:bg-[#5a38c2] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
            >
              {isArabic ? "سجّل كباحث عن عمل" : "Register as Jobseeker"}
            </Link>
            <Link
              href="/register-company"
              locale={router.locale}
              className="border border-[#6C47D9] text-[#6C47D9] hover:bg-[#f3efff] font-semibold py-3 px-6 rounded-lg shadow-sm transition duration-200"
            >
              {isArabic ? "سجّل كشركة" : "Register as Company"}
            </Link>
          </div>
        </div>

        {/* الصورة */}
        <div className="flex-1">
          <Image
            src="/images/hero-illustration.png"
            alt="SMSCO illustration"
            width={600}
            height={400}
            className="w-full max-w-md mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
