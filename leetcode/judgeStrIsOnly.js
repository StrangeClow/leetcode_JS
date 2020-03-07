/**
 * 判断字符串是否唯一  
 *   
 *    给定一个字符串s 判断s中所有的字母是否都不重复
 *
 * @param {*} str
 */
const judgeStrIsOnly = function(str) {
   
    if(!str.length) {
        return true
    }

    let hash = {}
    for(let i = 0; i < str.length; i ++) {
        //hash存在当前值
      if(hash[str[i]]) {
          console.log('==',hash[str[i]]);
        return false
      } else {
          hash[str[i]] = true
      }
    }
    return true
}


let a1 = 'leetcode'
let a2 = 'hello'
let a3 = 'abcde'


console.log(judgeStrIsOnly(a1));
console.log(judgeStrIsOnly(a2));
console.log(judgeStrIsOnly(a3));