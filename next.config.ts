import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: [
      "@react-three/drei",
      "@react-three/fiber",
      "lucide-react",
      "framer-motion",
      "three",
    ],
  },
};

export default nextConfig;
