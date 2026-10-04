 /** @type {import("next").NextConfig} */

const nextConfig = {
  output: "export",

  basePath: "/Fresh-Farm",

  allowedDevOrigins: ["192.168.56.1"],

  images: {
    unoptimized: true,
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