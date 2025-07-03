/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mainClient/out',
  assetPrefix: '/mainClient/out',
  images: {
    unoptimized: true, // important for static export
  },
};

export default nextConfig;
