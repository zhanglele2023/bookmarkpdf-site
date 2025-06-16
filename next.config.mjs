/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enhanced configuration for better deployment support
  experimental: {
    appDir: true,
  },
  // Ensure API routes are properly handled
  async rewrites() {
    return []
  },
}

export default nextConfig