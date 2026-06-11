// Single source of truth for site content — pulled from the official Varenyam
// brochures. Edit here; pages read from this file.

export const site = {
  name: "Varenyam Education Centre",
  shortName: "Varenyam",
  tagline: "Leading the way",
  promise: "Empowering Minds, Shaping Futures",
  description:
    "Varenyam Education Centre, Indore — result-driven coaching for Classes 6 to 12 (CBSE, ICSE & State Board) across Science (PCM/PCB) and Commerce, with strong board results, small batches and mentors from IITs & NITs.",
  email: "varenyameducation@gmail.com",
  primaryPhone: "+91 78800 69393",
  social: {
    instagram: "https://www.instagram.com/varenyameducation?igsh=MTllbHNmdmJyYzR6Mg==",
    linkedin: "https://www.linkedin.com/company/varenyam-education/",
    whatsapp: "https://wa.me/917880069393",
  },
  // Teacher/admin portal (separate Vercel project + domain)
  portalUrl: "https://varenyamedtech.in/",
} as const;

export const centres = [
  {
    label: "Centre 1 — Nipania",
    address:
      "Plot No. 3, Amrit Palace Colony, Near Indian Oil Petrol Pump, Nipania, Indore (MP)",
    phone: "+91 78800 69393",
    tel: "+917880069393",
  },
  {
    label: "Centre 2 — Mahalaxmi Nagar",
    address: "R-240, Near Prayas Garden, Mahalaxmi Nagar, Indore (MP)",
    phone: "+91 79876 86250",
    tel: "+917987686250",
  },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/results", label: "Results" },
  { href: "/directors", label: "Directors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "1,500+", label: "Students mentored" },
  { value: "97%", label: "Top board score" },
  { value: "20+", label: "Board toppers" },
] as const;

// ── Why Varenyam ──────────────────────────────────────────────────────────
export const highlights = [
  { title: "Experienced Faculty", body: "Highly qualified teachers, with mentors from IITs and NITs, focused on results." },
  { title: "Limited Batch Size", body: "Small batches so every student gets personal attention and real interaction." },
  { title: "Regular Assessments", body: "Weekly worksheets, mock tests and performance tracking through the year." },
  { title: "Doubt-Solving Sessions", body: "Dedicated doubt and self-study sessions to clarify every concept." },
  { title: "Comprehensive Material", body: "Well-researched notes and practice papers aligned to the exam pattern." },
  { title: "Parent Reporting", body: "Regular student progress reports so parents stay informed at every step." },
] as const;

// ── Courses ───────────────────────────────────────────────────────────────
export type Course = {
  slug: string;
  name: string;
  grade: string;
  duration: string;
  blurb: string;
  highlights: readonly string[];
  accent: "teal" | "red" | "gold";
};

export const courses: readonly Course[] = [
  {
    slug: "foundation",
    name: "Foundation Programme",
    grade: "Classes 6–10",
    duration: "Yearly · multi-year track",
    blurb:
      "Concept-first coaching in Maths, Science and Social Studies, aligned to CBSE along with NTSE, Olympiads and IMO preparation.",
    highlights: ["Maths · Science · Social", "CBSE · NTSE · Olympiads · IMO", "Weekly worksheets & tests"],
    accent: "teal",
  },
  {
    slug: "science",
    name: "Class 11 & 12 — Science",
    grade: "PCM / PCB",
    duration: "2-year integrated · XI–XII",
    blurb:
      "Senior-secondary Science coaching for board and competitive readiness across Physics, Chemistry, Maths and Biology.",
    highlights: ["Physics · Chemistry · Maths", "Physics · Chemistry · Biology", "Board + competitive focus"],
    accent: "red",
  },
  {
    slug: "commerce",
    name: "Class 11 & 12 — Commerce",
    grade: "Commerce Stream",
    duration: "2-year integrated · XI–XII",
    blurb:
      "Complete Commerce coaching covering Accountancy, Economics, Business Studies and Mathematics with structured practice.",
    highlights: ["Accountancy · Economics", "Business Studies · Maths", "Exam-pattern practice papers"],
    accent: "gold",
  },
] as const;

export const boards = ["CBSE", "ICSE", "State Board"] as const;

// ── Fees (yearly) ─────────────────────────────────────────────────────────
export const fees = [
  { grade: "Class 7", subjects: "Maths, Science, Social Studies", amount: "₹25,000" },
  { grade: "Class 8", subjects: "Maths, Science, Social Studies", amount: "₹30,000" },
  { grade: "Class 9", subjects: "Maths, Science, Social Studies", amount: "₹35,000" },
  { grade: "Class 10", subjects: "Maths, Science, Social Studies", amount: "₹40,000" },
  { grade: "Class 11 — Science", subjects: "Physics, Chemistry, Maths", amount: "₹55,000" },
  { grade: "Class 12 — Science", subjects: "Physics, Chemistry, Maths", amount: "₹60,000" },
  { grade: "Class 11 — Commerce", subjects: "Accountancy, Economics, Business Studies, Maths", amount: "₹45,000" },
  { grade: "Class 12 — Commerce", subjects: "Accountancy, Economics, Business Studies, Maths", amount: "₹50,000" },
] as const;

// ── Directors ─────────────────────────────────────────────────────────────
export const directors = [
  {
    name: "Pranay Khanwalkar",
    role: "Director",
    credential: "M.Tech · 15+ years experience",
    photo: "/people/pranay-khanwalkar.jpg",
    bio: "Education is the foundation of success and the key to unlocking one's true potential. With 15 years of teaching experience, I've seen the transformative power of quality education first-hand. Our institute is built on integrity, dedication and excellence — and we walk with every student on their journey to success.",
  },
  {
    name: "Shubham Chouksey",
    role: "Director",
    credential: "M.Tech, IIT Gandhinagar",
    photo: "/people/shubham-chouksey.jpg",
    bio: "Education is not just about marks; it's about learning for life. Our faculty is committed to bringing out the best in every student through personalized attention, regular assessments and result-oriented strategies. At Varenyam, we don't just teach — we mentor, inspire and empower.",
  },
  {
    name: "Aayush Jaiswal",
    role: "Director",
    credential: "10 years experience · 1,500+ students mentored",
    photo: "/people/ayush-jaiswal.jpg",
    bio: "Education is the most powerful tool for shaping a bright future. Having mentored over 1,500 students in 10 years, I understand how strong fundamentals, consistent effort and the right guidance drive academic success. Our focus is not just on scoring well, but on a deep understanding of concepts that lasts a lifetime.",
  },
] as const;

// ── Results (Class 10 CBSE board toppers) ─────────────────────────────────
// Names, scores and photos sourced from the official Varenyam results leaflet.
export type Topper = { name: string; score: string; photo: string };

export const toppers: readonly Topper[] = [
  { name: "Prakrati Dubey", score: "97%", photo: "/people/toppers/prakrati-dubey.jpeg" },
  { name: "Rishit Bhansali", score: "96.8%", photo: "/people/toppers/rishit-bhansali.jpeg" },
  { name: "Dwijal Vaja", score: "96.6%", photo: "/people/toppers/dwijal-vaja.jpeg" },
  { name: "Pooja Chhabada", score: "96%", photo: "/people/toppers/pooja-chhabada.jpeg" },
  { name: "Palak Sodhani", score: "95%", photo: "/people/toppers/palak-sodhani.jpeg" },
  { name: "Maanvi Tomar", score: "95%", photo: "/people/toppers/maanvi-tomar.jpeg" },
  { name: "Anushka Khare", score: "93.6%", photo: "/people/toppers/anushka-khare.jpeg" },
  { name: "Harshita Punase", score: "92.4%", photo: "/people/toppers/harshita-punase.jpeg" },
  { name: "Saloni Makhwana", score: "91.8%", photo: "/people/toppers/saloni-makhwana.jpeg" },
  { name: "Ayush Nishant", score: "91.2%", photo: "/people/toppers/ayush-nishant.jpeg" },
  { name: "Aryashi Khare", score: "91%", photo: "/people/toppers/aryashi-khare.jpeg" },
  { name: "Akshat Gupta", score: "91%", photo: "/people/toppers/akshat-gupta.jpeg" },
  { name: "Pihu Mittal", score: "91%", photo: "/people/toppers/pihu-mittal.jpeg" },
  { name: "Tania Gurudasani", score: "90.2%", photo: "/people/toppers/tania-gurudasani.jpeg" },
  { name: "Harsh Vyas", score: "90%", photo: "/people/toppers/harsh-vyas.jpeg" },
  { name: "Ansh Khare", score: "87%", photo: "/people/toppers/ansh-khare.jpeg" },
  { name: "Riddhima Mittal", score: "87%", photo: "/people/toppers/riddhima-mittal.jpeg" },
  { name: "Pranjal Trivedi", score: "85%", photo: "/people/toppers/pranjal-trivedi.jpeg" },
  { name: "Maahi Joshi", score: "84%", photo: "/people/toppers/maahi-joshi.jpeg" },
  { name: "Nidhi Aute", score: "83%", photo: "/people/toppers/nidhi-aute.jpeg" },
] as const;

// ── Testimonials ──────────────────────────────────────────────────────────
export const testimonials = [
  {
    name: "Ayush Sachdeva",
    detail: "Class 10",
    quote:
      "I'm extremely grateful to Varenyam for their support during my Class 10 journey. The experienced faculty, structured study material and regular tests strengthened my concepts and problem-solving skills. Personalized attention and mock tests boosted my confidence for the board exams.",
  },
  {
    name: "Bhavisha Maheshwari",
    detail: "Class 12 · 95.6%",
    quote:
      "Varenyam's support helped me secure 95.6% in my Class 12 board exams. The dedicated faculty, regular tests and doubt-solving sessions boosted my confidence, and the study material and mock tests improved my problem-solving and time management. Highly recommended.",
  },
] as const;
