const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚️💚️💚️Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`💔️💔️💔️Assertion Failed: ${actual} !== ${expected}.`);
  }
};


// inputs: which takes in an object and a callback.
// outputs: return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(obj, callback) {
  for (let objKey in obj) {
    if (callback(obj[objKey])) {
      return objKey;
    }
  }
};


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

