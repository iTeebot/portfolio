import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects3D from "@/components/Projects3D";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects3D />
      <About />
      <Divisions />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
