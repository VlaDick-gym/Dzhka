/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "/Dzhka",
  assetPrefix: "/Dzhka/",
};

export default nextConfig;
