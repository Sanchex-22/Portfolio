import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    outDir: 'dist', // Esto asegura que los archivos construidos se coloquen en la carpeta dist
    target: 'es2020', // Asegúrate de que la salida sea compatible con Cloudflare Workers
    minify: true
  },
})
