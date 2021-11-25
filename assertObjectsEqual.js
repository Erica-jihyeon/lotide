const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  const keysList = Object.keys(object1);
  for (const key of keysList) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    return console.log(`💛💛💛Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`⛔⛔⛔Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({c: "1", d: ["2", 3, 4]}, {c: "1", d: ["2", 3]});