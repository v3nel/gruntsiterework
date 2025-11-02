import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/gruntsitetest',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
