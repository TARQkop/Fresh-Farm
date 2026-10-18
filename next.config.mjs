/** @type {import("next").NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Fresh-Farm" : "";

const nextConfig = {
  output: "export",

  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

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