// Function that compares every element of both arrays
const eqArrays = function(array1, array2) {
  // Make sure the arrays have the same length
  if (array1.length !== array2.length) return false;
  // Iterate over each element of both arrays and compare them
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// Assertion function
const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) return(console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
  return (console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
}

const flatten = function(array) {
  let flattenedArray = [];
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}

// TESTS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2, 3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);

module.exports = flatten;