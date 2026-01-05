/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Transpile framer-motion and other packages if needed
  transpilePackages: ['framer-motion', 'lucide-react'],
};

module.exports = nextConfig;
