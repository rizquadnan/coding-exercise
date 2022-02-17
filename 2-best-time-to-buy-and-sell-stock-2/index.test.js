const removeDuplicates = require('./index');

test('min and max case', () => {
  expect(removeDuplicates([1,2,3,4,5])).toEqual(4);
});

test('valley and peak case', () => {
  expect(removeDuplicates([7,1,5,3,6,4])).toEqual(7);
});

test('no profit case', () => {
  expect(removeDuplicates([7,6,4,3,1])).toEqual(0);
});