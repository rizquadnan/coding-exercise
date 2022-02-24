const plusOne = function (digits) {
  // total
  // worst
  // time (2n) space (n)

  // best
  // time (1) space (1)
  const changeOne = (indexToChange) => {
    if (indexToChange >= 0 && digits[indexToChange] < 9) {
      digits[indexToChange] = digits[indexToChange] + 1

      return
    } else if (indexToChange < 0) {
      return
    } else if (digits[indexToChange] === 9) {
      digits[indexToChange] = 0

      changeOne(indexToChange - 1)
    }
  }

  changeOne(digits.length - 1) // time O(n), space (n)

  if (digits[0] === 0) {
    digits = [1, ...digits] // time O(n)
  }

  return digits
}

module.exports = plusOne;
