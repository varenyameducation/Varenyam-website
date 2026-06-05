import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, GraduationCap, Users, ClipboardCheck, MessageCircleQuestion, BookOpen, FileBarChart, Trophy, Quote, Star } from "lucide-react";
import { site, stats, highlights, courses, toppers, testimonials, directors } from "@/lib/site";
import { CourseCard } from "@/components/course-card";

const highlightIcons = [GraduationCap, Users, ClipboardCheck, MessageCircleQuestion, BookOpen, FileBarChart];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-teal-dark text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #15889F 0, transparent 45%), radial-gradient(circle at 90% 10%, #F2B33D 0, transparent 32%)",
          }}
        />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
              Classes 6–12 · CBSE · ICSE · State Board
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Where Focused Preparation Meets <span className="text-brand-gold">Real Results.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">{site.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses" className="btn-primary">
                Explore Courses <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${site.primaryPhone.replace(/\s/g, "")}`}
                className="btn border border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <Phone size={16} /> {site.primaryPhone}
              </a>
            </div>
            <div className="mt-7 flex items-center gap-2 text-sm text-white/80">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </span>
              Trusted by 1,500+ students across Indore
            </div>
          </div>

          {/* student photo + floating stats */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl">
              <Image
                src="/photos/hero-student.png"
                alt="A Varenyam student preparing for board exams"
                width={720}
                height={900}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-3 top-8 hidden rounded-2xl border border-white/15 bg-brand-teal-dark/90 p-4 shadow-lg backdrop-blur sm:block">
              <p className="text-2xl font-extrabold text-brand-gold">97%</p>
              <p className="text-xs text-white/80">Top board score</p>
            </div>
            <div className="absolute -right-3 bottom-8 hidden rounded-2xl border border-white/15 bg-brand-teal-dark/90 p-4 shadow-lg backdrop-blur sm:block">
              <p className="text-2xl font-extrabold text-brand-gold">1,500+</p>
              <p className="text-xs text-white/80">Students mentored</p>
            </div>
          </div>
        </div>

        {/* stat bar */}
        <div className="relative border-t border-white/10 bg-black/10">
          <div className="container-x grid grid-cols-2 divide-white/10 py-6 sm:grid-cols-4 sm:divide-x">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-2 text-center">
                <p className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-white/70 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Varenyam ───────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why Varenyam</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              A system built around how students actually learn
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <div key={h.title} className="rounded-2xl border border-slate-200 p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Courses ────────────────────────────────────────── */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Programmes</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Courses for every stage</h2>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-brand-teal hover:underline">
              View all courses & fees →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ────────────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Student Success</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Real results, real aspirations</h2>
            </div>
            <Link href="/results" className="text-sm font-semibold text-brand-teal hover:underline">
              See all toppers →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {toppers.slice(0, 6).map((t) => (
              <div key={t.name} className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <Trophy size={18} className="text-brand-gold" />
                <p className="mt-2 text-xl font-extrabold text-brand-teal">{t.score}</p>
                <p className="mt-1 text-xs font-semibold text-slate-700">{t.name}</p>
              </div>
            ))}
          </div>

          {/* testimonials */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-slate-50 p-6 sm:p-8">
                <Quote size={26} className="text-brand-gold" />
                <blockquote className="mt-3 leading-relaxed text-slate-700">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-slate-900">{t.name}</span>
                  <span className="text-brand-teal"> · {t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Directors ──────────────────────────────────────── */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Meet Our Team Leaders</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Learn from the best minds</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {directors.map((d) => (
              <article key={d.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm">
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <Image src={d.photo} alt={d.name} width={700} height={850} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{d.name}</h3>
                  <p className="text-sm font-medium text-brand-red">{d.role}</p>
                  <p className="mt-1 text-xs text-slate-500">{d.credential}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/directors" className="text-sm font-semibold text-brand-teal hover:underline">
              Read their messages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-brand-teal px-8 py-14 text-center text-white sm:px-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Your dream score starts with the right guidance</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Join the students who trusted Varenyam for their board preparation. Visit a centre or call us today.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a Free Demo <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${site.primaryPhone.replace(/\s/g, "")}`}
                className="btn border border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <Phone size={16} /> Call {site.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
