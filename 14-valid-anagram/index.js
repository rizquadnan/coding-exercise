const isAnagram = function (s, t) {
  // total time O(3n) space O(2n)
  if (s.length !== t.length) {
    return false
  }

  const charMapS = {} // space O(n)
  const charMapT = {} // space O(n)

  for (let i = 0; i < s.length; i++) {
    // time O(n)
    charMapS[s[i]] = charMapS[s[i]] === undefined ? 1 : charMapS[s[i]] + 1

    charMapT[t[i]] = charMapT[t[i]] === undefined ? 1 : charMapT[t[i]] + 1
  }

  const keys = Object.keys(charMapS) // time O(n)
  for (let i = 0; i < keys.length; i++) {
    // time O(n)
    if (charMapS[keys[i]] !== charMapT[keys[i]]) {
      return false
    }
  }

  return true
}

module.exports = isAnagram
