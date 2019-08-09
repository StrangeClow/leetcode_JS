/**
 *  返回满足测试函数的第一个键
 *
 * @param {*} obj
 * @param {*} fn
 */
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key],key,obj))