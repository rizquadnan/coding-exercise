const reverseString = require('.');

test('positive number', () => {
  expect(reverseString(321)).toEqual(123);
});
test('negative number', () => {
  expect(reverseString(-123)).toEqual(-321)
});
test('leading zeroes', () => {
  expect(reverseString(120)).toEqual(21)
});

