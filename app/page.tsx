import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">...</section>
      <section id="contact">...</section>
    </>
  );
}
