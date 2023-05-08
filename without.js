const without = function(sourceArray, itemsToRemove) {
  let output = [];
  for (let element of sourceArray) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (element !== itemsToRemove[i]) {
        if (!output.includes(element) && i === itemsToRemove.length - 1) { // if element not already in output and has been compared to all itemsToRemove then add it
          output.push(element);
        }
      }
    }
  }
  return output;
};

module.exports = without;

