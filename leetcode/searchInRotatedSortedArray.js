/**
 *  搜索旋转排序数组 
 * 
 * @param {*} nums
 * @param {*} target
 */
const searchInRotatedSortedArray = function(nums, target) {     //  核心是思想  如何去思考 
  console.log(nums,target)
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        // 拿取中间值
       let mid = Math.floor((left + right) / 2)
       console.log('中间值',mid)
       // 若中间值等于目标值 直接抛索引 
       if(nums[mid] === target) {
            return mid
       } 

       if(nums[mid] >= nums[left]) {
         
            if(target >= nums[left] && target <= nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if(target >= nums[mid] && target <= nums[right] ) {
               left = mid + 1
            } else {
                right = mid - 1
            }
         }
    }
    return -1
}



let n = [6,7,8,1,23,4,5], target = 4


console.log(searchInRotatedSortedArray(n, target))