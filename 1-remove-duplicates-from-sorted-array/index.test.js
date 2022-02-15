const removeDuplicates = require('./index');

test('simple case', () => {
  expect(removeDuplicates([1,1,2])).toEqual(2);
});

test('more complex case', () => {
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
});