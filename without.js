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


const without = function(sourceArray, itemsToRemove) {
  let output = [];
  for (let element of sourceArray) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (element !== itemsToRemove[i]) {
        if (!output.includes(element) && i === itemsToRemove.length - 1) { // if element not already in output and has been compared to all itemsToRemove then add it
          output.push(element);
        }
      }
    }
  }
  return output;
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3", "1"], [1, 2, "3"]); // => ["1", "2"]

// Test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3", "1"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
