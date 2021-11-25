const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💛💛💛Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*const countLetters = (str) => {
  const countStr = str.replace(/ /gi, '').toLowerCase();
  //array for char to be counted
  const countArr = [];
  const result = {};
  for(const char of countStr) {
    if(!countArr.includes(char)) {
      countArr.push(char);
    }
  }
  //array to object
  for(const countChar of countArr) {
    result[countChar] = 0;
  }
  for(const countChar in result) {
    for(const char of countStr) {
      if(countChar === char) {
        result[countChar]++;
      }
    }
  }
  return result;
}*/

const countLetters = str => {
  const countStr = str.replace(/ /gi, '').toLowerCase(); 
  const result = {}  
  for (const char of countStr) {    
    result[char] = (result[char] || 0) + 1
  }
  return result;
} 


console.log(countLetters("lighthouse in the house"));