/**
 *  检查是否为类数组  
 *
 * @param {*} obj
 */
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';