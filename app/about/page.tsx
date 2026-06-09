import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, ClipboardCheck, MessageCircleQuestion, BookOpen, FileBarChart } from "lucide-react";
import { site, stats, highlights } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

const highlightIcons = [GraduationCap, Users, ClipboardCheck, MessageCircleQuestion, BookOpen, FileBarChart];

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — our approach, strengths and track record in Indore.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Varenyam"
        subtitle={site.promise}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Committed to academic excellence</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              At {site.name}, we provide result-driven coaching for students from Class 6 to 12,
              specializing in the Science and Commerce streams across CBSE, ICSE and State Board.
              Our expert faculty, personalized attention and result-oriented approach ensure that
              every student achieves their full potential.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              We focus not just on scoring well in exams, but on building a deep understanding of
              concepts that helps students throughout their academic and professional journeys.
            </p>
            <Link href="/directors" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-teal hover:underline">
              Meet our directors <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card flex flex-col justify-center p-6">
                <p className="font-display text-4xl font-extrabold text-gradient-ink">{s.value}</p>
                <p className="mt-1.5 text-sm font-medium text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow">What Makes Us Unique</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Why students choose Varenyam</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <div
                  key={h.title}
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                  className="reveal card card-hover group p-6"
                >
                  <span className="icon-tile transition-transform duration-300 group-hover:-translate-y-0.5">
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

      <CtaBand />
    </>
  );
}
