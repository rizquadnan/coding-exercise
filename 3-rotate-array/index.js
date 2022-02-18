const rotate = function(nums, k) {
  // total complexity
  // time O(n)
  // space O(n)
  k = k % nums.length;
  
  const memory = {}; // space O(n)
  for (let index = 0; index < nums.length; index++) { // time O(n)
      const currentNum = memory[index] === undefined ? nums[index] : memory[index];
      const newIndex = index + k >= nums.length ? index + k - nums.length : index + k;
      
      memory[newIndex] = nums[newIndex];
      
      nums[newIndex] = currentNum;
  }

  return nums;
};

module.exports = rotate;