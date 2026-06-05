// Single source of truth for site-wide content.
// Replace the placeholder contact details / courses with real values.

export const site = {
  name: "Varenyam Coaching Institute",
  shortName: "Varenyam",
  tagline: "Where Focused Preparation Meets Real Results",
  description:
    "Varenyam Coaching Institute prepares students for JEE, NEET, and CBSE board exams with structured courses, experienced faculty, and a proven test-practice system.",
  // TODO: replace placeholders with real details
  contact: {
    phone: "+91 00000 00000",
    email: "info@varenyam.com",
    address: "Varenyam Coaching Institute, City, State",
    mapsUrl: "#",
  },
  social: {
    instagram: "#",
    youtube: "#",
    facebook: "#",
  },
  // Where the teacher/admin portal lives (separate Vercel project + domain)
  portalUrl: "https://portal.varenyam.com",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/faculty", label: "Faculty" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const courses = [
  {
    slug: "jee",
    name: "JEE (Main + Advanced)",
    grade: "Class 11–12 · PCM",
    blurb:
      "Two-year integrated programme covering the full JEE syllabus with weekly tests, doubt-clearing sessions, and Advanced-level problem practice.",
    highlights: ["Physics · Chemistry · Maths", "Weekly full-syllabus tests", "Advanced problem sets"],
    accent: "teal" as const,
  },
  {
    slug: "neet",
    name: "NEET (UG)",
    grade: "Class 11–12 · PCB",
    blurb:
      "Medical-entrance focused coaching with deep Biology coverage, NCERT-aligned theory, and high-yield revision before the exam.",
    highlights: ["Physics · Chemistry · Biology", "NCERT-aligned notes", "High-yield revision"],
    accent: "red" as const,
  },
  {
    slug: "foundation",
    name: "Foundation",
    grade: "Class 8–10",
    blurb:
      "Early-stage programme that builds conceptual strength and exam temperament, bridging school syllabus with competitive-exam thinking.",
    highlights: ["School + olympiad prep", "Concept-first teaching", "Regular assessments"],
    accent: "gold" as const,
  },
  {
    slug: "board",
    name: "CBSE Board",
    grade: "Class 9–12",
    blurb:
      "Board-exam coaching aligned to the CBSE pattern with chapter tests, sample papers, and structured answer-writing practice.",
    highlights: ["CBSE pattern", "Chapter-wise tests", "Answer-writing drills"],
    accent: "teal" as const,
  },
] as const;

export const stats = [
  { value: "10+", label: "Years of teaching" },
  { value: "5,000+", label: "Students taught" },
  { value: "94%", label: "Board pass rate" },
  { value: "200+", label: "Selections" },
] as const;

export const faculty = [
  {
    name: "Faculty Name",
    subject: "Physics",
    detail: "M.Sc. · 12 years preparing JEE & NEET aspirants.",
  },
  {
    name: "Faculty Name",
    subject: "Chemistry",
    detail: "Ph.D. · Specialist in physical and organic chemistry.",
  },
  {
    name: "Faculty Name",
    subject: "Mathematics",
    detail: "M.Tech · Known for problem-solving shortcuts and rigor.",
  },
  {
    name: "Faculty Name",
    subject: "Biology",
    detail: "M.Sc. · NCERT-focused, high-retention teaching style.",
  },
] as const;
