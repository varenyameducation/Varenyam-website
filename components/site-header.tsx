"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { site, nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tel = site.primaryPhone.replace(/\s/g, "");
  const light = scrolled || open; // light chrome over the page; transparent over the dark hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        light
          ? "border-b border-slate-200/70 bg-white/80 shadow-nav backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        {/* logo — mark + wordmark, no container */}
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/brand/varenyam-logo-mark.png"
            alt={site.name}
            width={34}
            height={31}
            priority
            className="h-8 w-auto transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          <span className="flex flex-col leading-none">
            <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-navy" : "text-white"}`}>
              {site.shortName}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
              {site.tagline}
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={`nav-link ${
                  light
                    ? "text-slate-600 hover:text-navy data-[active=true]:text-navy"
                    : "text-white/75 hover:text-white data-[active=true]:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={`tel:${tel}`} className="btn-primary h-11 px-5">
            <Phone size={15} /> Call Now
          </a>
        </nav>

        {/* mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${tel}`}
            aria-label="Call now"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-dark px-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_-10px_rgba(255,107,26,0.7)]"
          >
            <Phone size={15} /> Call
          </a>
          <button
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              light ? "text-navy hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="border-t border-slate-200/70 bg-white lg:hidden">
          <div className="container-x flex flex-col py-3">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-2 py-3 text-base font-medium transition-colors ${
                    active ? "text-brand-teal" : "text-slate-700 hover:bg-slate-50 hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={`tel:${tel}`} className="btn-primary mt-2 w-full">
              <Phone size={15} /> Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
