"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    title: "Mallsylo E-commerce Platform",
    client: "Retail Enterprise",
    metric: "Scalable Multi-Vendor Architecture",
    description: "Architected a full-featured, enterprise-grade e-commerce platform equipped with dedicated vendor and admin panels to seamlessly manage complex supply chains and digital storefronts.",
    tags: ["Full Stack", "E-Commerce", "Admin Panels"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    link: "https://ateebnoone.iteebot.com/#projects",
  },
  {
    title: "Vote Chain Blockchain System",
    client: "Secure Governance Initiative",
    metric: "100% Tamper-Proof Audit Trail",
    description: "Developed a revolutionary blockchain-based voting system designed to ensure absolute transparency and security, eliminating the risk of fraud in high-stakes governance processes.",
    tags: ["Blockchain", "Cryptography", "Smart Contracts"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4d2315?q=80&w=800&auto=format&fit=crop",
    link: "https://ateebnoone.iteebot.com/#projects",
  },
  {
    title: "Law School Educational Platform",
    client: "Educational Institution",
    metric: "Comprehensive LMS Integration",
    description: "Built an end-to-end educational management platform specifically tailored for law students, integrating course delivery, resource management, and secure student portals into one cohesive ecosystem.",
    tags: ["React", "LMS", "EdTech"],
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
    link: "https://ateebnoone.iteebot.com/#projects",
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full mb-6"
          >
            <span className="text-sm font-semibold tracking-wide uppercase">Proven Results</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6"
          >
            Featured Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Real-world solutions that drove measurable growth, efficiency, and revenue for our clients.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="text-indigo-300 font-medium text-sm mb-1">{study.client}</p>
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-semibold px-3 py-1 rounded-md text-sm mb-4 self-start">
                  Result: {study.metric}
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-grow">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/link mt-auto"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Want to see my complete engineering history and experimental work? <br className="hidden sm:block" />
            <a href="https://ateebnoone.iteebot.com/#projects" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline mt-2">
              Explore my personal project archive <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
