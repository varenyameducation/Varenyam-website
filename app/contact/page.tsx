import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
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
          <div className="space-y-5">
            {centres.map((c, i) => (
              <div key={c.label} className="card card-hover p-6">
                <div className="flex items-center gap-3">
                  <span className="icon-tile h-10 w-10 text-sm font-bold">{i + 1}</span>
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-teal">{c.label}</p>
                </div>
                <p className="mt-4 flex items-start gap-3 text-slate-700">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-teal" />
                  {c.address}
                </p>
                <a href={`tel:${c.tel}`} className="mt-3 flex items-center gap-3 font-medium text-slate-700 transition-colors hover:text-brand-teal">
                  <Phone size={18} className="shrink-0 text-brand-teal" />
                  {c.phone}
                </a>
              </div>
            ))}
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100">
                <MessageCircle size={20} className="shrink-0" /> Chat on WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-teal/40 hover:text-brand-teal">
                <Mail size={20} className="shrink-0 text-brand-teal" /> {site.email}
              </a>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-slate-900">Send us an enquiry</h2>
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
