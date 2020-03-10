/**  获取最后一个单词的长度
 * 
 *    给定一个近包含大小写字母和空格‘ ’的字符串，返回最后一个单词的长度，如果字符串从左向右滚动显示，
 * 那么最后一个单词就是最后出现的单词
 * 如果不存在最后一个单词 ，返回0 
 *
 * @param {*} str
 * @returns
 */
var lenOfLastWord = function(str) {
   // 若字符串长度为 0
     if(str.length === 0) return 0
     // 字符串取出空格并转为数组
     let tempArr = str.trim().split(' ')
     // 倒序取值 length -1 
     return tempArr[tempArr.length - 1].length
}


let a1 = 'hello world'
let a2 = ''
let a3 = 'haha'
console.log(lenOfLastWord(a1));
console.log(lenOfLastWord(a2));
console.log(lenOfLastWord(a3));