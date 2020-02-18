/**
 * 题意：  从右开始删除数组元素  
 *
 * @param {*} arr
 * @param {number} [n=1]
 */
const dropRight = (arr, n =1)=> arr.slice(0, -n)