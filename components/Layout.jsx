// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>منصة سمسكو</title>
        <meta name="description" content="منصة ذكية للتوظيف والخدمات الإدارية" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee' }}>
        <Link href="/">
          <a style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>SMSCO</a>
        </Link>
        <div style={{ float: 'left' }}>
          <Link href="/en"><button>English</button></Link>
        </div>
      </header>

      <main style={{ padding: '2rem' }}>
        {children}
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #eee', fontSize: '0.9rem' }}>
        <p>© SMSCO. All rights reserved 2025</p>
        <div>
          <a href="https://twitter.com/Info_SMSCO" target="_blank" rel="noreferrer">Twitter</a> |
          <a href="https://www.linkedin.com/company/the-saudi-management-services-company/" target="_blank" rel="noreferrer">LinkedIn</a> |
          <a href="https://www.instagram.com/smsco_platform/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </>
  );
}
