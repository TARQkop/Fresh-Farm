/** @type {import("next").NextConfig} */

const nextConfig = {
  allowedDevOrigins: ['192.168.56.1'],

  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;