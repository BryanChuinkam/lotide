const map = require('../map');
const assertArraysEqual = require("../assertArraysEqual");



//Tests
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, (word) => {
  return word + 's';
});
assertArraysEqual(results2, ["grounds", "controls", "tos", "majors", "toms"]);

const numbersArray = [10, 30, 1, 6, 8, 99, 200];
const results3 = map(numbersArray, (number) => {
  return number % 3;
});
assertArraysEqual(results3, [1, 0,  1, 0, 2, 0, 2]);

