"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Zap } from "lucide-react";

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="py-32 bg-zinc-50 dark:bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
            About Teebot
          </h2>
          <div className="w-20 h-1 bg-zinc-900 dark:bg-white mb-8" />
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A hybrid technology ecosystem blending professional consultancy, custom development,
            and open-source innovation.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column - Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Teebot is a technology consultancy and development organization dedicated to creating
              <strong className="font-semibold text-zinc-900 dark:text-white"> intelligent, scalable, and future-ready</strong> solutions
              across the digital and hardware spectrum.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We provide end-to-end services for businesses, startups, and individuals seeking to
              harness modern technology efficiently and ethically. Our expertise spans multiple domains
              including web, mobile, AI/ML, IoT, cybersecurity, automation, cloud infrastructure, and
              embedded systems.
            </p>
            
            {/* Specializations */}
            <div className="pt-8">
              <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-4">
                Core Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AI/ML', 'IoT', 'Web Development', 'Mobile Apps', 'Cloud Infrastructure', 'Cybersecurity', 'Automation', 'Embedded Systems'].map((spec) => (
                  <span
                    key={spec}
                    className="px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mission & Vision */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Mission */}
            <div className="border-l-2 border-zinc-900 dark:border-white pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-zinc-900 dark:text-white" />
                <h3 className="text-xl font-serif font-semibold text-zinc-900 dark:text-white">
                  Mission
                </h3>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                To unify innovation across software and hardware — empowering creators, companies,
                and communities to build the future of technology together.
              </p>
            </div>

            {/* Vision */}
            <div className="border-l-2 border-zinc-900 dark:border-white pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-5 h-5 text-zinc-900 dark:text-white" />
                <h3 className="text-xl font-serif font-semibold text-zinc-900 dark:text-white">
                  Vision
                </h3>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                A world where intelligent technology is transparent, accessible, and built with integrity.
              </p>
            </div>

            {/* Approach */}
            <div className="border-l-2 border-zinc-900 dark:border-white pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-zinc-900 dark:text-white" />
                <h3 className="text-xl font-serif font-semibold text-zinc-900 dark:text-white">
                  Approach
                </h3>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We operate as a hybrid tech ecosystem, combining the expertise of consultancy with
                the agility of a development studio and the innovation of an open-source lab.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
