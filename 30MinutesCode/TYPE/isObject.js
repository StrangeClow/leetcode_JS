/**
 *  判断是否为对象
 *   如果传递的值是一个对象，则返回布尔值
 * 
 *     利用Object构造函数为给定值创建对象包装    无法区分Array
 *
 * @param {*} val
 */

const isObject = obj => obj === Object(obj)



const isObject2 = function(val) {
    return val.constructor === Object
}

const isObject3 = function(val) {
    return Object.prototype.toString.call(val) === '[object Object]'
}


let a1 = [1,2,3,4,5]
let a2 = 123
let a3 = {

}
console.log(isObject(a1));
console.log(isObject(a2));
console.log(isObject2(a1));
console.log(isObject2(a2));
console.log(isObject2(a3));
console.log(isObject3(a1));
console.log(isObject3(a2));
console.log(isObject3(a3));