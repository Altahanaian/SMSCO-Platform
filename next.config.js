/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localeDetection: true,
  },
  images: {
    domains: ['your-backend-domain.com'], // لو فيه صور من API
  },
};

module.exports = nextConfig;
