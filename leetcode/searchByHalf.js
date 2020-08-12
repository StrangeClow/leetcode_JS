/**
 *   二分查找
 *    
 * 定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1

 *
 * @param {*} nums
 * @param {*} target
 */
const searchByHalf = function(nums, target) {       // 一前一后走 

  // 先处理边界情况
  if(nums.length === 0 ||nums.length === 1)  return  -1
  let l = 0
  let r = nums.length - 1
  
  // 前置条件 
  while(l <= r) {
    // 此处取整 
    let middle = parseInt(l + r) / 2

    if(nums[middle] === target) {
        return middle
    }
    // 目标值在左侧
    if(nums[middle] > target) {
       r == --middle
    } else {
        l = ++middle
    }
  }
  // 没找到 
  return - 1
}


let nums = [-1,0,3,5,9,12], target = 9
console.log(searchByHalf(nums, target));



//  先处理边界情况 
//  