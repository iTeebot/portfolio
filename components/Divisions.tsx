"use client";

import { Briefcase, FlaskConical, Settings, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const divisions = [
  {
    id: "consulting",
    name: "Consulting",
    tagline: "Strategy & Architecture",
    description: "Technical guidance for businesses and startups navigating digital transformation.",
    icon: Briefcase,
    features: [
      "Technical Strategy",
      "System Architecture",
      "Digital Transformation",
      "Technology Roadmapping",
    ],
    url: null,
    size: "large", // Featured
  },
  {
    id: "labs",
    name: "Labs",
    tagline: "Research & Innovation",
    description: "Open-source tools, AI models, and experimental projects pushing technological boundaries.",
    icon: FlaskConical,
    features: [
      "AI/ML Research",
      "Open Source Projects",
      "Experimental Tech",
      "Innovation Prototyping",
    ],
    url: "https://labs.iteebot.com",
    size: "large", // Featured
  },
  {
    id: "systems",
    name: "Systems",
    tagline: "Hardware & IoT",
    description: "Automation, robotics, and embedded technology solutions.",
    icon: Settings,
    features: [
      "IoT Solutions",
      "Robotics",
      "Automation",
      "Embedded Systems",
    ],
    url: null,
    size: "small",
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "Digital Experiences",
    description: "UI/UX design and modern application development.",
    icon: Palette,
    features: [
      "Web & Mobile",
      "UI/UX Design",
      "Brand Identity",
      "Digital Products",
    ],
    url: null,
    size: "small",
  },
];

export default function Divisions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section id="divisions" className="py-32 bg-white dark:bg-zinc-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
            Our Divisions
          </h2>
          <div className="w-20 h-1 bg-zinc-900 dark:bg-white mb-8" />
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Four specialized divisions working in harmony to deliver comprehensive technology solutions.
          </p>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {divisions.map((division) => {
            const DivisionCard = (
              <motion.div
                key={division.id}
                variants={cardVariants}
                className={`
                  group relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 
                  hover:border-zinc-900 dark:hover:border-white transition-all duration-300
                  ${division.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
                  ${division.url ? 'cursor-pointer' : ''}
                `}
                whileHover={{ y: -4 }}
              >
                <div className={`p-8 ${division.size === 'large' ? 'md:p-12' : ''}`}>
                  {/* Icon and Name */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <division.icon className="w-12 h-12 md:w-16 md:h-16 text-zinc-900 dark:text-white mb-4" strokeWidth={1.5} />
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 dark:text-white mb-2">
                        {division.name}
                      </h3>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                        {division.tagline}
                      </p>
                    </div>
                    {division.url && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg 
                          className="w-6 h-6 text-zinc-900 dark:text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Features - Clean list without bullets */}
                  <div className="space-y-3">
                    {division.features.map((feature) => (
                      <div 
                        key={feature} 
                        className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400"
                      >
                        <div className="w-1.5 h-1.5 bg-zinc-900 dark:bg-white rounded-full flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover indicator line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-zinc-900 dark:bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );

            return division.url ? (
              <a
                key={division.id}
                href={division.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {DivisionCard}
              </a>
            ) : (
              <div key={division.id}>{DivisionCard}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
