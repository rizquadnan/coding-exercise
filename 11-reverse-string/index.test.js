const reverseString = require('.');

test('odd length of input', () => {
  expect(reverseString(["h", "e", "l", "l", "o"])).toEqual(["o", "l", "l", "e", "h"]);
});

test('more complex case', () => {
  expect(reverseString(["b", "u", "d", "i"])).toEqual(["i", "d", "u", "b"])
});