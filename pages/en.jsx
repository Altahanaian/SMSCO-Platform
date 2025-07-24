
import Home from "../components/Home";
import '../styles/styles-tailwind.css';
export default function Page(props) {
  return <Home locale="en" />;
}

export async function getStaticProps() {
  return {
    props: {
      locale: "en"
    }
  };
}
