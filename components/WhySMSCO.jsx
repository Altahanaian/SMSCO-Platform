import { useRouter } from "next/router";
import { ShieldCheck, Users, CheckCircle, BarChart3 } from "lucide-react";

const items = [
  {
    icon: <ShieldCheck size={36} className="text-[#6C47D9]" />,
    title: {
      ar: "موثوقية عالية",
      en: "High Reliability",
    },
    desc: {
      ar: "نقدّم خدمات دقيقة وآمنة لجميع المستخدمين والجهات.",
      en: "We provide accurate and secure services for all users and companies.",
    },
  },
  {
    icon: <Users size={36} className="text-[#6C47D9]" />,
    title: {
      ar: "مجتمع متكامل",
      en: "Engaged Community",
    },
    desc: {
      ar: "نربط آلاف الباحثين عن عمل بأصحاب الفرص.",
      en: "Connecting thousands of job seekers with top opportunities.",
    },
  },
  {
    icon: <BarChart3 size={36} className="text-[#6C47D9]" />,
    title: {
      ar: "تحليلات متقدمة",
      en: "Advanced Analytics",
    },
    desc: {
      ar: "نتيح للجهات الاطلاع على أداء حملاتها وتفاعل المرشحين.",
      en: "Companies get insights into performance and applicant behavior.",
    },
  },
  {
    icon: <CheckCircle size={36} className="text-[#6C47D9]" />,
    title: {
      ar: "سهولة الاستخدام",
      en: "Ease of Use",
    },
    desc: {
      ar: "واجهة ذكية وسهلة تدعم اللغة العربية والإنجليزية.",
      en: "A smart, easy-to-use interface with bilingual support.",
    },
  },
];

export default function WhySMSCO() {
  const { locale } = useRouter();
  const isArabic = locale === "ar";

  return (
    <section className={`py-20 px-6 md:px-16 bg-white ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {isArabic ? "لماذا تختار سمسكو؟" : "Why Choose SMSCO?"}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title[locale]}
              </h3>
              <p className="text-gray-600">{item.desc[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
