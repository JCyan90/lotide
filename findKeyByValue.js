const findKeyByValue = function(object, value) {
  const keysArray = Object.keys(object);
  for (let element of keysArray) {
    if (object[element] === value) return element;
  }
};

module.exports = findKeyByValue;