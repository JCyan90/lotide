// Function that compares every element of both arrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
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

// takeUntil function
const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
}




// Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // Pass
assertArraysEqual(results1, [ 1, 2, 5, 7, 2, -1 ]); // Fail
assertArraysEqual(results1, [ 1, 2, 4, 7, 2 ]); // Fail

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // Pass
assertArraysEqual(results2, [ 'I\'ve', 'never', 'been', 'to', 'Hollywood' ]); // Fail
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Montreal' ]); // Fail