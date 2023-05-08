//input object and a value.
//return  the first key which contains the given value ELSE If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(obj, value) {

  for (let objKey in obj) {
    if (value === obj[objKey]) {
      return objKey;
    }
  }
};

module.exports = findKeyByValue;

