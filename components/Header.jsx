import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const isArabic = router.locale === "ar";
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "/about", label: isArabic ? "من نحن" : "About" },
    { href: "/contact", label: isArabic ? "اتصل بنا" : "Contact" },
    { href: "/register-company", label: isArabic ? "تسجيل الشركات" : "Company Register" },
    { href: "/register-jobseeker", label: isArabic ? "تسجيل الأفراد" : "Jobseeker Register" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-10 border-t">
      <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 font-semibold text-[#6C47D9]">
          © {currentYear} SMSCO. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </div>

        <nav className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} locale={router.locale} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
