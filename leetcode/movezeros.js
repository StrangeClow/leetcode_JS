/**
 *  题意： 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 *  eg: 输入： [0,2,6,1,0,8,9]  输出：[1,2,8,9,0,0]
 * 
 * 说明： 必须在原数组上操作，不能拷贝新的数组，尽量减少操作次数  
 * 
 * 
 *
 * @param {*} nums
 */
var movezeros = function(nums) {
   let tempNums
   for (let index = 0; index < nums.length; index++) {
    tempNums = 0;
    for(let i = 0;i < nums.length;i++) {
      if(nums[i] !== 0) {
        [nums[i],nums[tempNums]] = [nums[tempNums],nums[i]]   // 解构赋值 交换变量   [a, b] = [b, a]
        // 计数累加 
        tempNums++;
      }
    }
   }
   return nums
}



let n1 = [0,2,6,1,0,8,9]
console.log(movezeros(n1));



/**
 *
 *
 * @param {*} nums
 */
const movezeros2 = function(nums) {
  // 基础下标 
  let i = 0
  // 循环当前数值 
  for(let index = 0; index < nums.length; index++) {
    // 若当前项数值不等于0 
    if(nums[index] !== 0) {
      // 且指针不等于当前小标
      if(i !== index) {

        nums[i] = nums[index]

        nums[index] = 0
      }
    }
    // 累加自变量 移动指针 
    i++
  }
}