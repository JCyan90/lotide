const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;