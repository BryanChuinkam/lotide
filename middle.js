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

// ACTUAL FUNCTION
const middle = function(array) {
  let arrayLength = array.length;
  let middleEleIndex;

  if (arrayLength <= 2) {
    return [];
  }
  if (arrayLength % 2 !== 0) {
    middleEleIndex = Math.ceil(arrayLength / 2);
    return [array[middleEleIndex - 1]];
  }
  if (arrayLength % 2 === 0) {
    middleEleIndex = Math.ceil(arrayLength / 2);
    return [array[middleEleIndex - 1], array[middleEleIndex]];
  }
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);