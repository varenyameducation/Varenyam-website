import Link from "next/link";
import { Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { site, nav, centres } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-teal-dark text-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1.6fr]">
        <div>
          <p className="text-xl font-bold">{site.name}</p>
          <p className="mt-1 text-sm font-medium uppercase tracking-wider text-brand-gold">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm text-white/70">{site.promise}</p>
          <div className="mt-5 flex gap-3">
            <Social href={site.social.instagram} label="Instagram"><Instagram size={18} /></Social>
            <Social href={site.social.facebook} label="Facebook"><Facebook size={18} /></Social>
            <Social href={site.social.youtube} label="YouTube"><Youtube size={18} /></Social>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">Our Centres</p>
          <ul className="mt-4 space-y-4 text-sm text-white/80">
            {centres.map((c) => (
              <li key={c.label}>
                <p className="font-semibold text-white">{c.label}</p>
                <p className="mt-1 flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{c.address}</span>
                </p>
                <p className="mt-1 flex items-center gap-2">
                  <Phone size={15} className="shrink-0" />
                  <a href={`tel:${c.tel}`} className="hover:text-white">{c.phone}</a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a href={site.portalUrl} className="hover:text-white">Student / Teacher Portal →</a>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
    >
      {children}
    </a>
  );
}
