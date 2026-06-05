import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — admissions, demos, and enquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Have a question about admissions or courses? We'd love to hear from you."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <ContactItem icon={Phone} label="Phone" value={site.contact.phone} href={`tel:${site.contact.phone}`} />
            <ContactItem icon={Mail} label="Email" value={site.contact.email} href={`mailto:${site.contact.email}`} />
            <ContactItem icon={MapPin} label="Address" value={site.contact.address} />
            <div className="rounded-2xl bg-brand-teal/5 p-6 text-sm leading-relaxed text-slate-600">
              <p className="font-semibold text-brand-teal">Visit our campus</p>
              <p className="mt-1">
                Walk in any day to meet our faculty and see how we teach. Free demo classes are
                available on request.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">Send us an enquiry</h2>
            <p className="mt-1 text-sm text-slate-500">
              Fill this in and we'll get back to you shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
        <Icon size={20} />
      </span>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="mt-0.5 text-slate-800">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}
