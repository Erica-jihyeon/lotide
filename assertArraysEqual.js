const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isSame = false;
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`💛💛💛Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [3,2,3]);
assertArraysEqual([1,2,3], [3,2]);
assertArraysEqual(["hello", "world", "lighthouse"],["hello", "world", "lighthouse"]);