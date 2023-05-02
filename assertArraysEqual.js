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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`💚️💚️💚️Assertion Passed: ${array1} === ${array2}.`);
  } else {
    console.log(`💔️💔️💔️Assertion Failed: ${array1} !== ${array2}.`);
  }
};




// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);