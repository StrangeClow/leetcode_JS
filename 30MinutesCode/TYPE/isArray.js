/**
 *  判断是否是数组类型
 *    利用es6的isArray方法  
 *      其他可以采取向下兼容的方法解决  
 *
 * @param {*} val
 */
const isArray = val => val.isArray(val)


const isArray2 = function(value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}

const isArray3 = function(value) {
      return value instanceof Array
}

const isArray4 = function(value) {
     return value.constructor === Array
}

let a1 = [1,2,3,4]
let a2 = 123
let a3 = [598,652]

console.log(isArray2(a1));
console.log(isArray3(a2),isArray3(a3));
console.log(isArray4(a3));