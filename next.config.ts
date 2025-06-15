import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ru-msk-dr3-1.store.cloud.mts.ru',
      },
    ],
  },
};

export default nextConfig;
