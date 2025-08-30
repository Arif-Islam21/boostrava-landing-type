// next.config.ts
import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

const nextConfig: NextConfig = {
  webpack: (config: WebpackConfig) => {
    return config;
  },
};

export default nextConfig;
