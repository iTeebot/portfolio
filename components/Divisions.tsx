"use client";

import { Briefcase, FlaskConical, Settings, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const divisions = [
  {
    id: "consulting",
    name: "Teebot Consulting",
    description: "Strategy, architecture, and technical guidance for businesses and startups.",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    features: [
      "Technical Strategy & Architecture",
      "Digital Transformation",
      "Technology Roadmapping",
      "Startup Consulting",
    ],
  },
  {
    id: "labs",
    name: "Teebot Labs",
    description: "Research & development hub for open-source tools, AI models, and experimental projects.",
    icon: FlaskConical,
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    features: [
      "AI/ML Research & Development",
      "Open Source Projects",
      "Experimental Technologies",
      "Innovation Prototyping",
    ],
  },
  {
    id: "systems",
    name: "Teebot Systems",
    description: "Hardware and IoT division focusing on automation, robotics, and embedded technology.",
    icon: Settings,
    color: "from-orange-500 to-red-500",
    iconColor: "text-orange-500",
    features: [
      "IoT Solutions",
      "Robotics & Automation",
      "Embedded Systems",
      "Hardware Design",
    ],
  },
  {
    id: "studio",
    name: "Teebot Studio",
    description: "UI/UX, app development, and creative digital experiences.",
    icon: Palette,
    color: "from-green-500 to-teal-500",
    iconColor: "text-green-500",
    features: [
      "Web & Mobile Development",
      "UI/UX Design",
      "Brand Identity",
      "Digital Experiences",
    ],
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
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const titleVariants: any = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="divisions" className="py-24 bg-gray-50 dark:bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Divisions
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Four specialized divisions working together to deliver comprehensive technology solutions
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {divisions.map((division, index) => (
            <motion.div
              key={division.id}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${division.color} rounded-2xl`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              <div className="relative z-10">
                <motion.div 
                  className="mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <division.icon className={`w-12 h-12 ${division.iconColor}`} strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {division.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {division.description}
                </p>
                
                <ul className="space-y-3">
                  {division.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.6 + (index * 0.15) + (idx * 0.1) }}
                    >
                      <svg
                        className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 bg-gradient-to-br ${division.color} text-transparent`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

