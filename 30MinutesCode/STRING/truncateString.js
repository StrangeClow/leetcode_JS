/**
 *     根据指定的长度截取字符串
 *       1. 嵌套三元表达式 
 *       2. Array.splice(index,numbers,addItems(可选))
 *
 * @param {*} str
 * @param {*} num
 */
const truncateString = (str, num) =>
   // 若字符串长度大于截取长度 走splice()截取    反之直接return当前字符串 
    str.length > num ?
    str.splice(0, num > 3 ? num -3 : num) + '...' : str



 
 //   eg:      
 console.log(truncateString('wuhanfighting', 4));  
 //  output:     wuhan