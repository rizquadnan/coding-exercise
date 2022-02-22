const singleNumber = require('.');

test('single number long case', () => {
  expect(singleNumber([4,1,2,1,2])).toEqual(4);
});

test('single number short case', () => {
  expect(singleNumber([2,2,1])).toEqual(1)
});

test('single case', () => {
  expect(singleNumber([1])).toEqual(1)
});