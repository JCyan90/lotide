// Function that compares arrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// Returns true if both objects have identical keys with identical values
const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) return false;
  for (let key of array1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key]));
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) return(console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
};

// Tests
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2", c: "1" }));