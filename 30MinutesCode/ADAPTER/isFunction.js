/**
 *  检测是否为函数
 * 
 *  注意typeof和instanceof的区别 以及原理   typeof判断基础类型  instanceof判断引用类型(Array Object)
 * 
 * 
 *  Object.prototype.String.call('数据类型')
 * 
 *  val.constructor === '指定类型'
 * 
 * val.constructor.name.toLowerCase()
 *
 * @param {*} val
 */
const isFunction = val => typeof val === 'function'   


const isFunction1 = (val) => {
    return typeof val === 'function'
}

function add(a,b) {
    return a + b
}

console.log(isFunction1(add));



const isFunction2 = function(val) {
    return Object.prototype.toString.call(val) === ['object','Function']
}


const isFunction3 = function(val) {
    return val.constructor === Function
}