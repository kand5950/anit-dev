/**
 * @file src/components/layout/Footer.tsx
 *
 * Simple footer showing copyright and name.
 */

import { personal } from "@/data/portfolio";

/**
 * Footer — bottom of the page with year and name.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border py-7 text-center">
      <p className="text-textdim text-xs tracking-wide font-mono">
        Designed &amp; built by{" "}
        <span className="text-textbody">
          {personal.firstName} {personal.lastName}
        </span>{" "}
        — {year}
      </p>
    </footer>
  );
}
