// components/Logo.js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Logo() {
  const { locale } = useRouter();
  const [logoSrc, setLogoSrc] = useState('/logo-en.svg');

  useEffect(() => {
    setLogoSrc(locale === 'ar' ? '/logo-ar.svg' : '/logo-en.svg');
  }, [locale]);

  return (
    <Image
      src={logoSrc}
      alt="SMSCO Logo"
      width={160}
      height={50}
      priority
    />
  );
}
