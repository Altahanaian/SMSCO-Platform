import React, { useState } from "react";
import { useTranslation } from "next-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        alert(t("message.sent"));
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
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder={t("contact.name")}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder={t("contact.email")}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={t("contact.message")}
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {status === "sending" ? t("contact.sending") : t("contact.submit")}
      </button>
    </form>
  );
}
