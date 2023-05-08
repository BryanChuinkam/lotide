const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const head = function(array) {
  if (array) {
    return array[0];
  }
  return undefined;
};

module.exports = head;