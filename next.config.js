/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lkgfxefarlnlslkjnijl.supabase.co'], // dominio de Supabase para imágenes
  },
};

module.exports = nextConfig;
