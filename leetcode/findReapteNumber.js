/**
 *    数组中重复的数字
 * 
 *       找出nums里重复的数字，可能为一个，也可能为多个 
 *
 * @param {*} nums
 * @returns
 */
const findReapteNumber = function(nums) {
     
   let tempSet = new Set()

   for(let i = 0; i < nums.length; i ++) {
       //Set存储不重复的元素 
      if(tempSet.has(nums[i])) {
          console.log('nums[i]',nums[i]);
            return nums[i]
      }
      
      tempSet.add(nums[i])
   }
   return 0
}


let a1 = [1,3,4,5,6,8,5,7,8]
console.log('寻找重复数==',findReapteNumber(a1));