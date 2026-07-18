"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
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
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <motion.nav
      className={`fixed left-0 right-0 z-50 mx-auto transition-all duration-500 ease-in-out ${isScrolled
          ? "top-4 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-5xl rounded-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg shadow-zinc-200/10 dark:shadow-none"
          : "top-0 w-full bg-transparent border-b border-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const }}
    >
      <div className={`mx-auto transition-all duration-500 ${isScrolled ? "max-w-5xl px-6" : "max-w-7xl px-4 sm:px-6 lg:px-8"}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? "h-14" : "h-20"}`}>
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Teebot Logo"
              width={180}
              height={50}
              className={`w-auto object-contain dark:brightness-0 dark:invert transition-all duration-500 ${isScrolled ? "h-7" : "h-12"
                }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href + "/"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${isActive
                      ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-500 ${isScrolled ? "px-5 py-1.5" : "px-6 py-2"
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 ${isScrolled
                  ? "rounded-2xl shadow-lg mx-2"
                  : "border-b border-x-0 border-t-0"
                }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left text-lg font-medium text-zinc-700 dark:text-zinc-300 py-2 capitalize"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-lg font-medium text-zinc-700 dark:text-zinc-300 py-2"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
