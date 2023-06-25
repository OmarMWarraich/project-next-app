/** @type {import('next').NextConfig} */
const nextConfig = {
    "swcMinify": false,
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['bcrypt'],
      },      
}

module.exports = nextConfig
