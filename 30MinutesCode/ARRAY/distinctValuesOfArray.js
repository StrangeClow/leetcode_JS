/**
 *   简易数组去重
 * 
 *    new Set()  set集合存储不重复元素的特性 
 * 
 *   ...  解构
 *
 * @param {*} arr
 */
const distinctValuesOfArray = arr => [... new Set(arr)]