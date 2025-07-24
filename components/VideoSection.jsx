import { useRouter } from "next/router";

export default function VideoSection() {
  const { locale } = useRouter();
  const isArabic = locale === "ar";

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className={`max-w-5xl mx-auto ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          {isArabic ? "فيديو تعريفي عن سمسكو" : "Introductory Video About SMSCO"}
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          {isArabic
            ? "شاهد هذا الفيديو القصير للتعرف على كيفية عمل منصة سمسكو وكيف يمكنها مساعدتك في التوظيف أو إيجاد الكفاءات."
            : "Watch this short video to learn how SMSCO works and how it can help you hire or get hired."}
        </p>

        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/fL8eqVt6p68"
            title="SMSCO Platform Intro"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
