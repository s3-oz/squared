/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['squared.com.au'],
  },
  async redirects() {
    return [
      {
        source: '/documentation',
        destination: '/resources',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig