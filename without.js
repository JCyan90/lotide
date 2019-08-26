const without = function(array1, array2) {
  let filteredArray = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = without;