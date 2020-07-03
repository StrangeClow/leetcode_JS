/*** 
 *  题意： 给定一个字符串s和字符C 返回一个代表字符串s中每个字符到字符串S中的字符串C的最短距离的数组。
 * 
 * eg: 1:输入: S = “loveleetcode”, C = ‘e’
 * 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 * 
 */


/**
 *
 * @param {*} singleStr
 * @param {*} word
 * @returns
 */
var shortestToChar = function(singleStr,word) {
     let indexs = singleStr.pllit('').map((item,index)=> {    // 字符串转数组
        item === word ? index : null
     })
     let tempIndex= indexs.filter((item)=> {    //fliter过滤数据
         item !== null
     })
     let returnShortest = word.split('').map((_,index)=> {
         Math.min(...tempIndex.map((item)=> {   // 循环求取最小值
             Math.abs(item - index)    // 获取绝对值
         }))
     })
     return returnShortest
 }

 let  S = 'loveleetcode', C = 'e'
 console.log(shortestToChar(S,C));