const removeDuplicates = function(nums) {
  for (let index = 0; index < nums.length; index++) {
   const element = nums[index];
   const nextElement = nums[index + 1];
   
   if (element === nextElement) {
     nums.splice(index + 1, 1);
     index--;
   }
 }

 return nums;
};

module.exports = removeDuplicates;