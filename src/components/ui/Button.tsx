/**
 * @file src/components/ui/Button.tsx
 *
 * Polymorphic button/anchor component with two visual variants:
 *  - "primary" : filled cyan button with glow
 *  - "ghost"   : transparent with a border
 *
 * Renders as <button> by default; pass `as="a"` with an `href`
 * to render as an anchor tag instead.
 */

import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";

// ── Types ──────────────────────────────────────────────────────────────────

type Variant = "primary" | "ghost";

type ButtonProps<T extends ElementType = "button"> = {
  variant?: Variant;
  as?: T;
} & ComponentPropsWithoutRef<T>;

// ── Variant class maps ─────────────────────────────────────────────────────

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-bg shadow-glow hover:shadow-glow2",
  ghost:   "bg-transparent text-textbody border border-border hover:border-accent hover:text-accent",
};

// ── Component ──────────────────────────────────────────────────────────────

/**
 * Button — a polymorphic button supporting `primary` and `ghost` variants.
 *
 * @param variant  - Visual style ("primary" | "ghost"). Defaults to "ghost".
 * @param as       - HTML element or component to render. Defaults to "button".
 * @param children - Button label / content
 * @param className - Additional Tailwind classes
 */
export default function Button<T extends ElementType = "button">({
  variant = "ghost",
  as,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Tag = as ?? "button";

  return (
    <Tag
      className={cn(
        // Base styles shared by all variants
        "inline-flex items-center gap-2 px-6 py-3 rounded font-mono text-sm font-semibold",
        "tracking-wide cursor-pointer transition-all duration-150 hover:-translate-y-0.5",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
