const firstUniqChar = function (s) {
  const map = {}

  for (let i = 0; i < s.length; i++) {
    if (map.hasOwnProperty(s[i])) {
      map[s[i]].count += 1
    } else {
      map[s[i]] = { count: 1, index: i }
    }
  }

  for (letter in map) {
    // time O(n)
    if (map[letter].count === 1) {
      return map[letter].index
    }
  }

  return -1
}

module.exports = firstUniqChar;
