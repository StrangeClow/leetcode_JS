/**
 * 判断是否为空  记住边界问题
 *
 * @param {*} val
 */
const isEmpty = val => {
    console.log(val);
   return val == null || !(Object.keys(val) || val).length
}


// eg 

console.log(isEmpty(true));

let a = 'hello'
let b = null
let c = undefined
let d = 123456

console.log(isEmpty(a));