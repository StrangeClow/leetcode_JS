/**
 *  返回数组后n个元素 
 * 
 *    Array.slice()方法 
 *
 * @param {*} arr
 * @param {number} [n=1]
 * @returns
 */
const takeRight =  function(arr, n = 1) {
   return arr.slicce(arr.length - n, arr.length)
}