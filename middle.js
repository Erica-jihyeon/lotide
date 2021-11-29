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

module.exports = middle;