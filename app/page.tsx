import Hero from "@/components/Hero";
import Projects3D from "@/components/Projects3D";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen -mt-20">
      <Hero />
      <Projects3D />
      <About />
      <Divisions />
      <Contact />
    </main>
  );
}
