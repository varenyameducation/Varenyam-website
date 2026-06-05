"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

// Static-site friendly: composes a mailto: link from the form fields so we need
// no server/API. Swap for Formspree/Resend/an API route later if you want
// inbox capture without the user's mail client.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const course = String(data.get("course") || "");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0ACourse: ${course}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:${site.email}?subject=Enquiry from ${encodeURIComponent(
      name,
    )}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Full name" required />
        <Field name="phone" label="Phone" type="tel" required />
      </div>
      <Field name="course" label="Course of interest" placeholder="JEE / NEET / Foundation / Board" />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
          placeholder="Tell us what you'd like to know"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Send size={16} /> Send Enquiry
      </button>
      {sent && (
        <p className="text-sm text-brand-teal">
          Opening your email app to send the enquiry. If nothing happens, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
      />
    </div>
  );
}
