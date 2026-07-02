"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Github, ExternalLink, Cpu, Code2, Receipt, ShoppingBag } from "lucide-react";

interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  logo: string;
  github: string;
  details: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "tinyxml2-rs",
    type: "Open Source Cargo Crate",
    description: "A native Rust implementation of the TinyXML2 API. Provides memory-safe XML parsing and DOM generation with FFI compatibility, making it a drop-in safe Rust replacement in legacy C/C++ codebases.",
    tags: ["Rust", "XML DOM", "FFI Compatibility", "Memory-Safe", "Zero Dependencies"],
    logo: "/tinyxml2-rs.png",
    github: "https://github.com/iTeebot/tinyxml2-rs",
    details: "/packages/tinyxml2-rs",
    icon: <Cpu className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />,
  },
  {
    title: "GestureSmart",
    type: "Open Source Mobile App",
    description: "An open-source mobile application utilizing advanced, real-time hand gesture recognition via on-device camera feeds to trigger smart home and system actions. Built with React Native and powered by Google's MediaPipe framework for low-latency, on-device machine learning.",
    tags: ["React Native", "MediaPipe", "TypeScript", "AI/ML", "Smart Home"],
    logo: "/gesture_smart.png",
    github: "https://github.com/AteebNoOne/GestureSmart",
    details: "https://ateebnoone.iteebot.com/mobile-apps/gesture-smart",
    icon: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "npm-ai-hooks",
    type: "Open Source NPM Package",
    description: "A lightweight, robust React hooks library designed for seamless integration of generative AI models. It offers simple, type-safe hooks for streaming chat completions, speech-to-text, and conversational interfaces directly in React and Next.js projects.",
    tags: ["React", "Next.js", "AI Hooks", "SSE Streaming", "TypeScript"],
    logo: "/npm-ai-hooks.png",
    github: "https://github.com/iTeebot/npm-ai-hooks",
    details: "https://labs.iteebot.com/npm-packages/npm-ai-hooks",
    icon: <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "AFM Digital Invoicing",
    type: "Fintech Compliance Platform",
    description: "A secure digital invoicing system integrated directly with Pakistan's Federal Board of Revenue (FBR) via PRAL. It automates sales tax reporting, invoice registration, and corporate compliance verification.",
    tags: ["React", "FBR PRAL Integration", "Fintech API", "Automated Compliance"],
    logo: "/afm_logo.png",
    github: "",
    details: "https://www.afmsolution.tech/digital-invoicing",
    icon: <Receipt className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    title: "Teezyon",
    type: "AI Fashion E-Commerce",
    description: "Pakistan's first AI-powered custom fashion visualizer and e-commerce platform. It enables real-time generation and 3D previewing of customized apparel like T-shirts and hoodies, with local payment gateway integrations.",
    tags: ["Next.js", "AI Customization", "3D Previewer", "Easypaisa & JazzCash"],
    logo: "/teezyon.png",
    github: "",
    details: "https://www.teezyon.com/",
    icon: <ShoppingBag className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  },
];

export default function Projects3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track and update active project index based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const N = projects.length;
    const index = Math.min(
      Math.floor(latest * N),
      N - 1
    );
    if (activeProject !== index) {
      setActiveProject(index);
    }
  });

  const handleCardClick = (index: number) => {
    if (activeProject === index) {
      window.open(projects[index].details, "_blank");
    } else {
      // Scroll page to active card partition
      const N = projects.length;
      const scrollPercentage = index / (N - 1);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        window.scrollTo({
          top: absoluteTop + (containerRef.current.clientHeight * scrollPercentage),
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-16 sm:py-20">
        
        {/* Tilted 3D grid backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Tilted 3D grid floor */}
          <div 
            className="absolute inset-x-0 -bottom-[35%] h-[90%] bg-[linear-gradient(to_right,rgba(128,128,128,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.06)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
            style={{
              transform: "perspective(1000px) rotateX(75deg) translateZ(0)",
              transformOrigin: "bottom center",
              maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
            }}
          />
          {/* Tilted 3D grid ceiling */}
          <div 
            className="absolute inset-x-0 -top-[35%] h-[90%] bg-[linear-gradient(to_right,rgba(128,128,128,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.06)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
            style={{
              transform: "perspective(1000px) rotateX(-75deg) translateZ(0)",
              transformOrigin: "top center",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"
            }}
          />
        </div>

        {/* Section Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm mb-3">
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-500 uppercase">
              Featured Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-white tracking-tight">
            Interactive Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Scroll down to rotate and view projects in 3D
          </p>
        </div>

        {/* 3D Cards Perspective Display */}
        <div className="relative z-10 w-full flex items-center justify-center flex-1 my-4 overflow-visible perspective-[1200px]">
          <div className="relative w-full max-w-4xl h-[320px] sm:h-[400px] flex items-center justify-center overflow-visible">
            
            {projects.map((project, index) => (
              <Project3DWrapper
                key={project.title}
                project={project}
                index={index}
                totalProjects={projects.length}
                scrollYProgress={scrollYProgress}
                activeProject={activeProject}
                onCardClick={handleCardClick}
              />
            ))}

          </div>
        </div>

        {/* Active Project Details Description */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 w-full h-[190px] sm:h-[170px] flex flex-col justify-start text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-4 flex flex-col items-center"
            >
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  {projects[activeProject].icon}
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    {projects[activeProject].type}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 dark:text-white">
                  {projects[activeProject].title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed px-2">
                {projects[activeProject].description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {projects[activeProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 pt-2">
                {projects[activeProject].github && (
                  <a
                    href={projects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs sm:text-sm font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Repository
                  </a>
                )}
                <a
                  href={projects[activeProject].details}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-medium rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors bg-white dark:bg-zinc-950"
                >
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Visit Website
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Indicator / Pagination dots */}
        <div className="relative z-10 flex justify-center gap-2 pt-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                // Scroll page to active card partition
                const N = projects.length;
                const scrollPercentage = index / (N - 1);
                if (containerRef.current) {
                  const rect = containerRef.current.getBoundingClientRect();
                  const absoluteTop = window.scrollY + rect.top;
                  window.scrollTo({
                    top: absoluteTop + (containerRef.current.clientHeight * scrollPercentage),
                    behavior: "smooth"
                  });
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeProject === index 
                  ? "w-6 bg-zinc-800 dark:bg-white" 
                  : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

interface ProjectWrapperProps {
  project: Project;
  index: number;
  totalProjects: number;
  scrollYProgress: any;
  activeProject: number;
  onCardClick: (index: number) => void;
}

/* Dynamic Wrapper Component to respect React Rule of Hooks */
function Project3DWrapper({
  project,
  index,
  totalProjects,
  scrollYProgress,
  activeProject,
  onCardClick,
}: ProjectWrapperProps) {
  const N = totalProjects;
  // Generate strictly increasing [0 ... 1] range to avoid WAAPI clamp errors
  const inputRange = Array.from({ length: N }, (_, i) => i / (N - 1));

  const xOutput = inputRange.map((_, s) => {
    const diff = s - index;
    if (diff === 0) return "0%";
    if (diff === 1) return "-110%";
    if (diff === -1) return "110%";
    if (diff > 1) return `${-110 - (diff - 1) * 30}%`;
    return `${110 + (-diff - 1) * 30}%`;
  });

  const yOutput = inputRange.map((_, s) => {
    const diff = s - index;
    if (diff === 0) return "0px";
    return `${-30 - (Math.abs(diff) - 1) * 10}px`;
  });

  const rotateYOutput = inputRange.map((_, s) => {
    const diff = s - index;
    if (diff === 0) return 0;
    if (diff > 0) return 50 + (diff - 1) * 10;
    return -50 - (Math.abs(diff) - 1) * 10;
  });

  const zOutput = inputRange.map((_, s) => {
    const diff = s - index;
    if (diff === 0) return 0;
    return -250 - (Math.abs(diff) - 1) * 50;
  });

  const opacityOutput = inputRange.map((_, s) => {
    return s === index ? 1 : 0;
  });

  const scaleOutput = inputRange.map((_, s) => {
    const diff = s - index;
    if (diff === 0) return 1;
    return Math.max(0.4, 0.75 - (Math.abs(diff) - 1) * 0.15);
  });

  const x = useTransform(scrollYProgress, inputRange, xOutput);
  const y = useTransform(scrollYProgress, inputRange, yOutput);
  const rotateY = useTransform(scrollYProgress, inputRange, rotateYOutput);
  const z = useTransform(scrollYProgress, inputRange, zOutput);
  const opacity = useTransform(scrollYProgress, inputRange, opacityOutput);
  const scale = useTransform(scrollYProgress, inputRange, scaleOutput);

  return (
    <motion.div
      style={{
        x,
        y,
        rotateY,
        z,
        opacity,
        scale,
        transformStyle: "preserve-3d",
      }}
      className="absolute w-[240px] sm:w-[300px] md:w-[320px] aspect-[3/4]"
    >
      <ProjectCard
        project={project}
        isActive={activeProject === index}
        onClick={() => onCardClick(index)}
      />
    </motion.div>
  );
}

/* Internal Interactive Tilt Card Component */
function ProjectCard({ project, isActive, onClick }: { project: Project; isActive: boolean; onClick: () => void }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Max rotation 15 degrees
    setRotateX(-y / (box.height / 20));
    setRotateY(x / (box.width / 20));
  };

  const handleMouseEnter = () => {
    if (isActive) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : 0,
        scale: isActive ? 1.05 : 0.9,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer ${
        isActive 
          ? "opacity-100 filter drop-shadow-[0_20px_50px_rgba(0,102,204,0.18)] dark:drop-shadow-[0_20px_50px_rgba(59,158,255,0.12)]" 
          : "opacity-30 pointer-events-none scale-90"
      }`}
    >
      {/* Pure Logo Image without outer container */}
      <div 
        style={{
          transform: isActive ? "translateZ(40px)" : "translateZ(0px)",
          transition: "transform 0.4s ease-out",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <Image
          src={project.logo}
          alt={project.title}
          fill
          sizes="(max-w-7xl) 320px, 240px"
          className="object-contain select-none"
          priority
          unoptimized
        />
      </div>

      {/* 3D Holographic Tooltip */}
      <AnimatePresence>
        {isActive && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ 
              transform: "translateZ(60px)",
              transformStyle: "preserve-3d"
            }}
            className="absolute bottom-4 sm:bottom-8 px-4 py-2 rounded-full bg-zinc-900/90 dark:bg-white/95 text-white dark:text-zinc-900 text-[10px] sm:text-xs font-semibold backdrop-blur-md shadow-lg border border-zinc-800 dark:border-zinc-200/20 flex items-center gap-1.5 pointer-events-none select-none tracking-wide"
          >
            Click to Open
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
