/**
 * @file src/components/layout/Navbar.tsx
 *
 * Fixed navigation bar with blur backdrop.
 * "use client" is required because it uses:
 *  - useEffect / useState (scroll-based active link detection)
 *  - IntersectionObserver (watches section visibility)
 */

"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/portfolio";

// ── Nav link definitions ───────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "home",     href: "#hero" },
  { label: "about",    href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills",   href: "#skills" },
  { label: "contact",  href: "#contact" },
];

// ── Component ──────────────────────────────────────────────────────────────

/**
 * Navbar — fixed top navigation.
 * Highlights the link matching the section currently in the viewport.
 */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  /**
   * useEffect — sets up an IntersectionObserver on every section[id].
   * When a section crosses the 45% threshold it becomes "active",
   * and the matching nav link is highlighted in accent colour.
   * Runs once on mount; cleans up the observer on unmount.
   */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup: disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(8,11,16,0.75)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo: shows initials with a cyan dot */}
        <span className="font-display font-extrabold text-xl text-white">
          {personal.initials}<span className="text-accent">.</span>
        </span>

        {/* Nav links — hidden on mobile */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={
                  activeSection === href.slice(1)   // strip the "#"
                    ? "text-accent text-xs tracking-widest uppercase"
                    : "text-textdim text-xs tracking-widest uppercase hover:text-accent transition-colors"
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
