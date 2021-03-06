/**
 *    字符串中的单词数
 * 
 *  写一个函数，统计字符串中单词的个数，单词是指连续的非空格的字符。
 * 假定字符串不包含任何不可打印的字符。
 *
 * @param {*} str
 * @returns
 */
const numsOfOneString = function(str) {
 
    if(!str || !str.trim()) return false
  
    // 去除空格 转为数组 循环过滤掉假值 （null undefined 等）
    return str.trim().split('').filter(Boolean).length
}


let s1 = 'hello hubeiwuhan'
let s2 = 'hello'
console.log(numsOfOneString(s1));
console.log(numsOfOneString(s2));



// new Bolb

