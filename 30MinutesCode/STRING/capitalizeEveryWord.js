/**
 *  将字符串中的每个单词的首字母大写 
 * 
 *    1. replace(正则表达式， 替换)  
 *      2. 正则匹配首字母
 *
 * @param {*} str
 */
const capitalizeEveryWord = str => {

   console.log('str==',str);
    // string.replce用于在字符串中用一些字符替换另一些字符，或替换一个与正则匹配的子串
   //    string.replace(regexp/substr(要替换的模式), replacement(必填，替换文本或生成替换文本的函数))
      
     /**
       *  
       *       /\b[a-z]/g   全局索引a-z字符
       * 
       */
   
    return  str.replace(/\b[a-z]/g,  char => char.toUpperCase());   // 匹配首字母  
}






  let a1 = 'good luck to me'      
   console.log('首字母大写==',capitalizeEveryWord(a1));
  console.log(a1.substring(0, 1)); // 取到第一个字母 
   // 只针对单字符 
  const UP = function(str) {     // str.subString(0,1 )
      
   return str.substring(0,1).toUpperCase() + str.substring(1)
  }

  console.log(UP(a1));
