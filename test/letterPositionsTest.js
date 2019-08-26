const { assert } = require("chai");
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return [0] for h in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("should return [2, 3] for l in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("should return [4, 10] for o in 'hello hello'", () => {
    assert.deepEqual(letterPositions("hello hello").o, [4, 10]);
  });
});