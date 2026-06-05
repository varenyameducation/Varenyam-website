import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { site, centres } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — admissions and enquiries at our two Indore centres.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Visit either of our Indore centres or send us an enquiry — we'd love to hear from you."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            {centres.map((c) => (
              <div key={c.label} className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">{c.label}</p>
                <p className="mt-3 flex items-start gap-3 text-slate-700">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-teal" />
                  {c.address}
                </p>
                <a href={`tel:${c.tel}`} className="mt-2 flex items-center gap-3 text-slate-700 hover:text-brand-teal">
                  <Phone size={18} className="shrink-0 text-brand-teal" />
                  {c.phone}
                </a>
              </div>
            ))}
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 px-1 text-slate-700 hover:text-brand-teal">
              <Mail size={18} className="shrink-0 text-brand-teal" />
              {site.email}
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">Send us an enquiry</h2>
            <p className="mt-1 text-sm text-slate-500">Fill this in and we'll get back to you shortly.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
