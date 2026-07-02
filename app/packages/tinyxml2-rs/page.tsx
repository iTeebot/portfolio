import type { Metadata } from "next";
import TinyXmlDetail from "@/components/TinyXmlDetail";

export const metadata: Metadata = {
  title: "tinyxml2-rs - Safe Rust TinyXML2 Implementation | Teebot Labs",
  description: "A native Rust implementation of the TinyXML2 API. Provides memory-safe XML parsing and DOM generation. Drop-in safe Rust replacement in legacy C/C++ codebases.",
  keywords: ["tinyxml2-rs", "rust xml parser", "rust xml dom", "rust tinyxml2", "rust ffi", "memory-safe xml"],
  openGraph: {
    title: "tinyxml2-rs - Safe Rust TinyXML2 Implementation",
    description: "A native Rust implementation of the TinyXML2 API with complete FFI compatibility.",
    images: [{ url: "/tinyxml2-rs.png", width: 1200, height: 630, alt: "tinyxml2-rs logo" }],
  },
};

export default function TinyXmlPage() {
  return <TinyXmlDetail />;
}
