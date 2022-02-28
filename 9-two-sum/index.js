const twoSum = function(nums, target) {
  // total
  // time O(n)
  // space O(n)
  
  const memory = {}; // ex: {7: 0, 1: 1} -> number 7 is at index 0, number 1 is at index 1 space O(n)
  
  for (let i = 0; i < nums.length; i++) {  // time O(n)      
      if (memory[target - nums[i]] === undefined) {
          memory[nums[i]] = i;
      } else {
          return [memory[target - nums[i]], i]
      }
  } 
};

module.exports = twoSum;