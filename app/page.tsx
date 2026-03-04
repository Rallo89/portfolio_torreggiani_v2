import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import CaseStudy from "../components/CaseStudy";
import MobileCTA from "../components/MobileCTA";

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
      <MobileCTA />

    </main>

  );
}