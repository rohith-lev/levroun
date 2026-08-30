/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        // Allow any ngrok subdomain for development tunnelling
        protocol: "https",
        hostname: "*.ngrok-free.app",
      },
    ],
  },
  // Allow ngrok and local IPs as trusted dev origins (prevents "Invalid Host header" errors)
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "172.23.102.67",
    "yourdomain.com",
    "www.yourdomain.com",
  ],
  eslint: {
    // ESLint errors will not block production builds
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev }) => {
    // Disable persistent filesystem cache in dev to avoid vendor-chunk
    // staleness when switching between `next build` and `next dev`
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;

