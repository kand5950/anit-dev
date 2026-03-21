/**
 * @file src/data/portfolio.ts
 * 
 * Central data store for the entire portfolio site.
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface Project {
  id: number;
  number: string;           // Display label 
  title: string;
  description: string;
  tags: string[];           // Tech stack tags
  accentGradient: string;   // CSS gradient string for the top accent bar
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  pct: number;              // 0-100, drives the animated progress bar
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

// ── Personal Info ──────────────────────────────────────────────────────────

export const personal = {
  firstName:   "Anit",
  lastName:    "K",
  initials:    "AK",
  location:    "Toronto, Canada",
  email:       "akandy@gmail.com",
  avatar:      "/image-anit.jpeg",
  resumeUrl:   "#",
  available:   true,

  /** Strings cycled by the hero typewriter animation */
  roles: [
    "Software Developer",
    "Full-Stack Developer",
  ],

  bio: [
    `Hi! I'm <strong>Anit</strong>, a software developer based in <strong>Toronto, Canada</strong>. I specialize in building full-stack web applications with a strong focus on performance and user experience.`,
    `Outside of work I enjoy sports, hiking/cycling, and watching anime.`,
  ],
};

// ── Stats ──────────────────────────────────────────────────────────────────

export const stats = [
  { number: "1",  label: "Year of experience" },
  { number: "8",   label: "Technologies mastered" },
  { number: "2",   label: "Companies worked at" },
];

// ── Projects ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 1,
    number: "PROJECT 01",
    title: "Portfolio",
    description:
      "Developed a personal portfolio application to showcase my projects, skills, and experience. Features a clean, responsive design with dynamic project listings and an intuitive user interface.",
    tags: ["Nextjs", "TypeScript", "TailwindCSS", "FramerMotion", "Vercel"],
    accentGradient: "linear-gradient(90deg, #00e5ff, #0080ff)",
    demoUrl:   "https://anit-dev-khaki.vercel.app/",
    githubUrl: "https://github.com/kand5950/anit-dev",
  },
  {
    id: 2,
    number: "PROJECT 02",
    title: "Olympic Data ETL Pipeline",
    description:
      "Processed large Olympic open datasets by identifying missing, inconsistent, and incorrect data. Designed a Python-based workflow to clean and standardize records, integrate Paris 2024 data without duplicates, and generate new cleaned CSV files along with a summarized medal tally for analysis.",
    tags: ["Python", "Data Structures", "CSV File Parsing", "I/O Systems"],
    accentGradient: "linear-gradient(90deg, #ff6b35, #ff2e9f)",
    demoUrl:   "#",
    githubUrl: "#",
  },
  {
    id: 3,
    number: "PROJECT 03",
    title: "Climate Solutions",
    description:
      "Built a full-stack web app using JavaScript, MongoDB, and Mongoose, featuring CRUD functionality and RESTful APIs for seamless client-server interaction. Designed a responsive, modern UI using Tailwind CSS.",
    tags: ["JavaScript", "MogoDB", "Mongoose", "REST", "TailwindCSS"],
    accentGradient: "linear-gradient(90deg, #00ff88, #00e5ff)",
    demoUrl:   "https://anit-web322-a2.vercel.app/",
    githubUrl: "https://github.com/kand5950/web322/tree/main/a2",
  },
  {
    id: 4,
    number: "PROJECT 04",
    title: "Tax Filing Management App",
    description:
      "An iOS app built using Core Data to store and manage user information locally, featuring a simple and efficient interface for handling data persistence.",
    tags: ["SwiftUi", "Core Data"],
    accentGradient: "linear-gradient(90deg, #c77dff, #ff6b35)",
    demoUrl:   "https://youtu.be/sBvOkRiYFHo",
    githubUrl: "#",
  },
];

// ── Skills ─────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js",  pct: 92 },
      { name: "TypeScript",       pct: 88 },
      { name: "CSS / Tailwind",   pct: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", pct: 87 },
      { name: "PostgreSQL",        pct: 80 },
      { name: "Go",                pct: 65 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker / Kubernetes",    pct: 75 },
      { name: "AWS (Lambda, S3, RDS)",  pct: 78 },
      { name: "CI/CD (GitHub Actions)", pct: 82 },
    ],
  },
];

// ── Social Links ───────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub",   icon: "⌥", url: "https://github.com/kand5950" },
  { label: "LinkedIn", icon: "in", url: "#" },
  { label: "Twitter",  icon: "𝕏",  url: "#" },
];
