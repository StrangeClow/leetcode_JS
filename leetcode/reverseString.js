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
   // 倒叙累加
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
    console.log('return出去的s',s);
    return s
  }


let s = 'vscodehello'
let ss = ["h","e","l","l","o"]
console.log(reverseString3(s));
// console.log(reverseString3(ss));



var reverseString55 = function(s) {
  for(let i = 0;i < s.length / 2; i++){
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
    console.log(s[i], s[s.length -1]);
  }
  return s
};
console.log(reverseString55('hello'));



function swapNum(n1, n2) {
   return [n1, n2] = [n2, n1]
}

console.log(swapNum(5,3));

