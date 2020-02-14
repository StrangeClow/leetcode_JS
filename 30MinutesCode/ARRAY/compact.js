/**
 *  从数组中移除假值  
 *  
 * 假值(false,null,0,"",undefined,NAN)
 * 
 * 
 *    filter()
 * 
 *      1. 创建新数组
 *      2. 不改变原数组
 *      3. 输出的是判断为true组成的新的元素
 * 
 * 
 *
 * @param {*} arr
 */
const compact = arr => arr.filter(Boolean)