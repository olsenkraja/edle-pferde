/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'www.edle-pferde.com'
      }
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
}
