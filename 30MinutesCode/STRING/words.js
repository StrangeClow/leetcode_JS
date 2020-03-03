/**
 * String.prototype.split() 
 *  
 *  将字符串转换为单词数组  
 *
 * @param {*} str
 * @param {*} [pattern=/[^a-zA-Z-]+/]
 */
const words = (str, pattern = /[^a-zA-Z-]+/) => {
    str.split(pattern).filter(Boolean)
}