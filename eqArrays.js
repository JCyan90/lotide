// AssertEqual function for the tests
const assertEqual = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should PASS