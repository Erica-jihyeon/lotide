const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //make object of counting
  for (const name in itemsToCount) {
    if(itemsToCount[name] === true) {
      results[name] = 0;
    }
  }
  for(const name in results) {
    for (const item of allItems) {
      if(name === item) {
        results[name]++;
      }
    }
  }
  return results;
}

module.exports = countOnly;