const containsDuplicate = require('.');

test('contains duplicate', () => {
  expect(containsDuplicate([1,2,3,1])).toEqual(true);
});

test('no duplicates', () => {
  expect(containsDuplicate([1,2,3,4])).toEqual(false)
});