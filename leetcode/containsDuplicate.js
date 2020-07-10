/**
 *    存在重复元素
 *       利用set的特性去重解决问题 
 * 
 *    给定一个整数，判断是否存在重复元素
 *  如果任何值在函数中出现两次，函数返回true，如果数组中出现每个元素都不同，则返回false
 *
 * @param {*} nums
 * @returns
 */
const containsDuplicate = function(nums) {
  
  // new Set()存储不重复的元素  若去重后的数据量小于原数据量 则存在重复项
  //  注意 set集合取长度 size
  return new Set(nums).size < nums.length
}


console.log(containsDuplicate([1,5,6,4,2,7,2]));





const containsDuplicate2 = function(nums) {     // set.add() map.set()
  
     let tempSet = new Set()

    for (let index = 0; index < nums.length; index++) {

     if(tempSet.has(nums[index])) {
       return true
     }
     // 若存在则添加进临时set中
      tempSet.add(nums[index])
    }

    return false
}


console.log(containsDuplicate2([7,6,8,2,6,4,6,9]));
console.log(containsDuplicate2([7,6,8,2,16,4,9]));