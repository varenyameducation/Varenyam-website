import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { site, toppers } from "@/lib/site";

/**
 * Short, premium conversion banner above the footer. Teal panel, content on the
 * left, the studying student bleeding in on the right with a soft left-fade, and
 * a floating "200+ Selections" glass card. Compact height — not a full section.
 */
export function CtaBand({
  eyebrow = "Start Your Success Journey",
  title = "Your Dream Rank Starts With The Right Guidance.",
  subtitle = "Join thousands of successful students who trusted Varenyam for their preparation journey.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const tel = site.primaryPhone.replace(/\s/g, "");
  const avatars = toppers.slice(0, 4);

  return (
    <section className="py-10 sm:py-12">
      <div className="container-x">
        <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-teal-light via-brand-teal to-brand-teal-dark shadow-[0_30px_70px_-34px_rgba(14,110,132,0.7)]">
          {/* depth: texture + light sources */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.22]" />
          <div className="pointer-events-none absolute -left-10 -top-16 h-56 w-56 rounded-full bg-brand-cyan/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-16 right-1/3 h-56 w-56 rounded-full bg-brand-gold/15 blur-[90px]" />

          {/* student image — bleeds in from the right, fades into teal on the left */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[38%] max-w-[440px] md:block"
            style={{
              maskImage: "linear-gradient(to right, transparent, #000 42%)",
              WebkitMaskImage: "linear-gradient(to right, transparent, #000 42%)",
            }}
          >
            <Image
              src="/photos/hero-student.png"
              alt="Varenyam student studying"
              fill
              sizes="440px"
              className="object-cover object-[center_22%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-dark/40 to-transparent" />
          </div>

          {/* floating achievement card */}
          <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
            <div className="rounded-2xl border border-white/60 bg-white/85 px-5 py-4 shadow-lift backdrop-blur-md">
              <p className="font-display text-3xl font-extrabold leading-none text-brand-teal">200+</p>
              <p className="mt-1 text-xs font-semibold text-slate-600">Selections<br />Every Year</p>
              <div className="mt-3 flex -space-x-2">
                {avatars.map((a) => (
                  <span key={a.name} className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-white">
                    <Image src={a.photo} alt="" fill sizes="28px" className="object-cover" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* content */}
          <div className="relative z-10 max-w-xl px-7 py-9 sm:px-10 sm:py-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">{subtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-cta px-7">
                Book a Free Demo
                <ArrowRight size={17} />
              </Link>
              <a href={`tel:${tel}`} className="btn-glass px-7">
                <Phone size={16} /> Call Now: {site.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
