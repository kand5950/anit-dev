/**
 * @file src/lib/utils.ts
 *
 * Shared utility functions used across components.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — Merges Tailwind class strings safely.
 * Combines clsx (conditional classes) with tailwind-merge
 * (deduplicates conflicting Tailwind utilities).
 *
 * @param inputs - Any number of class values (strings, objects, arrays)
 * @returns      - A single merged class string
 *
 * @example
 *   cn("px-4 py-2", isActive && "bg-accent", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
