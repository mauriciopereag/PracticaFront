// Proporciona un polyfill básico para crypto.getRandomValues
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