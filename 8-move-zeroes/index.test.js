const moveZeroes = require('.');

test('simple case', () => {
  expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0]);
});

test('single zero', () => {
  expect(moveZeroes([0])).toEqual([0])
});

test('single non zero', () => {
  expect(moveZeroes([2])).toEqual([2])
});