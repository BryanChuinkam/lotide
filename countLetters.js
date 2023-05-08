


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

