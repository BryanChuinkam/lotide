const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚️💚️💚️Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`💔️💔️💔️Assertion Failed: ${actual} !== ${expected}.`);
  }
};



const countLetters = function(sentence) {
  let results = {};
  let lowerCaseSentence = sentence.toLowerCase();
  for (let letter of lowerCaseSentence) {
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
// Test
let sentence = "lighthouse in the house";
let countObj = countLetters(sentence);

assertEqual(countObj['l'], 1);
assertEqual(countObj['i'], 2);
assertEqual(countObj['h'], 4);

