const singleNumber = (nums) => {
  nums = nums.sort((a, b) => a - b);

  let uniqueNumber = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (uniqueNumber !== nums[i]) {
      break
    } else {
      uniqueNumber = nums[i + 1]
      i++
    }

    console.log("")
  }

  return uniqueNumber
};

module.exports = singleNumber;