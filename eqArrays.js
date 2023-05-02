// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚️💚️💚️Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`💔️💔️💔️Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { // test edge case: when lengths aren't equal
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) { // if one element doesn't match return false
      return false;
    }
  }
  return true;
};

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);// => false