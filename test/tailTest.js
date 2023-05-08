const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  const arr1 = ["Hello", "Lighthouse", "Labs"];

  it('it returns ["Lighthouse", "Labs"]  for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(arr1), ["Lighthouse", "Labs"]);
  });

  it('original array is unchanged', () => {
    assert.deepEqual(arr1, ["Hello", "Lighthouse", "Labs"]);
  });


  it('it returns [6, 7, 8]  for [5, 6, 7, 8]', () => {
    assert.deepEqual(tail([5, 6, 7, 8]), [6, 7, 8]);
  });

  it('it returns []  for []', () => {
    assert.isEmpty(tail([]));
  });

  it('it returns []  for [90]', () => {
    assert.isEmpty(tail([90]));
  });
});

