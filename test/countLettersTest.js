const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

// Test
let sentence = "lighthouse in the house";
let countObj = countLetters(sentence);

assertEqual(countObj['l'], 1);
assertEqual(countObj['i'], 2);
assertEqual(countObj['h'], 4);
