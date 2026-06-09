import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { site, directors } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Directors",
  description: `Meet the directors of ${site.name} — the mentors leading Varenyam.`,
};

export default function DirectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team Leaders"
        title="Meet the Directors"
        subtitle="The mentors behind Varenyam — three educators united by a single goal: your child's success."
      />


      {/* director cards with messages */}
      <section className="section">
        <div className="container-x space-y-10">
          {directors.map((d, i) => (
            <article
              key={d.name}
              className={`reveal card grid items-center gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-[280px_1fr] ${
                i % 2 === 1 ? "lg:grid-cols-[1fr_280px]" : ""
              }`}
            >
              <div className={`group aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={d.photo}
                  alt={d.name}
                  width={700}
                  height={850}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">{d.role}</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-slate-900">{d.name}</h2>
                <p className="mt-1 text-sm font-medium text-slate-500">{d.credential}</p>
                <Quote size={26} className="mt-5 text-brand-gold/70" />
                <p className="mt-2 text-lg leading-relaxed text-slate-600">{d.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Learn From Them"
        title="Get mentored by Varenyam's leadership"
        subtitle="Experience the teaching and mentorship that has shaped a thousand success stories."
      />
    </>
  );
}
