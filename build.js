#!/usr/bin/env node

// Este script proporciona un entorno controlado para el build
// que resuelve el problema de crypto.getRandomValues

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname equivalente en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Proporcionar polyfill para crypto
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

// Ejecutar el build con variables de entorno controladas
try {
  console.log('Building Vite project...');
  
  // Configurar NODE_OPTIONS para optimizar el proceso
  process.env.NODE_OPTIONS = '--max-old-space-size=4096';
  
  // Ejecutar el build usando la API del CLI de Vite
  execSync('npx vite build', { 
    stdio: 'inherit',
    env: process.env
  });
  
  // Crear archivo .nojekyll
  const distPath = path.join(process.cwd(), 'dist');
  fs.writeFileSync(path.join(distPath, '.nojekyll'), '');
  
  console.log('Build successful! .nojekyll file created.');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 