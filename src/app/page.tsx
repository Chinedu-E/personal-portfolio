import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SiteFooter from "@/components/SiteFooter";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-2xl px-5">
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <SiteFooter />
    </main>
  );
}
