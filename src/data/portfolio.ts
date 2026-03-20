/**
 * @file src/data/portfolio.ts
 * 
 * Central data store for the entire portfolio site.
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface Project {
  id: number;
  number: string;           // Display label e.g. "PROJECT 01"
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
  email:       "example@gmail.com",
  avatar:      "🧑‍💻",
  resumeUrl:   "#",
  available:   true,

  /** Strings cycled by the hero typewriter animation */
  roles: [
    "Software Developer",
    "Full-Stack Developer",
  ],

  bio: [
    `Hi! I'm <strong>Anit</strong>, a software developer based in <strong>Toronto, Canada</strong>. I specialize in building full-stack web applications with a strong focus on performance and user experience.`,
    `With <strong>1 year</strong> of professional experience, I've worked across early-stage startups and enterprise teams, shipping features used by thousands of people every day.`,
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
    title: "DevFlow Dashboard",
    description:
      "A real-time analytics dashboard for dev teams, showing build times, deployment frequency, and DORA metrics pulled from GitHub Actions and Jira APIs.",
    tags: ["React", "TypeScript", "Node.js", "WebSockets"],
    accentGradient: "linear-gradient(90deg, #00e5ff, #0080ff)",
    demoUrl:   "#",
    githubUrl: "#",
  },
  {
    id: 2,
    number: "PROJECT 02",
    title: "Pocket Budgets",
    description:
      "A mobile-first personal finance app with AI-powered spending categorisation, goal tracking, and weekly summary emails. Handles 5k+ users in production.",
    tags: ["Next.js", "Prisma", "Postgres", "OpenAI"],
    accentGradient: "linear-gradient(90deg, #ff6b35, #ff2e9f)",
    demoUrl:   "#",
    githubUrl: "#",
  },
  {
    id: 3,
    number: "PROJECT 03",
    title: "Argus CLI",
    description:
      "An open-source CLI for monitoring multiple AWS Lambda functions simultaneously — tail logs, track cold starts, and alert on errors from one terminal.",
    tags: ["Go", "AWS SDK", "Cobra", "TUI"],
    accentGradient: "linear-gradient(90deg, #00ff88, #00e5ff)",
    demoUrl:   "#",
    githubUrl: "#",
  },
  {
    id: 4,
    number: "PROJECT 04",
    title: "MarkBase",
    description:
      "A Notion-alternative for developers: write in Markdown, store in SQLite, sync via Git. Includes a VS Code extension with live preview.",
    tags: ["Electron", "SQLite", "VS Code API", "Markdown-it"],
    accentGradient: "linear-gradient(90deg, #c77dff, #ff6b35)",
    demoUrl:   "#",
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
  { label: "GitHub",   icon: "⌥", url: "#" },
  { label: "LinkedIn", icon: "in", url: "#" },
  { label: "Twitter",  icon: "𝕏",  url: "#" },
];
