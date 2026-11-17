// ============================================================
// All site content lives here — edit this file, not components.
// Items marked PLACEHOLDER need your real info before deploying.
// ============================================================

export const profile = {
  name: "Vitalii Vasylets",
  role: "CS Student & Full-Stack Developer",
  location: "Bothell, WA (Seattle area)",
  tagline:
    "I build full-stack web apps with Python, TypeScript, FastAPI, Next.js, and PostgreSQL — and I'm looking for a software engineering internship.",
  about: [
    "I'm a computer science student at the University of Washington Bothell with a focus on full-stack web development. I like taking an idea all the way from a blank repo to a working product: designing the data model, building the API, and shipping a polished frontend.",
    "Right now I'm building PitchIQ, a Duolingo-style app that teaches soccer to new fans — complete with a FastAPI backend, PostgreSQL database with migrations, and Clerk authentication. I also volunteer: I helped modernize a nonprofit's website at Seattle GiveCamp, and I mix live sound for church services, youth camps, and weddings around Seattle.",
    "When I'm not coding or behind a mixing console, you'll probably find me watching soccer or Formula 1 — which, as you can tell from my projects, tend to sneak into my code too.",
  ],
  email: "vitaliivasylets4@gmail.com",
  github: "https://github.com/VitaliiVas",
  linkedin: "https://www.linkedin.com/in/vitaliivasylets/" as string | null,
  avatar: "https://avatars.githubusercontent.com/u/186350770?v=4",
  resumeFile: "/vitalii_vasylets_resume.pdf",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "HTML & CSS"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "WordPress"] },
  { group: "Backend", items: ["FastAPI", "Django", "Django REST Framework", "PostgreSQL", "SQLAlchemy", "Alembic"] },
  { group: "Tools", items: ["Git & GitHub", "pytest", "Clerk Auth", "Vite", "Node.js"] },
];

export interface Project {
  title: string;
  status?: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "PitchIQ — Soccer Learning App",
    status: "In active development",
    description:
      "A Duolingo-style web app that teaches soccer one short lesson at a time — rules, tactics, and terminology — aimed at new fans in the United States.",
    highlights: [
      "Full-stack architecture: Next.js App Router frontend talking to a FastAPI backend",
      "PostgreSQL schema (lessons, users, progress) managed with SQLAlchemy 2.0 and Alembic migrations",
      "Clerk authentication with JWT verification (RS256 via JWKS) on protected endpoints",
      "Resilient data fetching with loading, error, empty, and retry states plus request cancellation",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "SQLAlchemy", "Clerk", "pytest"],
    github: "https://github.com/VitaliiVas/SoccerLearningApp",
  },
  {
    title: "F1 Racing Simulation",
    description:
      "A grid-based Formula 1 race simulator with a Swing GUI. McLaren, Ferrari, and Red Bull race a 30×30 track with pit stops, overtaking, and a winner dialog.",
    highlights: [
      "Object-oriented design: vehicle hierarchy, track tiles, and pluggable race strategies",
      "Tire wear model with Soft/Medium/Hard compounds that affects pace and forces pit stops",
      "Aggressive, Balanced, and Conservative strategies with different pace and pit timing",
      "Live controls for strategy, animation speed, and lap count, plus save/load of race configs",
    ],
    tech: ["Java", "Swing", "OOP Design"],
    github: "https://github.com/VitaliiVas/f1-racing-simulation",
  },
];

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  kind: "education" | "work";
  points: string[];
}

export const timeline: TimelineEntry[] = [
  {
    period: "Sept 2026 — May 2028 (expected)",
    title: "B.S. in Computer Science & Software Engineering",
    org: "University of Washington Bothell",
    kind: "education",
    points: [
      "Building full-stack projects alongside classes",
    ],
  },
  {
    period: "Oct 2026",
    title: "Volunteer Web Developer",
    org: "Seattle GiveCamp — Saving Kids' Sight",
    kind: "work",
    points: [
      "Modernized a nonprofit website with a volunteer engineering team during a three-day sprint, building a responsive Research page and a reusable article template",
      "Integrated and tested a Zeffy newsletter signup in the shared site footer across desktop and mobile",
      "Contributed a reviewed and merged GitHub pull request documenting safe footer updates",
    ],
  },
  {
    period: "Mar 2024 — Aug 2026",
    title: "A.A. in Computer Science Transfer",
    org: "Edmonds College",
    kind: "education",
    points: [
      "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Calculus I–IV",
    ],
  },
  {
    period: "Jan 2024 — Present",
    title: "Volunteer Live Sound Engineer",
    org: "Church Services, Youth Camps & Live Events — Seattle Area",
    kind: "work",
    points: [
      "Mix live sound on Allen & Heath Qu-16 and Harbinger LV14 consoles for services, weddings, and live music",
      "Diagnose signal failures under pressure by systematically tracing the audio chain mid-event",
    ],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// Real LinkedIn recommendations from Seattle GiveCamp teammates (Oct 2026).
export const testimonials: Testimonial[] = [
  {
    quote:
      "Vitalii jumped in from day 1, identifying how to best maximize the nonprofit's reach and minimize maintenance. He identified gaps in how the website and social media setup were managed and went to work interviewing nonprofit reps to determine the best flow. Finding the right balance of custom implementation and out-of-the-box solutions with minimal maintenance, he tested the flows with the reps who were ecstatic to have such a tailored experience. Vitalii's communication, proactive attitude, and time management helped make the project a resounding success.",
    name: "Will Kuhn",
    role: "Director of Engineering at Axonet",
  },
  {
    quote:
      "He was extremely diligent in making sure his technical decisions were vetted and was extremely conscious of others' time throughout the weekend. He'll make an excellent contributor in a professional environment where teamwork in fast moving groups is paramount.",
    name: "Scott Nowers",
    role: "Principal Software Engineer at Unity",
  },
  {
    quote:
      "He built several of the new pages, including Programs, and kept them consistent with the site's theme. He also added the links to the nonprofit's social media channels and helped set them up on Zeffy so they can accept donations for free, which is a big help for a small organization on a limited budget. He'd be a great addition to any team working on websites.",
    name: "Cara Phillips",
    role: "Applied AI at Anthropic",
  },
  {
    quote:
      "Vitalii proved to be a capable and effective developer. He collaborated well with the team and contributed to the many improvements we completed. His openness to new ideas was a great asset to the project. Overall, Vitalii was a pleasure to work with and a key contributor to our team's success — his technical skills and collaborative spirit would make him a valuable asset to any organization.",
    name: "Dagi (Doug) Yudovich",
    role: "Assistant Director, Departmental Computing",
  },
];
