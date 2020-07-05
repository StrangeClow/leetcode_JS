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




const judgeStrIsOnly2 = function(str) {

  let tempMap = new Map()

  for(let index = 0; index < str.length; index++) {
        if(!tempMap.has(str[index])) {
               tempMap.set(str[index],index )
              //  tempMap.set(str[index],tempMap.get(str[index] + 1))
        }
  }
  console.log(tempMap);
  return tempMap.size == str.length ? true : false
}

let s4 = 'kitty'
let s5 = 'vscode'
console.log(judgeStrIsOnly2(s4));
console.log(judgeStrIsOnly2(s5));