/**
 *  判断是否是function类型   基本类型可以使用typeof来判断
 *
 * @param {*} val
 */
const isFunction = val => typeof val === 'function'



const isFunction2 = function(val) {
    return val.constructor === Function
}

function checkType() {
    return a1 + a2
}


const isFunction3 = function(val) {
    return Object.prototype.toString.call(val) === '[object Function]'
} 

let ha = function() {
    console.log('hhh');
}

let bb = 'hello world'

console.log(isFunction2(checkType));
console.log(isFunction(checkType));
console.log(isFunction(bb));
console.log(isFunction3(checkType));
console.log(isFunction3(ha));
console.log(isFunction3(bb));