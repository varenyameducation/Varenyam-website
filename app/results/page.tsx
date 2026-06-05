import type { Metadata } from "next";
import { Quote, Trophy } from "lucide-react";
import { site, toppers, testimonials } from "@/lib/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Results",
  description: `Class 10 & 12 CBSE board results at ${site.name} — our students' achievements.`,
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Achievements"
        title="Results That Speak"
        subtitle="Class 10 & 12 CBSE board toppers — a proven track record of consistent, high-scoring results."
      />

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {toppers.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <Trophy size={20} className="text-brand-gold" />
                <p className="mt-3 text-2xl font-extrabold text-brand-teal">{t.score}</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{t.name}</p>
                {"note" in t && t.note && (
                  <p className="mt-0.5 text-xs font-medium text-brand-red">{t.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">In Their Words</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Student Success Stories</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <Quote size={28} className="text-brand-gold" />
                <blockquote className="mt-4 leading-relaxed text-slate-700">{t.quote}</blockquote>
                <figcaption className="mt-5 border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-brand-teal">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
