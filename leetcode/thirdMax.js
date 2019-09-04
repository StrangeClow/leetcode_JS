/**
 * 第三大的数   主要学习思路 解法 
 *
 * @param {*} nums
 * @returns
 */
const thirdMax = function(nums) {
  let max1= nums[0],
      max2= null,
      max3 = null
  for(let i = 0; i<nums.length;i++) {
     if(max1 < nums1[i]) {
        max3 = max2;   // 可尝试结构赋值  或提取函数
        max2 = max1;
        max1 = nums[i];
     } else if(!max2 || (max2 < nums[i])) {
         if(nums[i] < max1) {
           max3 = max2
           max2 = nums[i]
         }
     }
     else if(!max3 || (max3 < nums[i])) {
         if(nums[i] < max2) {
             max3 = nums[i]
         }
     }
  }   
  
  return max3 !== null ? max3 : max1

}