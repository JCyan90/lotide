const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") { // Filters the spaces in the string
      if (result[letter]) { // If the letter has already been counted, adds 1 to the count
        result[letter] += 1;
      } else { // If the letter doesn't exist in the result object, creates it
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;