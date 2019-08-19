// AssertEqual function for the tests
const assertEqual = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};

// Tail function
const tail = function(array) {
  let newArray = array.slice(1);
  return (console.log(newArray));
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const empty = [];
tail(empty); // no need to capture the return value since we are not checking it
assertEqual(empty, []); // original array should still have 3 elements!