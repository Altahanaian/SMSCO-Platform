import React, { useState } from "react";
import { useTranslation } from "next-i18next";

export default function RegisterCompany() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    password: "",
    phone: "",
    industry: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/companies/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        alert(t("company.success"));
        setForm({
          companyName: "",
          contactPerson: "",
          email: "",
          password: "",
          phone: "",
          industry: ""
        });
      } else {
        setStatus("error");
        alert(t("company.error"));
      }
    } catch (err) {
      setStatus("error");
      alert(t("company.error"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <input
        name="companyName"
        value={form.companyName}
        onChange={handleChange}
        placeholder={t("company.companyName")}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="contactPerson"
        value={form.contactPerson}
        onChange={handleChange}
        placeholder={t("company.contactPerson")}
        className="w-full border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder={t("company.email")}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder={t("company.password")}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder={t("company.phone")}
        className="w-full border p-2 rounded"
      />
      <input
        name="industry"
        value={form.industry}
        onChange={handleChange}
        placeholder={t("company.industry")}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {status === "sending" ? t("company.sending") : t("company.submit")}
      </button>
    </form>
  );
}
