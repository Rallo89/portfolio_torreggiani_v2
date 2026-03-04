import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Architecture from "../components/Architecture";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import CaseStudy from "../components/CaseStudy";

export default function Home() {

  return (

    <main>

      <Hero />
      <About />
      <Experience />
      <CaseStudy />
      <ArchitectureDiagram />
      <Skills />
      <Contact />

    </main>

  );
}