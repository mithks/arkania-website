/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
  return [
  {
  source: '/about',
  destination: '/',
  permanent: true,
  },
  {
  source: '/blog',
  destination: '/',
  permanent: true,
  },
  {
  source: '/services/ewm',
  destination: '/',
  permanent: true,
  },
  {
  source: '/services/tm',
  destination: '/',
  permanent: true,
  },
  {
  source: '/services/custom',
  destination: '/',
  permanent: true,
  },
  {
  source: '/services/ai',
  destination: '/',
  permanent: true,
  }
  ]
  },
  }
  
  module.exports = nextConfig
