// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/6.x/initials/svg',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      }
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
