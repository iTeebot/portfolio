"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden bg-white dark:bg-zinc-950 pt-20"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,204,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,158,255,0.1),transparent_50%)]"></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32 relative z-10 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow text */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm mb-4 sm:mb-6 md:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Technology Consultancy & Development
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-zinc-900 dark:text-white mb-4 sm:mb-5 md:mb-6 tracking-tight leading-tight"
          >
            Building the{' '}
            <span className="relative inline-block">
              <span className="relative z-10">future</span>
              <motion.span
                className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-blue-600/20 dark:bg-blue-500/30"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            {' '}of technology
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Intelligent, scalable, and future-ready solutions across the digital and hardware spectrum.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16"
          >
            <motion.button
              onClick={scrollToContact}
              className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium inline-flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.a
              href="#about"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full font-medium hover:border-zinc-900 dark:hover:border-white transition-colors duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
            </motion.a>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto"
          >
            {[
              { label: 'Divisions', value: '4' },
              { label: 'Expertise', value: '360°' },
              { label: 'Approach', value: 'Hybrid' },
              { label: 'Focus', value: 'Innovation' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-zinc-300 dark:border-zinc-700 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
