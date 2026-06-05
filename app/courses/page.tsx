import type { Metadata } from "next";
import { courses, fees, boards } from "@/lib/site";
import { CourseCard } from "@/components/course-card";
import { PageHero } from "@/components/page-hero";

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

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-slate-500">Boards covered:</span>
            {boards.map((b) => (
              <span key={b} className="rounded-full bg-brand-teal/10 px-4 py-1.5 text-sm font-semibold text-brand-teal">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Transparent Pricing</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Fee Structure</h2>
            <p className="mt-3 text-slate-600">Yearly fees by grade and stream.</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-teal text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Grade</th>
                  <th className="px-5 py-4 font-semibold">Subjects</th>
                  <th className="px-5 py-4 text-right font-semibold">Yearly Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {fees.map((f) => (
                  <tr key={f.grade} className="hover:bg-slate-50">
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">{f.grade}</td>
                    <td className="px-5 py-4 text-slate-600">{f.subjects}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-right font-bold text-brand-teal">{f.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Fees are indicative and per academic year. Contact a centre for current details and instalment options.
          </p>
        </div>
      </section>
    </>
  );
}
