const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) return false;
  for (let key in object1) {
    // Uses the eqArrays function if values are arrays
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key]));
    // If they are not arrays assumes the values are primitives and compare them
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

module.exports = eqObjects;