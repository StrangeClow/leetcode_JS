/**
 *   数组中出现次数超过一半的数字 
 * 
 *      1. 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数
 * 
 *       假设数组非空，并且给定的数组总是存在多数元素  
 *
 * @param {*} nums
 * @returns
 */
const majorityElement = function(nums) {
    // 计数变量
    let count = 0
    // 假定为某一个值
    let mainNum = nums[0]

    for (let index = 0; index < nums.length; index++) {
        if(count == 0) {
            mainNum = nums[index]
        }
        //
        if(nums[index] == mainNum) {
            count ++
        } else {
            count --
        }
    }
    return mainNum
}


let n1 = [1, 2, 3, 2, 2, 2, 5, 4, 2]
console.log(majorityElement(n1));



const majorityElement2 = function(nums) {   // hashmap  
     
  let hash = {}

  for(let item of nums) {
    //  hash表 obj[属性]  
    hash[item] = hash[item] == null ? 1 : hash[item] + 1
    // 若当前数值大于nums数组长度的一半 
      if(hash[item] >= (nums.length / 2)) {
         
         return item
      }
  }

}

let n2 = [1, 2, 3, 2, 2, 2, 5, 4]
console.log(majorityElement2(n2));