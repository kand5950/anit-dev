/**
 * @file src/components/sections/Contact.tsx
 *
 * Contact section — centered card with email and social links.
 * "use client" required for Framer Motion whileInView.
 */

"use client";

import { motion } from "framer-motion";
import { personal, socialLinks } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

// ── Component ──────────────────────────────────────────────────────────────

/**
 * Contact — a centred card with a mailto link and social icon row.
 * All URLs are configured in src/data/portfolio.ts.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl mx-auto bg-surface border border-border rounded-lg p-12 text-center"
        >
          {/* Section heading — centred inside the card */}
          <SectionHeader label="04 / contact" title="Let's work together" />

          <p className="text-textdim text-sm mb-8 leading-relaxed">
            Whether its a full-time role, contract work, or just a chat —
            my inbox is always open.
          </p>

          {/*
           * Email link — update personal.email in portfolio.ts.
           * mailto: opens the user's default mail client.
           */}
          <a
            href={`mailto:${personal.email}`}
            className="inline-block font-display font-bold text-accent text-lg
                       border-b border-accent pb-1 mb-10 hover:opacity-75 transition-opacity"
          >
            {personal.email}
          </a>

          {/* Social links row — mapped from portfolio.ts socialLinks array */}
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="flex items-center gap-2 text-textdim text-xs font-mono
                           border border-border rounded px-4 py-2
                           hover:border-accent hover:text-accent transition-all duration-200"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
