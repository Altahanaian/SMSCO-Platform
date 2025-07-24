import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const isArabic = locale === "ar";

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => setMounted(true), []);

  const switchLocale = () => {
    const newLocale = isArabic ? "en" : "ar";
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  if (!mounted) return null;

  const links = [
    { href: "#features", ar: "الميزات", en: "Features" },
    { href: "#why", ar: "لماذا سمسكو؟", en: "Why SMSCO?" },
    { href: "#success", ar: "قصص النجاح", en: "Success Stories" },
    { href: "#contact", ar: "اتصل بنا", en: "Contact" },
  ];

  const logoSrc = isArabic ? "/logo-ar.svg" : "/logo-en.svg";

  return (
    <nav className="w-full bg-white shadow fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="SMSCO Logo"
            width={160}
            height={50}
            priority
          />
          <span className="text-xl font-bold text-blue-700">
            {isArabic ? "سمسكو" : "SMSCO"}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center text-sm md:text-base">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600"
            >
              {isArabic ? link.ar : link.en}
            </a>
          ))}
          <button
            onClick={switchLocale}
            className="ml-4 px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition"
          >
            {isArabic ? "English" : "العربية"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 text-sm flex flex-col gap-3 bg-white shadow">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {isArabic ? link.ar : link.en}
            </a>
          ))}
          <button
            onClick={() => {
              switchLocale();
              setIsOpen(false);
            }}
            className="mt-2 px-3 py-1 w-fit rounded border border-gray-300 hover:bg-gray-100"
          >
            {isArabic ? "English" : "العربية"}
          </button>
        </div>
      )}
    </nav>
  );
}
