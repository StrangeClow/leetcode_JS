 // 回文数是指郑旭和倒叙都是一样的数  并且我们假设所输入的数字为整数

 var isPalindrome = function(x) {
     if(!x) {
          return
     }
     // 反转 
     return  x.toString().split('').reverse().join('') === x.toString()
 }