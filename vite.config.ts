import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src')
    }
  },
  server: {
    proxy: {
      '/blog/rss': {
        target: 'https://medium.com/@leejhlouis/feed',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/blog\/rss/, '')
      }
    }
  },
  assetsInclude: ['**/*.md']
})