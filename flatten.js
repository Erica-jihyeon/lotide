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
module.exports = flatten;