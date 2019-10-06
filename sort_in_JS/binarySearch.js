function binarySearch(arr, x) {
   let left = 0,  // 查找的左边界
       right = arr.length -1 ,  // 查找的右边界
       guessNum;  // left  right的中间位置
    while(left <= right) {
        guessNum = Math.floor((left + right) / 2)
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