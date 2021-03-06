const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("return [1, 2] for [1]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("return [1, 2, 3] for [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("return [1, 2, 3, 4, 5] for [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("return [1, 2, 3, 4] for [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("return [1, 2, 3, 4, 5, 6] for [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});