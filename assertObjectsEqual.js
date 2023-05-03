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


const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let object1Key of object1Keys) {// at this point we know both objects have the same length
    if (Array.isArray(object1[object1Key])) {
      if (Array.isArray(object2[object1Key])) {
        return eqArrays(object1[object1Key], object2[object1Key]);
      } else {
        return false;
      }

    } else if (object1[object1Key] !== object2[object1Key]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`💚️💚️💚️Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`💔️💔️💔️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
};



// Tests
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); // false

// Test - 2
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject); // true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject); // false