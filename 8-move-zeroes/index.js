const moveZeroes = function(nums) { 
  // total
  // time O(2n) -> O(n)
  // space O(1)
  
  let numOfNonZeros = 0;
  for (let i = 0; i < nums.length; i++) { // time O(n)
      if (nums[i] !== 0) {
          nums[numOfNonZeros] = nums[i];
          numOfNonZeros++;
      }
  }
  
  for (let i = numOfNonZeros; i < nums.length; i++) { // time O(n)
      nums[i] = 0;
  }

  return nums;
};

module.exports = moveZeroes;