import React, { useState } from "react";
import { useTranslation } from "next-i18next";

export default function RegisterJobseeker() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role: "JOBSEEKER" }),
      });

      if (res.ok) {
        setStatus("success");
        alert(t("register.success"));
        setForm({ fullName: "", email: "", password: "", phone: "" });
      } else {
        setStatus("error");
        alert(t("register.error"));
      }
    } catch (err) {
      setStatus("error");
      alert(t("register.error"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <input
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder={t("register.fullName")}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder={t("register.email")}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder={t("register.password")}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder={t("register.phone")}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {status === "sending" ? t("register.sending") : t("register.submit")}
      </button>
    </form>
  );
}
