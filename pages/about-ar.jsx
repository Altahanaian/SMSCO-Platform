import Head from "next/head";
import Link from "next/link";

export default function AboutAr() {
  return (
    <div dir="rtl">
      <Head>
        <title>من نحن - منصة سمسكو</title>
        <meta name="description" content="تعرف على منصة سمسكو، منصة ذكية سعودية للتوظيف والخدمات الإدارية." />
      </Head>

      <div className="container mt-5">
        <h2 className="text-center mb-4">منصة سمسكو</h2>
        <div className="card p-4 shadow-sm">
          <p className="lead">
            سمسكو هي منصة سعودية ذكية تهدف إلى ربط الباحثين عن عمل بالجهات التي تبحث عن موظفين دائمين أو مؤقتين أو عن بُعد، وذلك من خلال تجربة احترافية ومبسطة.
          </p>
          <p>
            تقدم المنصة خدمات متكاملة تشمل إنشاء السير الذاتية، تصفح الوظائف، التقديم بسهولة، وإنشاء حسابات مخصصة للأفراد والشركات، مع دعم كامل للغة العربية والإنجليزية.
          </p>
          <p>
            نسعى في سمسكو إلى بناء مستقبل مهني أكثر كفاءة ومرونة في المملكة العربية السعودية من خلال تقنيات حديثة وتجربة مستخدم عالية الجودة.
          </p>
        </div>

        <div className="mt-5 text-center">
          <Link href="/">
            <a className="btn btn-primary">العودة إلى الصفحة الرئيسية</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
