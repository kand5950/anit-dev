/**
 * @file src/components/sections/About.tsx
 *
 * About section — bio text on the left, stat cards on the right.
 * Uses Framer Motion's whileInView for scroll-triggered reveal.
 * "use client" required for Framer Motion animations.
 */

"use client";

import { motion } from "framer-motion";
import { personal, stats } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

// ── Animation helpers ──────────────────────────────────────────────────────

/** Shared viewport trigger config: animates once when 20% visible */
const viewport = { once: true, amount: 0.2 };

/** Slide-up + fade-in variant */
const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition:  { duration: 0.6, delay, ease: "easeOut" as const},
  viewport,
});

// ── Component ──────────────────────────────────────────────────────────────

/**
 * About — two-column layout with bio and stat cards.
 * All content is pulled from src/data/portfolio.ts.
 */
export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section heading */}
        <motion.div {...fadeUp(0)}>
          <SectionHeader label="01 / about me" title="A bit about me" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ── Bio column ── */}
          <motion.div {...fadeUp(0.1)} className="space-y-4 text-textdim text-sm leading-relaxed">
            {personal.bio.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="pt-2">
              <Button as="a" href={personal.resumeUrl} variant="ghost">
                ↓ Download resume
              </Button>
            </div>
          </motion.div>

          {/* ── Stats grid ── */}
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} number={stat.number} label={stat.label} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ── Sub-component ──────────────────────────────────────────────────────────

/**
 * StatCard — displays a large number and a small label.
 * Glows on hover via Tailwind's group-hover or direct class transitions.
 *
 * @param number - Large display value (e.g. "4+")
 * @param label  - Descriptive text below the number
 */
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div
      className="bg-surface border border-border rounded p-6
                 hover:border-accent hover:shadow-glow transition-all duration-300"
    >
      <p className="font-display font-extrabold text-accent text-4xl leading-none mb-2">
        {number}
      </p>
      <p className="text-textdim text-xs tracking-wide">{label}</p>
    </div>
  );
}
