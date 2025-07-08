// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: '/mainClient/out',
//   assetPrefix: '/mainClient/out',
//   publicRuntimeConfig: {
//     assetPrefix: '/mainClient/out',
//   },
//   images: {
//     unoptimized: true, // ✅ THIS IS REQUIRED for static export!
//   },
// };

// export default nextConfig;
// export const { publicRuntimeConfig: { assetPrefix } } = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;