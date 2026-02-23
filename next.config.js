/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
  return [
  {
  source: '/about',
  destination: '/about',
  permanent: true,
  },
  {
  source: '/blog',
  destination: '/blog',
  permanent: true,
  },
  {
  source: '/services/ewm',
  destination: '/services/ewm',
  permanent: true,
  },
  {
  source: '/services/tm',
  destination: '/services/tm',
  permanent: true,
  },
  {
  source: '/services/custom',
  destination: '/services/custom',
  permanent: true,
  },
  {
  source: '/services/ai',
  destination: '/services/ai',
  permanent: true,
  }
  ]
  },
  }
  
  module.exports = nextConfig
