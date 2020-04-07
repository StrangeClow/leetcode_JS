/**
 *   返回前N个元素的数组 
 *
 * @param {*} arr
 * @param {number} [n=1]
 * @returns
 */
const take = function(arr, n = 1) {
  return arr.slice(0, n)
}