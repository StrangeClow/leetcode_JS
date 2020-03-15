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
 
    if(!str || !str.trim()) return 0
  
    // 去除空格 转为数组 循环过滤掉假值 
    return str.trim().split('').filter(Boolean).length
}


let s1 = 'hello hubeiwuhan'
console.log(numsOfOneString(s1));