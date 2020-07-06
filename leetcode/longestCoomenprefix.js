/**
 *   题意： 查找字符串数值中的最长前缀   最长公共前缀
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
   let res = strs.reduce((previous,current)=> {
       let temp = ''
           lenPrev = previous.length
           lenCurr = current.length
       for (let i=0, j=0; i<lenPrev && j<lenCurr; i++,j++) {
           // 上一项和当前项相等 表示存在相同字符
           if(previous[i] === current[j]) {
              temp += previous[i]
           } else { //  退出
               break;
           }
      }
      return temp
   })
   return res
}


let strs = ['flower','flow','flight']
console.log(longestCommenPrefix(strs));





const longestCommenPrefix2 = function(strs) {   //  二分查找 

}