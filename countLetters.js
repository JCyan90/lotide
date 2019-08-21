// Assertion function
const assertEqual = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};

// Counting function
const countLetters = function(string) {
  const result = {};
  for (let letter of string) { // Iterates over each letter of the string
    if (letter !== " ") { // Filters the spaces in the string
        if (result[letter]) { // If the letter exists in the result object, add 1 to the count
          result[letter] += 1;
      } else { // If the letter doesn't exist in the result object, create it and add 1
          result[letter] = 1;
      }
    }
  }
  return result;
}

// TESTS
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("test"));
console.log(countLetters("testing again"));