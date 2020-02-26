/**
 *  检测是否为函数
 * 
 *  注意typeof和instanceof的区别 以及原理   typeof判断基础类型  instanceof判断引用类型(Array Object)
 * 
 * 
 *  Object.prototype.String.call('数据类型')
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