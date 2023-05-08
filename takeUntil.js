const takeUntil = function(array, callback) {
  let output = [];
  for (let ele of array) {
    if (!callback(ele)) {
      output.push(ele);
    } else {
      return output;
    }
  }

  return output;
};

module.exports = takeUntil;


