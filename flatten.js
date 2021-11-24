const eqArrays = (arr1, arr2) => {
  let isSame = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isSame = false;
      return false;
    }
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (isSame) {
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    //return console.log(`Assertion Passed: ${actual} === ${expected}`);
    return console.log(`💛💛💛Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = (arr) => {
  let flattenedArr = [];
  for(const elem of arr) {
    if(Array.isArray(elem)) {
      for(let i = 0; i < elem.length; i++) {
        flattenedArr.push(elem[i]);
      }
    } else {
      flattenedArr.push(elem);
    }
  }
  return flattenedArr;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4, 5], [6, 7], [8, 9]]));