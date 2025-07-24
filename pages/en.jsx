
import Home from "../components/Home";
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
