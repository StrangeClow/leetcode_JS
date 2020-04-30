/**
 *   将给定数据类型转化为数组 
 *
 * @param {*} val
 * @returns
 */
const castArray = function(val) {
  return Array.isArray(val) ? val : [val]
}