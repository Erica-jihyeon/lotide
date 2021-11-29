const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💛💛💛Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = (arr) => {
  const tailArr = arr.slice(1);
  return tailArr;
};

module.exports = tail;