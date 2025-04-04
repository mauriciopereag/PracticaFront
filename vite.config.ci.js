import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración específica para CI
export default defineConfig({
  plugins: [react()],
  base: '/PracticaFront/',
  define: {
    global: 'globalThis',
    'process.env': process.env
  },
  build: {
    sourcemap: false,
    // Reduce las optimizaciones para evitar problemas con crypto
    minify: false,
    target: 'es2015'
  }
}) 