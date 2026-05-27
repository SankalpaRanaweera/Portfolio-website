import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Bento } from "@/components/Bento";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { References } from "@/components/References";
import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-cream">
      <CustomCursor />
      <Nav />
      <Hero />
      <Experience />
      {/* <Work /> */}
      <About />
      <Projects />
      <Bento />     
      {/* <Education /> */}
      <Skills />
      <References />
      <Contact />
      <Footer />
    </main>
  );
}
