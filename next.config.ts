/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'code.visualstudio.com',
        pathname: '/**', // allows all image paths
      },
    ],
  },
};

module.exports = nextConfig;
