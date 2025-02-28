import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/conatuslab',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    // This will ignore ESLint errors during the build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will ignore TypeScript errors during the build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;