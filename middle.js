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
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) return(console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`));
  return (console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`));
}

// Middle function
const middle = function(array) {
  let middleElement = [];
  if (array.length === 1 || array.length === 2) {
    return middleElement;
  } else if (array.length % 2 === 0) {
    let mid1 = array.length / 2;
    let mid2 = mid1 - 1;
    middleElement.push(array[mid2]);
    middleElement.push(array[mid1]);
    return middleElement;
  } else {
    let mid = Math.floor(array.length / 2);
    middleElement.push(array[mid]);
    return middleElement;
  }
}

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]