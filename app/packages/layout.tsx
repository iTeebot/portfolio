"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col font-sans">
      {/* Navigation Header */}
      <motion.nav
        className={`fixed left-0 right-0 z-50 mx-auto transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-4 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-5xl rounded-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg shadow-zinc-200/5 dark:shadow-none"
            : "top-0 w-full bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <div className={`mx-auto transition-all duration-500 ${isScrolled ? "max-w-5xl px-6" : "max-w-7xl px-4 sm:px-6 lg:px-8"}`}>
          <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? "h-14" : "h-20"}`}>
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:opacity-80 transition-opacity">
                Teebot <span className="font-sans text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 ml-1">Labs</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white ${
                      isActive 
                        ? "text-zinc-900 dark:text-white font-semibold" 
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg mx-2 overflow-hidden`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 py-6 space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left text-lg font-medium text-zinc-700 dark:text-zinc-300 py-2 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-24 pb-16">
        {children}
      </main>

      {/* Labs Footer */}
      <footer className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Division Info */}
            <div className="space-y-4">
              <div className="font-serif text-2xl font-bold tracking-tight">
                Teebot <span className="font-sans text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 ml-1">Labs</span>
              </div>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                Research & Innovation
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Building open-source tools and pushing technological boundaries.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/iTeebot" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors inline-flex items-center gap-1">
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Teebot Family */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
                Teebot Family
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">
                Part of the Teebot ecosystem
              </p>
              <a
                href="https://iteebot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-900 dark:text-white hover:opacity-85 transition-opacity inline-flex items-center gap-1 group"
              >
                Visit iteebot.com
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
                Connect
              </h4>
              <a
                href="mailto:hello@iteebot.com"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors block"
              >
                hello@iteebot.com
              </a>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p>© 2026 Teebot Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
