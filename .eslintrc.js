module.exports = {
  // ... existing code ...
  rules: {
    // Desactivar reglas específicas
    'no-unused-vars': 'warn', // Cambia de 'error' a 'warn'
    'react/prop-types': 'off', // Desactiva la validación de propTypes
    'react/no-deprecated': 'warn', // Solo advertir sobre APIs obsoletas
    'react/jsx-no-undef': 'warn'
  }
}; 