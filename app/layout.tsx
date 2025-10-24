import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teebot - Technology Consultancy & Development",
  description: "Teebot is a technology consultancy and development organization creating intelligent, scalable, and future-ready solutions across digital and hardware spectrum. Services in consulting, AI/ML, IoT, web development, and more.",
  keywords: ["technology consultancy", "software development", "AI ML", "IoT", "automation", "web development", "app development", "robotics", "cloud infrastructure"],
  authors: [{ name: "Teebot" }],
  openGraph: {
    title: "Teebot - Technology Consultancy & Development",
    description: "Creating intelligent, scalable, and future-ready technology solutions",
    url: "https://iteebot.com",
    siteName: "Teebot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teebot - Technology Consultancy & Development",
    description: "Creating intelligent, scalable, and future-ready technology solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
