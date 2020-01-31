/**
 *  判断是否是数组类型
 *    利用es6的isArray方法  
 *      其他可以采取向下兼容的方法解决  
 *
 * @param {*} val
 */
const isArray = val => val.isArray(val)