import React from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const { locale, pathname } = useRouter();
  const isArabic = pathname.startsWith("/ar") || locale === "ar";

  return (
    <footer className="bg-white text-center py-4 mt-5 border-t">
      <p className="mb-1 text-sm text-gray-600">
        {isArabic
          ? "© 2025 سمسكو. جميع الحقوق محفوظة."
          : "© 2025 SMSCO. All rights reserved."}
      </p>
      <div className="flex justify-center gap-4 mt-2 text-sm">
        <a
          href="https://twitter.com/Info_SMSCO"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1DA1F2] hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/company/the-saudi-management-services-company/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/smsco_platform/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:underline"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
