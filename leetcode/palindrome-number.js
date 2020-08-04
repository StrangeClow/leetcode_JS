 // 回文数是指正序和倒叙都是一样的数  并且我们假设所输入的数字为整数

 var isPalindrome = function(x) {
    
    // 过滤掉非数字或字符串 
    let reg = /[^0-9a-zA-Z]/g
    
     if(!x) {
          return false
     }
     // 反转 字符串转化为数组 数组反转后再转化为字符串
     return  x.toString().split('').reverse().join('') === x.toString()
 }

 let n1 = 12321
 let n2 = 123432
 console.log('回文数判断====>',isPalindrome(n1))
 console.log('回文数判断====>',isPalindrome(n2))

 var secondIsPalindrome = function(x) {
       let y = x,   // 保存当前变量的副本
       tempReversed = 0;
       while(x > 0) {  // 党X大于0时循环执行   反转的特性 除以10  取最后一位的值 
        tempReversed = x % 10 + tempReversed * 10;
        x =Math.floor(x / 10)
       }
       return y == tempReversed
 }

 let n3 = 58285
 let n4 = 582851
 console.log(secondIsPalindrome(n3))
 console.log(secondIsPalindrome(n3))


 

