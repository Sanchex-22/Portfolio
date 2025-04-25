import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),cloudflare()],
  define: {
    'process.env': process.env,
  },
  build: {
    sourcemap: true,
    outDir: 'dist', // Esto asegura que los archivos construidos se coloquen en la carpeta dist
    target: 'es2020', // Asegúrate de que la salida sea compatible con Cloudflare Workers
    minify: true,
  },
  optimizeDeps: {
    exclude: ['axios', 'form-data', 'follow-redirects'], // Excluir dependencias de Node.js no compatibles
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
    },
  },
})
