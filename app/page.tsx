import Link from "next/link";
import { ArrowRight, GraduationCap, Target, Users, BookOpen } from "lucide-react";
import { site, courses, stats } from "@/lib/site";
import { CourseCard } from "@/components/course-card";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-teal text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #15889F 0, transparent 45%), radial-gradient(circle at 80% 0, #F2B33D 0, transparent 35%)",
          }}
        />
        <div className="container-x relative grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
              JEE · NEET · CBSE Foundation
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              {site.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses" className="btn-primary">
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-ghost border-white/40 bg-white/10 text-white hover:bg-white/20">
                Book a Free Demo
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <p className="text-3xl font-extrabold text-brand-gold">{s.value}</p>
                <p className="mt-1 text-sm text-white/80">{s.label}</p>
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: GraduationCap, title: "Experienced Faculty", body: "Subject experts who have mentored hundreds of selections across JEE and NEET." },
              { icon: Target, title: "Test-Driven Practice", body: "Regular chapter and full-syllabus tests with detailed performance feedback." },
              { icon: BookOpen, title: "Structured Material", body: "Curated, exam-aligned notes and question banks for every chapter and topic." },
              { icon: Users, title: "Small Batches", body: "Focused attention and doubt-clearing so no student is left behind." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                  <f.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses ────────────────────────────────────────── */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Programmes</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Courses for every stage
              </h2>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-brand-teal hover:underline">
              View all courses →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-brand-teal px-8 py-14 text-center text-white sm:px-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to start your preparation?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Visit our campus or talk to our team to find the right programme for you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get in Touch <ArrowRight size={18} />
              </Link>
              <a href={`tel:${site.contact.phone}`} className="btn-ghost border-white/40 bg-white/10 text-white hover:bg-white/20">
                Call {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
