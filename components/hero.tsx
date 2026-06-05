import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Phone, GraduationCap, Star, TrendingUp, Users, Trophy,
  Atom, Stethoscope, BookOpen, LineChart, Award, ShieldCheck,
} from "lucide-react";
import { site, directors } from "@/lib/site";

const exams = [
  { label: "JEE", icon: Atom },
  { label: "NEET", icon: Stethoscope },
  { label: "CBSE", icon: BookOpen },
  { label: "Commerce", icon: LineChart },
];

const bottomMetrics = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "5,000+", label: "Students Taught" },
  { icon: TrendingUp, value: "97%", label: "Top Board Score" },
  { icon: ShieldCheck, value: "20+", label: "Expert Faculty" },
];

export function Hero() {
  const tel = site.primaryPhone.replace(/\s/g, "");

  return (
    <section className="relative isolate grain overflow-hidden bg-ink">
      {/* ── background artwork (preserved, full-cover) ── */}
      <Image
        src="/hero/hero-bg.webp"
        alt="Varenyam student in front of the Varenyam Education Centre, Indore"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] lg:object-center"
      />

      {/* ── overlays for readability ── */}
      {/* desktop: left→right dark wash */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.88) 35%, rgba(2,6,23,0.55) 60%, rgba(2,6,23,0.15) 100%)",
        }}
      />
      {/* mobile: vertical wash */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(2,6,23,0.78) 55%, rgba(2,6,23,0.96) 100%)",
        }}
      />

      {/* ── texture + glow on the dark left zone ── */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-brand-cyan/20 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute left-1/3 top-0 h-72 w-72 rounded-full bg-brand-orange/10 blur-[110px]" />

      {/* ── content ── */}
      <div className="container-x relative z-10 flex min-h-[680px] flex-col justify-center pb-44 pt-32 lg:min-h-[940px] lg:pb-52 lg:pt-36">
        <div className="max-w-[660px]">
          {/* badge */}
          <div className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]">
            <GraduationCap size={16} className="text-brand-cyan" />
            <span className="tracking-wide">JEE</span>
            <Dot /> <span>NEET</span>
            <Dot /> <span>CBSE</span>
            <Dot /> <span className="text-brand-gold">FOUNDATION</span>
          </div>

          {/* headline */}
          <h1 className="animate-rise-in mt-6 font-display text-[2.85rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.1rem] lg:leading-[0.98]" style={{ animationDelay: "0.08s" }}>
            Where Focused<br />
            Preparation Meets<br />
            <span className="text-gradient-teal">Real Results</span>
            <span className="text-brand-orange">.</span>
          </h1>

          {/* description */}
          <p className="animate-rise-in mt-6 max-w-[560px] text-lg leading-relaxed text-white/70" style={{ animationDelay: "0.16s" }}>
            {site.name} prepares students for board and competitive exams with expert
            faculty, structured programs, and a proven test-practice system.
          </p>

          {/* CTAs */}
          <div className="animate-rise-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.24s" }}>
            <Link href="/courses" className="btn-cta group px-8">
              Explore Courses
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={`tel:${tel}`} className="btn-glass px-8">
              <Phone size={17} /> Book a Free Demo
            </a>
          </div>

          {/* trust row */}
          <div className="animate-rise-in mt-10 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ animationDelay: "0.32s" }}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {directors.map((d) => (
                  <span key={d.name} className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-ink">
                    <Image src={d.photo} alt="" fill className="object-cover" sizes="36px" />
                  </span>
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal text-[10px] font-bold text-white ring-2 ring-ink">
                  5k+
                </span>
              </div>
              <p className="text-sm leading-tight text-white/75">
                Trusted by <span className="font-semibold text-white">5,000+</span> students<br className="hidden sm:block" /> across India
              </p>
            </div>
            <span className="hidden h-8 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2">
              <Star size={18} className="fill-brand-gold text-brand-gold" />
              <p className="text-sm text-white/75">
                <span className="font-semibold text-white">4.9/5</span> Student Rating
              </p>
            </div>
          </div>
        </div>

        {/* ── floating metric cards (desktop) ── */}
        <div className="absolute right-8 top-1/2 hidden w-[300px] -translate-y-1/2 flex-col gap-3 xl:flex">
          <MetricCard icon={TrendingUp} value="97%" label="Top Board Score" sub="Consistent excellence" delay="0.4s" />
          <MetricCard icon={Users} value="1,500+" label="Students Mentored" sub="Across our centres" delay="0.5s" />
          <MetricCard icon={Trophy} value="200+" label="Selections" sub="Every single year" delay="0.6s" />
          <div className="animate-slide-in-right glass rounded-2xl p-5 shadow-glass" style={{ animationDelay: "0.7s" }}>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-brand-cyan">Exams We Cover</p>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {exams.map((e) => (
                <div key={e.label} className="flex flex-col items-center gap-1.5">
                  <e.icon size={18} className="text-white/85" />
                  <span className="text-[10px] font-medium text-white/65">{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── elevated bottom metrics bar ── */}
      <div className="container-x absolute inset-x-0 bottom-6 z-10 lg:bottom-10">
        <div className="animate-rise-in glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-3xl shadow-glass-lg sm:grid-cols-4" style={{ animationDelay: "0.5s" }}>
          {bottomMetrics.map((m) => (
            <div key={m.label} className="flex items-center gap-3 px-5 py-5 lg:px-7 lg:py-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brand-cyan ring-1 ring-white/10">
                <m.icon size={20} />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-white">{m.value}</p>
                <p className="text-xs text-white/55">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-white/40" />;
}

function MetricCard({
  icon: Icon, value, label, sub, delay,
}: {
  icon: typeof TrendingUp; value: string; label: string; sub: string; delay: string;
}) {
  return (
    <div className="animate-slide-in-right glass flex items-center gap-4 rounded-2xl p-5 shadow-glass" style={{ animationDelay: delay }}>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-teal/20 text-brand-cyan ring-1 ring-white/10">
        <Icon size={22} />
      </span>
      <div>
        <p className="font-display text-2xl font-bold leading-none text-white">{value}</p>
        <p className="mt-1 text-sm font-medium text-white">{label}</p>
        <p className="text-xs text-white/50">{sub}</p>
      </div>
    </div>
  );
}
