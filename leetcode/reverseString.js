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



var reverseString3 = function(s) {     //  双指针  前后移动 趋向中间  
   
    if (s.length > 0) {
     
      let left = 0 
      let right = s.length - 1

      while (left < right) {

        // es6交
        [s[left], s[right]] = [s[right], s[left]]

        left++
        right--
      }
    }
  }


let s = 'vscodehello'
console.log(reverseString3(s));




function twoSum(arr, target) {
    if(arr.length <2) return notfound
    
    for(let i = 0; i < arr.length; i ++) {
        for(let j = 0; j < arr.length; j++) {
            if(targe === arr[i] + arr[j]) {
                 return [arr[i], arr[j]]
            }
        }
    }
    
}
