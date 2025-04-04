#!/usr/bin/env node

// Un script simple para build en entornos CI
const { execSync } = require('child_process');
const fs = require('fs');

// Asegúrate de que global.crypto esté disponible
if (typeof global.crypto === 'undefined') {
  global.crypto = {};
}

if (typeof global.crypto.getRandomValues === 'undefined') {
  global.crypto.getRandomValues = function(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
    return array;
  };
}

// Ejecuta el build
try {
  console.log('Building project...');
  execSync('vite build', { stdio: 'inherit' });
  console.log('Build successful!');
  
  // Crea el archivo .nojekyll
  fs.writeFileSync('dist/.nojekyll', '');
  console.log('Created .nojekyll file');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 