import type { Metadata } from "next";
import Image from "next/image";
import { Quote, Crown, Medal } from "lucide-react";
import { site, toppers, testimonials } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Results",
  description: `Class 10 & 12 CBSE board results at ${site.name} — our students' achievements.`,
};

export default function ResultsPage() {
  const podium = toppers.slice(0, 3);
  const rest = toppers.slice(3);

  return (
    <>
      <PageHero
        eyebrow="Our Achievements"
        title="Results That Speak"
        subtitle="Class 10 & 12 CBSE board toppers — a proven track record of consistent, high-scoring results."
      />

      {/* ── Podium: top 3 ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/40 to-white pb-4 pt-20 sm:pt-24">
        {/* soft brand glow behind the podium */}
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-gold/20 blur-[110px]" />
        <div className="container-x relative">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Class of Achievers</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Our Top Rankers</h2>
          </div>

          <div className="mx-auto grid max-w-4xl items-end gap-6 sm:grid-cols-3">
            {podium.map((t, i) => (
              <PodiumCard key={t.name} rank={i + 1} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Honour roll: the rest ───────────────────────────── */}
      <section className="section pt-12">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow">Honour Roll</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">More of our high scorers</h2>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {rest.map((t, i) => (
              <TopperCard key={t.name} index={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section id="testimonials" className="section bg-surface">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">In Their Words</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Student Success Stories</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="card relative overflow-hidden p-6 sm:p-8">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-teal to-brand-cyan" />
                <Quote size={32} className="text-brand-gold/80" />
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

      <CtaBand
        eyebrow="Be Our Next Topper"
        title="Your name belongs on this wall"
        subtitle="Join Varenyam and get the structured coaching, mentorship and test practice behind these results."
      />
    </>
  );
}

// Medal treatment per podium rank.
const MEDALS = {
  1: {
    ring: "from-amber-300 via-brand-gold to-amber-500",
    badge: "bg-brand-gold text-ink",
    photo: "h-36 w-36",
    order: "sm:order-2",
    lift: "sm:-translate-y-6",
    label: "Rank 1",
  },
  2: {
    ring: "from-slate-200 via-slate-300 to-slate-400",
    badge: "bg-slate-300 text-slate-800",
    photo: "h-28 w-28",
    order: "sm:order-1",
    lift: "",
    label: "Rank 2",
  },
  3: {
    ring: "from-orange-200 via-amber-500 to-orange-600",
    badge: "bg-amber-700 text-white",
    photo: "h-28 w-28",
    order: "sm:order-3",
    lift: "",
    label: "Rank 3",
  },
} as const;

function PodiumCard({ rank, name, score, photo }: { rank: number; name: string; score: string; photo: string }) {
  const m = MEDALS[rank as 1 | 2 | 3];
  return (
    <article
      style={{ animationDelay: `${rank * 90}ms` }}
      className={`card card-hover group flex animate-rise-in flex-col items-center px-5 pb-7 pt-9 text-center ${m.order} ${m.lift}`}
    >
      {/* photo with medal ring */}
      <div className={`relative ${m.photo}`}>
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${m.ring} p-[3px] shadow-lg`}>
          <div className="h-full w-full overflow-hidden rounded-full bg-white p-[3px]">
            <Image
              src={photo}
              alt={name}
              width={512}
              height={512}
              className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        {/* rank medal */}
        <span className={`absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full ring-4 ring-white ${m.badge}`}>
          {rank === 1 ? <Crown size={16} strokeWidth={2.5} /> : <Medal size={16} strokeWidth={2.5} />}
        </span>
      </div>

      <p className="mt-5 font-display text-3xl font-bold text-slate-900">{score}</p>
      <p className="mt-1 text-base font-semibold leading-tight text-slate-800">{name}</p>
      <span className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
        {m.label} · CBSE X
      </span>
    </article>
  );
}

function TopperCard({ name, score, photo, index }: { name: string; score: string; photo: string; index: number }) {
  return (
    <div
      style={{ animationDelay: `${Math.min(index, 10) * 60}ms` }}
      className="group relative flex animate-rise-in flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 pb-5 pt-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-lg"
    >
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-teal via-brand-teal-light to-brand-cyan p-[2.5px]">
          <div className="h-full w-full overflow-hidden rounded-full bg-white p-[2px]">
            <Image
              src={photo}
              alt={name}
              width={512}
              height={512}
              className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="-mt-3 rounded-full bg-brand-teal px-3 py-1 shadow-sm ring-2 ring-white">
        <span className="font-display text-sm font-bold text-white">{score}</span>
      </div>
      <p className="mt-3 text-sm font-semibold leading-tight text-slate-800">{name}</p>
      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-400">CBSE Class 10</p>
    </div>
  );
}
