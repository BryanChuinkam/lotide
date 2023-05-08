const letterPositions = require('../letterPositions');
const assertArraysEqual = require("../assertArraysEqual");



// Test
let sentence = "lighthouse in the house";
let letterPosObj = letterPositions(sentence);
console.log(letterPosObj);
assertArraysEqual(letterPosObj['l'], [0]);
assertArraysEqual(letterPosObj['i'], [1, 11]);
assertArraysEqual(letterPosObj['h'], [3,5, 15, 18]);