/**
 *   主要元素  （类比 数组中出现次数超过一半的数字 ）
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

let n1 = [1,1,2]
console.log(mainElement(n1));


/**
 *  
 *
 * @param {*} nums
 * @returns
 */
const mainElement2 = function(nums) {
   
   if(nums.length === 1) return nums[0]

   let len = Math.floor(nums.length / 2)  //  当前测试用例长度为9 

   let tMap = new Map()


   for (let index = 0; index < nums.length; index++) {
       // map.has(元素)  是否存在元素 
       if(tMap.has(nums[index])) {
            
            // map.set(key, value)    // map.get(key)  拿到值 
            tMap.set(nums[index],tMap.get(nums[index])+1)

         if(tMap.get(nums[index]) > len) {
           
           return nums[index]
         }
       }
       else {
         tMap.set(nums[index], 1)
       }
   }
   return -1
}




console.log(mainElement2([1,2,5,9,5,9,5,5,5]));