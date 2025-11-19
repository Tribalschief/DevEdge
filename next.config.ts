import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb", // Increase from 1MB to 10MB
    },
  },
};

export default nextConfig;