/**
 *   按字母顺序输出写入的字符串参数  
 *     
 *     1. 先取出字符串    
 *        2. localeCompare  排序 
 *
 * @param {*} str  字符串 
 */
const sortCharactersInString = str => 
  // 字符串先转数组
  // 2. 再Array.sort(a,b)比较
  // 3. 在拼接字符串
   [...str].sort((a,b) => a.localeCompare(b))
     .join('')




 // eg:   input  'reactinfo '       output===> 按字母顺序输出
 
 console.log(sortCharactersInString('hello'));      // ===> ehllo



9
 const sortCharactersInString2 = (str) => [...str].sort((a,b)=>a.localeCompare(b)).join('')