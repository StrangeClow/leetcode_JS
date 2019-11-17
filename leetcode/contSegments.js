/**
 *  题意： 给定一个字符串 计算单词的个数 单词用空格分隔开
 *
 * @param {*} str
 * @returns
 */
const contSegments = function(str) {
   let s = str.trim()
    if(!s.length) {
        return 0
    }
    const arr = s.split(/\s+/)
    return arr.length
}