"use client";

import Image from "next/image";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <motion.footer 
      className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Teebot"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Creating intelligent, scalable, and future-ready technology solutions across the digital and hardware spectrum.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/iTeebot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#about" 
                  className="text-gray-400 transition-colors"
                  whileHover={{ x: 5, color: "#60a5fa" }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#divisions" 
                  className="text-gray-400 transition-colors"
                  whileHover={{ x: 5, color: "#60a5fa" }}
                >
                  Divisions
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact" 
                  className="text-gray-400 transition-colors"
                  whileHover={{ x: 5, color: "#60a5fa" }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Divisions */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Divisions</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Consulting</li>
              <li className="text-gray-400">Labs</li>
              <li className="text-gray-400">Systems</li>
              <li className="text-gray-400">Studio</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Teebot. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <motion.a 
              href="https://iteebot.com" 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#60a5fa" }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="https://iteebot.com" 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#60a5fa" }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

