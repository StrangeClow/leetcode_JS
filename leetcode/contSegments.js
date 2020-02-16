/**
 *  题意： 给定一个字符串 计算单词的个数 单词用空格分隔开
 *
 * @param {*} str
 * @returns
 */
const contSegments = function(str) {
    
    // 去除空格
   let s = str.trim()

   // 若给定字符串长度为 0 则返回0
    if(!s.length) {
        return 0
    }

    // 拆解字符串
    const arr = s.split(/\s+/)
    return arr.length
}