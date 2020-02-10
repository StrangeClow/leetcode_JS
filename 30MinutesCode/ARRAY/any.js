/**
 *   判断是否存在 
 *
 * @param {*} arr
 * @param {*} [fn=Boolean]
 */
const any = (arr, fn= Boolean) => arr.some(fn);