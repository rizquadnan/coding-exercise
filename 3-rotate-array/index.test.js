const rotateArray = require('./index');

test('normal case', () => {
  expect(rotateArray([1,2,3,4,5,6,7], 3)).toEqual([5,6,7,1,2,3,4]);
});

test('k >= nums.length', () => {
  expect(rotateArray([-1,-100,3,99], 4)).toEqual([-1,-100,3,99]);
});