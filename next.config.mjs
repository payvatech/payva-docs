import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack Configuration
  webpack: (config) => {
    config.module.rules.push({
      test: /\.m?js$/,
      include: [path.resolve(process.cwd(), 'node_modules/apollo-upload-client')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    })

    return config
  },

  // Allow iframing & CORS policies
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' *;", // Allow all sites to iframe this
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL', // Allow iframe embedding
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow all origins (adjust for security)
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ]
  },

  transpilePackages: ['@nivo'],
  experimental: { esmExternals: 'loose' },
}

export default nextConfig
