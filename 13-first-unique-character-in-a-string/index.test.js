const firstUniqChar = require('.');

test('normal case', () => {
  expect(firstUniqChar("leetcode")).toEqual(0);
});
test('no unique case', () => {
  expect(firstUniqChar("aabb")).toEqual(-1)
});
