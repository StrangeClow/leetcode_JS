/**
 *   同构字符串  
 * 
 *    题意： 给定两个字符串s t, 如果s中的字符可以被替换得到t,那么这两个字符串就是同构的
 * 
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序
 * 
 *   假定 s 和 t的长度相同 
 * 
 *   eg : s ==> egg, t ==> add   output ==> true
 *        s = foo,  t = var   output ==> false
 *        s = paper, t = title  output==> true
 *
 * @param {*} s
 * @param {*} t
 */
const isIsomorphic = function(s, t) {
    
    // 若 s ==t  
    if(s === t || s === '')  return true
    
    // hashMap
    let mapS  = new Map()

    let mapT =  new Map()

    for (let i = 0; i < s.length; i++) {
       
        if (mapS.has(s[i]) || mapT.has(t[i])) {

            if(mapS.get(s[i]) !== mapT.get(s[i])) {

                return false
            }
        }
        // 映射 
        mapS.set(s[i],s)

        mapT.set(t[i],s)
        
    }   //

    return true
}


console.log(isIsomorphic('egg', 'add'));