/**
 * @file src/components/ui/SectionHeader.tsx
 *
 * Renders the small numbered label (e.g. "01 / about me") above
 * every section title. Keeps heading styles consistent site-wide.
 */

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;        // e.g. "01 / about me"
  title: string;        // e.g. "A bit about me"
  className?: string;
}

/**
 * SectionHeader — displays a coloured label and a large display title.
 *
 * @param label     - Small all-caps label shown above the title
 * @param title     - Large section heading
 * @param className - Optional extra Tailwind classes on the wrapper
 */
export default function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      {/* Accent-coloured label */}
      <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-2 font-mono">
        {label}
      </p>
      {/* Large section title */}
      <h2 className="font-display font-extrabold text-white leading-none"
          style={{ fontSize: "clamp(28px, 5vw, 44px)" }}>
        {title}
      </h2>
    </div>
  );
}
