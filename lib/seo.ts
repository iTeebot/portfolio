import { Metadata } from "next";

export function constructMetadata({
  title = "Teebot - Technology Consultancy & Development",
  description = "Teebot is a technology consultancy and development organization creating intelligent, scalable, and future-ready solutions across digital and hardware spectrum.",
  image = "/og-image.png",
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  // Normalize path to make sure it doesn't end with a slash unless it is the root
  const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `https://www.iteebot.com${cleanPath}`;

  return {
    metadataBase: new URL("https://www.iteebot.com"),
    title,
    description,
    keywords: [
      "technology consultancy",
      "software development",
      "AI ML",
      "IoT",
      "automation",
      "web development",
      "app development",
      "robotics",
      "cloud infrastructure",
      "AI Automation",
      "Business Automation",
      "Workflow Automation",
      "AI Agents",
      "Mobile App Development",
      "Web Application Development",
      "Full Stack Development",
      "Custom Software Development"
    ],
    authors: [{ name: "Teebot" }],
    creator: "Teebot",
    publisher: "Teebot",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Teebot",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: true,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}
