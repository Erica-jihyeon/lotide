const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
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

const words = ["ground", "control", "to", "major", "tom"];
const nums = [2, 40, 5, 6, 7];

const map = function(arr,callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map(words, word => word[0] + ' hi'), ['g hi', 'c hi', 't hi', 'm hi', 't hi']);
assertArraysEqual(map(nums, num => num * 10), [20, 400, 50, 60, 75]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);