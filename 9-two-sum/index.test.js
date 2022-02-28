const twoSum = require('.');

test('simple case', () => {
  expect(twoSum([3,2,4], 6)).toEqual([1,2]);
});

test('more complex case', () => {
  expect(twoSum([2,11,15,7], 9)).toEqual([0,3])
});

test('empty case', () => {
  expect(twoSum([], 6)).toEqual(undefined);
});