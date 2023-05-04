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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//Tests
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, (word) => {return word + 's'});
assertArraysEqual(results2, ["grounds", "controls", "tos", "majors", "toms"]);

const numbersArray = [10, 30, 1, 6, 8, 99, 200];
const results3 = map(numbersArray, (number) => {return number % 3});
assertArraysEqual(results3, [1, 0,  1, 0, 2, 0, 2]);

