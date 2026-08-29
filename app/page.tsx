import Hero from "@/components/Hero";
import Projects3D from "@/components/Projects3D";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Contact from "@/components/Contact";
import JsonLd, { getOrganizationSchema, getLocalBusinessSchema } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      {/* Schema Injection */}
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getLocalBusinessSchema()} />

      <main className="min-h-screen -mt-20">
        <Hero />
        <Projects3D />
        <About />
        <Divisions />
        <Contact />
      </main>
    </>
  );
}
