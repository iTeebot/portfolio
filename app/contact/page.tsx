import React from "react";
import ContactForm from "@/components/Contact";
import { constructMetadata } from "@/lib/seo";
import { Mail, MapPin, Calendar, Clock } from "lucide-react";
import JsonLd, { getLocalBusinessSchema } from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Contact Teebot | Request Software & AI Consultation",
  description: "Get in touch with Teebot. Request a project proposal, ask questions, or schedule a technical consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Schema Injection */}
      <JsonLd data={getLocalBusinessSchema()} />

      <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Let&apos;s Build Something Great
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              Have a project in mind, need help with automation integrations, or looking to scale your engineering? Send us a message or request a quotation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/5">
              <ContactForm />
            </div>

            {/* Info Column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Direct Channels */}
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Direct Channels</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-500 uppercase">General inquiries</h4>
                      <a href="mailto:hello@iteebot.com" className="text-sm font-semibold text-zinc-900 dark:text-white hover:underline">
                        hello@iteebot.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-500 uppercase">Location</h4>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        Karachi, Pakistan (Remote Worldwide)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Business Hours</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-500 uppercase">Availability</h4>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        Monday – Friday, 9:00 AM – 6:00 PM (PKT)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-500 uppercase">Consultations</h4>
                      <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                        Meetings scheduled via Calendly request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
