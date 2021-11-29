const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`💛💛💛Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
