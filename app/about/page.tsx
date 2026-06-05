import type { Metadata } from "next";
import { Target, Heart, Award } from "lucide-react";
import { site, stats } from "@/lib/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — our mission, approach, and track record.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Varenyam"
        subtitle="A coaching institute built on focused teaching, disciplined practice, and genuine care for every student's progress."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              At {site.name}, we believe strong results come from clarity, not pressure. Our
              programmes combine concept-first teaching with a structured test-practice system so
              students build real understanding and the exam temperament to apply it.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              From Foundation classes to JEE and NEET preparation, every course is designed around
              the syllabus, paced for retention, and backed by faculty who track each student's
              progress closely.
            </p>
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
        <div className="container-x grid gap-6 sm:grid-cols-3">
          {[
            { icon: Target, title: "Focused", body: "Small batches and a clear syllabus roadmap keep every student on track." },
            { icon: Heart, title: "Supportive", body: "Approachable faculty and regular doubt-clearing build real confidence." },
            { icon: Award, title: "Proven", body: "A consistent record of selections and strong board results year on year." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                <v.icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
