/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Compiler (good for performance in React 19+)
  reactCompiler: true,

  // Image optimization – allow remote images (Unsplash, placeholder, etc.)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      // Add your own domains here if needed later (e.g. Cloudinary, Imgix)
      // {
      //   protocol: 'https',
      //   hostname: 'res.cloudinary.com',
      // },
    ],

    // Modern formats + caching
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60, // seconds
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Better minification & bundle size
  swcMinify: true,

  // Remove console.log in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optional experimental features (uncomment if needed)
  experimental: {
    // serverActions: {
    //   bodySizeLimit: '2mb',
    // },
    // optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;