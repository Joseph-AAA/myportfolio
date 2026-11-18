
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  
  allowedDevOrigins: ["192.168.0.158"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
