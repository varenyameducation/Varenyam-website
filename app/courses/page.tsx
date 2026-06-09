import type { Metadata } from "next";
import { courses, fees, boards } from "@/lib/site";
import { CourseCard } from "@/components/course-card";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Courses",
  description: "Foundation, Science and Commerce coaching for Classes 6–12 at Varenyam, Indore.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Courses We Offer"
        subtitle="Structured coaching for Classes 6 to 12 across CBSE, ICSE and State Board."
      />

      <section className="section bg-mesh">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {courses.map((c, i) => (
              <div key={c.slug} style={{ transitionDelay: `${i * 90}ms` }} className="reveal flex">
                <CourseCard course={c} />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-6 py-5">
            <span className="text-sm font-semibold text-slate-500">Boards covered:</span>
            {boards.map((b) => (
              <span key={b} className="rounded-full border border-brand-teal/20 bg-brand-teal/10 px-4 py-1.5 text-sm font-semibold text-brand-teal">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Transparent Pricing</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Fee Structure</h2>
            <p className="mt-3 text-slate-600">Yearly fees by grade and stream — no hidden charges.</p>
          </div>

          <div className="card mx-auto mt-10 max-w-4xl overflow-hidden p-0">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-brand-teal to-brand-teal-light text-white">
                  <th className="px-6 py-4 font-semibold">Grade</th>
                  <th className="px-6 py-4 font-semibold">Subjects</th>
                  <th className="px-6 py-4 text-right font-semibold">Yearly Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {fees.map((f, i) => (
                  <tr key={f.grade} className={`transition-colors hover:bg-brand-teal/[0.04] ${i % 2 ? "bg-slate-50/60" : "bg-white"}`}>
                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-slate-900">{f.grade}</td>
                    <td className="px-6 py-4 text-slate-600">{f.subjects}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-right font-display text-base font-bold text-brand-teal">{f.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-slate-400">
            Fees are indicative and per academic year. Contact a centre for current details and instalment options.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Admissions Open"
        title="Find the right programme for your child"
        subtitle="Talk to our team about batches, schedules and the best fit for your child's goals."
      />
    </>
  );
}
