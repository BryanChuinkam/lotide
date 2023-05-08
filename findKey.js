// inputs: which takes in an object and a callback.
// outputs: return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(obj, callback) {
  for (let objKey in obj) {
    if (callback(obj[objKey])) {
      return objKey;
    }
  }
};

module.exports = findKey;

