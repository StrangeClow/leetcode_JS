/**
 *   主要元素
 *     
 *   题意： 给定一个长度为n的数组，找到其主要元素，主要元素是出现次数严格大于n/2的元素
 * 
 * 可以假设数字为空 且主要元素必定存在
 * 
 *    分治思想  拆分
 *
 * @param {*} nums
 * @returns
 */
const mainElement = function(nums) {
    // 定义下面用到的基本变量
   let num = 0,
       count = 0,
       i = 0
      while(i < nums.length) {    // 循环判断比较
          if(count === 0) {   
            num = nums[i]
            count = 1
            i += 1
            continue
          }
          if(nums[i] !== num) {
            count -= 1
          }
          else {
              count +=1
          }
          i += 1
      } 
      return num
}