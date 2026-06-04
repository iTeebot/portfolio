import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "labs.iteebot.com",
      },
      {
        protocol: "https",
        hostname: "ateebnoone.iteebot.com",
      },
    ],
  },
};

export default nextConfig;
