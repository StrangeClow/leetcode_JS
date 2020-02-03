/**
 *     根据指定的长度截取字符串
 *       1. 三元表达式 
 *       2. splice
 *
 * @param {*} str
 * @param {*} num
 */
const truncateString = (str, num) =>
    str.length > num ?
    str.splice(0, num > 3 ? num -3 : num) + '...' : str



 
 //   eg:      
 console.log(truncateString('wuhanfighting', 4));  
 //  output:     wuhan