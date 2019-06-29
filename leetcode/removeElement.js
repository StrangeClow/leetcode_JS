/** 
 *  给定一个数组num和一个值val  你需要原地移除所有数值等于val的元素 返回移除后的数组的新长度
 * 
 * 
*/

var removeElement = function(nums,val) {
   for(let i = 0; i<nums.length;i++) {
       if(nums[i] == val) {
           nums.splice(i,1)
           i--;  // i递减  删除之后向前移动位置
       }
   }
   return nums.length
} 