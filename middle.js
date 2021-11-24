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

const middle = (arr) => {
  const lenArr = arr.length;
  const middleIndex = Math.floor(lenArr / 2);
  let middleArr = [];
  if (lenArr >= 3 && lenArr % 2 === 1) {
    middleArr.push(arr[middleIndex]);
  } else if (lenArr >= 3 && lenArr % 2 === 0) {
    middleArr.push(arr[middleIndex - 1]);
    middleArr.push(arr[middleIndex]);
  } else {
    return middleArr;
  }
  return middleArr;
};

console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6]));