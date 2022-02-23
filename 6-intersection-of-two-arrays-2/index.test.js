const intersect = require('.');

test('simple case', () => {
  expect(intersect([1,2,2,1], [2,2])).toEqual([2,2]);
});

test('longer case', () => {
  expect(intersect([4,9,5], [9,4,9,8,4])).toEqual([4,9])
});