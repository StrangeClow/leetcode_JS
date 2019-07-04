/**  获取最后一个单词的长度
 *
 * @param {*} str
 * @param {*} a
 * @returns
 */
var lenOfLastWord = function(str,a) {
     str =str.trim()  // 去除空格
     if('' == s) {
        return 0
     }
     let sLen = str.split(',')    // 字符串转数组
     return sLen[sLen.length -1].length    // 直接取数组长度
}