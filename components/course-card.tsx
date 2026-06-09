import Link from "next/link";
import { Check, GraduationCap, FlaskConical, LineChart, Clock, ArrowRight } from "lucide-react";
import type { courses } from "@/lib/site";

type Course = (typeof courses)[number];

const accent: Record<Course["accent"], { bar: string; tile: string; ring: string; dot: string; pill: string; cta: string }> = {
  teal: {
    bar: "from-brand-teal to-brand-cyan",
    tile: "from-brand-teal to-brand-teal-light",
    ring: "hover:border-brand-teal/40",
    dot: "text-brand-teal",
    pill: "bg-brand-teal/10 text-brand-teal",
    cta: "text-brand-teal",
  },
  red: {
    bar: "from-brand-red to-orange-500",
    tile: "from-brand-red to-orange-500",
    ring: "hover:border-brand-red/40",
    dot: "text-brand-red",
    pill: "bg-brand-red/10 text-brand-red",
    cta: "text-brand-red",
  },
  gold: {
    bar: "from-brand-gold to-amber-500",
    tile: "from-brand-gold to-amber-500",
    ring: "hover:border-brand-gold/50",
    dot: "text-amber-600",
    pill: "bg-amber-400/15 text-amber-700",
    cta: "text-amber-700",
  },
};

const icons: Record<string, typeof Check> = {
  foundation: GraduationCap,
  science: FlaskConical,
  commerce: LineChart,
};

const badgeLabel: Record<string, string> = {
  foundation: "Foundation",
  science: "Science",
  commerce: "Commerce",
};

export function CourseCard({ course }: { course: Course }) {
  const a = accent[course.accent];
  const Icon = icons[course.slug] ?? GraduationCap;

  return (
    <article className={`card group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${a.ring}`}>
      <span className={`h-1.5 w-full bg-gradient-to-r ${a.bar}`} />
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between">
          <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:-translate-y-0.5 ${a.tile}`}>
            <Icon size={22} />
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${a.pill}`}>
            {badgeLabel[course.slug] ?? "Programme"}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-900">{course.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{course.blurb}</p>

        {/* subjects */}
        <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5">
          {course.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5 text-sm text-slate-700">
              <Check size={16} className={`shrink-0 ${a.dot}`} />
              {h}
            </li>
          ))}
        </ul>

        {/* duration + CTA */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <Clock size={14} className="text-slate-400" />
            {course.duration}
          </span>
          <Link
            href="/courses"
            className={`inline-flex items-center gap-1 text-sm font-semibold ${a.cta}`}
          >
            Details
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
