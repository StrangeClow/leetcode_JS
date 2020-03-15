/**
 *   反转字符串
 * 
 *  写一个函数，将输入的字符串反转过来，输入字符串以字符数组char[]的形式给出
 * 不分配额外空间，需原地修改数组。
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




const reverseString3 = function(str) {
    let index = 0
    for (let index = 0; index < str.length - 1; index++) {
        // 解构赋值  交换变量位置 
        [str[index], str[str.length - 1 - index]] = [str[str.length - 1 - index], str[index]]
    }
    return str
}