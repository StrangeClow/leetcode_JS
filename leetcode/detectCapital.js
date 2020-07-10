/**
 *  检测大写字母  
 *     规则： 给定一个单词  你需要判断单词的大写是否正确 
 *    
 * 规则如下：
 *     全部字母都是大写
 *     单词中所有字母都不是大写
 *      如果单词中不知含有一个字母 则只有首字母大写 
 *     
 *
 * @param {*} word
 */
const detectCapital = function(word) {
    // 正则匹配规则
   const reg = /^([A-Z][a-z]+|[a-z]+|[A-Z]+)$/;
   // test返回true或false
   return reg.test(word)
}



console.log(detectCapital('CHINA'));
console.log(detectCapital('japaN'));


