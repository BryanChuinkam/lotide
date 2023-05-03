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



const letterPositions = function(sentence) {
  let results = {};
  let lowerCaseSentence = sentence.toLowerCase();
  
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    let letterATIndex = lowerCaseSentence[i];
    if (results[letterATIndex]) {
      results[letterATIndex].push(i);
    } else {
      results[letterATIndex] = [i];
    }
  }
  return results;
};


// Test
let sentence = "lighthouse in the house";
let letterPosObj = letterPositions(sentence);
console.log(letterPosObj);
assertArraysEqual(letterPosObj['l'], [0]);
assertArraysEqual(letterPosObj['i'], [1, 11]);
assertArraysEqual(letterPosObj['h'], [3,5, 15, 18]);