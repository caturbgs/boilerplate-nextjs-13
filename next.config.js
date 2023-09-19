/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'localhost', // for local development
    ],
  },
  // improve performance on local development
  // referemce: https://nextjs.org/docs/architecture/nextjs-compiler#modularize-imports
  modularizeImports: {
    // 'lucide-react': {
    //   transform: 'lucide-react/dist/esm/icons/{{ kebabCase member}}.js',
    // },
    // '@radix-ui': {
    //   transform: '@radix-ui/react-{{ member }}',
    // },
  },
};

module.exports = nextConfig;
