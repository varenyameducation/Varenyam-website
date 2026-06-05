import { Check } from "lucide-react";
import type { courses } from "@/lib/site";

type Course = (typeof courses)[number];

const accentBar: Record<Course["accent"], string> = {
  teal: "bg-brand-teal",
  red: "bg-brand-red",
  gold: "bg-brand-gold",
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <span className={`h-1.5 w-full ${accentBar[course.accent]}`} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {course.grade}
        </p>
        <h3 className="mt-1 text-xl font-bold text-slate-900">{course.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{course.blurb}</p>
        <ul className="mt-5 space-y-2">
          {course.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
              <Check size={16} className="shrink-0 text-brand-teal" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
