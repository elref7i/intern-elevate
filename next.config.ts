import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //*https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;
