/**
 *   题意： 查找字符串数值中的最长前缀
 * 
 * 
 * 输入: ["flower","flow","flight"]  
 *    输出: "fl"
 *
 * @param {*} strs
 * @returns
 */
var longestCommenPrefix = function(strs) {
    // 判断strs的长度
   if(strs.length === 0) {
      return ''
   }
   let res = strs.reduce((prev,current)=> {
       let temp = ''
           lenPrev = prev.length
           lenCurr = current.length
       for (let i=0, j=0; i<lenPrev & j<lenCurr; i++,j++) {
           if(prev[i] === current[j]) {
              temp += prev[i]
           } else { //  退出
               break;
           }
      }
      return temp
   })
   return res
}