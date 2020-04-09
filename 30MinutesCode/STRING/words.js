/**
 * String.prototype.split() 
 *  
 *  将字符串转换为单词数组  
 * 
 *  FILTER(Boolean)过滤假值 NAN等
 *
 * @param {*} str
 * @param {*} [pattern=/[^a-zA-Z-]+/]
 */
const words = (str, pattern = /[^a-zA-Z-]+/) => {
  return  str.split(pattern).filter(Boolean)
}


let s = 'hello world'
console.log(words(s));