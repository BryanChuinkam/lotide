const eqArrays = require('./eqArrays');

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

