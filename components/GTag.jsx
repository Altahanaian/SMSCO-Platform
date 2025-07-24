import { useEffect } from "react";

const GTag = () => {
  useEffect(() => {
    // Load the gtag.js script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-VJRBV1EDZW";
    document.head.appendChild(script);

    // Initialize gtag
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VJRBV1EDZW');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return null;
};

export default GTag;