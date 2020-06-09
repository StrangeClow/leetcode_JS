/**
 *   旋转数组的最小数字 
 * 
 *  把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素，例如
 * 
 * input===> [3,4,5,1,2] 为 [1,2,3,4,5]的一个旋转，该数字的最小值为 1
 *
 * @param {*} num
 * @returns
 */
const rotateMinArray = function(num) {
    // 结构num值
    return Math.min(...num)
}


let n1 = [3,4,5,2,1]
console.log(rotateMinArray(n1));





const rotateMinArray2 = function(num) {   //来源leetcode
 
   
    // 二分法解决当前问题 
    let left = 0
    let right = num.length - 1
    
    // 一个从最左开始往右   一个从最后开始往左   中间相遇
    while(left < right) {
        // 中间值 
        let mid = Math.floor((left + right) / 2)
        if(num[mid] > num[right]) {
           left = mid +1
        } else if(num[mid] < num[right]) {
             right = mid
        }
        else {
            right --
        }
    }
    return num[left]
}

console.log(rotateMinArray2(n1));