const { assert } = require("chai");
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  it("should return [ 1, 2, 5, 7, 2 ] for x => x < 0", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  it("should return [ 'I\'ve', 'been', 'to', 'Hollywood' ] for x => x === ','", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});