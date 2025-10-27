import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
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
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
