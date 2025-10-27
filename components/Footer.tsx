"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Facebook, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(data.message);
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="bg-zinc-900 dark:bg-black text-white border-t border-zinc-800 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-zinc-800">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-serif font-bold mb-4">Stay Updated</h3>
            <p className="text-zinc-400 mb-6">
              Subscribe to our newsletter for the latest updates, insights, and innovations from Teebot.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-zinc-800 dark:bg-zinc-900 border border-zinc-700 dark:border-zinc-800 text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors"
                disabled={status === 'loading'}
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-white text-zinc-900 font-medium inline-flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
            {statusMessage && (
              <p
                className={`mt-3 text-sm ${
                  status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Teebot"
              width={180}
              height={50}
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-zinc-400 text-sm leading-relaxed">
              Creating intelligent, scalable, and future-ready technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#divisions"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Divisions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Divisions
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-zinc-400 text-sm">Consulting</span>
              </li>
              <li>
                <a
                  href="https://labs.iteebot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                >
                  Labs
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <span className="text-zinc-400 text-sm">Systems</span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm">Studio</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/iTeebot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 dark:bg-zinc-900 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/iteebot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 dark:bg-zinc-900 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/iTeebot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 dark:bg-zinc-900 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} Teebot. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://iteebot.com"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://iteebot.com"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
