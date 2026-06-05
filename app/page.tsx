import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, GraduationCap, Users, ClipboardCheck, MessageCircleQuestion, BookOpen, FileBarChart, Trophy, Quote } from "lucide-react";
import { site, highlights, courses, toppers, testimonials, directors } from "@/lib/site";
import { CourseCard } from "@/components/course-card";
import { Hero } from "@/components/hero";

const highlightIcons = [GraduationCap, Users, ClipboardCheck, MessageCircleQuestion, BookOpen, FileBarChart];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Why Varenyam ───────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why Varenyam</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              A system built around how students actually learn
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <div key={h.title} className="group rounded-2xl border border-slate-200 p-6 transition-colors hover:border-brand-teal/40">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
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
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Courses for every stage</h2>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-brand-teal hover:underline">
              View all courses & fees →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Real results, real aspirations</h2>
            </div>
            <Link href="/results" className="text-sm font-semibold text-brand-teal hover:underline">
              See all toppers →
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {toppers.slice(0, 6).map((t) => (
              <div key={t.name} className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <Trophy size={18} className="text-brand-gold" />
                <p className="mt-2 font-display text-xl font-bold text-brand-teal">{t.score}</p>
                <p className="mt-1 text-xs font-semibold text-slate-700">{t.name}</p>
              </div>
            ))}
          </div>

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
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Learn from the best minds</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
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
          <div className="mt-10 text-center">
            <Link href="/directors" className="text-sm font-semibold text-brand-teal hover:underline">
              Read their messages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div className="relative isolate grain overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center text-white sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-cyan/20 blur-[100px]" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Your dream score starts with the right guidance</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Join the students who trusted Varenyam for their board preparation. Visit a centre or call us today.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-cta px-8">
                  Book a Free Demo <ArrowRight size={18} />
                </Link>
                <a href={`tel:${site.primaryPhone.replace(/\s/g, "")}`} className="btn-glass px-8">
                  <Phone size={16} /> Call {site.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
