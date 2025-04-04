import { execSync } from 'child_process';
import fs from 'fs';

// Polyfill para crypto.getRandomValues
globalThis.crypto = {
  getRandomValues: function(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
    return array;
  }
};

// Ejecutar Vite build
try {
  console.log('Running vite build with polyfill...');
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('Build successful!');
  console.log('Creating .nojekyll file...');
  fs.writeFileSync('dist/.nojekyll', '');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 