"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-zinc-50 dark:bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Get in Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-zinc-900 dark:bg-white mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Ready to build the future together? Let's discuss how we can transform your ideas into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-semibold text-zinc-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-zinc-900 dark:text-white mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@iteebot.com"
                      className="text-lg text-zinc-900 dark:text-white hover:underline"
                    >
                      hello@iteebot.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-zinc-900 dark:text-white mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1">
                      Website
                    </p>
                    <a
                      href="https://iteebot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-zinc-900 dark:text-white hover:underline"
                    >
                      iteebot.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

            {/* Additional Info */}
            <div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Whether you're a startup or an established enterprise, we're excited to discuss
                new projects, partnerships, and innovative ideas.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {statusMessage && (
              <div
                className={`p-4 border ${
                  status === 'success'
                    ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300'
                    : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
                }`}
              >
                {statusMessage}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="group w-full px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium inline-flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.99 }}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white dark:border-zinc-900 border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
