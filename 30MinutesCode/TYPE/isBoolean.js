/**
 *   判断是否是基础类型   
 *
 * @param {*} val
 */
const isBoolean = val => typeof val === 'boolean'


console.log(isBoolean(true));
console.log(isBoolean(false));


/**
 *
 *
 * @param {*} val
 * @returns
 */
const isBoolean2 = function(val) {
    return val.constructor === Boolean
}

console.log(isBoolean2('hhh'));
console.log(isBoolean2(true));