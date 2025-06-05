import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'www.pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photo.png',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nl',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
