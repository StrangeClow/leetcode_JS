/**
 *  实现strStr()函数
 * 
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
    // 直接利用js的API判断
    return haystack.indexOf(needle)    
}



/**
 *
 *
 * @param {*} haystack
 * @param {*} needle
 * @returns
 */
const strStr2 = function(haystack,needle) {
  // search()  匹配方法
  return haystack.search(needle)
}




/**
 *
 *
 * @param {*} haystack  给定字符串
 * @param {*} needle   查找子串
 * @returns
 */
const strStr3 = function(haystack,needle) {
  
    // 数据边界 查找子串不存在
    if(!needle || needle.length === 0) {
          return 0
    }
    // 查找子串大于基准字符串
    if(needle.length > haystack.length) {
          return -1
    }
    // 若基准串与子串相等
    if(haystack.length === needl.length) {
        if(haystack === needle) {
           return 0
        }
        else {
          return -1
        }
    }
   
    //  循环比较
}