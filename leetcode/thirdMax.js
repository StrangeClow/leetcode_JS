/**
 * 第三大的数   主要学习思路 解法 
 * 
 *   给定一个非空数组，返回此数组中第三大的数，如果不存在，则返回数组中最大的数
 * 要求时间复杂度必须是O(n)
 *
 * @param {*} nums
 * @returns
 */
const thirdMax = function(nums) {
  // 定义初始时的三个值 
  let max1= nums[0],
      max2= null,
      max3 = null
  // 循环当前非空数组 
  for(let i = 0; i<nums.length; i++) {
    //若nums[0] < nums[i]   nums[0]必然存在 
     if(max1 < nums[i]) {
        max3 = max2;   // 可尝试结构赋值  或提取函数
        max2 = max1;
        max1 = nums[i];
     } 
     // 第二大的数
     else if(!max2 || (max2 < nums[i])) {
         if(nums[i] < max1) {
           max3 = max2
           max2 = nums[i]
         }
     }
     // 第三大的数
     else if(!max3 || (max3 < nums[i])) {
         if(nums[i] < max2) {
             max3 = nums[i]
         }
     }
  }   
  
  return max3 !== null ? max3 : max1

}



let n1 = [2,3,5]
console.log(thirdMax(n1))
let n2 = [53,9]
console.log(thirdMax(n2))


/**
 *   1. 数组排序
 *   2. 循环当前排序非空数组，并记录nums[i]
 *   3. 若nums.length >= 3 则nums[2]为第三大的值
 *   4. 否则返回最大值 即为nums[0]
 *
 * @param {*} num
 */
const thirdMax2 = function(nums) {
  // 排序数组
  let tempSort = nums.sort((a,b)=> {  // Number.sort()并不会直接对数值数组准确排序
    return b - a
  })

  if(tempSort.length <= 2) {
    return Math.max(...tempSort)
  }
  
  // 骚操作  哈哈哈   长度大于3  取排序后数组的索引第三位 
  if(tempSort.length >= 3) {
    console.log('tempSort==',tempSort)
    return tempSort[2]
  }
}

let n3 = [9,16,5,4,68]
let n4 = [9,16]
console.log(thirdMax2(n3))
console.log(thirdMax2(n4))