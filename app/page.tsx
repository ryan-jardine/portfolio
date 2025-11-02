import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
