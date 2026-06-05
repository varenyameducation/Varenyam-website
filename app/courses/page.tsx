import type { Metadata } from "next";
import { courses } from "@/lib/site";
import { CourseCard } from "@/components/course-card";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Courses",
  description: "JEE, NEET, CBSE Board and Foundation coaching programmes at Varenyam.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Courses"
        subtitle="Structured, exam-aligned programmes from Foundation through JEE & NEET."
      />
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>
    </>
  );
}
