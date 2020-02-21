/**
 *   反转字符串
 *
 * @param {*} str
 * @returns
 */

const reverseString2 = function(str) {
    if(! str)   return false

    if( str.length === 1) return str
    
    return str.split('').reverse().join('')
}


console.log(reverseString2('hello world'));




/**
 *
 *
 * @param {*} str
 */
const reverseString = function(str) {
   if(! str) return  false

   let result = ''
   let count = str.length - 1
   while(count >= 0) {
       result += str[count]
       count -= 1
   } 
   return result   
}


console.log(reverseString('reverseString'));