// pages/_app.jsx
import "../styles/styles-tailwind.css";
import GTag from "../components/GTag";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics Tag */}
      <GTag trackingId="G-VJRBV1EDZW" />
      
      {/* Render page */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
