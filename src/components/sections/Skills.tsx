/**
 * @file src/components/sections/Skills.tsx
 *
 * Skills section — animated progress bars per category.
 * Bars animate to their target width when the section scrolls into view.
 * "use client" required for Framer Motion and animation state.
 */

"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import type { SkillCategory, Skill } from "@/data/portfolio";

// ── Animation helpers ──────────────────────────────────────────────────────

const viewport = { once: true, amount: 0.2 };

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition:  { duration: 0.6, delay, ease: "easeOut" as const},
  viewport,
});

// ── Component ──────────────────────────────────────────────────────────────

/**
 * Skills — renders skill categories in a responsive grid.
 * Each category contains animated skill bars driven by data in portfolio.ts.
 */
export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section heading */}
        <motion.div {...fadeUp(0)}>
          <SectionHeader label="03 / skills" title="My toolkit" />
        </motion.div>

        {/* Skill category columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.category} {...fadeUp(i * 0.1)}>
              <SkillCategoryBlock category={cat} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

/**
 * SkillCategoryBlock — renders a labelled group of skill bars.
 *
 * @param category - A SkillCategory object from portfolio.ts
 */
function SkillCategoryBlock({ category }: { category: SkillCategory }) {
  return (
    <div>
      {/* Category label */}
      <h3 className="font-mono font-semibold text-accent text-xs tracking-widest
                     uppercase mb-5">
        {category.category}
      </h3>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

/**
 * SkillBar — a single labelled progress bar.
 * The fill animates from 0 → pct% when it enters the viewport,
 * using Framer Motion's whileInView on the inner fill div.
 *
 * @param skill - A Skill object with { name, pct }
 */
function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      {/* Label row: skill name + percentage */}
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-textbody font-mono">{skill.name}</span>
        <span className="text-textdim font-mono">{skill.pct}%</span>
      </div>

      {/* Track */}
      <div className="h-1 bg-surface2 rounded-full overflow-hidden">
        {/*
         * Fill — starts at width 0, animates to `skill.pct`% when visible.
         * transition.duration is longer for higher percentages to feel natural.
         */}
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #00e5ff, #ff6b35)",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.pct}%` }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>
    </div>
  );
}
