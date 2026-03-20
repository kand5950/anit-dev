/**
 * @file src/components/sections/Projects.tsx
 *
 * Projects section — a responsive card grid.
 * Each card staggered in via Framer Motion whileInView.
 * "use client" required for Framer Motion.
 */

"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Project } from "@/data/portfolio";

// ── Animation helpers ──────────────────────────────────────────────────────

const viewport = { once: true, amount: 0.1 };

/** Container that staggers its children */
const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/** Individual card animation */
const cardItem = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// ── Component ──────────────────────────────────────────────────────────────

/**
 * Projects — renders a grid of ProjectCard components.
 * Data is pulled from src/data/portfolio.ts — add/edit/remove projects there.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={viewport}
        >
          <SectionHeader label="02 / projects" title="Things I've built" />
        </motion.div>

        {/* Staggered card grid */}
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// ── Sub-component ──────────────────────────────────────────────────────────

/**
 * ProjectCard — displays a single project with a coloured accent bar,
 * description, tech tags, and links.
 *
 * @param project - A Project object from src/data/portfolio.ts
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="bg-surface border border-border rounded overflow-hidden flex flex-col
                 hover:border-accent hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
    >
      {/* Top gradient accent bar — colour set per-project in data file */}
      <div className="h-1 w-full" style={{ background: project.accentGradient }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Project number label */}
        <p className="text-textdim text-xs tracking-widest mb-3">{project.number}</p>

        {/* Title */}
        <h3 className="font-display font-bold text-white text-xl mb-3">{project.title}</h3>

        {/* Description */}
        <p className="text-textdim text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface2 border border-border rounded px-2.5 py-0.5
                         text-textdim text-xs tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5">
          <a href={project.demoUrl}   className="text-textdim text-xs hover:text-accent transition-colors">
            ↗ Live demo
          </a>
          <a href={project.githubUrl} className="text-textdim text-xs hover:text-accent transition-colors">
            ⌥ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
