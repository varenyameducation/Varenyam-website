import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Phone, GraduationCap, Star, TrendingUp, Users, Trophy,
  Atom, Stethoscope, BookOpen, LineChart, Target, ChevronDown,
} from "lucide-react";
import { site, directors } from "@/lib/site";

const exams = [
  { label: "JEE", icon: Atom },
  { label: "NEET", icon: Stethoscope },
  { label: "CBSE", icon: BookOpen },
  { label: "Commerce", icon: LineChart },
];

const trust = [
  { icon: Star, value: "4.9/5", label: "Rating" },
  { icon: Users, value: "5,000+", label: "Students" },
  { icon: Target, value: "97%", label: "Success Rate" },
];

export function Hero() {
  const tel = site.primaryPhone.replace(/\s/g, "");

  return (
    <section className="relative isolate grain overflow-hidden bg-ink">
      {/* ── shared background artwork ── */}
      <Image
        src="/hero/hero-bg.webp"
        alt="Varenyam student in front of the Varenyam Education Centre, Indore"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[57%_20%] lg:object-[center_28%]"
      />

      {/* texture + glow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-brand-cyan/20 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute left-1/3 top-0 h-72 w-72 rounded-full bg-brand-orange/10 blur-[110px]" />

      {/* ════════════════ DESKTOP ════════════════ */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,6,23,0.96) 0%, rgba(2,6,23,0.86) 34%, rgba(2,6,23,0.5) 60%, rgba(2,6,23,0.12) 100%)",
        }}
      />
      <div className="relative z-10 hidden min-h-[640px] flex-col lg:flex lg:min-h-screen">
        {/* main row — copy left, floating cards right; flexes to fill, so the
            stats bar below always sits in normal flow and never overlaps */}
        <div className="container-x flex flex-1 items-center gap-10 pt-28 pb-8">
          <div className="max-w-[600px]">
            <Badge />
            <h1 className="animate-rise-in mt-6 font-display text-[3.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-white" style={{ animationDelay: "0.08s" }}>
              Where Focused<br />Preparation Meets<br />
              <span className="text-gradient-teal">Real Results</span>
              <span className="text-brand-orange">.</span>
            </h1>
            <p className="animate-rise-in mt-6 max-w-[520px] text-lg leading-relaxed text-white/70" style={{ animationDelay: "0.16s" }}>
              {site.name} prepares students for board and competitive exams with expert
              faculty, structured programs, and a proven test-practice system.
            </p>
            <div className="animate-rise-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.24s" }}>
              <Link href="/courses" className="btn-cta group px-8">
                Explore Courses
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${tel}`} className="btn-glass px-8">
                <Phone size={17} /> Book a Free Demo
              </a>
            </div>
            <TrustRow className="animate-rise-in mt-9" delay="0.32s" />
          </div>

          {/* interactive floating cards — anchored lower-right so they clear
              the Varenyam board in the upper-right of the artwork */}
          <div className="ml-auto hidden w-[290px] shrink-0 flex-col gap-3 self-end pb-2 xl:flex">
            <MetricCard href="/results" icon={TrendingUp} value="97%" label="Top Board Score" sub="Consistent excellence" delay="0.4s" />
            <MetricCard href="/about" icon={Users} value="1,500+" label="Students Mentored" sub="Across our centres" delay="0.5s" />
            <MetricCard href="/results" icon={Trophy} value="200+" label="Selections" sub="Every single year" delay="0.6s" />
            <Link
              href="/courses"
              className="group animate-slide-in-right glass rounded-2xl p-5 shadow-glass transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-glow active:scale-[0.98]"
              style={{ animationDelay: "0.7s" }}
            >
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-brand-cyan">Exams We Cover</p>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {exams.map((e) => (
                  <div key={e.label} className="flex flex-col items-center gap-1.5">
                    <e.icon size={18} className="text-white/85 transition-colors group-hover:text-brand-cyan" />
                    <span className="text-[10px] font-medium text-white/65">{e.label}</span>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>

        {/* bottom stats bar — in normal flow, pinned to the hero base */}
        <div className="container-x pb-8">
          <div className="animate-rise-in glass-strong grid grid-cols-4 overflow-hidden rounded-2xl shadow-glass-lg" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "15+", label: "Years of Excellence" },
              { value: "5,000+", label: "Students Taught" },
              { value: "97%", label: "Top Board Score" },
              { value: "20+", label: "Expert Faculty" },
            ].map((m, i) => (
              <div key={m.label} className={`px-6 py-5 ${i > 0 ? "border-l border-white/10" : ""}`}>
                <p className="font-display text-2xl font-bold text-white">{m.value}</p>
                <p className="text-xs text-white/55">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════ MOBILE ════════════════ */}
      <div className="relative z-10 flex min-h-[1120px] flex-col lg:hidden">
        {/* full-height dark wash over the shared artwork: readable top, visible student, dark base */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(2,6,23,0.94) 0%, rgba(2,6,23,0.82) 30%, rgba(2,6,23,0.12) 52%, rgba(2,6,23,0.5) 80%, #020617 96%)",
          }}
        />
        {/* glow behind student */}
        <div className="pointer-events-none absolute left-1/2 top-[46%] h-72 w-72 -translate-x-1/2 rounded-full bg-brand-teal/25 blur-[100px]" />

        {/* top text zone */}
        <div className="relative px-5 pt-28">
          <Badge />
          <h1 className="animate-rise-in mt-6 font-display text-[2.05rem] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]" style={{ animationDelay: "0.08s" }}>
            Where Focused<br />Preparation Meets<br />
            <span className="text-gradient-teal">Real Results</span>
            <span className="text-brand-orange">.</span>
          </h1>
          <p className="animate-rise-in mt-6 max-w-[300px] text-lg leading-relaxed text-white/75" style={{ animationDelay: "0.16s" }}>
            Structured coaching for board and competitive exams, with proven results and expert faculty.
          </p>
          <div className="animate-rise-in mt-8 flex flex-col gap-4" style={{ animationDelay: "0.24s" }}>
            <Link href="/courses" className="btn-cta group w-full">
              Explore Courses
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={`tel:${tel}`} className="btn-glass w-full">
              <Phone size={17} /> Book a Free Demo
            </a>
          </div>
        </div>

        {/* bottom: trust stat bar + scroll cue */}
        <div className="relative mt-auto px-5 pb-10 pt-6">
          <div className="glass-strong grid grid-cols-3 overflow-hidden rounded-2xl shadow-glass">
            {trust.map((t, i) => (
              <div key={t.label} className={`flex min-w-0 flex-col items-center gap-1 px-1 py-5 text-center ${i > 0 ? "border-l border-white/10" : ""}`}>
                <t.icon size={18} className={i === 0 ? "fill-brand-gold text-brand-gold" : "text-brand-cyan"} />
                <p className="font-display text-lg font-bold text-white">{t.value}</p>
                <p className="text-[10px] leading-tight text-white/55">{t.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 text-white/55">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 animate-float">
              <ChevronDown size={18} />
            </span>
            <span className="text-xs">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge() {
  return (
    <div className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]">
      <GraduationCap size={16} className="text-brand-cyan" />
      <span className="tracking-wide">JEE</span> <Dot /> <span>NEET</span> <Dot />{" "}
      <span>CBSE</span> <Dot /> <span className="text-brand-gold">FOUNDATION</span>
    </div>
  );
}

function TrustRow({ className = "", delay }: { className?: string; delay?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-4 ${className}`} style={delay ? { animationDelay: delay } : undefined}>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          {directors.map((d) => (
            <span key={d.name} className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-ink">
              <Image src={d.photo} alt="" fill className="object-cover object-[center_40%]" sizes="36px" />
            </span>
          ))}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal text-[10px] font-bold text-white ring-2 ring-ink">5k+</span>
        </div>
        <p className="text-sm leading-tight text-white/75">
          Trusted by <span className="font-semibold text-white">5,000+</span> students
        </p>
      </div>
      <span className="hidden h-8 w-px bg-white/15 sm:block" />
      <div className="flex items-center gap-2">
        <Star size={18} className="fill-brand-gold text-brand-gold" />
        <p className="text-sm text-white/75"><span className="font-semibold text-white">4.9/5</span> Student Rating</p>
      </div>
    </div>
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-white/40" />;
}

function MetricCard({
  href, icon: Icon, value, label, sub, delay,
}: {
  href: string; icon: typeof TrendingUp; value: string; label: string; sub: string; delay: string;
}) {
  return (
    <Link
      href={href}
      className="group animate-slide-in-right glass flex items-center gap-4 rounded-2xl p-5 shadow-glass transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/50 hover:bg-white/[0.1] hover:shadow-glow active:scale-[0.98]"
      style={{ animationDelay: delay }}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-teal/20 text-brand-cyan ring-1 ring-white/10 transition-colors group-hover:bg-brand-cyan/30">
        <Icon size={22} />
      </span>
      <div>
        <p className="font-display text-2xl font-bold leading-none text-white">{value}</p>
        <p className="mt-1 text-sm font-medium text-white">{label}</p>
        <p className="text-xs text-white/50">{sub}</p>
      </div>
    </Link>
  );
}
