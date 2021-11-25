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

const letterPositions = str => {
  const results = {}
  const countStr = str.replace(/ /gi, '').toLowerCase();
  for(let i = 0; i < countStr.length; i++) {
    if(results[countStr[i]]) {
      results[countStr[i]].push(i)
    } else {
      results[countStr[i]] = [i]
    }
  }
  return results;
}

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);