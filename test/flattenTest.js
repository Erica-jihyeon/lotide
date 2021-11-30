const assert = require('chai').assert;
const flatten = require('../flatten');

describe("flatten", () => {

  it("return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("return [1, 2, 3, 4, 5, 6, 7, 8, 9] for [1, 2, [3, 4, 5], [6, 7], [8, 9]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4, 5], [6, 7], [8, 9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

})