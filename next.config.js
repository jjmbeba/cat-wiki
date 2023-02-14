/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['cdn2.thecatapi.com']
  }
}

module.exports = nextConfig
