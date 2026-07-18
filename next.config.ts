import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 128, 256, 384],
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
