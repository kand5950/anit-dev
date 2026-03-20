/**
 * @file src/components/sections/Hero.tsx
 *
 * Full-viewport hero section.
 * "use client" required for the typewriter animation (useState + useEffect).
 */

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";
import Button from "@/components/ui/Button";

// ── Typewriter hook ────────────────────────────────────────────────────────

/**
 * useTypewriter — custom React hook that cycles through an array of strings,
 * returning the currently "typed" portion of the active string.
 *
 * State machine:
 *   typing  → add one character per tick
 *   pausing → wait at full string before deleting
 *   deleting → remove one character per tick
 *   then loop to next string
 *
 * @param phrases   - Array of strings to cycle through
 * @param typeMs    - Milliseconds between typed characters (default 80)
 * @param deleteMs  - Milliseconds between deleted characters (default 40)
 * @param pauseMs   - Milliseconds to pause when the phrase is fully typed (default 2000)
 * @returns           The current visible substring
 */
function useTypewriter(
  phrases: string[],
  typeMs   = 80,
  deleteMs = 40,
  pauseMs  = 2000
): string {
  const [displayed, setDisplayed]   = useState("");
  const [phraseIdx, setPhraseIdx]   = useState(0);
  const [charIdx,   setCharIdx]     = useState(0);
  const [deleting,  setDeleting]    = useState(false);
  const [pausing,   setPausing]     = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];

    // While pausing, wait then switch to deleting mode
    if (pausing) {
      const t = setTimeout(() => {
        setPausing(false);
        setDeleting(true);
      }, pauseMs);
      return () => clearTimeout(t);
    }

    const delay = deleting ? deleteMs : typeMs;

    const t = setTimeout(() => {
      if (!deleting) {
        // Add one more character
        const next = charIdx + 1;
        setDisplayed(current.slice(0, next));
        setCharIdx(next);

        if (next === current.length) {
          // Fully typed — pause before deleting
          setPausing(true);
        }
      } else {
        // Remove one character
        const next = charIdx - 1;
        setDisplayed(current.slice(0, next));
        setCharIdx(next);

        if (next === 0) {
          // Fully deleted — advance to next phrase
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [phrases, phraseIdx, charIdx, deleting, pausing, typeMs, deleteMs, pauseMs]);

  return displayed;
}

// ── Animation variants ─────────────────────────────────────────────────────

/** Framer Motion stagger container — children animate in sequence */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/** Each child fades up from below */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ── Component ──────────────────────────────────────────────────────────────

/**
 * Hero — full-viewport landing section.
 * Shows name, animated role typewriter, short bio, and CTA buttons.
 */
export default function Hero() {
  const typedRole = useTypewriter(personal.roles);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 relative z-10"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── Text column ── */}
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Availability badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent
                               rounded-full px-4 py-1 text-accent text-xs tracking-widest mb-6">
                {/* Blinking dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
                {personal.available ? "Available for new opportunities" : "Not currently available"}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold text-white leading-none mb-3"
              style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
            >
              {personal.firstName}<br />
              <span className="text-accent">{personal.lastName}</span>
            </motion.h1>

            {/* Typewriter role line */}
            <motion.div variants={fadeUp} className="mb-6 text-textdim"
                        style={{ fontSize: "clamp(16px, 2.5vw, 22px)" }}>
              <span className="typed-cursor text-textbody">{typedRole}</span>
            </motion.div>

            {/* Short description */}
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-textdim text-sm leading-relaxed mb-9"
            >
              I build fast, accessible web applications that solve real problems.
              Passionate about clean architecture, developer experience, and things
              that actually ship.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <Button as="a" href="#projects" variant="primary">
                ⚡ View my work
              </Button>
              <Button as="a" href="#contact" variant="ghost">
                ✉ Get in touch
              </Button>
            </motion.div>

          </motion.div>

          {/* ── Avatar column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="hidden md:flex"
          >
            {/*
             * Avatar ring — the ::before pseudo-element (managed via globals.css)
             * creates the rotating conic-gradient ring effect.
             * To use a real photo: replace the emoji with:
             *   <Image src="/avatar.jpg" alt="Alex Chen" fill className="object-cover rounded-full" />
             */}
            <div
              className="w-52 h-52 rounded-full border-2 border-accent flex items-center
                         justify-content-center text-6xl shadow-glow bg-surface2 relative overflow-hidden"
              style={{ justifyContent: "center" }}
            >
              {personal.avatar}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
