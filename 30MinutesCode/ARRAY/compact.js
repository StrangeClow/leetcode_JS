/**
 *  从数组中移除假值  
 *  
 * 假值(false,null,0,"",undefined,NAN)
 *
 * @param {*} arr
 */
const compact = arr => arr.filter(Boolean)