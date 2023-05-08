const findKey = require('../findKey');
const assertEqual = require("../assertEqual");

// Tests
let sampleData = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let result1 = findKey(sampleData, x => x.stars === 2); // => "noma"
assertEqual(result1, 'noma');

let result2 = findKey(sampleData, x => x.stars === 3); // => "Akaleri"
assertEqual(result2, 'Akaleri');

