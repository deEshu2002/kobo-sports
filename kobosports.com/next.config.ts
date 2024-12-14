import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
      domains: ['source.unsplash.com', 'images.unsplash.com']
  }
};

export default nextConfig;
