/**
 * 题意：  从右开始删除数组元素  
 *
 * @param {*} arr
 * @param {number} [n=1]
 */
const dropRight = (arr, n =1)=> arr.slice(0, -n)     // -n 逆序    arr.slice()复制当前数组 


console.log(dropRight([1,23,3,4,5,8,9],2));