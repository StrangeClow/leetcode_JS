/**
 *   将多行字符串根据行拆分为数组
 *
 * @param {*} str
 */
const splitLens = str => str.split(/\r?\n/)

// 正则匹配换行符   Sring.split(/RegExp/)
let a1 ='hello\n is \n a \n word'

console.log(splitLens(a1));