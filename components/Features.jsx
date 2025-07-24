import { useRouter } from "next/router";
import { Briefcase, UserCheck, Globe2, Zap } from "lucide-react";

const features = [
  {
    icon: <Briefcase size={36} className="text-[#6C47D9]" />,
    title: { ar: "فرص توظيف ذكية", en: "Smart Hiring Opportunities" },
    desc: {
      ar: "نربطك بأفضل الفرص بدقة عبر الذكاء الاصطناعي.",
      en: "Connect to the best jobs with AI precision.",
    },
  },
  {
    icon: <UserCheck size={36} className="text-[#6C47D9]" />,
    title: { ar: "تجربة مستخدم مرنة", en: "User-Friendly Experience" },
    desc: {
      ar: "واجهة سلسة تدعم جميع الأجهزة واللغات.",
      en: "Smooth interface supporting all devices and languages.",
    },
  },
  {
    icon: <Globe2 size={36} className="text-[#6C47D9]" />,
    title: { ar: "دعم ثنائي اللغة", en: "Bilingual Support" },
    desc: {
      ar: "تصفح المحتوى بالكامل بالعربية أو الإنجليزية.",
      en: "Browse all content in Arabic or English.",
    },
  },
  {
    icon: <Zap size={36} className="text-[#6C47D9]" />,
    title: { ar: "خدمات ذكية وسريعة", en: "Smart & Fast Services" },
    desc: {
      ar: "نوفّر أدوات ذكية للتوظيف والخدمات الإدارية.",
      en: "We provide smart tools for hiring and business services.",
    },
  },
];

export default function Features() {
  const { locale } = useRouter();
  const isArabic = locale === "ar";

  return (
    <section className={`py-20 px-6 md:px-16 bg-gray-50 ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {isArabic ? "ميزات منصة سمسكو" : "Key Features of SMSCO"}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title[locale]}
              </h3>
              <p className="text-gray-600">{feature.desc[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
