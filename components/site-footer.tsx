import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { site, nav, centres } from "@/lib/site";

const programmes = [
  { label: "JEE (PCM)", href: "/courses" },
  { label: "NEET (PCB)", href: "/courses" },
  { label: "Foundation 6–10", href: "/courses" },
  { label: "Commerce 11–12", href: "/courses" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* warm-to-navy seam so the CTA band melts into the footer */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

      {/* texture + glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-teal/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-cyan/10 blur-[120px]" />

      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.6fr]">
        {/* brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/brand/varenyam-logo-mark.png" alt="" width={36} height={33} className="h-9 w-auto" />
            <span className="font-display text-xl font-bold">{site.shortName}</span>
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">{site.description}</p>
          <div className="mt-6 flex gap-3">
            <Social href={site.social.instagram} label="Instagram"><Instagram size={18} /></Social>
            <Social href={site.social.linkedin} label="LinkedIn"><Linkedin size={18} /></Social>
          </div>
        </div>

        {/* programmes */}
        <FooterCol title="Programmes">
          {programmes.map((p) => (
            <FooterLink key={p.label} href={p.href}>{p.label}</FooterLink>
          ))}
        </FooterCol>

        {/* quick links */}
        <FooterCol title="Quick Links">
          {nav.map((item) => (
            <FooterLink key={item.href} href={item.href}>{item.label}</FooterLink>
          ))}
        </FooterCol>

        {/* centres */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">Our Centres</p>
          <ul className="mt-5 space-y-5 text-sm text-white/70">
            {centres.map((c) => (
              <li key={c.label}>
                <p className="font-semibold text-white">{c.label}</p>
                <p className="mt-1.5 flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-brand-cyan" />
                  <span>{c.address}</span>
                </p>
                <p className="mt-1.5 flex items-center gap-2">
                  <Phone size={15} className="shrink-0 text-brand-cyan" />
                  <a href={`tel:${c.tel}`} className="transition-colors hover:text-white">{c.phone}</a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a href={site.portalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-white">
            Student / Teacher Portal <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-white/70">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="group inline-flex items-center gap-1 transition-colors hover:text-white">
        <span className="h-px w-0 bg-brand-cyan transition-all duration-300 group-hover:w-4" />
        {children}
      </Link>
    </li>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-cyan/50 hover:bg-white/10"
    >
      {children}
    </a>
  );
}
