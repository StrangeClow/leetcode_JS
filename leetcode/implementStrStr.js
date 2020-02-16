/**
 * 题意：给定一个haystack字符串和needle字符串，在haystack字符串中找出needle字符串出现的的第一个位置
 * 如果不存在 则返回-1
 *  eg: input==> hello needle ==> 2
 * 
 * indexOf
 * 
 *
 * @param {*} haystack
 * @param {*} needle
 * @returns
 */
var strStr = function(haystack, needle) {
    if(!needle) {   //如果不存在 返回0 
      return 0
    }
    return haystack.indexOf(needle)    // indexOf判断
}