/**
 *   二分搜索 (折半搜索)
 * 
 *      1.  先对数组从小到大排序
 *      2.  定义两个指针，左指针(left)指向数组第一个元素，右指针(right)指向数组最后一个元素(arr.length - 1)
 *      3.  取数组中间值(nums[mid])和目标值(target)比较
 *      4.  如果中间值小于目标值，说明目标值在后半个数组，将左指针(left)指向nums[mid+1]，若大于，同理操作，如相等，则返回
 *      5.  若没找到，返回 -1 
 *
 * @param {*} arr
 * @param {*} x
 * @returns
 */
function binarySearch(arr, x) {
   let left = 0,  // 查找的左边界
       right = arr.length -1,  // 查找的右边界
       guessNum;  // left  right的中间位置
    
    // 循环的退出条件是 left<= right 
    while(left <= right) {
        guessNum = Math.floor((left + right) / 2)    // 这个地方可以优化改进   (left + （right - left）) / 2 
        // 循环不变式
        // left 查找范围左侧  
        // right 查找范围右侧
        if(arr[guessNum] === x) {
             return
        }
        else if(arr[guessNum] > x) {
             right = guessNum - 1
        }
        else {
            left = guessNum + 1
        }
    }   
    return -1
}



// 理解二分查找的核心思想与思路  怎么查  临界点在哪儿  判断条件怎么走 