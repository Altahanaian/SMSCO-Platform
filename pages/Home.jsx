import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhySMSCO from "../components/WhySMSCO";
import SuccessStories from "../components/SuccessStories";
import VideoSection from "../components/VideoSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { locale } = useRouter();
  const isArabic = locale === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <Head>
        <title>{isArabic ? "سمسكو - منصة الخدمات الإدارية" : "SMSCO - Smart Management Platform"}</title>
        <meta
          name="description"
          content={
            isArabic
              ? "منصة ذكية للتوظيف والخدمات الإدارية في السعودية"
              : "A smart platform for recruitment and business services in Saudi Arabia"
          }
        />
      </Head>

      <Navbar />
      <main className="mt-20 space-y-24">
        <Hero />
        <Features />
        <WhySMSCO />
        <SuccessStories />
        <VideoSection />

        {/* ===================== التسجيل الذكي ===================== */}
        <section className="py-20 bg-gray-50 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-800">
            {isArabic ? "ابدأ الآن مع سمسكو" : "Get Started with SMSCO"}
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            {isArabic
              ? "سجّل كفرد أو كشركة وابدأ باستخدام حلولنا الذكية"
              : "Register as an individual or company and start using our smart solutions"}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/register-individual">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
                {isArabic ? "تسجيل الأفراد" : "Register as Individual"}
              </button>
            </Link>
            <Link href="/register-company">
              <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
                {isArabic ? "تسجيل الشركات" : "Register as Company"}
              </button>
            </Link>
            <Link href="/cv-builder">
              <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300">
                {isArabic ? "أنشئ سيرتك الذاتية" : "Build Your CV"}
              </button>
            </Link>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
