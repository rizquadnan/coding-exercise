const containsDuplicate = function(nums) {
  // total
  // time (n log n + n) -> time (n log n)
  // space (1)
  
  nums = nums.sort((a, b) => a - b); // time O (n log n)
  
  let hasDuplicate = false;
  for (let i = 0; i < nums.length; i++) { // time O (n)
      const currentNum = nums[i];
      const nextNum = nums[i + 1];
      
      if (currentNum === nextNum) {
          hasDuplicate = true;
          break;
      }
  }
  
  return hasDuplicate;
};

module.exports = containsDuplicate;