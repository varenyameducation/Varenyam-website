import type { Metadata } from "next";
import { faculty } from "@/lib/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Faculty",
  description: "Meet the experienced faculty behind Varenyam Coaching Institute.",
};

export default function FacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Faculty"
        subtitle="Subject experts who have guided hundreds of students to top exam results."
      />
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f, i) => (
            <article
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-teal/10 text-2xl font-bold text-brand-teal">
                {f.subject.charAt(0)}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.name}</h3>
              <p className="text-sm font-medium text-brand-red">{f.subject}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.detail}</p>
            </article>
          ))}
        </div>
        <p className="container-x mt-10 text-center text-sm text-slate-400">
          Faculty profiles are placeholders — replace names and credentials in{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5">lib/site.ts</code>.
        </p>
      </section>
    </>
  );
}
