import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(),cloudflare()],
  define: {
    'process.env': process.env,
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    target: 'es2020',
    minify: true,
  },
  optimizeDeps: {
    exclude: ['axios', 'form-data', 'follow-redirects'],
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
    },
  },
})
