const checkEnvVariables = require("./check-env-variables")

// Skip env variable check if backend URL looks like a placeholder or is not available
const backendUrl = process.env.MEDUSA_BACKEND_URL
const shouldCheckEnv = backendUrl && 
  !backendUrl.includes('${') && 
  !backendUrl.includes('backend') &&
  backendUrl !== 'backend'

if (shouldCheckEnv) {
  checkEnvVariables()
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
}

module.exports = nextConfig
