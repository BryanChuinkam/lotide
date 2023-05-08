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


// input two objects
// output boolean of if they're equal
const eqObjects = function(object1, object2) {
  // conditions for two obj to be equal
  // 1) same number of keys
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  // 2) for each key in one object is the same as the value for that same key in the other object
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

module.exports = eqObjects;

// Tests
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

// Test - 2
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);