/**
 *   宝石与石头
 * 
 *   题意：给定字符串j代表石头中宝石类型，和字符串S代表你拥有的石头，S中每个字符代表了
 * 一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石
 * 
 *   J中的字母不重复，J和S的所有字符都是字母，字母区分大小额，因此A 与 a是不同类型的石头    
 * 
 * 
 * 
 *    input ===> J = 'aA'  s= 'aAAbbbb'
 *    output ===> 3
 *  
 *
 * @param {*} J
 * @param {*} S
 * @returns
 */
const numJewelsInStones = function(J, S) {
    
    // 定义计数器
    let count = 0
    
    // 石头转为数组循环 
    S.split('').forEach((item,index)=> {
        
        // 若宝石存在于石头中 则计数器+1
        if(J.indexOf(item) > -1) {

           count ++
        }

    })
    
  // 返回计数器 
  return count
}



// test 
let j = 'aAdf'
let s = 'aAAbbbbDEfEEEffff'

console.log(numJewelsInStones(j,s));





const numJewelsInStones2 = function(J, S) {
   
    const types = {}

    let count = 0

    for(let i = 0; i < J.length; i++) {
        types[J[i]] = 1
    }

    for(let j = 0; j< S.length; j++) {
       if(types[S[j]]) {
         count ++
       }
    }
    return count
}



// test 
let jj = 'aAdfg'
let ss = 'aAAbbbbDEfEffggghhh'

console.log(numJewelsInStones2(jj,ss));