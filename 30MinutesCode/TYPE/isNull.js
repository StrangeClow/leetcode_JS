/**
 *   判断是否为null
 *
 * @param {*} val
 */
const isNull = val => val === null


let a1 = null
let a2 = undefined
let a3 = 123
let a4 = 'hello'
let a5 = {
    aa:'哈哈'
}

console.log(isNull(a1));
console.log(isNull(a2));
console.log(isNull(a3));
console.log(isNull(a4));
console.log(isNull(a5));
