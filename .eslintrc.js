module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // Desactivar reglas específicas
    'no-unused-vars': 'warn', // Cambia de 'error' a 'warn'
    'react/prop-types': 'off', // Desactiva la validación de propTypes
    'react/no-deprecated': 'warn', // Solo advertir sobre APIs obsoletas
    'react/jsx-no-undef': 'warn'
  }
}; 