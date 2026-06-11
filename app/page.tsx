import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, GraduationCap, Users, ClipboardCheck, MessageCircleQuestion,
  BookOpen, FileBarChart, Quote,
} from "lucide-react";
import { site, highlights, courses, toppers, testimonials, directors } from "@/lib/site";
import { CourseCard } from "@/components/course-card";
import { Hero } from "@/components/hero";
import { CampusShowcase } from "@/components/campus-showcase";
import { TopperMarquee } from "@/components/topper-marquee";
import { CtaBand } from "@/components/cta-band";

const highlightIcons = [GraduationCap, Users, ClipboardCheck, MessageCircleQuestion, BookOpen, FileBarChart];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Campus showcase (mobile only) ──────────────────── */}
      <CampusShowcase />

      {/* ── Why Varenyam ───────────────────────────────────── */}
      <section className="relative section bg-mesh">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why Varenyam</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              A system built around how students actually learn
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <div
                  key={h.title}
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                  className="reveal card card-hover group relative overflow-hidden p-7"
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-brand-teal/[0.06] transition-transform duration-500 group-hover:scale-[1.8]" />
                  <span className="icon-tile relative transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon size={22} />
                  </span>
                  <h3 className="relative mt-5 text-lg font-semibold text-slate-900">{h.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{h.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Programmes ─────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="reveal flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Programmes</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Courses for every stage</h2>
            </div>
            <Link href="/courses" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal">
              View all courses &amp; fees
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {courses.map((c, i) => (
              <div key={c.slug} style={{ transitionDelay: `${i * 90}ms` }} className="reveal flex">
                <CourseCard course={c} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ────────────────────────────────────────── */}
      <section className="relative section">
        <div className="pointer-events-none absolute inset-0 bg-dots-ink opacity-50" />
        <div className="container-x relative">
          <div className="reveal flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Student Success</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Real results, real aspirations</h2>
            </div>
            <Link href="/results" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal">
              See all toppers
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* full-bleed marquee */}
        <div className="reveal relative mt-12">
          <TopperMarquee items={toppers} />
        </div>

        <div className="container-x relative">
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                style={{ transitionDelay: `${i * 90}ms` }}
                className="reveal card relative overflow-hidden p-6 sm:p-8"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-teal to-brand-cyan" />
                <Quote size={30} className="text-brand-gold/80" />
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
      <section className="section bg-surface">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow">Meet Our Team Leaders</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Learn from the best minds</h2>
          </div>
          <div className="mt-6 grid gap-7 sm:grid-cols-3">
            {directors.map((d, i) => (
              <article
                key={d.name}
                style={{ transitionDelay: `${i * 90}ms` }}
                className="reveal card card-hover group overflow-hidden"
              >
                <div className="relative aspect-[7/7] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={d.photo}
                    alt={d.name}
                    width={700}
                    height={850}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-red backdrop-blur">
                    {d.role}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{d.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{d.credential}</p>
                  <Link
                    href="/directors"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal"
                  >
                    Read message
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <CtaBand />
    </>
  );
}
