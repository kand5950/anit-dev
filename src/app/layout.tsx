/**
 * @file src/app/layout.tsx
 *
 * Root layout — wraps every page.
 * Loads Google Fonts via next/font and sets global <head> metadata.
 * All pages inherit this layout automatically (Next.js App Router).
 */

import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ── Font setup ─────────────────────────────────────────────────────────────
// next/font downloads fonts at build time — no runtime network requests,

/** Display font: used for headings and the nav logo */
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",   // exposes as a CSS variable for Tailwind
  display: "swap",
});

/** Mono font: used for body text and code-like elements */
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

// ── Metadata ───────────────────────────────────────────────────────────────
// Next.js uses this object to generate <title> and <meta> tags.

export const metadata: Metadata = {
  title:       "Anit K — Software Developer",
  description: "Portfolio of Anit, a full-stack software developer based in Toronto.",
  openGraph: {
    title:       "Anit — Software Developer",
    description: "Full-stack developer • React • Node.js • TypeScript",
    url:         "https://anit-dev-khaki.vercel.app",
    siteName:    "Anit Portfolio",
    type:        "website",
  },
};

// ── Layout component ───────────────────────────────────────────────────────

/**
 * RootLayout — the outermost React wrapper for the entire app.
 * Applies font CSS variables to <html> so they cascade to all children.
 *
 * @param children - The page component(s) rendered inside this layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrains.variable}`}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
