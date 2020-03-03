/**
 *  检测是否是number类型  
 *    typeof判断基础类型 
 *
 * @param {*} val
 */
const isNumber = val => typeof val === 'number'

const isNumber2 = function(val) {
    return val && val.constructor === Number
}

console.log(isNumber2(888));
 console.log(isNumber2(null));     // error message  // TypeError: Cannot read property 'constructor' of null
console.log(isNumber2('hello'));