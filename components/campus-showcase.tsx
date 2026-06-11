import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

/**
 * Mobile-only campus showcase — sits directly under the hero on phones/tablets.
 * Rendered with `lg:hidden`, so the desktop layout is completely unaffected.
 */
export function CampusShowcase() {
  return (
    <section className="relative bg-ink px-5 pb-16 pt-3 lg:hidden">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_60px_-22px_rgba(0,0,0,0.75)]">
        {/* campus building artwork */}
        <Image
          src="/hero/hero-bg.webp"
          alt="Varenyam Education Centre campus, Indore"
          fill
          sizes="100vw"
          className="object-cover object-[62%_18%]"
        />
        {/* readability wash: dark on the left for copy, fading toward the building on the right */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.82) 44%, rgba(2,6,23,0.28) 100%), linear-gradient(180deg, rgba(2,6,23,0.15) 0%, rgba(2,6,23,0.82) 100%)",
          }}
        />

        <div className="relative flex flex-col gap-5 p-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
              Varenyam Education Centre
            </p>
            <p className="mt-3 font-display text-5xl font-bold leading-none text-white">15+</p>
            <p className="mt-2 font-display text-xl font-semibold text-white">Years of Excellence</p>
            <span className="mt-3 block h-[3px] w-12 rounded-full bg-brand-orange" />
          </div>

          <p className="font-display text-lg font-semibold leading-snug text-white">
            Real Campus.<br />Real Mentors.<br />Real Results.
          </p>

          <Link
            href="/contact"
            className="relative flex h-[58px] w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <MapPin size={18} className="text-brand-cyan" /> Visit Our Campus
            <ArrowRight size={18} className="absolute right-5 text-white/70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
