import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // ↓ pick ONE of these two options
    /* 1. simple */
    domains: ["images.unsplash.com", "amandubey.onrender.com"],
  },
};

export default nextConfig;
