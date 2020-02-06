/**
 *  将字符串中的每个单词的首字母大写 
 * 
 *    1. replace(正则表达式， 替换)  
 *      2. 正则匹配首字母
 *
 * @param {*} str
 */
const capitalizeEveryWord = str =>

      str.replace(/\b[a-z]/g, char => char.toUpperCase());