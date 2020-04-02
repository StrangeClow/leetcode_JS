/**
 *  无重复字符串的排列组合
 * 
 *    写一个方法，计算某字符串的排列组合，字符串每个字符均不相同 
 * 
 * 字符串要求： 1. 字符串都为不重复英文字母
 *            2. 长度在[1, 9]之间
 * 
 * 
 *   深度优先搜索的回溯算法 
 *
 * @param {*} s
 * @returns
 */
const permutation = function(s) {
  
    let res = []
    
    // 深度优先搜索  
    function DFS(curr, store) {
      if(store === '') {
         return res.concat(curr)
      }
    }

    for (let index = 0; index < store.length; index++) {
       curr+= store[index]


       DFS(curr, store.slice(0, index).concat(store.slice(index + 1)))

       curr = curr.slice(0, curr.length - 1)
    }

    DFS('', s)

    return res
}