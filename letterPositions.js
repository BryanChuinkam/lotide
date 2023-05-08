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

module.exports = letterPositions;
