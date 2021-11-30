const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const countName = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

describe ("countOnly", () => {

  it ("return 1 for countName['Jason']", () => {
    assert.strictEqual(countOnly(firstNames, countName).Jason, 1);
  });

  it ("return 0 for countName['Karima']", () => {
    assert.strictEqual(countOnly(firstNames, countName).Karima, 0);
  });

  it ("return 2 for countName['Fang']", () => {
    assert.strictEqual(countOnly(firstNames, countName).Fang, 2);
  });

  it ("return undefined for countName['Agouhanna']", () => {
    assert.strictEqual(countOnly(firstNames, countName).Agouhanna, undefined);
  });

})