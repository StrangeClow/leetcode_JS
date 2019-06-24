/**
 *   题目描述： 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 满足的条件为: 1.左括号必须使用相同类型的又括号闭合
 *             2. 左括号必须以正确的方式闭合
 *             3. 空字符串可以被理解为有效字符串。
 * 
*/

var isValidBrackets = function(inputBrackets) {
  let splitReg = /(\(\))|(\[\])|(\{\})/g;     // 正则匹配
  while(inputBrackets.match(splitReg)) {   // 循环检测替换符合要求的  最后若有剩下的表示不匹配
      s = s.replace(splitReg,'')
  }
  return s === ''
},
