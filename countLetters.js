const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💛💛💛Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = str => {
  const countStr = str.replace(/ /gi, '').toLowerCase(); 
  const result = {}  
  for (const char of countStr) {    
    result[char] = (result[char] || 0) + 1
  }
  return result;
} 


console.log(countLetters("lighthouse in the house"));