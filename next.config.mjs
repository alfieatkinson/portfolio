/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // SPA export
  distDir: './dist',
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source', // asset modules load file as a string
    })
    return config
  },
}

export default nextConfig