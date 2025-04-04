#!/usr/bin/env node

// Este script proporciona un entorno controlado para el build
// que resuelve el problema de crypto.getRandomValues

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Proporcionar polyfill para crypto
global.crypto = {
  getRandomValues: function(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
    return array;
  }
};

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