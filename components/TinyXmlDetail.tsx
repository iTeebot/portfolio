"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Copy, Check, Terminal, ExternalLink, Shield, Zap, CheckCircle2, Cpu, Code, Layers, FileText, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const codeExamples = {
  rust_dom: {
    filename: "main.rs",
    code: `use tinyxml2::Document;

fn main() {
    let xml = r#"
        <?xml version="1.0" encoding="UTF-8"?>
        <bookstore>
            <book category="fiction">
                <title lang="en">The Great Gatsby</title>
                <author>F. Scott Fitzgerald</author>
                <year>1925</year>
                <price>10.99</price>
            </book>
            <book category="nonfiction">
                <title lang="en">Sapiens</title>
                <author>Yuval Noah Harari</author>
                <year>2011</year>
                <price>14.99</price>
            </book>
        </bookstore>
    "#;

    // Parse the document
    let doc = Document::parse(xml).expect("Failed to parse XML");

    // Navigate to the root element
    let root = doc.root_element().expect("No root element");
    assert_eq!(root.name(), "bookstore");

    // Iterate over child elements
    for book in root.children_with_name("book") {
        let category = book.attribute("category").unwrap_or("unknown");
        let title = book.first_child_element_with_name("title")
            .and_then(|t| t.text())
            .unwrap_or("untitled");
        println!("{title} ({category})");
    }
}`
  },
  writing_xml: {
    filename: "write.rs",
    code: `use tinyxml2::Document;

fn main() {
    let mut doc = Document::new();
    
    // Add XML Declaration
    doc.add_declaration(r#"xml version="1.0" encoding="UTF-8""#);
    
    // Create root element
    let mut root = doc.create_element("bookstore");
    
    // Create book element
    let mut book = doc.create_element("book");
    book.set_attribute("category", "fiction");
    
    let mut title = doc.create_element("title");
    title.set_attribute("lang", "en");
    title.set_text("The Great Gatsby");
    book.insert_end_child(title);
    
    let mut author = doc.create_element("author");
    author.set_text("F. Scott Fitzgerald");
    book.insert_end_child(author);
    
    let mut year = doc.create_element("year");
    year.set_text("1925");
    book.insert_end_child(year);
    
    let mut price = doc.create_element("price");
    price.set_text("10.99");
    book.insert_end_child(price);
    
    root.insert_end_child(book);
    doc.insert_end_child(root);
    
    // Print the generated XML
    let xml_str = doc.to_string().expect("Failed to generate XML");
    println!("{}", xml_str);
}`
  },
  ffi_compat: {
    filename: "main.cpp",
    code: `// Bridge between C++ and Rust tinyxml2-rs
// Matches the original TinyXML2 C++ class signatures exposed through C linkage

#include <tinyxml2_capi.h>
#include <stdio.h>

int main() {
    // Create a XMLDocument using the safe FFI wrapper
    XMLDocument* doc = XMLDocument_Create();
    
    const char* xml = "<msg>Hello from C/C++ FFI compatibility layer</msg>";
    XMLError err = XMLDocument_Parse(doc, xml);
    
    if (err == XML_SUCCESS) {
        XMLElement* root = XMLDocument_RootElement(doc);
        const char* text = XMLElement_GetText(root);
        printf("Message: %s\\n", text);
    } else {
        printf("Error: Failed to parse XML\\n");
    }
    
    // Clean up allocated FFI memory
    XMLDocument_Destroy(doc);
    return 0;
}`
  }
};

export default function TinyXmlDetail() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>("rust_dom");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Package Header Banner Image - PLACED AT THE TOP */}
      <div className="relative w-full h-[180px] sm:h-[260px] md:h-[320px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 mb-10 flex items-center justify-center p-4">
        <Image
          src="/tinyxml2-rs.png"
          alt="tinyxml2-rs"
          fill
          priority
          sizes="(max-w-4xl) 100vw, 896px"
          className="object-contain"
        />
      </div>

      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Packages
        </Link>
      </div>

      {/* Hero Section Info */}
      <div className="space-y-6 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 text-zinc-600 dark:text-zinc-400 rounded-full">
            Cargo Crate
          </span>
          <span className="px-2.5 py-0.5 text-xs font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-mono">
            v0.1.13
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white tracking-tight">
          tinyxml2-rs
        </h1>

        <p className="text-xl sm:text-2xl font-serif text-zinc-600 dark:text-zinc-300 leading-normal">
          A native Rust implementation of the TinyXML2 API
        </p>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          Provides memory-safe XML parsing and DOM generation. Features a complete C FFI layer, making it a drop-in safe Rust replacement in legacy C/C++ codebases without changing build dependencies.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://crates.io/crates/tinyxml2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
          >
            View on Crates.io
          </a>
          <a
            href="https://github.com/iTeebot/tinyxml2-rs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 dark:border-zinc-850 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            <Github className="w-4 h-4 mr-2" />
            View GitHub Repo
          </a>
        </div>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Installation</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          Integrate <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-xs font-mono">tinyxml2</code> directly into your Cargo project by running:
        </p>
        <div className="relative flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 font-mono text-sm overflow-x-auto">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-zinc-400 flex-shrink-0" />
            <span className="text-zinc-800 dark:text-zinc-200 select-all">cargo add tinyxml2</span>
          </div>
          <button
            onClick={() => handleCopy("cargo add tinyxml2", "install")}
            className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="Copy command"
          >
            {copiedText === "install" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Code Examples</h2>
        
        {/* Tabs Headers */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 mb-6 gap-2 sm:gap-6 overflow-x-auto pb-px">
          {(Object.keys(codeExamples) as Array<keyof typeof codeExamples>).map((key) => {
            const label = key === "rust_dom" ? "Rust DOM API" : key === "writing_xml" ? "Writing XML" : "C FFI Compatibility";
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`pb-3 text-sm sm:text-base font-medium border-b-2 transition-all whitespace-nowrap px-1 relative ${
                  isActive 
                    ? "border-zinc-900 dark:border-white text-zinc-900 dark:text-white" 
                    : "border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Code Content Container */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900/70">
          <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-100/50 dark:bg-zinc-900">
            <span className="text-xs font-mono text-zinc-500">{codeExamples[activeTab].filename}</span>
            <button
              onClick={() => handleCopy(codeExamples[activeTab].code, activeTab)}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {copiedText === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
          <div className="p-4 sm:p-6 overflow-x-auto">
            <pre className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
              <code>{codeExamples[activeTab].code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Workspace Structure */}
      <section className="mb-16 border-t border-zinc-200 dark:border-zinc-850 pt-12">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8">Workspace Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 hover:border-zinc-950 dark:hover:border-white transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <Code className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-serif font-bold text-lg">tinyxml2</h3>
            </div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Core Crate</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Idiomatic Rust API containing Document, Element, Node, and visitor interfaces.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 hover:border-zinc-950 dark:hover:border-white transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <Layers className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-serif font-bold text-lg">tinyxml2-capi</h3>
            </div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">FFI Layer</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Compatibility wrapper exposing C-linkage APIs matching original TinyXML2 signatures.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 hover:border-zinc-950 dark:hover:border-white transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <Cpu className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-serif font-bold text-lg">tinyxml2-bench</h3>
            </div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Benchmark Suite</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Criterion-backed benchmarking comparisons targeting performance and memory allocations.
            </p>
          </div>
        </div>
      </section>

      {/* Drop-in C++ Compatibility */}
      <section className="mb-16 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Drop-in C++ Compatibility</h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-3xl">
          <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-xs font-mono">tinyxml2-rs</code> compiles into dynamic (<code className="text-xs font-mono">.so</code>, <code className="text-xs font-mono">.dylib</code>, <code className="text-xs font-mono">.dll</code>) and static libraries. Existing C++ applications can swap the linker output to <code className="text-xs font-mono">tinyxml2-capi</code> to transition to a safe Rust XML parsing logic without source code modifications.
        </p>
        <a
          href="https://github.com/iTeebot/tinyxml2-rs/blob/main/tinyxml2-capi/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          Read C-API Integration Docs
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </section>

      {/* Why tinyxml2-rs? */}
      <section className="mb-12 border-t border-zinc-200 dark:border-zinc-850 pt-12">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Why tinyxml2-rs?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
            Retain API compatibility while solving critical memory safety flaws inherent in C/C++ XML libraries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-serif font-bold text-base">Safe Rust Core</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Core DOM and parser contain no unsafe code. Built-in compiler-enforced memory safety.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-serif font-bold text-base">High Performance</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Hand-written recursive descent parser with zero-copy string slices during hot paths.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-serif font-bold text-base">Behavioral Conformance</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Tested against thousands of XML parsing conformance tests from the original TinyXML2.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-serif font-bold text-base">Generational Arena DOM</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Optimized node allocations with a cache-friendly generational index arena backend.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-serif font-bold text-base">C/C++ FFI Layer</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              CDYLIB exports matching TinyXML2 header interfaces for seamless C++ drop-in integration.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <h3 className="font-serif font-bold text-base">Zero Dependencies</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Guarantees absolute independence with zero third-party dependencies in the core crate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
