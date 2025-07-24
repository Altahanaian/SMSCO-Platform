import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const switchLanguage = (lang) => {
    router.push(asPath, asPath, { locale: lang });
  };

  return (
    <div className="flex justify-end p-4 gap-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`btn btn-sm ${locale === "en" ? "btn-primary" : "btn-outline-primary"}`}
      >
        English
      </button>
      <button
        onClick={() => switchLanguage("ar")}
        className={`btn btn-sm ${locale === "ar" ? "btn-secondary" : "btn-outline-secondary"}`}
      >
        العربية
      </button>
    </div>
  );
}
