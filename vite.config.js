import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Importa el polyfill para crypto
import './crypto-polyfill.js'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/PracticaFront/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            crypto: resolve(__dirname, 'crypto-polyfill.js'),
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]',
                manualChunks: undefined
            }
        }
    },
    define: {
        'crypto.getRandomValues': 'undefined'
    }
})