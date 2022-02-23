const intersect = function(nums1, nums2) {    
  // total
  // time O(n^2)
  // space O(n)
  
  const result = []; // space O(n/m), tergantung mana yg lebih kecil
  for (let i = 0; i < nums1.length; i++) { // time O(n), n = panjang nums1
      for (let j = 0; j < nums2.length; j++) { // time O(m), m = panjang nums2
          if (nums1[i] === nums2[j]) {
              result.push(nums1[i]);

              nums2[j] = "-";

              break;
          }
      }
  }

  return result;
};

module.exports = intersect;