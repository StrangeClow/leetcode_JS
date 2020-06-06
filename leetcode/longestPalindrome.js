/**
 *   最长回文串 (回文串：是一个正向读取和反向读取都一样的字符串 level等)
 * 
 *      给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串，
 * 在构造过程中，请注意区分大小写，
 * 
 *   注意： 假设字符串的长度不会超过1010
 * 
 *   input==> abccccdd
 *   output ==> 7
 * 
 *   
 *
 * @param {*} str
 * @returns
 */
const longestPalindrome = function(str) {

   if(!str || str.length === 0) return 0
    
   let len = 0 
   
   let tempSet = new Set()

   for(let char of str) {       // for of循环  
         console.log('char=====>',char);
         if(!tempSet.has(char)) {
            tempSet.add(char)
         }
         else {
             len = len + 2
             tempSet.delete(char)
         }
   }
   console.log('tempSet()=======>',tempSet.size);
   // 求set的长度  因为set集合不重复的特性  
   return tempSet.size === 0 ? len : len + 1    
   
}

let s = 'abccccdd'

console.log(longestPalindrome(s));



const longestPalindrome2 = function(str) {
   let tempMap = new Map()

   for(let key of str) {
      console.log('字符串子项',key);
      
   }
}