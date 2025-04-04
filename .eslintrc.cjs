module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'react/prop-types': 'off'
  },
  // Ignora archivos específicos
  ignorePatterns: [
    'node_modules/**',
    'dist/**',
    'build/**',
    'src/components/ImageCarousel.jsx'  // Ignoramos temporalmente este archivo
  ]
}; 