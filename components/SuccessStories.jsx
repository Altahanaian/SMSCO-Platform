import { useRouter } from "next/router";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "سارة المطيري",
    role: "باحثة عن عمل",
    quote: "وجدت وظيفتي خلال أيام عبر سمسكو. واجهة سهلة وخدمة سريعة.",
    en: {
      name: "Sarah Al-Mutairi",
      role: "Job Seeker",
      quote: "I found my job within days using SMSCO. Smooth and fast experience.",
    },
  },
  {
    name: "شركة إنجاز",
    role: "جهة توظيف",
    quote: "سمسكو ساعدتنا في الوصول إلى مرشحين مؤهلين بكفاءة عالية.",
    en: {
      name: "Injaz Co.",
      role: "Employer",
      quote: "SMSCO helped us reach top-qualified candidates efficiently.",
    },
  },
  {
    name: "عبدالله العمري",
    role: "مطور برمجيات",
    quote: "التسجيل وإنشاء السيرة الذاتية كان سهل وسريع جدًا.",
    en: {
      name: "Abdullah Al-Omari",
      role: "Software Developer",
      quote: "Registering and building my CV was super easy and quick.",
    },
  },
];

export default function SuccessStories() {
  const { locale } = useRouter();
  const isArabic = locale === "ar";

  return (
    <section className={`bg-gray-50 py-20 px-6 md:px-16 ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          {isArabic ? "قصص النجاح" : "Success Stories"}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => {
            const content = isArabic ? t : t.en;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-gray-700"
              >
                <Quote className="text-[#6C47D9] mb-4" size={32} />
                <p className="italic mb-4 text-gray-600">"{content.quote}"</p>
                <h3 className="font-semibold text-gray-800">{content.name}</h3>
                <p className="text-sm text-gray-500">{content.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
