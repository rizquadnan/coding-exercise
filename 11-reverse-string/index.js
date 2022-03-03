const reverseString = (s) => {
  // time O(n/2) -> O(n) space(1)
  const lengthMinusOne = s.length - 1
  const iterationTimes = Math.floor(s.length / 2)

  for (let i = 0; i < iterationTimes; i++) {
    ;[s[i], s[lengthMinusOne - i]] = [s[lengthMinusOne - i], s[i]]
  }

  return s;
}

module.exports = reverseString;