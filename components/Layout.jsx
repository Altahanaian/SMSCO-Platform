import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Layout({ children }) {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation(); // الترجمة من ملفات locales

  const isArabic = locale === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={isArabic ? 'font-cairo' : ''}>
      <Head>
        <title>{t('meta.title', 'منصة سمسكو')}</title>
        <meta name="description" content={t('meta.description', 'منصة ذكية للتوظيف والخدمات الإدارية')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="p-4 px-8 border-b border-gray-200 flex justify-between items-center">
        <Link href={`/${locale}`}>
          <a className="font-bold text-xl text-primary">SMSCO</a>
        </Link>

        {/* زر تغيير اللغة */}
        <Link href={router.asPath} locale={isArabic ? 'en' : 'ar'}>
          <button className="lang-toggle">{isArabic ? 'English' : 'العربية'}</button>
        </Link>
      </header>

      <main className="p-8">{children}</main>

      <footer className="text-center py-6 border-t text-sm text-gray-500">
        <p>© SMSCO. {isArabic ? 'جميع الحقوق محفوظة 2025' : 'All rights reserved 2025'}</p>
        <div className="mt-2 space-x-4">
          <a href="https://twitter.com/Info_SMSCO" target="_blank" className="hover:underline">Twitter</a>
          <a href="https://www.linkedin.com/company/the-saudi-management-services-company/" target="_blank" className="hover:underline">LinkedIn</a>
          <a href="https://www.instagram.com/smsco_platform/" target="_blank" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
