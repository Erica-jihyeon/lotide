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

/*const without = (source, itemsToRemove) => {
  let sameElem = [];
  let removedArr = source; -> removedArr에 source의 reference가 저장됨
  console.log(`source: ${source}`);
  for(let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] === itemsToRemove[j])
        sameElem.push(source[i]);
    }
  }
  for(let i = 0; i < sameElem.length; i++) {
    removedArr.splice(removedArr.indexOf(sameElem[i]),1);
  }
  console.log(`source: ${source}`);
  return removedArr;
};*/

const without = (source, itemsToRemove) => {
  const resultArr = [];
  for(let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
      resultArr.push(source[i]);
    }
  }
  return resultArr;
}



console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
