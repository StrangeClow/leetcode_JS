/**
 *   旋转数组的最小数字 
 * 
 *  把一个数组最开始的若干过元素搬到数组的末尾，我们称之为数组的旋转
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