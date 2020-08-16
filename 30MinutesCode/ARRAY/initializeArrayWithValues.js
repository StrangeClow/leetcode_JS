/**
 *  使用指定的值初始化特定范围和值的数组  es6的fill
 *
 * @param {*} n
 * @param {number} [val=0]
 * @returns
 */
const initializeArrayWithValues = function(n, val = 0) {
  return Array(n).fill(val)
}


console.log(initializeArrayWithValues(6,8))