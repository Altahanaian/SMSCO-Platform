/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localeDetection: false // ✅ الصيغة الصحيحة
  },
  reactStrictMode: true,
}

module.exports = nextConfig;
// This configuration file sets up Next.js with internationalization (i18n) support for Arabic and English.
// It specifies Arabic as the default locale and disables automatic locale detection.