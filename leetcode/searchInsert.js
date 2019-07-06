/**
 * 题目意思： 给定一个排序数组和目标值，在数组中找到目标值，并返回其索引，如果目标值
 * 不存在与数组中，返回它将会被按顺序插入的位置
 * 
 * eg : input==> [1,3,5,7,8,10]  5
 *   output ==> 2
 * 
 * 
 * @param {*} nums
 * @param {*} target
 * @returns   第一种操作为暴力解法   循环
 */
var searchInsert = function(nums, target) {
for (let index = 0; index < nums.length; index++) {
   if(nums[index] >= target) {
     return index
   }
 }
return nums.length
}


/**
 *   二分法查找
 * 
 *
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var searchInsertTwo = function(nums, target) {
    let low = 0,
        high = nums.length
    while (low < high){
        let mid = parseInt(low + (high-low)/2)   // 取中间值
        if (nums[mid] < target){    // 中间值小于目标值
            low = mid +1
        } else if (nums[mid] > target){   // 中间值大于目标值
            high = mid
        } else {
            return mid   // 等
        }
    }
    return low   // 为0 
};