import { useEffect, useState } from "react";
import Head from "next/head";

export default function JobseekerDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("/api/applications?userId=1")
      .then((res) => res.json())
      .then((data) => setApplications(data || []));
  }, []);

  return (
    <div dir="rtl">
      <Head>
        <title>لوحة الباحث عن عمل - سمسكو</title>
        <meta name="description" content="عرض جميع طلبات التوظيف الخاصة بك عبر منصة سمسكو." />
      </Head>

      <div className="container py-5">
        <h2 className="mb-4 text-center">طلباتي الوظيفية</h2>

        {applications.length === 0 ? (
          <p className="text-muted text-center">لا توجد طلبات حالياً.</p>
        ) : (
          <table className="table table-bordered bg-white">
            <thead className="table-light">
              <tr>
                <th>المسمى الوظيفي</th>
                <th>تاريخ التقديم</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, idx) => (
                <tr key={idx}>
                  <td>{app.title}</td>
                  <td>{app.date}</td>
                  <td>
                    <span className="badge bg-info">
                      {app.status === "pending"
                        ? "قيد المراجعة"
                        : app.status === "accepted"
                        ? "مقبول"
                        : app.status === "rejected"
                        ? "مرفوض"
                        : "غير معروف"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
