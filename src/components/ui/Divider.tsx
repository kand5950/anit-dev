/**
 * @file src/components/ui/Divider.tsx
 *
 * A horizontal rule with a fading accent-colour gradient.
 * Used between every section on the home page.
 */

export default function Divider() {
  return (
    <hr className="border-none h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, #00e5ff55, transparent)",
        }}
    />
  );
}
