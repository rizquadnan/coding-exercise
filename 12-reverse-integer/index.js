const reverse = function (x) {
  // time complexity O(4n) space complexity O(1)

  const isNegative = x < 0
  const xString = x.toString() // time = O(n)
  const max32bit = 2 ** 31 - 1
  const min32bit = 2 ** 31 * -1

  let xReversed = parseInt(xString.split('').reverse().join('')) // time = O(n) + O(n) + O(n)
  xReversed = xReversed > max32bit || xReversed < min32bit ? 0 : xReversed

  return isNegative ? (xReversed === 0 ? xReversed : xReversed * -1) : xReversed
}

module.exports = reverse
