import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // ↓ pick ONE of these two options
    /* 1. simple */
    domains: ["images.unsplash.com", "amandubey.onrender.com"],

    /* 2. fine-grained – if you prefer remotePatterns */
    /* remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',     // accept any path
      },
    ], */
  },
};

export default nextConfig;
