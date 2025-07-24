
import Home from "../components/Home";
export default function Page(props) {
  return <Home locale="ar" />;
}

export async function getStaticProps() {
  return {
    props: {
      locale: "ar"
    }
  };
}
