"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Teebot
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="space-y-6" variants={leftVariants}>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <strong className="text-blue-600 dark:text-blue-400">Teebot</strong> is a technology consultancy and development organization dedicated to creating intelligent, scalable, and future-ready solutions across the digital and hardware spectrum.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              At its core, Teebot operates as a <strong className="text-purple-600 dark:text-purple-400">hybrid tech ecosystem</strong> — blending professional consultancy, custom software and hardware development, and open-source innovation. We provide end-to-end services for businesses, startups, and individuals seeking to harness modern technology efficiently and ethically.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our expertise spans multiple domains including web, mobile, AI/ML, IoT, cybersecurity, automation, cloud infrastructure, and embedded systems.
            </motion.p>
          </motion.div>

          <motion.div className="space-y-8" variants={rightVariants}>
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To unify innovation across software and hardware — empowering creators, companies, and communities to build the future of technology together.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A world where intelligent technology is transparent, accessible, and built with integrity.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

