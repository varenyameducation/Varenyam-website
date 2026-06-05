import type { Metadata } from "next";
import Image from "next/image";
import { site, directors } from "@/lib/site";
import { PageHero } from "@/components/page-hero";

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

      {/* group photo */}
      <section className="section pb-0">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <Image
              src="/photos/founders-group.jpeg"
              alt="Varenyam directors — Aayush Jaiswal, Pranay Khanwalkar and Shubham Chouksey"
              width={1500}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* director cards with messages */}
      <section className="section">
        <div className="container-x space-y-10">
          {directors.map((d, i) => (
            <article
              key={d.name}
              className={`grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[280px_1fr] ${
                i % 2 === 1 ? "lg:grid-cols-[1fr_280px]" : ""
              }`}
            >
              <div className={`overflow-hidden rounded-2xl bg-slate-100 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={d.photo}
                  alt={d.name}
                  width={700}
                  height={850}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl font-bold text-slate-900">{d.name}</h2>
                <p className="mt-1 font-semibold text-brand-red">{d.role}</p>
                <p className="text-sm text-slate-500">{d.credential}</p>
                <p className="mt-4 leading-relaxed text-slate-600">&ldquo;{d.bio}&rdquo;</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
