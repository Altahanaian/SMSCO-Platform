import React, { useState } from "react";
import { useTranslation } from "next-i18next";

export default function CVBuilder() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          skills: form.skills.split(",").map((s) => s.trim())
        }),
      });

      if (res.ok) {
        setStatus("success");
        alert(t("message.sent"));
        setForm({ fullName: "", email: "", phone: "", summary: "", skills: "" });
      } else {
        setStatus("error");
        alert(t("message.error"));
      }
    } catch (err) {
      setStatus("error");
      alert(t("message.error"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <input
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder={t("cv.fullName")}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder={t("cv.email")}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder={t("cv.phone")}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="summary"
        value={form.summary}
        onChange={handleChange}
        placeholder={t("cv.summary")}
        className="w-full border p-2 rounded"
      />
      <textarea
        name="skills"
        value={form.skills}
        onChange={handleChange}
        placeholder={t("cv.skillsPlaceholder")}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-green-600 text-white py-2 px-4 rounded"
      >
        {status === "sending" ? t("cv.sending") : t("cv.submit")}
      </button>
    </form>
  );
}
