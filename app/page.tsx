import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import JsonLd, { getOrganizationSchema, getLocalBusinessSchema } from "@/components/JsonLd";

const Projects3D = dynamic(() => import("@/components/Projects3D"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Divisions = dynamic(() => import("@/components/Divisions"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

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
