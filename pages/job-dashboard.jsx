import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function JobDashboard() {
  const { locale } = useRouter();
  const isArabic = locale === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="container py-5">
      <Head>
        <title>{isArabic ? "لوحة الوظائف - سمسكو" : "Jobs Dashboard - SMSCO"}</title>
        <meta
          name="description"
          content={
            isArabic
              ? "عرض قائمة الوظائف المنشورة وإدارتها في منصة سمسكو"
              : "View and manage published jobs on the SMSCO platform"
          }
        />
      </Head>

      <h2 className="mb-4 text-center">
        {isArabic ? "الوظائف المتوفرة" : "Available Jobs"}
      </h2>

      <table className="table table-bordered bg-white">
        <thead className="table-light">
          <tr>
            <th>{isArabic ? "المسمى الوظيفي" : "Job Title"}</th>
            <th>{isArabic ? "الموقع" : "Location"}</th>
            <th>{isArabic ? "عدد المتقدمين" : "Applicants"}</th>
            <th>{isArabic ? "الإجراء" : "Actions"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{isArabic ? "مهندس برمجيات" : "Software Engineer"}</td>
            <td>{isArabic ? "الرياض" : "Riyadh"}</td>
            <td>15</td>
            <td>
              <Link href="#" legacyBehavior>
                <a className="btn btn-sm btn-primary me-2">
                  {isArabic ? "عرض" : "View"}
                </a>
              </Link>
              <Link href="#" legacyBehavior>
                <a className="btn btn-sm btn-danger">
                  {isArabic ? "حذف" : "Delete"}
                </a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
