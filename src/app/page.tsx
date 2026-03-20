/**
 * @file src/app/page.tsx
 *
 * Home page — the only page in this single-page portfolio.
 */

import Navbar    from "@/components/layout/Navbar";
import Hero      from "@/components/sections/Hero";
import About     from "@/components/sections/About";
import Projects  from "@/components/sections/Projects";
import Skills    from "@/components/sections/Skills";
import Contact   from "@/components/sections/Contact";
import Footer    from "@/components/layout/Footer";
import Divider   from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      {/* Fixed navigation bar — sits above all content */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
