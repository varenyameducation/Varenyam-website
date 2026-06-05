import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site, stats, highlights } from "@/lib/site";
import { PageHero } from "@/components/page-hero";

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
              <div key={s.label} className="rounded-2xl bg-slate-50 p-6">
                <p className="text-3xl font-extrabold text-brand-teal">{s.value}</p>
                <p className="mt-1 text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What Makes Us Unique</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Why students choose Varenyam</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
