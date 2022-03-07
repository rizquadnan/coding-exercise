const isAnagram = require('.');

test('positive case', () => {
  expect(isAnagram("anagram", "nagaram")).toEqual(true);
});
test('negative case', () => {
  expect(isAnagram("rat", "car")).toEqual(false)
});
