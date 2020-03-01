/**
 *   题目描述： 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 满足的条件为: 1.左括号必须使用相同类型的又括号闭合
 *             2. 左括号必须以正确的方式闭合
 *             3. 空字符串可以被理解为有效字符串。
 * 
*/

// 枚举有效的括号
const enumBrackets = {
  ")":"(",
  "]":"[",
  "}":"{",
}

/**
 *    栈  后进先出 
 *
 * @param {*} inputBrackets
 * @returns
 */
var isValidBrackets = function(inputBrackets) {
  
  let temp = []
  // 转为数组
  let arr = inputBrackets.split('')
  for(let item of arr) {
    if(enumBrackets[item]) {   //若单项中存在枚举的某一项
      console.log('temp',temp,temp[temp.length - 1], enumBrackets[item])
      if(temp[temp.length - 1] === enumBrackets[item]) {
        // 枚举匹配到的两种情况  1.已经存在匹配项对应的开始括号  2. 已有的不存在对应的开始括号则也需要删除
        temp.pop()  // 删除并返回数组的最后一个元素
      } else {
        temp.push(item)   // 枚举匹配不到的括号一定是开始括号 压栈 push 
      }
    } else {
      temp.push(item) // 枚举匹配不到的括号一定是开始括号 压栈 push 
    }
  }
  return temp.length === 0
}


let s2 = '{}'
let s3 = '{}[]'
let s4 = '{[]}{}'
console.log('方式1',isValidBrackets(s2))
// console.log('方式1',isValidBrackets(s3))
// console.log('方式1',isValidBrackets(s4))





/**
 *
 *
 * @param {*} inputBrackets  输入的字符类型 
 * @returns
 */
var isValidBracketsTwo = function(inputBrackets) {
  var rightSymbols = []; 
  for(let i = 0; i< inputBrackets.length; i++) {
    if(inputBrackets[i] == '(') {   // 匹配括号
      rightSymbols.push(')')  // 为一组则放入一起
    } else if(inputBrackets[i] == '[') {
      rightSymbols.push(']')
    } else if(inputBrackets[i] == '{') {
        rightSymbols.push('}')
    } else if(rightSymbols.pop() != s[i] ){
      return false;
    }
  }
  return !rightSymbols.length;
}

let s = '()[]{}'
let s1 = '{[]}'
console.log('有效的括号===>',isValidBracketsTwo(s))
console.log('有效的括号===>',isValidBracketsTwo(s1))
