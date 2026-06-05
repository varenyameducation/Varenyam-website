"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { site, nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal">
            <Image src="/brand/varenyam-logo-mark.png" alt={site.name} width={28} height={26} priority />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-brand-teal">{site.shortName}</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-brand-red">{site.tagline}</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-teal"
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${site.primaryPhone.replace(/\s/g, "")}`} className="btn-primary">
            <Phone size={16} /> Call Now
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-teal lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <nav className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-base font-medium text-slate-700 hover:bg-brand-teal/5 hover:text-brand-teal"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${site.primaryPhone.replace(/\s/g, "")}`} className="btn-primary mt-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
