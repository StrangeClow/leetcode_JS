/**
 *  搜索旋转排序数组 
 * 
 * @param {*} nums
 * @param {*} target
 */
const searchInRotatedSortedArray = function(nums, target) {     //  核心是思想  如何去思考  双指针 最左最右 
  
    // 最左侧值
    let left = 0
    // 最右侧值
    let right = nums.length - 1
    
    // 左右指针分别移动 left往右 right往左
    while(left <= right) {
        // 拿取中间值
       let mid = Math.floor((left + right) / 2)
       // 若中间值等于目标值 直接抛索引 
       if(nums[mid] === target) {
            return mid
       } 
       // 若中间值大于等于左半侧的值 则表明目标值在右半侧
       if(nums[mid] >= nums[left]) {
         
            if(target >= nums[left] && target <= nums[mid]) {
                // 右指针--
                right = mid - 1
            } else {
                // 左指针++
                left = mid + 1
            }
        } 
        //  
        else {
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