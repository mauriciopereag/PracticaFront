import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simple polyfill para crypto.getRandomValues cuando se ejecuta en Node.js
if (typeof globalThis.crypto === 'undefined' || typeof globalThis.crypto.getRandomValues !== 'function') {
  globalThis.crypto = {
    getRandomValues: function(array) {
      for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
    base: '/PracticaFront/',
    plugins: [react()],
    build: {
        outDir: 'dist',
        // Simplificamos la configuración al mínimo
        sourcemap: false,
        minify: 'terser',
        cssMinify: true
    }
})