const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💛💛💛Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 3);