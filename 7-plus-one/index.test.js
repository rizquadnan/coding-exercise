const plusOne = require('.');

test('simple case', () => {
  expect(plusOne([1,2,3])).toEqual([1,2,4]);
});

test('longer case', () => {
  expect(plusOne([4,3,2,1])).toEqual([4,3,2,2])
});

test('edge case, has 9', () => {
  expect(plusOne([9,9,9])).toEqual([1,0,0,0])
});