/**
 *   按字母顺序输出写入的字符串参数  
 *     
 *     1. 先取出字符串    
 *        2. localeCompare  排序 
 *
 * @param {*} str  字符串 
 */
const sortCharactersInString = str => 
   [...str].sort((a,b) => a.localeCompare(b))
     .join('')




 // eg:   input  'reactinfo '       output===> 按字母顺序输出 