const eqArrays = require("../eqArrays");
const { assert } = require("chai");

describe("#eqArrays", () => {
  it("should return true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for ([1, 2, 3], [3, 2, 1])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("should return true for (['1', '2', '3'], ['1', '2', '3'])", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("should return false for (['1', '2', '3'], ['1', '2', 3])", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("should return true for [[2, 3], [4]], [[2, 3], [4]])", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("should return false for ([[2, 3], [4]], [[2, 3], [4, 5])", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("should return false for ([[2, 3], [4]], [[2, 3], 4])", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});