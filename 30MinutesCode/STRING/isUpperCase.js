/**
 *    检查一个字符串是否大写 
 *      1. 把入参字符串先转化为大写 toUpperCase()  然后全等判断 
 *
 * @param {*} str
 */
const isUpperCase = str => str === str.toUpperCase()



let s  = 'helloWorlD'
console.log(isUpperCase(s))