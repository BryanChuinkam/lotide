const middle = function(array) {
  let arrayLength = array.length;
  let middleEleIndex;

  if (arrayLength <= 2) {
    return [];
  }
  if (arrayLength % 2 !== 0) {
    middleEleIndex = Math.ceil(arrayLength / 2);
    return [array[middleEleIndex - 1]];
  }
  if (arrayLength % 2 === 0) {
    middleEleIndex = Math.ceil(arrayLength / 2);
    return [array[middleEleIndex - 1], array[middleEleIndex]];
  }
};

module.exports = middle;
